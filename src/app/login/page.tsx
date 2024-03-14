"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
    // const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder logic for authentication
        try {
            // You can do this steven! I believe in you!
            // Don'f forget to use the router.push() function to navigate to the home page
            // Replace this with your actual authentication logic
            // Example: const response = await AuthService.login(email, password);
            // If login successful, navigate to the home page
            // router.push("/home");
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure (e.g., display error message)
        }
    };

    return (
        <div className="w-[360px] min-h-screen relative bg-white">
            <form onSubmit={handleLogin}>
                <div className="w-[328px] h-[60px] left-[17px] top-[297px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                    <input
                        type="text"
                        placeholder="Phone/e-mail"
                        className="w-[258px] left-[24px] top-[14px] absolute opacity-75 text-black text-xl font-medium leading-normal bg-transparent outline-none border-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-[328px] h-[60px] left-[17px] top-[376.66px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[258px] left-[24px] top-[14px] absolute opacity-75 text-black text-xl font-medium leading-normal bg-transparent outline-none border-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="w-[188px] left-[17px] top-[175px] absolute text-teal-950 text-4xl font-semibold leading-[43.20px]">Welcome back!</div>
                <button type="submit" className="w-[327px] h-[60px] pl-[52px] pr-[17.37px] pt-[18px] pb-[17.50px] left-[17px] top-[473px] absolute bg-sky-400 rounded-[11px] justify-end items-start gap-[10.63px] inline-flex">
                    <div className="w-[223px] text-center text-teal-950 text-xl font-medium leading-normal">Log In</div>
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                        <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                    </div>
                </button>
            </form>
            <Link href="/" className="w-9 h-9 left-[17px] top-[120px] absolute">
                <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
            </Link>
            <div className="left-[89px] top-[552px] absolute text-center text-cyan-800 text-lg font-semibold leading-snug">Need help logging in?</div>
        </div>
    );
};

export default LoginPage;
