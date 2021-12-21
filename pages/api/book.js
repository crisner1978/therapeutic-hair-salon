import moment from "moment";
import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return getSchedule(req, res);
    }
    case "POST": {
      return createAppt(req, res);
    }
    case "DELETE": {
      return deleteAppt(req, res);
    }
  }
}

async function createAppt(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const apptsCol = client.db("hair_salon").collection("appts");

    try {
      await apptsCol.createIndex(
        { "slot.date": 1, "slot.time": 1 },
        { unique: true }
      );
      await apptsCol.insertOne(JSON.parse(req.body));

      return res.json({
        message: "Appointment booked!",
        success: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

async function getSchedule(req, res) {
  if (req.method === "GET") {
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
}

async function deleteAppt(req, res) {
  if (req.method === "DELETE") {
    const client = await clientPromise;
    const apptsCol = client.db("hair_salon").collection("appts");
    // const query = req.query.id;
    try {
      const deleteAppt = await apptsCol.deleteOne({
        _id: ObjectId(req.body),
      });
      return res.status(200).json({ success: true, data: {} });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  }
}
