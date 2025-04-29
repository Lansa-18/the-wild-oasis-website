import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beoautiful moutains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased relative flex flex-col bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12">
          <main className="max-w-7xl w-full mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

/*
  MIDDLEWARE DETAILS IN NEXTJS
  - By default, middleware runs before every route in a project, but we can specify which paths using a matcher
  - Analogy: Middleware is a chunk of code that's in every page.js component
  - Only one middleware function needs to be exported from middleware.js or .ts in the project root folder

  WHY DO WE NEED THIS?
  - Reading and setting cookies and headers
  - Authentication and Authorization
  - Server-side analytics
  - Redirect based on geolocation
  - A/B Testing

  MIDDLEWARE NEEDS TO PRODUCE A RESPONSE, WHICH CAN HAPPEN IN TWO WAYS
  - 1. Redirect or rewrite to a route.
  - 2. Directly send a json response to the client.

  OPTIMISTIC UI: This is a trick and a technique that we can use in order to improve the perceived performance of a user interface.
  - It is called optimistic because we assume that a certain asynchronous operation would be successful before it has even finished.

*/
