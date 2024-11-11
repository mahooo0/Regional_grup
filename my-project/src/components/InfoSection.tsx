import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRecoilState } from 'recoil';
import { CurrentServiceState } from '../Atom';
import { useNavigate } from 'react-router-dom';
export default function InfoSection({
    direction,
    id,
    showup = true,
    onaction,
    onaction2 = () => {},
    data,
    dasHaveButton = true,
}: {
    direction: 'row' | 'col';
    id: string;
    onaction: () => void;
    onaction2?: () => void;
    data: any;
    showup?: boolean;
    dasHaveButton?: boolean;
}) {
    const [currentService, setCurrentService] =
        useRecoilState(CurrentServiceState);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function for the animation
        });
    }, []);
    console.log('data:', data);

    if (direction === 'row') {
        return (
            <section className="mt-[220px] relative " id={data.slug}>
                <div className=" flex lg:flex-row md:flex-row sm:flex-row flex-col lg:justify-end  md:justify-end justify-start gap-6 ">
                    <h2 className="text-[48px] font-semibold text-nowrap text-black">
                        {data.title}
                    </h2>
                    <div className="  border-b-[6px] border-[#2758A3]  lg:w-[60%] md:w-[60%] sm:1/2 w-full   h-fit">
                        <img
                            src={`https://regional.epart.az/storage/${data.icon_home}`}
                            alt=""
                            className="w-[42px] h-[42px] object-cover"
                        />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex lg:flex-row md:flex-col flex-col items-center gap-10 lg:items-start px-[20px] justify-center self-start mt-14  max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={`https://regional.epart.az/storage/${data.image}`}
                            alt="Sea Transport illustration"
                            className="object-cover aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full px-5">
                            <h1 className="text-3xl font-medium text-black max-md:max-w-full">
                                {data.title}
                            </h1>
                            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                <div
                                    className="text-xl leading-7 text-black max-md:max-w-full"
                                    dangerouslySetInnerHTML={{
                                        __html: data.description,
                                    }}
                                />

                                <button
                                    onClick={() => {
                                        setCurrentService(data?.slug);
                                        navigate('/services');
                                        console.log('Click');
                                    }}
                                    style={
                                        !dasHaveButton
                                            ? { display: 'none' }
                                            : {}
                                    }
                                    className="gap-2.5 lg:self-stretch md:self-stretch self-center  p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]"
                                >
                                    Daha çox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  justify-center mt-[64px] lg:flex md:flex hidden gap-6 ">
                    <img
                        onClick={() => onaction()}
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                    <img
                        style={showup ? {} : { display: 'none' }}
                        onClick={() => onaction2()}
                        src="/svg/mouseToTop.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
        );
    } else {
        return (
            <section className="mt-[220px] relative  " id={data.slug}>
                <div className=" flex lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse flex-col lg:justify-end  md:justify-end justify-start gap-6">
                    <h2 className="text-[48px] font-semibold text-nowrap">
                        {data.title}
                    </h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-[60%] md:w-[60%] w-full flex justify-end  h-fit">
                        <img
                            src={`https://regional.epart.az/storage/${data.icon_home}`}
                            alt=""
                            className="w-[42px] h-[42px] object-cover"
                        />{' '}
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex lg:flex-row-reverse md:flex-col-reverse flex-col-reverse px-[20px] items-center  gap-10 lg:items-start justify-center self-start mt-14  max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full  px-5">
                            <h1 className="text-3xl font-medium text-black max-md:max-w-full">
                                {data.title}
                            </h1>
                            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                <div
                                    className="text-xl leading-7 text-black max-md:max-w-full"
                                    dangerouslySetInnerHTML={{
                                        __html: data.description,
                                    }}
                                />

                                <button
                                    onClick={() => {
                                        setCurrentService(data?.slug);
                                        navigate('/services');
                                        console.log('Click');
                                    }}
                                    style={
                                        !dasHaveButton
                                            ? { display: 'none' }
                                            : {}
                                    }
                                    className="gap-2.5 lg:self-stretch md:self-stretch self-center p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]"
                                >
                                    Daha çox
                                </button>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src={`https://regional.epart.az/storage/${data.image}`}
                            alt="Sea Transport illustration"
                            className="object-cover aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                    </div>
                </div>
                <div className="w-full  justify-center mt-[64px] lg:flex md:flex hidden gap-6 ">
                    <img
                        onClick={() => onaction()}
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                    <img
                        style={showup ? {} : { display: 'none' }}
                        onClick={() => onaction2()}
                        src="/svg/mouseToTop.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
        );
    }
}
