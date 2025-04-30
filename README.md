# 🏞️ The Wild Oasis: Your Paradise Awaits 🌟

Welcome to **The Wild Oasis**, a luxurious cabin hotel nestled in the heart of the Italian Dolomites! 🌲🏔️ Experience nature's beauty with modern comfort. This React-based project offers a seamless booking experience, stunning cabin visuals, and a user-friendly interface. ✨

## 🚀 Description

This project features:

- Cabin browsing and detailed views 🏠
- Reservation system 📅
- User authentication and profile management 🔑
- Responsive design for all devices 📱

## 🛠️ Usage

### Browsing Cabins
Navigate to the `/cabins` route to view available cabins.

```jsx
<Link href="/cabins">Explore Luxury Cabins</Link>
```

### Making a Reservation
1.  **Select Dates**: Use the date selector to choose your desired check-in and check-out dates.

    ```jsx
    <DateSelector
      settings={settings}
      bookedDates={bookedDates}
      cabin={cabin}
    />
    ```

2.  **Enter Details**: Fill in the number of guests and any special requirements.

    ```jsx
    <ReservationForm user={session.user} cabin={cabin} />
    ```

<details>
<summary>Example Code Snippet:</summary>

```jsx
  "use client";

  import { differenceInDays } from "date-fns";
  import { useReservation } from "../_context/ReservationContext";
  import { createBooking } from "../_lib/action";
  import SubmitButton from "./SubmitButton";

  function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  // The 5 data points / values that needs to be passed as well into the formData.
  const bookingData = {
  startDate,
  endDate,
  numNights,
  cabinPrice,
  cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
  <div className="scale-[1.01]">
  <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
  <p>Logged in as</p>

  <div className="flex gap-4 items-center">
  <img
  // Important to display google profile images
  referrerPolicy="no-referrer"
  className="h-8 rounded-full"
  src={user.image}
  alt={user.name}
  />
  <p>{user.name}</p>
  </div>
  </div>

  <form
  // action={createBookingWithData}
  action={async (formData) => {
  await createBookingWithData(formData);
  resetRange();
  }}
  className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
  >
  <div className="space-y-2">
  <label htmlFor="numGuests">How many guests?</label>
  <select
  name="numGuests"
  id="numGuests"
  className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
  required
  >
  <option value="" key="">
  Select number of guests...
  </option>
  {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
  <option value={x} key={x}>
  {x} {x === 1 ? "guest" : "guests"}
  </option>
  ))}
  </select>
  </div>

  <div className="space-y-2">
  <label htmlFor="observations">
  Anything we should know about your stay?
  </label>
  <textarea
  name="observations"
  id="observations"
  className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
  placeholder="Any pets, allergies, special requirements, etc.?"
  />
  </div>

  <div className="flex justify-end items-center gap-6">
  {!(startDate && endDate) ? (
  <p className="text-primary-300 text-base">
  Start by selecting dates
  </p>
  ) : (
  <SubmitButton pendingLabel="Reserving...">Reserve Now</SubmitButton>
  )}
  </div>
  </form>
  </div>
  );
  }

  export default ReservationForm;
```
</details>

### User Authentication

1.  **Login**: Use the "Sign in with Google" button on the `/login` page.
    ```jsx
    <SignInButton />
    ```
2.  **Account Management**: View and update your profile on the `/account` page.

## ✨ Features

-   🏠 **Cabin Browsing**: Explore a variety of luxury cabins.
-   📅 **Reservation System**: Easily book your stay with a date selector and reservation form.
-   🔑 **User Authentication**: Securely sign in and manage your profile.
-   📱 **Responsive Design**: Enjoy a seamless experience on any device.
-   ⚙️ **Filtering and Sorting**: Find the perfect cabin based on capacity.
-   🎨 **Optimistic UI**: Enjoy smooth and responsive interactions.

## 💻 Technologies Used

| Technology                                   | Description                           |
| :------------------------------------------- | :------------------------------------ |
| [React](https://react.dev/)                  | JavaScript library for UI development |
| [Next.js](https://nextjs.org/)               | React framework for web apps          |
| [Tailwind CSS](https://tailwindcss.com/)   | Utility-first CSS framework           |
| [Supabase](https://supabase.com/)             | Backend-as-a-service                  |
| [NextAuth.js](https://next-auth.js.org/)      | Authentication library                |
| [Date-fns](https://date-fns.org/)      | Date manipulation                |
| [React Day Picker](https://react-day-picker.js.org/)      | Customizable date picker component                |

## 🤝 Contributing

We welcome contributions to The Wild Oasis! 🌿 Here are some guidelines:

*   🐛 **Report Bugs**: Submit detailed bug reports.
*   💡 **Suggest Enhancements**: Share your ideas for new features.
*   🛠️ **Submit Pull Requests**: Contribute code with clear descriptions.

## 📜 License

This project is under the [MIT License](LICENSE).

## 🧑‍💻 Author Info

- Website: [The Wild Oasis Website](https://the-wild-oasis-website-gamma-ashen.vercel.app/)
- Twitter: [@Lnnsa_18](https://twitter.com/twitterhandle)
- LinkedIn: [linkedin.com/in/lancer18](https://linkedin.com/in/yourusername)
- GitHub: [github.com/Lansa-18](https://github.com/yourusername)

---

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-blue?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
