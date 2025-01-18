import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("credentials", credentials);
        try {
          // Ensure credentials are provided
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          // Send credentials to the API for verification
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
            email: credentials.email,
            password: credentials.password,
          });
          console.log("response", response);

          const user = response.data;

          // If user exists, return user object
          if (user) {
            return user;
          } else {
            throw new Error("Invalid credentials.");
          }
        } catch (error) {
          // Handle errors and provide feedback
          throw new Error("Authentication failed.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
});
