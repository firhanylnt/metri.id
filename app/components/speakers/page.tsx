"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SpeakerSlider from "./swiper";

const dress = [
  { name: "Douglas Alvarado", role: "Chief Guest Speaker", img: "/images/c1.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c2.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c5.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c4.png" },
];

const existNpk = [
  { npk: '050340', fullname: 'ALEXANDER', position: 'BOARD OF DIRECTOR', testimoni: "" },
  { npk: '020087', fullname: 'ARIEF SOERENDRO', position: 'BOARD OF DIRECTOR', testimoni: "" },
  { npk: '060449', fullname: 'MIKI EFFENDI LIM', position: 'BOARD OF DIRECTOR', testimoni: "" },
  { npk: '070510', fullname: 'RICKY HERTANU', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '010022', fullname: 'MAMAN SUPRIYATNA', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '249880', fullname: 'BONNY P. MANOEROE', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '020100', fullname: 'SUFIANA', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '101185', fullname: 'ANTON', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '112050', fullname: 'IKA SETIAWATI GUNAWAN', position: 'DIVISION HEAD', testimoni: "" },
  { npk: '080783', fullname: 'FELIK A IRIANTO SUNDAH', position: 'DIVISION HEAD', testimoni: "" },
]

const Speakers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNpk = (npkValue: string) => {
    const foundUser = existNpk.find((user) => user.npk === npkValue);
    if (foundUser) {
      formik.setValues(foundUser);
    }
  };

  const formik = useFormik({
    initialValues: {
      npk: "",
      fullname: "",
      position: "",
      testimoni: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Nama lengkap harus diisi"),
      position: Yup.string().required("Jabatan lengkap harus diisi"),
      testimoni: Yup.string().required("Testimoni harus diisi"),
    }),
    onSubmit: (values) => {
      setIsOpen(false);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (formik.values.npk) {
      getNpk(formik.values.npk);
    }
  }, [formik.values.npk]);

  return (
    <section className="py-12 text-white text-center">
      <h2 className="text-3xl text-center font-bold md:mb-[100px] mb-[20px]">Testimoni</h2>
      <SpeakerSlider />
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 mt-6 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
      >
        Buat Testimoni
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40" style={{ zIndex: 2 }}>
          <div className="bg-black border-2 border-yellow-500 text-black p-6 rounded-lg w-96 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-4xl"
            >
              ×
            </button>
            <h2 className="text-2xl text-white font-bold text-center mb-4">Buat Testimoni</h2>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">

              <input
                type="text"
                name="npk"
                placeholder="NPK"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.npk}
              />
              {formik.touched.npk && formik.errors.npk && (
                <p className="text-red-500 text-sm">{formik.errors.npk}</p>
              )}

              <input
                type="text"
                name="fullname"
                placeholder="Nama lengkap"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="text-red-500 text-sm">{formik.errors.fullname}</p>
              )}

              <input
                type="text"
                name="position"
                placeholder="Jabatan"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
              />
              {formik.touched.position && formik.errors.position && (
                <p className="text-red-500 text-sm">{formik.errors.position}</p>
              )}

              <textarea
                name="testimoni"
                placeholder="Testimoni"
                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.testimoni}
              ></ textarea>
              {formik.touched.testimoni && formik.errors.testimoni && (
                <p className="text-red-500 text-sm">{formik.errors.testimoni}</p>
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
      <h2 className="text-3xl text-center font-bold md:mt-[100px] mt-[50px]" style={{ fontStyle: 'italic' }}>Dresscode</h2>
      <p className="md:text-md text-sm text-center text-yellow-500 font-bold">
        Black & Gold
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:mt-[100px] mt-[50px]">
        {dress.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-auto h-[150px] sm:h-[180px] md:h-[200px] mx-auto bg-white rounded-lg border-2 border-yellow-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
