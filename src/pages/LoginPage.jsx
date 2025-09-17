import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import RoleSelectionPopup from '../components/auth/RoleSelectionPopup';

const LoginPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRole, setSelectedRole ] = useState(null);
    const navigate = useNavigate();


    const handleRoleSelect = (role) => {
        setSelectedRole (role);
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
        <div style={{ padding: '50px', textAlign: 'center' }} >
            <h1>Login Page</h1>
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

            <input type="email" placeholder="Email" />
            <br /><br />
            <input type="password" placeholder="Password" />
            <br /><br />


            <button onClick={handleLogin}>Login</button>
            <br /><br />

            <Link to="/"> - Back to home </Link>

            <RoleSelectionPopup isOpen={showPopup} onClose={() => setShowPopup(false)} onRoleSelect={handleRoleSelect} />

        </div>
    );

};


export default LoginPage;