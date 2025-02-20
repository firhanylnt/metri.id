"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Users {
    npk: string,
    fullname: string,
    email: string,
    status: boolean,
    phone_number: string,
    bookingCode: string,
}

const ConfirmationPage = () => {
    const [users, setUsers] = useState<Users[]>([]);

    const [loading, setLoading] = useState("");
    const [registered, setRegistered] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loadingResend, setLoadingResend] = useState("");
    const [message, setMessage] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getdata = async () => {
        const response = await axios.get("https://metri-backend.vercel.app/register-user");
        const total = await axios.get("https://metri-backend.vercel.app/total");
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
        setRegistered(total.data.data.registered);
        setConfirm(total.data.data.confirm);
    }

    const handleConfirm = async (npk: string) => {
        try {
            setLoading(npk);
            setMessage("");

            const response = await axios.post("https://metri-backend.vercel.app/confirmation", { npk });
            // const response = await axios.post("http://localhost:3001/confirmation", { npk });

            if (response.status === 200) {
                setMessage(`Success: Confirmation sent for NPK ${npk}`);
            } else {
                setMessage(`Error: Failed to confirm NPK ${npk}`);
            }
        } catch (error) {
            setMessage(`Error: ${error}`);
        } finally {
            setLoading("");
            getdata();
        }
    };

    const handleResend = async (npk: string) => {
        try {
            setLoadingResend(npk)
            setMessage("");

            // const response = await axios.post("http://localhost:3001/resend", { npk });
            const response = await axios.post("https://metri-backend.vercel.app/resend", { npk });

            if (response.status === 200) {
                setMessage(`Success: Confirmation sent for NPK ${npk}`);
            } else {
                setMessage(`Error: Failed to confirm NPK ${npk}`);
            }
        } catch (error) {
            setMessage(`Error: ${error}`);
        } finally {
            setLoadingResend("")
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        console.log(value)

        const filtered = users.filter(
            (user) =>
                user.npk.toLowerCase().includes(value) ||
                user.fullname.toLowerCase().includes(value) ||
                user.bookingCode.toLowerCase().includes(value)
        );

        console.log(filtered)

        setFilteredUsers(filtered);
    };

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">User Confirmation</h1>

            <div className="relative md:left-1/2 transform md:-translate-x-1/2 -translate-x-3 text-center">
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 text-xl sm:text-3xl mt-5 mb-5">
                <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
                     <span className="block text-sm sm:text-lg">Total Users</span>
                     <p className="text-xl font-bold">425</p>
                </div>
                <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
                     <span className="block text-sm sm:text-lg">Total Registered</span>
                     <p className="text-xl font-bold">{registered}</p>
                </div>
                <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
                     <span className="block text-sm sm:text-lg">Total Confirm</span>
                     <p className="text-xl font-bold">{confirm}</p>
                </div>
                <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
                     <span className="block text-sm sm:text-lg">Total Unregistered</span>
                     <p className="text-xl font-bold">{Number(425) - Number(registered)}</p>
                </div>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search by NPK/Registration Code/Fullname"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full mb-4 px-4 py-2 border bg-black text-white border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />

            {message && <p className="mb-4 text-center text-sm text-blue-600">{message}</p>}

            <table className="w-full text-md border-collapse text-white border bg-black border-gray-300">
                <thead>
                    <tr className="bg-black">
                        <th className="border border-gray-300 px-4 py-2">NPK</th>
                        <th className="border border-gray-300 px-4 py-2 w-1/12">Registration Code</th>
                        <th className="border border-gray-300 px-4 py-2 w-1/12">Fullname</th>
                        <th className="border border-gray-300 px-4 py-2 2-1/6">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                        <th className="border border-gray-300 px-4 py-2">Check In</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, index) => (
                            <tr key={user.npk} className="text-center text-md">
                                <td className="border border-gray-300 px-4 py-2">{user.npk}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.bookingCode}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.fullname}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.phone_number}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.status ? 'Yes' : 'No'}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                            onClick={() => handleConfirm(user.npk)}
                                            className="px-3 py-2 mr-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                                            disabled={loading === user.npk}
                                        >
                                            {loading === user.npk ? "Processing..." : user.status === false ? "Check In" : "Re-check In"}
                                        </button>

                                    <button
                                        onClick={() => handleResend(user.npk)}
                                        className="px-3 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-400"
                                        disabled={loading === user.npk}
                                    >
                                        {loadingResend === user.npk ? "Processing..." : "Resend"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={8} className="text-center py-4 text-red-500">
                                No matching results found.
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default ConfirmationPage;
