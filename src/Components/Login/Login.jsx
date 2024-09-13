import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Login = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const validateFields = () => {
        if (!username && isSignup) {
            toast.error('Please enter a username');
            return false;
        }
        if (!email) {
            toast.error('Please enter an email address');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (!password) {
            toast.error('Please enter a password');
            return false;
        }
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return false;
        }
        if (isSignup && !contactNumber) {
            toast.error('Please enter a contact number');
            return false;
        }
        if (isSignup && !/^\d{10}$/.test(contactNumber)) {
            toast.error('Please enter a valid 10-digit contact number');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            toast.success(isSignup ? 'Sign up successful!' : 'Login successful!');
            onClose();
        }
    };

    const toggleMode = () => {
        setIsSignup(!isSignup);
        setUsername('');
        setEmail('');
        setPassword('');
        setContactNumber('');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                {isSignup ? 'Sign up' : 'Login'}
            </h2>
            <div className="space-y-4 mb-6">
                <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google logo"
                        className="w-5 h-5 mr-3"
                    />
                    {isSignup ? 'Sign Up' : 'Login'} with Google
                </button>
                <button className="w-full py-3 px-4 bg-gray-800 text-white rounded-lg flex items-center justify-center font-medium hover:bg-gray-700 transition-colors">
                    <img
                        src="https://github.com/favicon.ico"
                        alt="GitHub logo"
                        className="w-5 h-5 mr-3"
                    />
                    {isSignup ? 'Sign Up' : 'Login'} with GitHub
                </button>
            </div>
            <div className="relative mb-6">
                <hr className="border-gray-200" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                    Or {isSignup ? 'sign up' : 'login'} with e-mail
                </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                />
                {isSignup && (
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                    />
                )}
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    {isSignup ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <div className="text-center mt-4">
                <button
                    onClick={toggleMode}
                    className="text-blue-500 hover:underline"
                >
                    {isSignup ? 'Already have an account? Login' : 'No account? Sign Up'}
                </button>
            </div>
        </div>
    );
};

export default Login;