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
  { npk: '155114', fullname: 'PRIYADI NUR QODRI', position: 'BUSINESS DEVELOPMENT', testimoni: "" },
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
      npk: Yup.string().max(6).required("NPK lengkap harus diisi"),
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
      <h2 className="text-3xl text-center font-bold md:mb-[100px] mb-[20px]">Motivational Quotes</h2>
      <SpeakerSlider />
      <h2 className="text-3xl text-center font-bold md:mt-[50px] mt-[50px]" style={{ fontStyle: 'italic' }}>Dresscode</h2>
      <p className="md:text-md text-sm text-center text-yellow-500 font-bold">
        Black & Gold
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:mt-[50px] mt-[50px]">
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
