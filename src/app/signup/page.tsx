"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Location: React.FC = () => {
    return (
        <div className="w-[360px] h-[800px] relative bg-neutral-50">
            <div className="w-[328px] h-[60px] left-[16px] top-[317px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                <div className="w-[258px] left-[24px] top-[18px] absolute opacity-0 bg-slate-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">Jaipur, RJ</div>
                </div>
                <div className="left-[24px] top-[18px] absolute opacity-50 bg-neutral-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">Choose your locality</div>
                </div>
                <div className="w-6 h-6 left-[282px] top-[18px] absolute">
                    <Image src="icon/GPS.svg" alt="" fill className="w-full h-full absolute" />
                </div>
            </div>
            <div className="w-72 left-[16px] top-[249px] absolute text-zinc-600 text-xl font-medium leading-normal">Please enter your locality to fetch relevant prices & data.</div>
            <div className="h-[99px] left-[16px] top-[120px] absolute flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-9 h-9 relative">
                    <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
                </div>
                <div className="w-72 text-teal-950 text-4xl font-semibold leading-[43.20px]">All good!</div>
            </div>
            <div className="h-[46px] px-[27px] py-[11px] left-[225px] top-[692px] absolute bg-sky-400 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-teal-950 text-sm font-semibold leading-[16.80px]">Next</div>
                <div className="w-6 h-6 relative">
                    <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                </div>
            </div>
        </div>
    );
};

const Finaltouches: React.FC = () => {
    return (
        <div className="w-[360px] h-[800px] relative bg-white">
            <div className="w-[328px] h-[60px] left-[16px] top-[293px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                <div className="w-[258px] left-[24px] top-[18px] absolute opacity-0 bg-slate-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">Manicker</div>
                </div>
                <div className="left-[24px] top-[18px] absolute opacity-50 bg-neutral-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">Username</div>
                </div>
            </div>
            <div className="w-[328px] h-[60px] left-[16px] top-[427px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                <div className="w-[258px] left-[24px] top-[18px] absolute opacity-0 bg-slate-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">•••••••••</div>
                </div>
                <div className="left-[24px] top-[18px] absolute opacity-50 bg-neutral-50 justify-start items-center gap-2.5 inline-flex">
                    <div className="opacity-75 text-black text-xl font-medium leading-normal">New Password</div>
                </div>
            </div>
            <div className="w-72 left-[16px] top-[249px] absolute text-zinc-600 text-xl font-medium leading-normal">Please enter a username</div>
            <div className="w-72 left-[16px] top-[383px] absolute text-zinc-600 text-xl font-medium leading-normal">Please enter new password</div>
            <div className="h-[99px] left-[16px] top-[120px] absolute flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-9 h-9 relative">
                    <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
                </div>
                <div className="w-72 text-teal-950 text-4xl font-semibold leading-[43.20px]">Final Touches</div>
            </div>
            <div className="h-[46px] px-[27px] py-[11px] left-[217px] top-[692px] absolute bg-sky-400 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-teal-950 text-sm font-semibold leading-[16.80px]">Finish</div>
                <div className="w-6 h-6 relative">
                    <Image src="icon/done.svg" alt="" fill className="w-full h-full absolute" />
                </div>
            </div>
        </div>
    )
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
    });
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [step, setStep] = useState(1); // Step 1: Email input, Step 2: OTP input

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        if (step === 1) {
            // If in step 1, proceed to step 2
            setShowOtpInput(true);
            setStep(2);
        } else if (step === 2) {
            // If in step 2 (OTP input), navigate to Location component
            // You can replace the console.log with actual navigation logic
            console.log('Navigating to Location component');
        }
    };

    const handleNextClick = () => {
        // Logic to show OTP input and proceed to next step
        setShowOtpInput(true);
        setStep(2);
    };

    return (
        <div className="w-[360px] min-h-screen relative bg-white">
            <form onSubmit={handleSubmit}>
                <div className="w-[328px] h-[60px] left-[16px] top-[360px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                    <input
                        type="text"
                        name="email"
                        placeholder="Your phone/e-mail"
                        className="w-[258px] left-[24px] top-[14px] absolute opacity-75 text-teal-950 text-xl font-medium leading-normal bg-transparent outline-none border-none"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={showOtpInput}
                    />
                </div>
                {showOtpInput && (
                    <div className="w-[328px] h-[60px] left-[16px] top-[440px] absolute bg-slate-50 rounded-[11px] border-2 border-sky-300">
                        <input
                            type="password"
                            id="otp-input"
                            name="otp"
                            placeholder="Enter OTP"
                            className="w-[258px] left-[24px] top-[14px] absolute opacity-75 text-teal-950 text-xl font-medium leading-normal bg-transparent outline-none border-none"
                            value={formData.otp}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="w-72 left-[16px] top-[292px] absolute text-zinc-600 text-xl font-medium leading-normal">Please enter your phone number or e-mail address.</div>
                <div className="left-[16px] top-[120px] absolute flex-col justify-start items-start gap-5 inline-flex">
                    <Link href="/" className="w-9 h-9 relative">
                        <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
                    </Link>
                    <div className="w-72 text-teal-950 text-4xl font-semibold leading-[43.20px]">Welcome!<br />Let’s get started</div>
                </div>
                <div className="h-[46px] px-[27px] py-[11px] left-[225px] top-[692px] absolute bg-sky-400 rounded-[15px] justify-center items-center gap-2.5 inline-flex cursor-pointer" onClick={handleNextClick}>
                    <div className="text-center text-teal-950 text-sm font-semibold leading-[16.80px]">Next</div>
                    <div className="w-6 h-6 relative">
                        <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
