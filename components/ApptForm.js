import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { addMonths } from "date-fns";
import { isPossiblePhoneNumber } from "libphonenumber-js/min";
import moment from "moment";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "react-phone-number-input/style.css";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { fetchWithTimeout } from "../lib/fetchWithTimeout";
import { isWorkWeek } from "../lib/helpers";
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

  const { mutateAsync, isError } = useMutation(
    (bookedAppt) =>
      fetchWithTimeout("/api/appts", {
        method: "POST",
        body: JSON.stringify(bookedAppt),
        timeout: 3000,
      }),
    {
      onSuccess: async () => {
        toast.success("Appointment Booked!");
        setOpen(false);
      },
      onError: async () => {
        toast.error("Pick an available time");
      },
    }
  );

  const onSubmit = (data) => {
    const { name, email, phone, date, slot } = data;
    const bookedAppt = {
      name,
      email,
      phone,
      timestamp: new Date(date),
      completed: false,
      slot: {
        date: moment(date).format("MM/D/YYYY"),
        time: slot,
        booked: true,
      },
    };
    mutateAsync(bookedAppt);
  };

  const fetchSchedule = (today) =>
    fetch("http://localhost:3000/api/books?term=" + today).then((res) =>
      res.json()
    );

  const { data } = useQuery(["appts", today], () => fetchSchedule(today));

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-1"
      >
        <FormControl component="fieldset">
          <label
            className={`${!today && "hidden"} font-black mb-1 text-center ${
              isError ? "text-red-600" : "text-blue-600"
            } `}
          >
            {isError ? "Pick an Available Time" : "Available Times"}
          </label>
          <RadioGroup
            row
            aria-label="time"
            name="row-radio-buttons-group"
            className="!grid grid-cols-2 mx-auto gap-x-3 mr-3 mb-1"
          >
            {today && (
              <RenderApptTimes
                data={data}
                register={register}
                errors={errors}
              />
            )}
          </RadioGroup>
        </FormControl>
        <div className=" flex-col justify-center mx-auto">
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
                popperClassName=''
                selected={field.value}
                filterDate={isWorkWeek}
                minDate={new Date()}
                maxDate={addMonths(new Date(), 3)}
                dateFormat="MMMM d, yyyy"
                className="relative formInput min-w-[312px] text-center text-gray-600 placeholder-blue-600 font-black"
                useWeekdaysShort={true}
              />
            )}
          />
        
          <div className="inputWrapper">
            <label className="formLabel" htmlFor="NAME">
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
            <span className="formErrorMsg">{errors.name?.message}</span>
          </div>
          <div className="inputWrapper">
            <label className="formLabel" htmlFor="PHONE">
              PHONE
            </label>
            <PhoneInput
              className="formInput"
              name="phone"
              control={control}
              rules={{
                required: "PHONE IS REQUIRED",
                validate: (value) =>
                  isPossiblePhoneNumber(value) || "VALID PHONE IS REQUIRED",
              }}
              country="US"
            />
            <span className="formErrorMsg">{errors.phone?.message}</span>
          </div>
          <div className="inputWrapper">
            <label className="formLabel" htmlFor="EMAIL">
              EMAIL
            </label>
            <input
              {...register("email", {
                required: "EMIAL IS REQUIRED",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "VALID EMAIL IS REQUIRED",
                },
              })}
              className="formInput"
              type="text"
              name="email"
              id="email"
            />
            <span className="formErrorMsg">{errors.email?.message}</span>
          </div>
        </div>

        <button type="submit" className="formSubmitBtn">
          MAKE APPOINTMENT
        </button>
      </form>
    </div>
  );
}
