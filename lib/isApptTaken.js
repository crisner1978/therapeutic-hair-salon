import clientPromise from "./mongodb";

export async function isApptTaken(date, time) {
  try {
    const client = await clientPromise;
    const db = client.db("hair_salon");
    
    await db.collection.aggregate([
        {
            
        }
    ])


  } catch (error) {}
}
