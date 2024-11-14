import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchContact, fetchContactBunner } from '../Services/Requests.js';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom/index.js';
import Loading from '../components/Loading.tsx';
interface ContactInfoProps {
    title: string;
    value: string;
}

interface ContactSectionProps {
    contactInfo: ContactInfoProps[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, value }) => (
    <div className="flex flex-col mt-10 whitespace-nowrap">
        <h3 className="text-2xl text-slate-900">{title}</h3>
        <p className="mt-3 text-lg text-blue-800">{value}</p>
    </div>
);
const ContactSection = ({ contactInfo }: { contactInfo: any }) => (
    <section className="flex relative flex-col items-start px-20 pt-3 pb-64 mt-10 max-w-full tracking-tight leading-none min-h-[517px] w-[521px] max-md:px-5 max-md:pb-24 max-md:mt-10 overflow-visible">
        {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/706f3998d1c1f52f87841c723498b8a4667d4a81285389c564317c69a8f210f7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
            alt=""
            className="object-cover absolute inset-0 size-full overflow-visible"
        /> */}
        <div className="flex relative flex-col items-start mb-0 max-w-full w-[221px] max-md:mb-2.5">
            {contactInfo.map((info: any, index: number) => (
                <ContactInfo
                    key={index}
                    title={info.data[0].category}
                    value={info.data[0].data}
                />
            ))}
        </div>
    </section>
);
export default function Contact() {
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: ContactBunner,
        isLoading: loadingContactBunner,
        error: errorContactBunner,
    } = useQuery({
        queryKey: ['ContactBunner', language],
        queryFn: fetchContactBunner,
    });
    const {
        data: Contact,
        isLoading: loadingContact,
        error: errorContact,
    } = useQuery({
        queryKey: ['Contact', language],
        queryFn: fetchContact,
    });
    const contactInfo = [
        { title: 'Phone number', value: '+994 123 45 67' },
        { title: 'Email', value: 'nümunə@gmail.com' },
        { title: 'Location', value: '221B Baker Street' },
    ];
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
    if (loadingContactBunner || loadingContact) return <Loading />;
    if (errorContactBunner || errorContact)
        return <div>Error loading data</div>;
    console.log(Contact.filter((item: any) => item.data));

    return (
        <div className="bg-white  relative  lg:overflow-hidden overflow-hidden   w-[100%] h-fit">
            <Header />

            <section
                className="flex  min-h-[420px] overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://regional.epart.az/storage/${ContactBunner.data[0].image}')`,
                }}
            >
                <div className="w-full  min-h-[420px] h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                {ContactBunner.data[0].title}
                            </h1>
                            <div
                                className="max-w-[860px] mt-5"
                                dangerouslySetInnerHTML={{
                                    __html: ContactBunner.data[0].description,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            <main className="z-10 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[80%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-24 mr-0 w-full max-md:mt-10 max-md:max-w-full">
                            <div className=" flex lg:flex-row-reverse flex-col lg:justify-end justify-start gap-6 ">
                                <h2 className="text-[48px] font-semibold text-nowrap">
                                    Contact{' '}
                                </h2>
                                <div className=" border-b-[6px] border-[#2758A3]   w-full flex justify-end  h-fit">
                                    <img src="/svg/cater.svg" alt="" />
                                </div>
                            </div>
                            <ContactSection
                                contactInfo={Contact.filter(
                                    (item: any) => item.data
                                )}
                            />
                        </div>
                    </div>
                    <div className=" flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full lg:flex  hidden"></div>
                </div>
            </main>
            <div
                dangerouslySetInnerHTML={{
                    __html: Contact.find((item: any) => item.frame).frame[0],
                }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute  -right-[300px]  z-0"
                style={{ top: `calc(120vh - ${scrollPosition}px)` }}
            />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute  left-0  z-0"
                style={{ top: `calc(75vh - ${scrollPosition}px)` }}
            />
            <Footer />
        </div>
    );
}
