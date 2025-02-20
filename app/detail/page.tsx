"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const EventDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(450);
    const [bookingCode, setBookingCode] = useState("");
    const [duplicate, setDuplicate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Generate random booking code
    const generateBookingCode = () => {
        return Math.random().toString(36).slice(-4).toUpperCase();
    };

    const getExisting = async (npk: string) => {
        try {
            const response = await axios.post('https://metri-backend.vercel.app/existing', { npk });

            if (response.status !== 200) {

            } else {
                const { data } = response.data;

                formik.setFieldValue("fullname", data.fullname);
                formik.setFieldValue("cabang", data.cabang);
                formik.setFieldValue("email", data.email);
                formik.setFieldValue("phone_number", data.phone_number);
            }


        } catch (error) {
            // console.error("Error fetching existing data:", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            npk: "",
            fullname: "",
            cabang: "",
            email: "firhan@visinemapictures.com",
            phone_number: "6282246215335",
            birthdate: "",
            testimoni: "",
        },
        validationSchema: Yup.object({
            npk: Yup.string().max(6).required("NPK tidak boleh kosong"),
            fullname: Yup.string().required("Nama Lengkap tidak boleh kosong"),
            email: Yup.string().email("Email tidak valid").required("Email tidak boleh kosong"),
            phone_number: Yup.string().required("Phone Number tidak boleh kosong"),
            cabang: Yup.string().required("Cabang tidak boleh kosong"),
            birthdate: Yup.date().required("Tanggal Lahir tidak boleh kosong"),
            testimoni: Yup.string().required("Motivational Quotes harus diisi"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const newBookingCode = "MF" + generateBookingCode();
                const response = await axios.post('https://metri-backend.vercel.app/users', {
                    npk: values.npk,
                    fullname: values.fullname,
                    cabang: values.cabang,
                    email: values.email,
                    phone_number: values.phone_number,
                    birthdate: values.birthdate,
                    testimoni: values.testimoni,
                    bookingCode: newBookingCode,
                });

                console.log(response.data)

                if (response.data) {
                    if (response.data.success === false) {
                        console.log(response.data)
                        setDuplicate(true)
                        setMessage(response.data.error)
                    } else {
                        setBookingCode(newBookingCode);
                        setCount((prevCount) => prevCount - 1);
                        setIsOpen(false);
                        formik.resetForm();
                    }

                }

            } catch (error) {

                setDuplicate(true)
            }
            setLoading(false);
        },
    });

    useEffect(() => {
        if (formik.values.npk) {
            getExisting(formik.values.npk);
        }
    }, [formik.values.npk]);

    return (
        <section
            className="relative text-white text-center bg-cover bg-center min-h-screen flex flex-col justify-center px-6 sm:px-12"
            style={{ backgroundImage: "url('/images/detail.jpg')" }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-1/2">
                    <img src="/images/logo-poster.png" alt="Event" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-4">Maybank Finance Annual Conference 2025</h1>
                    <p className="text-xl md:text-2xl mb-6">
                        PT Maybank Indonesia Finance akan mengadakan acara tahunan untuk memberikan apresiasi atas pencapaian di tahun 2024 bagi seluruh Mayfiners. Kegiatan ini juga bertujuan untuk memotivasi Mayfiners dalam meningkatkan kinerja dan pencapaian di tahun 2025.
                        <br />
                        <br />
                        <b>Detail Acara</b>
                        <br />
                        <br />
                        Hari, Tanggal : Minggu, 2 Maret 2025.
                        <br />
                        Waktu : 13.30 WIB - Selesai.
                        <br />
                        Lokasi : Grand Ballroom Sun City - Lindeteves Trade Center
                        <br />
                        <br />
                        Segera lakukan registrasi untuk memastikan keikutsertaan.
                        <br />
                        Terima kasih atas perhatian dan partisipasinya.
                        <br />
                        [PT Maybank Indonesia Finance]
                    </p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-9 py-3 mb-5 text-xl md:text-3xl bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Register
                    </button>
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
                        <h2 className="text-2xl text-white font-bold text-center mb-4">Register</h2>

                        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                            <label className="text-white text-left text-sm">NPK</label>
                            <input
                                type="text"
                                name="npk"
                                className="px-4 py-2 border bg-black w-[330px] md:w-full text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.npk}
                            />
                            {formik.touched.npk && formik.errors.npk && (
                                <p className="text-red-500 text-sm">{formik.errors.npk}</p>
                            )}

                            <label className="text-white text-left text-sm">Nama Lengkap</label>
                            <input
                                type="text"
                                name="fullname"
                                className="px-4 py-2 border bg-black w-[330px] md:w-full text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullname}
                            />
                            {formik.touched.fullname && formik.errors.fullname && (
                                <p className="text-red-500 text-sm">{formik.errors.fullname}</p>
                            )}
                            <label className="text-white text-left text-sm">Cabang</label>
                            <input
                                type="text"
                                name="cabang"
                                className="px-4 py-2 border bg-black w-[330px] md:w-full text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cabang}
                            />
                            {formik.touched.cabang && formik.errors.cabang && (
                                <p className="text-red-500 text-sm">{formik.errors.cabang}</p>
                            )}

                            <label className="text-white text-left text-sm">Tanggal Lahir</label>
                            <input
                                type="date"
                                name="birthdate"
                                placeholder="Tanggal Lahir"
                                className="px-4 py-2 pl-10 border bg-black w-[330px] md:w-full text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birthdate}
                                style={{ colorScheme: 'dark' }}
                                onFocus={(e) => (e.target.type = "date")}
                            />
                            {formik.touched.birthdate && formik.errors.birthdate && (
                                <p className="text-red-500 text-sm">{formik.errors.birthdate}</p>
                            )}

                            <label className="text-white text-left text-sm">Your Motivational Quotes</label>
                            <textarea
                                name="testimoni"
                                rows={4}
                                className="px-4 py-2 border bg-black w-[330px] md:w-full text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.testimoni}
                            ></ textarea>
                            {formik.touched.testimoni && formik.errors.testimoni && (
                                <p className="text-red-500 text-sm">{formik.errors.testimoni}</p>
                            )}

                            <button
                                type={loading ? 'button' : 'submit'}
                                className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
                            >
                                {loading ? 'Loading ...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

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

            {duplicate && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black text-white border-2 border-yellow-500 p-6 rounded-lg w-80 shadow-lg text-center">
                        <p className="text-lg">{message}</p>
                        <button
                            onClick={() => setDuplicate(false)}
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
