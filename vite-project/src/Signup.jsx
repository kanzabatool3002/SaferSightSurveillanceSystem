import { motion } from "framer-motion";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuthStore } from "./store/authStore.js";
import Input from "./components/Input.jsx";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter.jsx";


const Signup = () => {
	const [name, setName] = useState("");
	const [organization, setOrganization] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			await signup(email, password, name,organization);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		
		<div
		className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
	  >

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
			>


				<div className="p-8">
					<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
						Create Account
					</h2>

					<form onSubmit={handleSignUp}>
						<Input
							icon={User}
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="text-white"
						/>
						<Input
							icon={User}
							type="text"
							placeholder="Organization Name"
							value={organization}
							onChange={(e) => setOrganization(e.target.value)}
							className="text-white"
						/>
						<Input
							icon={Mail}
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="text-white"
						/>
						<Input
							icon={Lock}
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="text-white"
						/>
						{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
						<PasswordStrengthMeter password={password} />

						<motion.button
							className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-white to-gray-300 text-gray-900 font-bold rounded-lg shadow-lg hover:from-gray-200 hover:to-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin mx-auto" size={24} />
							) : (
								"Sign Up"
							)}
						</motion.button>
					</form>
				</div>
				<div className="px-8 py-4 bg-gray-800 bg-opacity-70 flex justify-center">
					<p className="text-sm text-white">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-400 hover:underline">
							Login
						</Link>
					</p>
				</div>
			</motion.div>
			</div>
		
	);
};

export default Signup;
