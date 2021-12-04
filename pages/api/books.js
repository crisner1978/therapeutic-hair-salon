import clientPromise from "../../lib/mongodb"

export default async function handler(req, res){
    const client = await clientPromise
    const db = client.db("hair_salon");

    const bookings = await db
        .collection("appts")
        .find({"slot": { $exists: true}})
        .toArray();

        res.json(bookings);;
}