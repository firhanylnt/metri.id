"use client";
import { useState, useEffect } from "react";
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

    const existNpk = [
        {npk: '050340',email: 'alex3806@hotmail.com', fullname: 'ALEXANDER',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '020087',email: 'ariefsoerendro@gmail.com', fullname: 'ARIEF SOERENDRO',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '060449',email: 'mikieffendi@gmail.com', fullname: 'MIKI EFFENDI LIM',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '070510',email: 'ricky_hertanu@hotmail.com', fullname: 'RICKY HERTANU',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '010022',email: 'mamans1972@gmail.com', fullname: 'MAMAN SUPRIYATNA',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '249880',email: 'bpermedi2000@gmail.com', fullname: 'BONNY P. MANOEROE',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '020100',email: 'sufi_tho@yahoo.com', fullname: 'SUFIANA',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '101185',email: 'anton.antonio1027@gmail.com', fullname: 'ANTON',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '112050',email: 'isg1908@gmail.com', fullname: 'IKA SETIAWATI GUNAWAN',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '080783',email: 'felix.sundah@hotmail.com', fullname: 'FELIK A IRIANTO SUNDAH',cabang: 'HEAD OFFICE',birthday: ""},
        {npk: '155114',email: 'priyadinurqodri21@gmail.com', fullname: 'PRIYADI NUR QODRI',cabang: 'HEAD OFFICE',birthday: ""},
    ]

    const getNpk = (npkValue: string) => {
        const foundUser = existNpk.find((user) => user.npk === npkValue);
        if (foundUser) {
            formik.setValues(foundUser); // Set all values in form
        }
    };

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            npk: "",
            fullname: "",
            cabang: "",
            email: "",
            birthday: "",
        },
        validationSchema: Yup.object({
            npk: Yup.string().max(6).required("NPK tidak boleh kosong"),
            fullname: Yup.string().required("Nama Lengkap tidak boleh kosong"),
            email: Yup.string().email("Email tidak valid").required("Email tidak boleh kosong"),
            cabang: Yup.string().required("Cabang tidak boleh kosong"),
            birthday: Yup.date().required("Tanggal Lahir tidak boleh kosong"),
        }),
        onSubmit: (values) => {
            const newBookingCode = generateBookingCode();
            setBookingCode(newBookingCode);
            setICount(count - 1);
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
                        PT Maybank Indonesia Finance akan mengadakan acara tahunan untuk memberikan apresiasi atas pencapaian di tahun 2024 bagi seluruh Mayfiners. Kegiatan ini juga bertujuan untuk memotivasi Mayfiners dalam meningkatkan kinerja dan pencapaian di tahun 2025.
                        <br />
                        <br />
                        Detail Acara:
                        <br />
                        Tanggal: Minggu, 2 Maret 2025.
                        <br />
                        <br />
                        Waktu: 13.30 WIB - Selesai.
                        <br />
                        <br />
                        Lokasi: Grand Ballroom - Sun City, Lindeteves Trade Center.
                        <br />
                        <br />
                        Segera lakukan registrasi untuk memastikan keikutsertaan dalam acara ini.
                        <br />
                        <br />
                        Terima kasih atas perhatian dan partisipasinya.
                        <br />
                        <br />
                        [PT Maybank Indonesia Finance]
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
                                placeholder="Nama Lengkap"
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
                                name="cabang"
                                placeholder="Cabang"
                                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cabang}
                            />
                            {formik.touched.cabang && formik.errors.cabang && (
                                <p className="text-red-500 text-sm">{formik.errors.cabang}</p>
                            )}

                            <input
                                type={formik.values.birthday ? "date" : "text"}
                                name="birthday"
                                placeholder="Tanggal Lahir"
                                className="px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birthday}
                                style={{ colorScheme: 'dark' }}
                                onFocus={(e) => (e.target.type = "date")}
                            // onBlur={(e) => {
                            //     if (!e.target.value) e.target.type = "text"; // Kembali ke text jika kosong
                            // }}
                            />
                            {formik.touched.birthday && formik.errors.birthday && (
                                <p className="text-red-500 text-sm">{formik.errors.birthday}</p>
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
