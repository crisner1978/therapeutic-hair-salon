import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import moment from "moment";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import RenderApptTimes from "./RenderApptTimes";

export default function ApptForm() {
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  const [today, setToday] = useState(null);
  router.query = today;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const mutation = useMutation(
    async (bookedAppt) =>
      await fetch("/api/appts", {
        method: "POST",
        body: JSON.stringify(bookedAppt),
      }),
    {
      onSuccess: () => {
        toast.success("Appointment Booked");
        setOpen(false);
      },
    }
  );

  const isWorkWeek = (date) => {
    if (date.getDay() === 0 || date.getDay() === 1) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = (data) => {
    const { name, email, phone, date, slot } = data;
    const bookedAppt = {
      name,
      email,
      phone,
      timestamp: new Date(date),
      completed: false,
      slot: {
        date: date.toLocaleDateString(),
        time: slot,
        booked: true,
      },
    };
    mutation.mutate(bookedAppt);
  };

  const fetchSchedule = (today) =>
    fetch("http://localhost:3000/api/books?term=" + today).then((res) =>
      res.json()
    );

  const { data, isLoading } = useQuery(["appts", today], () =>
    fetchSchedule(today)
  );
  console.log("datadata", data);

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <div className="mt-5 flex justify-center mx-auto">
          <Controller
            as={ReactDatePicker}
            valueName="selected"
            onChange={([selected]) => selected}
            control={control}
            name="date"
            render={({ field }) => (
              <ReactDatePicker
                onChange={(date) => {
                  field.onChange(date);
                  setToday(moment(date).format("MM/D/YYYY"));
                }}
                placeholderText="SELECT DATE"
                showPopperArrow={false}
                popperPlacement="bottom"
                selected={field.value}
                filterDate={isWorkWeek}
                dateFormat="MMMM d, yyyy"
                className="relative"
                useWeekdaysShort={true}
              />
            )}
          />
        </div>
        <FormControl component="fieldset">
          <label className={`${!today && "hidden"}`}>Available Times</label>
          <RadioGroup row aria-label="time" name="row-radio-buttons-group">
            {today && (
              <RenderApptTimes
                data={data}
                register={register}
              />
            )}
          </RadioGroup>
        </FormControl>
        <div className="input">
          <label
            className="text-sm font-black text-gray-600 pb-1"
            htmlFor="NAME"
          >
            NAME
          </label>
          <input
            {...register("name", {
              required: "NAME IS REQUIRED",
              minLength: {
                value: 2,
                message: "MORE THAN 2 CHARACTERS",
              },
              maxLength: {
                value: 30,
                message: "LESS THAN 30 CHARACTERS",
              },
            })}
            className="formInput"
            type="text"
            name="name"
            id="name"
          />
          <span className="absolute right-8 text-red-500 font-black text-sm">
            {errors.name?.message}
          </span>
        </div>
        <div className="input">
          <label
            className="text-sm font-black text-gray-600 pb-1"
            htmlFor="PHONE"
          >
            PHONE
          </label>
          <input
            {...register("phone", {
              required: "PHONE IS REQUIRED",
              minLength: 6,
              maxLength: 12,
            })}
            className="formInput"
            type="tel"
            name="phone"
            id="phone"
          />
          <span className="absolute right-8 text-red-500 font-black text-sm">
            {errors.phone?.message}
          </span>
        </div>
        <div className="input">
          <label
            className="text-sm font-black text-gray-600 pb-1"
            htmlFor="EMAIL"
          >
            EMAIL
          </label>
          <input
            {...register("email", {
              required: "EMIAL IS REQUIRED",
              pattern: /^\S+@\S+$/i,
            })}
            className="formInput"
            type="text"
            name="email"
            id="email"
          />
          <span className="absolute right-8 text-red-500 font-black text-sm">
            {errors.email?.message}
          </span>
        </div>
        <button
          type="submit"
          // disabled={slotfilled}
          className="text-xl font-semibold disabled:text-gray-300
            disabled:cursor-not-allowed py-2 text-blue-600 mx-4
            hover:text-white hover:bg-blue-600 rounded-md"
        >
          MAKE APPOINTMENT
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("hair_salon");

  const data = await db
    .collection("appts")
    .find({ slot: { $exists: true } })
    .toArray();

  return {
    props: { data },
  };
}
