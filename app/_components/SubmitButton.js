"use client";

const { useFormStatus } = require("react-dom");

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus(); // This react hook can only be used in a component that is rendered in the form element and not in the component that contains the form element itself.

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
