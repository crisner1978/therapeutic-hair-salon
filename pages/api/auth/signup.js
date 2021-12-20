import { hashPass } from "../../../lib/encrypt";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    const client = await clientPromise;
    const userCol = client.db("hair_salon").collection("nextauth");

    const existingUser = await userCol.findOne({ email: email });

    try {
      if (!existingUser || existingUser.password) {
        return res.json({ message: "Access Denied", success: false });
      } else {
        await userCol.update(
          { email: email },
          { $set: { name: name, password: await hashPass(password, 12) } }
        );
        return res.json({
          message: "User created",
          success: true,
        });
      }
    } catch (error) {
      res.json(error.message);
    }
  }
}
