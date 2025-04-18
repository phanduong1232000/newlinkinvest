// src/auth.js
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log(credentials + "hello");
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  jwt: {
    encryption: true,
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60 * 7,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.role = user.role;
        token.exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60 * 7;
      }

      const now = Math.floor(Date.now() / 1000);
      const timeLeft = token.exp - now;
      const fourDaysInSeconds = 4 * 24 * 60 * 60;

      if (timeLeft <= fourDaysInSeconds) {
        token.exp = now + 24 * 60 * 60 * 7;
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      if (token?.email) session.user.email = token.email;
      if (token?.firstName) session.user.firstName = token.firstName;
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
