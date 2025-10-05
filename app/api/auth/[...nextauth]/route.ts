// /app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "seofriendly", // 👈 specify your db name here
    collections: {
      Users: "users", // 👈 this ensures it uses your users collection
    },
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin", // optional: you can create a custom sign-in page
  },
  callbacks: {
    async session({ session, user }) {
      // Attach user ID to session object
      if (session?.user) {
        (session.user as any).id = user.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
