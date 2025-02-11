"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EventDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setICount] = useState(450);
  const [bookingCode, setBookingCode] = useState("");

  // Generate random booking code
  const generateBookingCode = () => {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const newBookingCode = generateBookingCode();
      setBookingCode(newBookingCode);
      setICount(count - 1);
      setIsOpen(false);
      formik.resetForm();
    },
  });

  return (
    <section className="relative w-full min-h-screen px-6 sm:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Event Image */}
        <div className="w-full md:w-1/2">
          <img src="/images/event.jpeg" alt="Event" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Event Information */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Annual Conference 2025</h1>
          <p className="text-sm sm:text-md mb-6 max-w-lg sm:max-w-2xl">
            This is PT Maybank Indonesia Finance's annual agenda to appreciate the achievements in 2024 for Mayfiner throughout Indonesia.
            At the same time, this activity was held to motivate Mayfiners to improve performance and achievements in 2025.
          </p>
          <p className="text-sm sm:text-md max-w-lg sm:max-w-2xl">
            Date: 2 Maret 2025
          </p>
          <p className="text-sm sm:text-md mb-6 max-w-lg sm:max-w-2xl">
            Location: Shinta Ballroom Lantai 6, Jl. Hayam Wuruk, RT.1/RW.6, Mangga Besar, Kec. Taman Sari, Kota Jakarta Barat

          </p>
          <div className="flex items-center gap-4">
          <p className="font-bold">{count} Left!</p>
            <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
                Register Now
            </button>
            
        </div>

         
        </div>
      </div>

      {/* Modal Register */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black border-2 border-yellow-500 text-black p-6 rounded-lg w-96 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-4xl"
            >
              ×
            </button>
            <h2 className="text-2xl text-white font-bold text-center mb-4">Register Now</h2>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
              )}

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}

              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Booking Code Popup */}
      {bookingCode && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white border-2 border-yellow-500 p-6 rounded-lg w-80 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
            <p className="text-lg">Your Registration Code:</p>
            <p className="text-2xl font-bold text-yellow-500">{bookingCode}</p>
            <button
              onClick={() => setBookingCode("")}
              className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetail;
