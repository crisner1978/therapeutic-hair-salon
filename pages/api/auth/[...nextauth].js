import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
    session: {
      strategy: "jwt",
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
          const isValid = await compare(credentials.password, user.password);
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
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.role = token.role;
      return session;
    },
    redirect: async (url, baseUrl) => {
      return "/profile";
    },
  },
  secret: "supersecretsecret",
  jwt: {
    secret: "supersecretsecret",
    encryption: true,
  },
  debug: true,
});
