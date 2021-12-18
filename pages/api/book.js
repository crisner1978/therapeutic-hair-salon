import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  return createAppt(req, res);
}

async function createAppt(req, res) {
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
