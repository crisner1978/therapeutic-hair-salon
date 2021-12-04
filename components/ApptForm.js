import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useEffect, useState } from "react";

export default function ApptForm() {
  const [open, setOpen] = useRecoilState(modalState);
  const [booked, setBooked] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    reset,
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
        reset();
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
    const { name, email, phone, appointment } = data;
    const bookedAppt = {
      name,
      email,
      phone,
      completed: false,
      slot: {
        date: appointment.toLocaleDateString(),
        time: appointment.toLocaleTimeString(),
      },
    };
    mutation.mutate(bookedAppt);
  };

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooked(data.map((item) => item.slot));
        return () => response;
      });
  }, [setBooked]);

  console.log(booked);

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <div className="mt-5 flex justify-center mx-auto">
          <Controller
            as={ReactDatePicker}
            valueName="selected"
            onChange={([selected]) => selected}
            control={control}
            name="appointment"
            render={({ field }) => (
              <ReactDatePicker
                onChange={(date) => field.onChange(date)}
                excludeTimes={excludedTimes}
                placeholderText="SELECT DATE & TIME"
                showPopperArrow={false}
                popperPlacement="bottom"
                selected={field.value}
                filterDate={isWorkWeek}
                showTimeSelect
                timeIntervals={60}
                dateFormat="MMMM d, h:mm"
                className="relative"
              />
            )}
          />
        </div>
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

const excludedTimes = [
  setHours(setMinutes(new Date(), 0), 0),
  setHours(setMinutes(new Date(), 0), 1),
  setHours(setMinutes(new Date(), 0), 2),
  setHours(setMinutes(new Date(), 0), 3),
  setHours(setMinutes(new Date(), 0), 4),
  setHours(setMinutes(new Date(), 0), 5),
  setHours(setMinutes(new Date(), 0), 6),
  setHours(setMinutes(new Date(), 0), 7),
  setHours(setMinutes(new Date(), 0), 18),
  setHours(setMinutes(new Date(), 0), 19),
  setHours(setMinutes(new Date(), 0), 20),
  setHours(setMinutes(new Date(), 0), 21),
  setHours(setMinutes(new Date(), 0), 22),
  setHours(setMinutes(new Date(), 0), 23),
];
