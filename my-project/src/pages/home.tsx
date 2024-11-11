import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import InfoSection from '../components/InfoSection.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchAboutsShort, fetchAservices } from '../Services/Requests.js';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CurrentServiceState, Languege } from '../Atom/index.js';
import langtext from '../components/langugeComponent.tsx';
import LangText from '../components/langugeComponent.tsx';
import Loading from '../components/Loading.tsx';

function scrollToElementById(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling effect
            block: 'end', // Scroll to the top of the element
            inline: 'nearest', // Align the nearest point in the horizontal axis
        });
    }
}
export default function Home() {
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: Services,
        isLoading: loadingServices,
        error: errorServices,
    } = useQuery({
        queryKey: ['Services', language],
        queryFn: fetchAservices,
    });
    const {
        data: EbautShort,
        isLoading: loadingEbaut,
        error: errorEbaut,
    } = useQuery({
        queryKey: ['aboutsShort', language],
        queryFn: fetchAboutsShort,
    });
    const navigate = useNavigate();

    const [sectionindex, setsectionindex] = useState<number>(0);
    const [HeroServices, setHeroServices] = useState<any[]>([]);
    const [ServiseARR, setServiseARR] = useState<any[]>([]);
    const [currentService, setCurrentService] =
        useRecoilState(CurrentServiceState);
    useEffect(() => {
        function splitArray(inputArr: any[]) {
            const firstArr = inputArr.slice(0, 4); // Get the first 4 elements
            const secondArr = inputArr.slice(4);
            setHeroServices(firstArr);
            setServiseARR(secondArr); // Get the rest of the elements
        }
        if (Services) {
            splitArray(Services.data);
        }
    }, [Services]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Function to update scroll position
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    if (loadingServices || loadingEbaut) return <Loading />;
    if (loadingServices || errorServices) return <div>Error loading data</div>;
    const slugs = ServiseARR.map((item: any) => item.slug);
    const sections = ['hero', 'ebaut', ...slugs, 'info10', 'footer'];

    console.log('currentService:', currentService);
    return (
        <div className="bg-white  relative  lg:overflow-hidden overflow-hidden lg:h-[100vh]  w-[100%] h-fit">
            {/*  */}
            <Header />
            <main className=" relative  mb-[120px] z-30  ">
                <section
                    className="  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  relative justify-center   overflow-x-hidden"
                    id="hero"
                >
                    <div
                        className="lg:h-[100vh] md:h-[100vh] h-[25vh]  clip_first_el  lg:w-[130%] md:w-[130%] w-full  z-10 bg-no-repeat	"
                        style={{
                            backgroundImage: `url('https://regional.epart.az/storage/${HeroServices[0]?.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center   px-[20%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    {HeroServices[0]?.title}
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    {HeroServices[0]?.short_description}
                                </p>
                                <button
                                    onClick={() => {
                                        setCurrentService(
                                            HeroServices[0]?.slug
                                        );
                                        navigate('/services');
                                    }}
                                    className="flex flex-row gap-[10px] justify-center mt-[24px]"
                                >
                                    <p>Daha çox</p>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.68751 12C3.68751 12.1492 3.74677 12.2923 3.85226 12.3977C3.95775 12.5032 4.10082 12.5625 4.25001 12.5625H19.3916L13.6025 18.3525C13.5472 18.404 13.5029 18.4661 13.4722 18.5351C13.4414 18.6041 13.4249 18.6786 13.4236 18.7541C13.4222 18.8296 13.4361 18.9047 13.4644 18.9747C13.4927 19.0447 13.5348 19.1084 13.5882 19.1618C13.6416 19.2152 13.7053 19.2573 13.7753 19.2856C13.8454 19.3139 13.9204 19.3278 13.9959 19.3264C14.0714 19.3251 14.1459 19.3086 14.2149 19.2778C14.2839 19.2471 14.346 19.2028 14.3975 19.1475L21.1475 12.3975C21.2528 12.292 21.312 12.1491 21.312 12C21.312 11.8509 21.2528 11.708 21.1475 11.6025L14.3975 4.8525C14.2909 4.75314 14.1498 4.69905 14.0041 4.70162C13.8584 4.70419 13.7194 4.76322 13.6163 4.86628C13.5132 4.96934 13.4542 5.10838 13.4516 5.25411C13.4491 5.39983 13.5031 5.54087 13.6025 5.6475L19.3916 11.4375H4.25001C4.10082 11.4375 3.95775 11.4968 3.85226 11.6023C3.74677 11.7077 3.68751 11.8508 3.68751 12Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:h-[100vh] md:h-[100vh] h-[25vh] clip_second_el  lg:mt-0 md:mt-0 mt-[-9%]    lg:w-[130%] md:w-[130%] w-full  z-10 "
                        style={{
                            backgroundImage: `url('https://regional.epart.az/storage/${HeroServices[1]?.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    {HeroServices[1]?.title}{' '}
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    {HeroServices[1]?.short_description}
                                </p>
                                <button
                                    className="flex flex-row gap-[10px] justify-center mt-[24px]"
                                    onClick={() => {
                                        setCurrentService(
                                            HeroServices[1]?.slug
                                        );
                                        navigate('/services');
                                    }}
                                >
                                    <p>Daha çox</p>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.68751 12C3.68751 12.1492 3.74677 12.2923 3.85226 12.3977C3.95775 12.5032 4.10082 12.5625 4.25001 12.5625H19.3916L13.6025 18.3525C13.5472 18.404 13.5029 18.4661 13.4722 18.5351C13.4414 18.6041 13.4249 18.6786 13.4236 18.7541C13.4222 18.8296 13.4361 18.9047 13.4644 18.9747C13.4927 19.0447 13.5348 19.1084 13.5882 19.1618C13.6416 19.2152 13.7053 19.2573 13.7753 19.2856C13.8454 19.3139 13.9204 19.3278 13.9959 19.3264C14.0714 19.3251 14.1459 19.3086 14.2149 19.2778C14.2839 19.2471 14.346 19.2028 14.3975 19.1475L21.1475 12.3975C21.2528 12.292 21.312 12.1491 21.312 12C21.312 11.8509 21.2528 11.708 21.1475 11.6025L14.3975 4.8525C14.2909 4.75314 14.1498 4.69905 14.0041 4.70162C13.8584 4.70419 13.7194 4.76322 13.6163 4.86628C13.5132 4.96934 13.4542 5.10838 13.4516 5.25411C13.4491 5.39983 13.5031 5.54087 13.6025 5.6475L19.3916 11.4375H4.25001C4.10082 11.4375 3.95775 11.4968 3.85226 11.6023C3.74677 11.7077 3.68751 11.8508 3.68751 12Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:h-[100vh] md:h-[100vh] h-[25vh] lg:mt-0 md:mt-0 mt-[-9%] clip_therd_el  lg:w-[130%] md:w-[130%] w-full  z-10 "
                        style={{
                            backgroundImage: `url('https://regional.epart.az/storage/${HeroServices[2]?.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    {HeroServices[2]?.title}{' '}
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    {HeroServices[2]?.short_description}
                                </p>
                                <button
                                    className="flex flex-row gap-[10px] justify-center mt-[24px]"
                                    onClick={() => {
                                        setCurrentService(
                                            HeroServices[2]?.slug
                                        );
                                        navigate('/services');
                                    }}
                                >
                                    <p>Daha çox</p>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.68751 12C3.68751 12.1492 3.74677 12.2923 3.85226 12.3977C3.95775 12.5032 4.10082 12.5625 4.25001 12.5625H19.3916L13.6025 18.3525C13.5472 18.404 13.5029 18.4661 13.4722 18.5351C13.4414 18.6041 13.4249 18.6786 13.4236 18.7541C13.4222 18.8296 13.4361 18.9047 13.4644 18.9747C13.4927 19.0447 13.5348 19.1084 13.5882 19.1618C13.6416 19.2152 13.7053 19.2573 13.7753 19.2856C13.8454 19.3139 13.9204 19.3278 13.9959 19.3264C14.0714 19.3251 14.1459 19.3086 14.2149 19.2778C14.2839 19.2471 14.346 19.2028 14.3975 19.1475L21.1475 12.3975C21.2528 12.292 21.312 12.1491 21.312 12C21.312 11.8509 21.2528 11.708 21.1475 11.6025L14.3975 4.8525C14.2909 4.75314 14.1498 4.69905 14.0041 4.70162C13.8584 4.70419 13.7194 4.76322 13.6163 4.86628C13.5132 4.96934 13.4542 5.10838 13.4516 5.25411C13.4491 5.39983 13.5031 5.54087 13.6025 5.6475L19.3916 11.4375H4.25001C4.10082 11.4375 3.95775 11.4968 3.85226 11.6023C3.74677 11.7077 3.68751 11.8508 3.68751 12Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:h-[100vh] md:h-[100vh] h-[25vh] clip_4_el lg:mt-0 md:mt-0 mt-[-9%]  lg:w-[130%] md:w-[130%] w-full  z-10 "
                        style={{
                            backgroundImage: `url('https://regional.epart.az/storage/${HeroServices[3]?.image}')`,

                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    {HeroServices[3]?.title}{' '}
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    {HeroServices[3]?.short_description}
                                </p>
                                <button
                                    onClick={() => {
                                        setCurrentService(
                                            HeroServices[3]?.slug
                                        );
                                        navigate('/services');
                                    }}
                                    className="flex flex-row gap-[10px] justify-center mt-[24px]"
                                >
                                    <p>Daha çox</p>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.68751 12C3.68751 12.1492 3.74677 12.2923 3.85226 12.3977C3.95775 12.5032 4.10082 12.5625 4.25001 12.5625H19.3916L13.6025 18.3525C13.5472 18.404 13.5029 18.4661 13.4722 18.5351C13.4414 18.6041 13.4249 18.6786 13.4236 18.7541C13.4222 18.8296 13.4361 18.9047 13.4644 18.9747C13.4927 19.0447 13.5348 19.1084 13.5882 19.1618C13.6416 19.2152 13.7053 19.2573 13.7753 19.2856C13.8454 19.3139 13.9204 19.3278 13.9959 19.3264C14.0714 19.3251 14.1459 19.3086 14.2149 19.2778C14.2839 19.2471 14.346 19.2028 14.3975 19.1475L21.1475 12.3975C21.2528 12.292 21.312 12.1491 21.312 12C21.312 11.8509 21.2528 11.708 21.1475 11.6025L14.3975 4.8525C14.2909 4.75314 14.1498 4.69905 14.0041 4.70162C13.8584 4.70419 13.7194 4.76322 13.6163 4.86628C13.5132 4.96934 13.4542 5.10838 13.4516 5.25411C13.4491 5.39983 13.5031 5.54087 13.6025 5.6475L19.3916 11.4375H4.25001C4.10082 11.4375 3.95775 11.4968 3.85226 11.6023C3.74677 11.7077 3.68751 11.8508 3.68751 12Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute bottom-2 animate-bounce z-30  justify-center w-full lg:flex md:flex hidden">
                        <div
                            onClick={() => {
                                // setshowebaut(true);
                                setsectionindex(0);
                                scrollToElementById('ebaut');
                            }}
                        >
                            <svg
                                width="50"
                                height="86"
                                viewBox="0 0 50 86"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25 1.25C16.8021 1.25 10.1562 7.89584 10.1562 16.0938V33.9063C10.1562 42.1042 16.8021 48.75 25 48.75C33.1979 48.75 39.8438 42.1042 39.8438 33.9063V16.0938C39.8438 7.89584 33.1979 1.25 25 1.25ZM27.9688 16.0938C27.9688 17.7331 26.6393 19.0625 25 19.0625C23.3607 19.0625 22.0312 17.7331 22.0312 16.0938V10.1563C22.0312 8.51691 23.3607 7.1875 25 7.1875C26.6393 7.1875 27.9688 8.51691 27.9688 10.1563V16.0938Z"
                                    fill="white"
                                />
                                <path
                                    d="M24.9998 84.9167C24.5664 84.9167 24.158 84.7477 23.8503 84.4411L12.1211 72.7108L12.887 71.9448L24.6163 83.6741C24.821 83.8788 25.1774 83.8788 25.3822 83.6741L37.1114 71.9448L37.8773 72.7108L26.1481 84.44C25.8415 84.7466 25.4331 84.9156 24.9987 84.9156L24.9998 84.9167ZM25.51 74.9186L37.8784 62.5502L37.1125 61.7843L24.9998 73.8959L12.887 61.7832L12.1211 62.5502L24.4906 74.9186C24.6303 75.0583 24.8145 75.1277 24.9987 75.1277C25.1828 75.1277 25.3681 75.0594 25.51 74.9186Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </section>
                <section
                    id="ebaut"
                    className={
                        'w-[100%] min-h-[100vh] flex justify-center flex-col items-center lg:px-[20px] md:px-[20px] px-0  pb-[80px] relative mt-[120px]'
                    }
                    // style={showebaut ? {} : { display: 'none' }}
                >
                    <div className="flex  w-full text-black max-w-[1099px] max-md:max-w-full px-[20px]">
                        <div className="flex z-10 flex-col grow shrink-0 basis-0 w-fit max-md:-mr-0.5 max-md:max-w-full">
                            <h1 className="lg:self-start md:self-start self-center ml-14 text-5xl font-semibold max-md:ml-2.5 max-md:text-4xl mt-[24px]">
                                {EbautShort.data[0].title}
                            </h1>
                            <div className="flex  lg:gap-6 md:gap-6 gap-0 items-start mt-3.5 text-2xl font-light leading-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62d04aab70e94a1734fd0db3ace655da9e42bcdd9fe868b924e40044d36512bf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-end mt-32 aspect-[0.19] w-[59px] max-md:mt-10 lg:block md:block hidden"
                                />
                                <div className="flex flex-col justify-center">
                                    <div
                                        className="flex-auto self-start max-w-[976px] max-md:max-w-full"
                                        dangerouslySetInnerHTML={{
                                            __html: EbautShort.data[0]
                                                .description,
                                        }}
                                    />
                                    {}
                                </div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/263ae6e52cae2a3304b76718a2fe5071764199820ebdfb04ebd0a8a4134d4151?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-start mt-14 aspect-[0.11] w-[29px] max-md:mt-10 lg:block md:block hidden"
                        />
                    </div>
                    <Link to="/about">
                        <button className="gap-2.5  self-center p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                            Daha çox
                        </button>
                    </Link>
                    <div className="absolute bottom-[-10px] flex-row flex gap-6">
                        <img
                            onClick={() => {
                                setsectionindex(1);
                                scrollToElementById(ServiseARR[0].slug);
                            }}
                            src="/svg/mause_blue.svg"
                            alt=""
                            className="z-30  animate-bounce lg:block md:block hidden"
                        />{' '}
                        <img
                            onClick={() => {
                                scrollToElementById(sections[sectionindex]);
                                setsectionindex((prew) => prew - 1);
                            }}
                            src="/svg/mouseToTop.svg"
                            alt=""
                            className="z-30   animate-bounce"
                        />
                    </div>
                </section>
                {ServiseARR?.map((item: any, i: number, list: any[]) => {
                    if (i % 2 === 1) {
                        return (
                            <InfoSection
                                data={item}
                                direction="row"
                                id={`info` + i}
                                onaction={() => {
                                    console.log('Idddd', i, list.length);
                                    i + 1 === list.length
                                        ? scrollToElementById('footer')
                                        : scrollToElementById(list[i + 1].slug);
                                    setsectionindex(i + 2);
                                }}
                                onaction2={() => {
                                    scrollToElementById(sections[sectionindex]);
                                    setsectionindex((prew) => prew - 1);
                                }}
                            />
                        );
                    } else {
                        return (
                            <InfoSection
                                data={item}
                                direction="col"
                                id={`info` + i}
                                onaction={() => {
                                    i + 1 === list.length
                                        ? scrollToElementById('footer')
                                        : scrollToElementById(list[i + 1].slug);
                                    setsectionindex(i + 2);
                                }}
                                onaction2={() => {
                                    scrollToElementById(sections[sectionindex]);
                                    setsectionindex((prew) => prew - 1);
                                }}
                            />
                        );
                    }
                })}
            </main>
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className="absolute"
                style={{ top: `calc(120vh - ${scrollPosition}px)` }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute -right-[300px]  z-0"
                style={{ top: `calc(180vh - ${scrollPosition}px )` }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute  "
                style={{ top: `calc(260vh - ${scrollPosition}px )` }}
            />{' '}
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute -right-[300px]  z-0"
                style={{ top: `calc(280vh - ${scrollPosition}px )` }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute  "
                style={{ top: `calc(360vh - ${scrollPosition}px )` }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute -right-[300px]  z-0"
                style={{ top: `calc(420vh - ${scrollPosition}px )` }}
            />
            {/* <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[400vh] -right-[300px] "
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[520vh]"
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[600vh] -right-[300px] "
            /> */}
            <div
                onClick={() => {
                    scrollToElementById('hero');
                    setsectionindex((prew) => prew - 1);
                }}
                style={{ zIndex: 99999999999999999 }}
                className=" z-[9999999999999999999999999999]  fixed  w-[64px] h-[64px] rounded-full bg-[#2858A4]  bottom-6  right-6 lg:flex md:flex hidden                       justify-center items-center animate-bounce"
            >
                <svg
                    className=" -rotate-90"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 5C16 5.742 16.733 6.85 17.475 7.78C18.429 8.98 19.569 10.027 20.876 10.826C21.856 11.425 23.044 12 24 12M24 12C23.044 12 21.855 12.575 20.876 13.174C19.569 13.974 18.429 15.021 17.475 16.219C16.733 17.15 16 18.26 16 19M24 12H0"
                        stroke="white"
                        stroke-width="1.5"
                    />
                </svg>
            </div>
            <Footer id={'footer'} />
        </div>
    );
}
