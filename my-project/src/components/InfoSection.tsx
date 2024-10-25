import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function InfoSection({
    direction,
    id,
    onaction,
}: {
    direction: 'row' | 'col';
    id: string;
    onaction: () => void;
}) {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function for the animation
        });
    }, []);
    if (direction === 'row') {
        return (
            <section className="mt-[220px] relative " id={id}>
                <div className=" flex lg:flex-row md:flex-row sm:flex-row flex-col lg:justify-end  md:justify-end justify-start gap-6 ">
                    <h2 className="text-[48px] font-semibold text-nowrap">
                        Sea Transport
                    </h2>
                    <div className="  border-b-[6px] border-[#2758A3]  lg:w-1/2 md:w-1/2 sm:1/2 w-full   h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex lg:flex-row md:flex-col flex-col items-center gap-10 lg:items-start px-[20px] justify-center self-start mt-14  max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56a7049deb9d85245293cf7d433414682d4560aead2a45416afbef7cd376339e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Sea Transport illustration"
                            className="object-contain aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full px-5">
                            <h1 className="text-3xl font-medium text-black max-md:max-w-full">
                                Sea Transport
                            </h1>
                            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                <p className="text-xl leading-7 text-black max-md:max-w-full">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum. Ac mattis ullamcorper
                                    id massa. Hendrerit ipsum eu nulla molestie
                                    diam at. Lorem ipsum dolor sit amet
                                    consectetur. Enim rutrum hac amet sagittis.
                                    Morbi enim integer odio varius bibendum. Ac
                                    mattis ullamcorper id massa. Hendrerit ipsum
                                    eu nulla molestie diam at. Lorem ipsum dolor
                                    sit amet consectetur. Enim rutrum hac amet
                                    sagittis. Morbi enim integer odio varius
                                    bibendum. Ac mattis ullamcorper id massa.
                                </p>
                                <button className="gap-2.5 lg:self-stretch md:self-stretch self-center  p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                                    Daha çox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  justify-center mt-[64px] lg:flex md:flex hidden ">
                    <img
                        onClick={() => onaction()}
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
        );
    } else {
        return (
            <section className="mt-[220px] relative  " id={id}>
                <div className=" flex lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse flex-col lg:justify-end  md:justify-end justify-start gap-6">
                    <h2 className="text-[48px] font-semibold text-nowrap">
                        Sea Transport
                    </h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-1/2 md:w-1/2 w-full flex justify-end  h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex lg:flex-row-reverse md:flex-col-reverse flex-col-reverse px-[20px] items-center  gap-10 lg:items-start justify-center self-start mt-14  max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full  px-5">
                            <h1 className="text-3xl font-medium text-black max-md:max-w-full">
                                Sea Transport
                            </h1>
                            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                <p className="text-xl leading-7 text-black max-md:max-w-full">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum. Ac mattis ullamcorper
                                    id massa. Hendrerit ipsum eu nulla molestie
                                    diam at. Lorem ipsum dolor sit amet
                                    consectetur. Enim rutrum hac amet sagittis.
                                    Morbi enim integer odio varius bibendum. Ac
                                    mattis ullamcorper id massa. Hendrerit ipsum
                                    eu nulla molestie diam at. Lorem ipsum dolor
                                    sit amet consectetur. Enim rutrum hac amet
                                    sagittis. Morbi enim integer odio varius
                                    bibendum. Ac mattis ullamcorper id massa.
                                </p>
                                <button className="gap-2.5 lg:self-stretch md:self-stretch self-center p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                                    Daha çox
                                </button>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56a7049deb9d85245293cf7d433414682d4560aead2a45416afbef7cd376339e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Sea Transport illustration"
                            className="object-contain aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                    </div>
                </div>
                <div className="w-full  justify-center mt-[64px] lg:flex md:flex hidden ">
                    <img
                        onClick={() => onaction()}
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
        );
    }
}
