import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useEffect, useState } from "react";
import moment from "moment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { el } from "date-fns/locale";

export default function ApptForm() {
  const [open, setOpen] = useRecoilState(modalState);
  const [schedule, setSchedule] = useState([]);
  const [booked, setBooked] = useState([]);
  const [today, setToday] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bookedObj, setBookedObj] = useState([]);
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
    const { name, email, phone, date, slot } = data;
    const bookedAppt = {
      name,
      email,
      phone,
      timestamp: new Date().toLocaleString(),
      completed: false,
      slot: {
        date: date.toLocaleDateString(),
        time: slot,
      },
    };
    mutation.mutate(bookedAppt);
  };

  // const { data, error } = useQuery("appts", async () => {
  //   const res = await fetch("http://localhost:3000/api/books");
  //   return res.json();
  // });

  useEffect(async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => {
        createSchedule(data.map((item) => item.slot));
        setBooked(data.map((item) => item.slot));
        setBookedObj(
          data.map((item) => {
            return [item.date, item.time];
          })
        );
        setIsLoading(false);
        return () => response;
      });
  }, [createSchedule, setBooked]);

  const fetchSchedule = () => {};

  const createSchedule = (data) => {
    const appointments = data;
    const initialSchedule = {};
    const today = moment().startOf("day");
    initialSchedule[today.format("MM/DD/YYYY")] = true;
    const schedule = !appointments.length
      ? initialSchedule
      : appointments.reduce((currentSchedule, appointment) => {
          const { date, time } = appointment;
          !currentSchedule[date]
            ? (currentSchedule[date] = Array(8).fill(false))
            : null;
          Array.isArray(currentSchedule[date])
            ? (currentSchedule[date][time] = true)
            : null;
          return currentSchedule;
        }, initialSchedule);

    for (let day in schedule) {
      let slots = schedule[day];
      slots.length
        ? slots.every((slot) => slot === true)
          ? (schedule[day] = true)
          : null
        : null;
    }
    setSchedule(schedule);
    console.log(
      "BOOKED =>>>",
      booked.map((item) => {
        return [item.date, item.time];
      })
    );

    console.log("APPOINTMENTS =>>", schedule);
  };

  function renderAppointmentTimes() {
    if (!isLoading) {
      const slots = [...Array(8).keys()];
      return slots.map((slot) => {
        const time1 = moment().hour(9).minute(0).add(slot, "hours");
        const time2 = moment()
          .hour(9)
          .minute(0)
          .add(slot + 1, "hours");

    let slotFilled;
        for (let day in booked) {
          let obj = booked[day];
          // console.log("im here", obj)
         (obj.date === today) && Object.entries(obj).filter((array) => array.includes('slot'))
          //  && ;
console.log("slotfilled=>>>", Object.entries(obj).filter((array) => array.time < 8))     }

        // let taken = Object.entries(booked).map(item => item[1]?.date = appointmentDateString[slot] && item[1].time)
    


        return (     
        <option disabled={slotFilled || null} key={slot} value="slot">{time1.format("h:mm a") + " - " + time2.format("h:mm a")}</option>
        );
      });
    } else {
      return null;
    }
  }

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
            name="date"
            render={({ field }) => (
              <ReactDatePicker
                onChange={(date) => {
                  field.onChange(date);
                  setToday(moment(date).format("MM/D/YYYY"));
                  fetchSchedule();
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
        <select className="w-80 mx-auto" {...register("slot")}>
            {today && renderAppointmentTimes()}
          </select>
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
