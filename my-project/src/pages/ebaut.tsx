import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { ServicesLayout } from '../components/Services/index.tsx';
import { useQuery } from '@tanstack/react-query';
import {
    fetchEbaut,
    fetchEbautBunner,
    fetchService_extra,
    fetchStatistics,
} from '../Services/Requests.js';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Languege } from '../Atom/index.js';
import Loading from '../components/Loading.tsx';
import LangText from '../components/langugeComponent.tsx';

const StatCard = ({ value, label }) => (
    <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-[233px]">
        <div className="text-4xl font-semibold text-center text-blue-800">
            {value}
        </div>
        <div className="self-center mt-2 text-2xl font-medium text-black text-center">
            {label}
        </div>
    </div>
);
export default function Ebout() {
    // const stats = [
    //     { value: '10+', label: 'Təcrübə' },
    //     { value: '2000+', label: 'Müştəri' },
    //     { value: '1000+', label: 'Proffesional işçi' },
    //     { value: '1000+', label: 'Daşınma' },
    // ];
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: EbautBunner,
        isLoading: loadingEbautBunner,
        error: errorEbautBunner,
    } = useQuery({
        queryKey: ['EbautBunner', language],
        queryFn: fetchEbautBunner,
    });
    const {
        data: Statistics,
        isLoading: loadingStatistics,
        error: errorStatistics,
    } = useQuery({
        queryKey: ['Statistics', language],
        queryFn: fetchStatistics,
    });
    const {
        data: Ebaut,
        isLoading: loadingEbaut,
        error: errorEbaut,
    } = useQuery({
        queryKey: ['Ebaut', language],
        queryFn: fetchEbaut,
    });

    if (loadingEbautBunner || loadingStatistics || loadingEbaut)
        return <Loading />;
    if (errorEbautBunner || errorStatistics || errorEbaut)
        return <div>Error loading data</div>;
    console.log('Ebaut:', Ebaut);

    return (
        <div className="relative w-full overflow-hidden ">
            <Header />
            <main className="z-10" style={{ zIndex: 555 }}>
                <section
                    className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center min-h-[420px]"
                    style={{
                        backgroundImage: `url('https://regional.epart.az/storage/${EbautBunner.data[0].image}') `,
                    }}
                >
                    <div className="w-full !h-[100%] min-h-[420px]  bg-black bg-opacity-70   flex justify-center ">
                        <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                            <div className="flex flex-col w-full text-center max-md:max-w-full justify-center items-center h-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    {EbautBunner.data[0].title}
                                </h1>
                                <div
                                    className=" text-lg leading-6 max-md:max-w-full mt-5"
                                    dangerouslySetInnerHTML={{
                                        __html: EbautBunner.data[0].description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center">
                    <div className="flex flex-wrap gap-10 justify-center items-center self-center py-3.5 mt-24 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
                        {Statistics.data.map((stat: any, index: number) => (
                            <StatCard
                                key={index}
                                value={stat.value}
                                label={stat.title}
                            />
                        ))}
                    </div>
                </section>
                <section className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-20 mt-32 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col w-full max-w-[1169px] max-md:max-w-full">
                        <h1 className="self-center ml-7 text-5xl font-medium text-black max-md:text-4xl">
                            <LangText
                                azText="Haqqımızda"
                                enText="About Us"
                                ruText="О нас"
                            />
                        </h1>
                        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src={`https://regional.epart.az/storage/${Ebaut.data[0].image}`}
                                        alt="About Us"
                                        className="object-cover grow w-full rounded-lg aspect-[1.8] max-md:mt-6 max-md:max-w-full"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                        <h2 className="self-start text-2xl text-black">
                                            {Ebaut.data[0].title}
                                        </h2>
                                        <div
                                            className="mt-4 text-base leading-7 text-neutral-500 max-md:max-w-full"
                                            dangerouslySetInnerHTML={{
                                                __html: Ebaut.data[0]
                                                    .description,
                                            }}
                                        />
                                    </div>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <ServicesLayout />
                </section>
            </main>
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[200vh] -right-[300px]  z-0"
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[155vh]  left-0  z-0"
            />
            <Footer />
        </div>
    );
}
