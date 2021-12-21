import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("hair_salon");

  const books = await db
    .collection("appts")
    .aggregate([
      {
        $match: { "slot.date": req.query.term },
      },
    ])
    .toArray();

  res.json(books);
}
