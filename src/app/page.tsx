"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import "./page.css";

interface Splash1Props {
    onNext: () => void;
}

interface Splash2Props {
    onBack: () => void;
    onNext: () => void;
}

const Splash1: React.FC<Splash1Props> = ({ onNext }) => {
    return (
        <div className="w-[360px] min-h-screen relative bg-white">
            <div className="left-[42px] top-[400px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
                <div className="w-[277px] text-center text-teal-950 text-[26px] font-bold">Offline or Online? Lookup prices for anything, anywhere.</div>
                <div className="w-[277px] text-center text-black text-xl font-normal leading-normal">Find prices of anything, anywhere you want whether it is online or offline market.</div>
            </div>
            <div onClick={onNext} className="h-[46px] px-[27px] py-[11px] left-[257.50px] top-[689px] absolute bg-sky-400 rounded-[15px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
                <div className="text-center text-teal-950 text-sm font-semibold leading-[16.80px]">Next</div>
            </div>
            <div className="h-[46px] p-[11px] left-[16px] top-[689px] absolute rounded-[15px] border-2 border-sky-400 justify-center items-center gap-2.5 inline-flex">
                <div className="w-6 h-6 relative">
                    <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
                </div>
            </div>
            <div className="w-3 h-3 left-[122px] top-[706px] absolute bg-sky-400 rounded-[20px]" />
            <div className="w-3 h-3 left-[144px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-3 h-3 left-[166px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-3 h-3 left-[188px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-[270px] h-[270px] left-[44.50px] top-[85px] absolute justify-center items-center inline-flex">
                <div className="w-[270px] h-[270px] relative">
                    <Image src="/illustrations/splash1.png" alt='' fill className="w-[155.22px] h-[217.08px] left-[57.51px] top-[26.64px] absolute" />
                </div>
            </div>
        </div>
    );
};

