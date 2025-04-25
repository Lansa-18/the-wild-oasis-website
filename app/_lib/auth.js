import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // The double exlamation mark (!!) automatically converts the result of that value to a boolean
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
