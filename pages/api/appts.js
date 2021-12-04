import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  return createAppt(req, res);
}

async function createAppt(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("hair_salon");

    await db.collection("appts").insertOne(JSON.parse(req.body));

    return res.json({
      message: "Appointment booked successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error.message),
      success: false,
    });
  }
}
