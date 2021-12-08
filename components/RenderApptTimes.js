import { FormControlLabel, Radio } from "@mui/material";
import moment from "moment";

export default function RenderApptTimes({data, isLoading, register}) {
    if (!isLoading) {
      const slots = [...Array(8).keys()];
      return slots.map((slot) => {
        const time1 = moment().hour(9).minute(0).add(slot, "hours");
        const time2 = moment()
          .hour(9)
          .minute(0)
          .add(slot + 1, "hours");

        // Matches slot booked to slot to disable double booking
        const taken = data.map((item) => parseInt(item.slot.time));
        let slotFilled = taken.includes(slot);
        console.log("123456", slotFilled);

        return (
          <FormControlLabel
            {...register("slot")}
            key={slot}
            value={slot}
            disabled={slotFilled}
            control={<Radio />}
            label={time1.format("h a") + " - " + time2.format("h a")}
          />
        );
      });
    } else {
      return null;
    }
  }