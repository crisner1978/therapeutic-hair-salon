import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    return deleteAppt(req, res);
  }
}

async function deleteAppt(req, res) {
  const client = await clientPromise;
  const apptsCol = client.db("hair_salon").collection("appts");
  const query = req.query.id;

  try {
    const deleteAppt = await apptsCol.deleteOne({ _id: ObjectId(query) });
    console.log("you must goooo!!!", deleteAppt);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
