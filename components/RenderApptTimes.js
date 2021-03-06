import { FormControlLabel, Radio } from "@mui/material";
import moment from "moment";
import React from "react";

export default function RenderApptTimes({ data, register, errors }) {
  const slots = [...Array(8).keys()];
  return slots.map((slot) => {
    const time1 = moment().hour(9).minute(0).add(slot, "hours");
    const time2 = moment()
      .hour(9)
      .minute(0)
      .add(slot + 1, "hours");

    // Matches slot booked to slot to disable double booking
    const taken = data?.map((item) => parseInt(item?.slot.time));
    let slotFilled = taken?.includes(slot);

    return (
      <React.Fragment key={slot}>
        {!slotFilled && (
          <FormControlLabel
            {...register("slot", {
              required: "SELECT A TIME",
            })}
            value={slot}
            control={<Radio />}
            label={time1.format("h a") + " - " + time2.format("h a")}
          />
        )}
        <span className="absolute top-[2.5px] -right-1 text-red-500 font-black text-sm">
          {errors.slot?.message}
        </span>
      </React.Fragment>
    );
  });
}
