import moment from "moment";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const apptsCol = client.db("hair_salon").collection("appts");
  const startDate = moment(new Date()).format("MM/D/YYYY");

  try {
    const scheduled = await apptsCol
      .find({ "slot.date": { $gte: startDate } })
      .toArray();

    res.json(scheduled);
    
  } catch (error) {
    console.log(error);
  }
}
