import { getListSubheaderUtilityClass } from "@mui/material";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return getUsers(req, res);
    }
    case "POST": {
      return addUser(req, res);
    }
    case "DELETE": {
      return deleteUser(req, res);
    }
  }
}

async function addUser(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const client = await clientPromise;
    const userCol = await client.db("hair_salon").collection("nextauth");

    try {
      await userCol.insertOne({ email: email });
      return res.status(200).json({ message: "User created!", success: true });
    } catch (error) {
      res.status(400).json({ message: error.message, success: false });
    }
  }
}

async function getUsers(req, res) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const userCol = await client.db("hair_salon").collection("nextauth");

    try {
      const users = await userCol.find({}).toArray();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

// async function deleteUser(req, res) {
//   if(req.method === 'DELETE') {
//     const client = await clientPromise;
//     const userCol = await client.db("hair_salon").collection("nextauth");

//     try {
//       const result = await userCol.deleteOne({ })
//     } catch (error) {
      
//     }
//   }
// }
