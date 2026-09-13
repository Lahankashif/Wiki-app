import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../api"; // adjust path based on your folder
import { Modal } from "../components/Modal";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault(); // ✅ stops page reload
        setError("");
        try {
            const res = await loginUser({ email, password });
            localStorage.setItem("token", res.data.token);
            setShowModal(true);
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    const navigate = useNavigate()
    return (
        <>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

                <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
                <p className="text-gray-500 text-center mt-1">Welcome back! Please login to your account.</p>


                <form className="mt-6 space-y-4" onSubmit={handleLogin}>

                    {error && (
                        <div className="bg-red-50 border border-red-300 text-red-700 text-sm rounded-lg p-3">
                            {error}
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-black text-white rounded-lg "
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-400 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                    className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                >
                    Create Account
                </button>
            </div>
        </div>
        <Modal
            open={showModal}
            title="Login Successful"
            message="Welcome back!"
            onClose={() => navigate("/search")}
        />
        </>
    );
}
