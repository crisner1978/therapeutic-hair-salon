import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { compare } from "bcryptjs";
import { verifyPass } from "../../../lib/encrypt";



export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const client = await clientPromise;
          const user = await client
            .db("hair_salon")
            .collection("nextauth")
            .findOne({ email: credentials.email });
          if (!user) {
            throw new Error("No User Found!");
          }
          const isValid = await verifyPass(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Invalid Passowrd!");
          }
          return { name: user.name, email: user.email, role: user.role };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.role = token.role;
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  debug: true,
});
