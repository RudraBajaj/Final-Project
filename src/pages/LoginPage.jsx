import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import RoleSelectionPopup from '../components/auth/RoleSelectionPopup';
import logo from '../assets/images/logo-removed.png';

const LoginPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();


    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setShowPopup(false);
    };

    const handleLogin = () => {
        if (!selectedRole) {
            setShowPopup(true);
            return;
        }


        // Simple redirect based on role

        if (selectedRole.id === 'student') navigate('/student');
        if (selectedRole.id === 'alumni') navigate('/alumni');
        if (selectedRole.id === 'admin') navigate('/admin');
        if (selectedRole.id === 'super-admin') navigate('/super-admin');

    };

    return (
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: "black" }} >
            {selectedRole ?
                (<p>Selected Role: {selectedRole.name} {selectedRole.id === 'student' ? '🎒' : selectedRole.id === 'alumni' ? '🎓' : selectedRole.id === 'admin' ? '⚡' : '👑'}</p>)
                :
                (
                    <p> No role Selected </p>
                )
            }

            <br />
            <button onClick={() => setShowPopup(true)}>Choose Role</button>
            <br /><br />


            <RoleSelectionPopup isOpen={showPopup} onClose={() => setShowPopup(false)} onRoleSelect={handleRoleSelect} />

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={logo} alt="Logo" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <br />
                    <Link to="/" className="text-gray-400"> - Back to home </Link>
                </div>
            </div>
        </div>
    );

};


export default LoginPage;