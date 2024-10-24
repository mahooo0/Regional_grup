import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import InfoSection from '../components/InfoSection.tsx';
// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const YourComponent = ({ children }) => {
//     useEffect(() => {
//         gsap.from('.your-element', {
//             scrollTrigger: {
//                 trigger: '.your-element',
//                 start: 'top 80%', // Start when the element is 80% from the top of the viewport
//                 end: 'top 30%',
//                 scrub: true,
//             },
//             y: 100, // Move up from 100px initially
//             duration: 1,
//         });
//     }, []);

//     return <div className="your-element">{children}</div>;
// };
function scrollToElementById(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start', // Scroll to the top of the element
        });
    }
}
export default function Home() {
    // const [showebaut, setshowebaut] = useState<boolean>(false);
    return (
        <div className="bg-white  relative  overflow-hidden">
            <Header />
            <main className=" relative overflow-x-hidden mb-[120px] z-30">
                <section className="  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  relative justify-center  ">
                    <div
                        className="lg:h-[100vh] md:h-[100vh] h-[25vh]  clip_first_el  lg:w-[130%] md:w-[130%] w-full  z-10 "
                        style={{
                            background:
                                "url('https://s3-alpha-sig.figma.com/img/5b15/904e/40cbe8b34a66e9e877a00c0a1cf094da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnwqsnk7c7pfFWfBasiOzXfxikEh6b1-H3GXvAxyBR8sKCKY4TLkJzTITfFK26~soxwBT1QUke0BFZ66eGmwT0kDuZkNSTFIPFgj7FcJdb1g4njEltlBdi7jixqyS1Z2b7QFTYA3~U~6S96lNKn7UHnU1IRrnDUABMPIQ11pA4i83dSRzsY2~qPNHIDHbmEe1mNAy2DeAhiIGfB6~7A4j7pxfw0O7mydgPnhOGlcuoIOqB31cBIfMK4h7LAVT64XbHRfoA92DJ8agCgbS8esT~uXd4SNtVdNS8VRIGDssNDcGw09xn2EKn04bksvudGk-UL8uGuCMORLBcnhLzwdIA__')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center   px-[20%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    Road Tranport
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum.{' '}
                                </p>
                                <button className="flex flex-row gap-[10px] justify-center mt-[24px]">
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
                            background:
                                "url('https://s3-alpha-sig.figma.com/img/6af5/c7a8/6019de30cfda48779fd41e4d30b7e676?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvNoGsK-muy1tf3gRCfk3NLXCuxr-MpKt9Gbaw6d5A1FZu6x9hAHJTUZ8eoMzjBHK30g-HX1DiI1QpHRCy7QCshMk7pZtPpvvLBbcAj1PcCHQHemGnAjQ6epoK-YlnGZsRTqWcuN15RFZIfkJZJB6CBcHbY9T5aC6ko4Yds4txaP5gzw~EfPMwylS0wTMB~FFLRblykjRZ-oH-V3fHpVJOeMqncHfSg327e-02~RiPE7il4sAW86G9NCHkiFwJ0D7FMOl92beo8FC080o1iRX14tQdoHnoM3MRNBBwFElczldEjq6AOWqJFozEYPTu4iNPojLQfY93hSLwK1mzHoPg__')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    Road Tranport
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum.{' '}
                                </p>
                                <button className="flex flex-row gap-[10px] justify-center mt-[24px]">
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
                            background:
                                "url('https://s3-alpha-sig.figma.com/img/120d/882f/3e1cc595f3ab2492b8fccb2c6f7ddfe4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEYbKDCLulvNyYXtkyg-qrkWXStiGg8M~n-d41bhnf7-OU3PWLLQEgCETLzn-nlL4VW1VJHppc2jOC9Y0lCq78lfEDDgRa0t9h7gh5HLl2OTKgzYTID8ul5uO~hfWGBJD~WBjsUB-Klecv2uNJfGr7Bs7akL56~yslJrLSwwt3sFvApD0IyxpQCdvaLumSLFRb7j6nVqL8XwDXvlip869ujmpixWPKy8eCGP~3zZW~05e4i3YXKWi3-Iq9znhJJcAbPMlOyU0ZZMUKDeQwrklPSh3v0hojJbLALtS~yNfokmuomAw8QIna35u5DxBOlf1geWsExYhG~sPknFv7jYLw__')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    Road Tranport
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum.{' '}
                                </p>
                                <button className="flex flex-row gap-[10px] justify-center mt-[24px]">
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
                            background:
                                "url('https://s3-alpha-sig.figma.com/img/605f/af7d/4ece37737bfdc2788208028bc15bd2bc?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVreNc-~0CkE76cQg34NvHhA-RhWRO0YRcE8FwKUaZOvoOXU1zkhOv6K4x2beSRwrKunZlKyIlLpsRuPzm-tqaKjinjB7L6YxnF~EROCeR8soA79DOOdq61wuc8gsxx1BrK5Kx6-ovBl6paYzDIskuMf7xSrv0fKyIWmzFAe~J1HUNrRCcivp2cgjE60wmQoURInizamYQG-eOpIZblI9-nGZjYTUSWV--Q0ZZiYJqaQHh5ckJBuSfGWNu2K20k~0e1p6csivAAf0i91t5fasGIYl8syQUOivLP2l1eybX9kzmGxw3otr8XPziAnRDzF0ixFxv~SNdgpkjMlVMOMkA__')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center  px-[25%]">
                            <div className=" max-w-[254px] text-white flex flex-col text-center justify-center">
                                {' '}
                                <h4 className="text-[16px] font-semibold">
                                    Road Tranport
                                </h4>
                                <p className="text-[12px] font-normal mt-[10px] lg:block md:block hidden">
                                    Lorem ipsum dolor sit amet consectetur. Enim
                                    rutrum hac amet sagittis. Morbi enim integer
                                    odio varius bibendum.{' '}
                                </p>
                                <button className="flex flex-row gap-[10px] justify-center mt-[24px]">
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
                        className=" absolute bottom-2 animate-bounce z-30  justify-center w-full lg:flex md:flex hidden"
                        onClick={() => {
                            // setshowebaut(true);
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
                                About Us
                            </h1>
                            <div className="flex  lg:gap-6 md:gap-6 gap-0 items-start mt-3.5 text-2xl font-light leading-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62d04aab70e94a1734fd0db3ace655da9e42bcdd9fe868b924e40044d36512bf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-end mt-32 aspect-[0.19] w-[59px] max-md:mt-10 lg:block md:block hidden"
                                />
                                <div className="flex flex-col justify-center">
                                    <p className="flex-auto self-start max-w-[976px] max-md:max-w-full">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Enim rutrum hac amet sagittis. Morbi
                                        enim integer odio varius bibendum. Ac
                                        mattis ullamcorper id massa. Hendrerit
                                        ipsum eu nulla molestie diam at. Lorem
                                        ipsum dolor sit amet consectetur. Enim
                                        rutrum hac amet sagittis. Morbi enim
                                        integer odio varius bibendum. Ac mattis
                                        ullamcorper id massa. Hendrerit ipsum eu
                                        nulla molestie diam at. Lorem ipsum
                                        dolor sit amet consectetur. Enim rutrum
                                        hac amet sagittis. Morbi enim integer
                                        odio varius bibendum. Ac mattis
                                        ullamcorper id massa. Hendrerit ipsum eu
                                        nulla molestie diam at. Lorem ipsum
                                        dolor sit amet consectetur. Enim rutrum
                                        hac amet sagittis. Morbi enim integer
                                        odio varius bibendum. Ac mattis
                                        ullamcorper id massa. Hendrerit ipsum eu
                                        nulla molestie diam at.
                                    </p>
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
                    <button className="gap-2.5  self-center p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                        Daha çox
                    </button>
                    {/* <img src="/svg/mause_blue.svg" />
                     */}
                    <img
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30 absolute bottom-[-50px] animate-bounce lg:block md:block hidden"
                    />
                </section>
                <InfoSection direction="row" />
                <InfoSection direction="col" />
                <InfoSection direction="row" />
                <InfoSection direction="col" />
            </main>
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[120vh] z-0"
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[200vh] -right-[300px]  z-0"
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[320vh]"
            />
            <img
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
            />
            <Footer />
        </div>
    );
}
