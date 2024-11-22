import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import InfoSection from '../components/InfoSection.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchAservices, fetchAservicesBunner } from '../Services/Requests.js';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CurrentServiceState, Languege } from '../Atom/index.js';
import Loading from '../components/Loading.tsx';
export default function Services() {
    const [language, setLanguie] = useRecoilValue(Languege);
    const [showimages, setShowimages] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    function scrollToElementById(id: string) {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start', // Scroll to the top of the element
                });
            } else {
                console.log('element not found');
            }
        }, 300);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowimages(true);
        }, 1000);
    }, []);
    const [currentService, setCurrentService] =
        useRecoilState(CurrentServiceState);
    useEffect(() => {
        if (currentService) {
            scrollToElementById(currentService);
            setCurrentService(null);
        }
    }, [currentService]);
    const {
        data: Services,
        isLoading: loadingServices,
        error: errorServices,
    } = useQuery({
        queryKey: ['Services', language],
        queryFn: fetchAservices,
    });
    const {
        data: ServicesBunner,
        isLoading: loadingServicesBunner,
        error: errorServicesBunner,
    } = useQuery({
        queryKey: ['ServicesBunner', language],
        queryFn: fetchAservicesBunner,
    });
    const [scrollPosition, setScrollPosition] = useState(0);
    console.log(window.scrollY);

    useEffect(() => {
        // Function to update scroll position
        console.log(window.scrollY);
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    if (loadingServices || loadingServicesBunner) return <Loading />;
    if (loadingServices || errorServicesBunner)
        return <div>Error loading data</div>;
    // console.log('ServicesBunner', ServicesBunner);

    return (
        <div className="bg-white  relative  lg:overflow-hidden overflow-hidden   w-[100%] h-fit">
            <Header />
            <main className=" relative z-[100]">
                <section
                    className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center min-h-[420px]"
                    style={{
                        backgroundImage: `url('https://regional.epart.az/storage/${ServicesBunner.data[0].image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center min-h-[420px]">
                        <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                            <div className="flex flex-col w-full text-center max-md:max-w-full justify-center items-center h-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    {ServicesBunner.data[0].title}
                                </h1>
                                <p className="mt-6 text-lg leading-6 max-md:max-w-full">
                                    {ServicesBunner.data[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <InfoSection direction="row" />
            <InfoSection direction="col" />
            <InfoSection direction="row" />
            <InfoSection direction="col" /> */}
                {Services.data.map((item: any, i: number, list: any[]) => {
                    if (i % 2 === 1) {
                        return (
                            <InfoSection
                                showup={false}
                                dasHaveButton={false}
                                data={item}
                                direction="row"
                                id={`info` + i}
                                onaction={() => {
                                    i + 1 === list.length
                                        ? scrollToElementById('footer')
                                        : scrollToElementById(list[i + 1].slug);
                                }}
                            />
                        );
                    } else {
                        return (
                            <InfoSection
                                showup={false}
                                dasHaveButton={false}
                                data={item}
                                direction="col"
                                id={`info` + i}
                                onaction={() => {
                                    i + 1 === list.length
                                        ? scrollToElementById('footer')
                                        : scrollToElementById(list[i + 1].slug);
                                }}
                            />
                        );
                    }
                })}
                <div className="mb-[120px]"></div>
            </main>
            {showimages && (
                <>
                    {' '}
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed -right-[300px]  z-[-1]"
                        style={{
                            top: `calc(200vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed left-0 z-[-1]"
                        style={{
                            top: `calc(155vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed -right-[300px] z-0"
                        style={{
                            top: `calc(400vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed left-0 z-[-1]"
                        style={{
                            top: `calc(355vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed -right-[300px] z-0"
                        style={{
                            top: `calc(600vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed left-0 z-[-1]"
                        style={{
                            top: `calc(555vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed -right-[300px] z-0"
                        style={{
                            top: `calc(800vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed left-0 z-[-1]"
                        style={{
                            top: `calc(755vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed -right-[300px] z-0"
                        style={{
                            top: `calc(1000vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <img
                        alt="bgimg"
                        src="/svg/bgAnimateIcon.svg"
                        className="fixed left-0 z-[-1]"
                        style={{
                            top: `calc(955vh - ${scrollPosition}px * 0.6)`,
                        }}
                    />
                    <div className="fixed w-full h-full top-[1000vh]">
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed -right-[300px] z-0"
                            style={{
                                top: `calc(200vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed left-0 z-[-1]"
                            style={{
                                top: `calc(155vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed -right-[300px] z-0"
                            style={{
                                top: `calc(400vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed left-0 z-[-1]"
                            style={{
                                top: `calc(355vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed -right-[300px] z-0"
                            style={{
                                top: `calc(600vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                        <img
                            alt="bgimg"
                            src="/svg/bgAnimateIcon.svg"
                            className="fixed left-0 z-[-1]"
                            style={{
                                top: `calc(555vh - ${scrollPosition}px * 0.6)`,
                            }}
                        />
                    </div>
                </>
            )}
            <Footer id={`footer`} />
        </div>
    );
}