const Splash2: React.FC<Splash2Props> = ({ onBack, onNext }) => {
    return (
        <div className="w-[360px] min-h-screen relative bg-white">
            <div className="left-[42px] top-[400px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
                <div className="w-[277px] text-center text-teal-950 text-[26px] font-bold">Contributed by all. Always up-to-date.</div>
                <div className="w-[277px] text-center text-black text-xl font-normal leading-normal">Prices and information are constantly crowdsourced and smartly updated. You can also contribute, edit or update information.</div>
            </div>
            <div onClick={onNext} className="h-[46px] px-[27px] py-[11px] left-[257.50px] top-[689px] absolute bg-sky-400 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-teal-950 text-sm font-semibold leading-[16.80px]">Next</div>
            </div>
            <div onClick={onBack} className="h-[46px] p-[11px] left-[16px] top-[689px] absolute rounded-[15px] border-2 border-sky-400 justify-center items-center gap-2.5 inline-flex">
                <div className="w-6 h-6 relative">
                    <Image src="icon/back.svg" alt="" fill className="w-full h-full absolute" />
                </div>
            </div>
            <div className="w-3 h-3 left-[122px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-3 h-3 left-[144px] top-[706px] absolute bg-sky-400 rounded-[20px]" />
            <div className="w-3 h-3 left-[166px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-3 h-3 left-[188px] top-[706px] absolute bg-sky-200 rounded-[20px]" />
            <div className="w-[270px] h-[270px] left-[44.50px] top-[85px] absolute justify-center items-center inline-flex">
                <div className="w-[270px] h-[270px] relative">
                    <Image src="/illustrations/splash2.png" alt='' fill className="w-[155.22px] h-[217.08px] left-[57.51px] top-[26.64px] absolute" />
                </div>
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    const [showImage, setShowImage] = useState(true);
    const [step, setStep] = useState(0);
    const [skipClicked, setSkipClicked] = useState(false);
    const [exploreClicked, setExploreClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleSkipClick = () => {
        setSkipClicked(true);
    };

    const handleExploreClick = () => {
        setExploreClicked(true);
        setStep(step + 1);
    };

    const handleNextClick = () => {
        setStep(step + 1);
    };

    const handleBackClick = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {showImage ? (
                <div className='animate-slide relative'>
                    <Image src="/icon/Icon.png" alt="Keemat Icon" width={120} height={120} />
                </div>
            ) : exploreClicked || step === 1 ? (
                <Splash1 onNext={handleNextClick} />
            ) : step === 2 ? (
                <Splash2 onBack={handleBackClick} onNext={handleNextClick} />
            ) : skipClicked ? (
                <div className="w-[360px] min-h-screen relative bg-white">
                    <div className="left-[89.50px] top-[386px] absolute text-teal-950 text-4xl font-semibold leading-[43.20px]">Let’s save!</div>
                    <Link href="/signup" className="w-[328px] h-[60px] pl-[52px] pr-[18.37px] pt-[18px] pb-[17.50px] left-[16.50px] top-[476px] absolute bg-sky-400 rounded-[11px] justify-end items-start gap-[10.63px] inline-flex">
                        <div className="w-[223px] text-center text-teal-950 text-xl font-medium leading-normal">Create a Account</div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                        </div>
                    </Link>
                    <Link href="/login" className="w-[328px] h-[60px] pl-[73px] pr-[18.37px] py-[18px] left-[16px] top-[553px] absolute rounded-[11px] border-2 border-sky-400 justify-end items-start gap-[31.37px] inline-flex">
                        <div className="w-[181.27px] text-center text-cyan-800 text-xl font-medium leading-normal">Log In</div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                        </div>
                    </Link>
                    <div className="left-[109.50px] top-[701px] absolute text-center text-cyan-800 text-lg font-semibold leading-snug">Skip for now</div>
                    <div className="w-6 h-6 left-[226px] top-[700px] absolute">
                        <Image src="icon/info.svg" alt="" fill className="w-full h-full absolute" />
                    </div>
                    <div className="w-[270px] h-[270px] left-[44px] top-[85px] absolute justify-center items-center inline-flex">
                        <div className="w-[270px] h-[270px] relative">
                            <Image src="/illustrations/splash5.png" alt='' fill className="w-[155.22px] h-[217.08px] left-[57.51px] top-[26.64px] absolute" />
                        </div>
                    </div>
                </div>
            ) : step === 0 ? (
                <div className="w-[360px] min-h-screen relative bg-white">
                    <Image src="/icon/Icon.png" alt="Keemat Icon" width={150} height={150} className="w-[118.19px] h-[118.19px] left-[120.54px] top-[150px] absolute bg-teal-300 rounded-[118.19px]" />
                    <div className="w-[242px] left-[58.63px] top-[329px] absolute text-center text-teal-950 text-4xl font-semibold leading-[43.20px]">Welcome to Keemat!</div>
                    <div onClick={handleExploreClick} className="w-[328px] h-[60px] pl-[52px] pr-[18.37px] pt-[18px] pb-[17.50px] left-[16.25px] top-[596px] absolute bg-sky-400 rounded-[11px] justify-end items-start gap-[10.63px] inline-flex">
                        <div className="w-[223px] text-center text-teal-950 text-xl font-medium leading-normal">Let’s get exploring!</div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                        </div>
                    </div>
                    <div onClick={handleSkipClick} className="w-[328px] h-[60px] pl-[73px] pr-[18.37px] py-[18px] left-[16px] top-[675px] absolute rounded-[11px] border-2 border-sky-400 justify-end items-start gap-[31.37px] inline-flex">
                        <div className="w-[181.27px] text-center text-cyan-800 text-xl font-medium leading-normal">Skip</div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <Image src="icon/forward.svg" alt="" fill className="w-full h-full absolute" />
                        </div>
                    </div>
                    <div className="pl-[17px] pr-2.5 py-[11px] left-[111.50px] top-[482.50px] absolute rounded-[15px] border-2 border-sky-400 justify-start items-center gap-[37px] inline-flex">
                        <div className="text-center text-cyan-800 text-sm font-semibold leading-[16.80px]">English</div>
                        <div className="w-6 h-6 relative">
                            <Image src="icon/Lowest.svg" alt="" fill className="w-full h-full absolute" />
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    );
};

export default Home;
