import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { Chat } from '../components/Chat.tsx';
import { NewsAside } from '../components/NewsAside.tsx';
import { NewsComments } from '../components/newsCommpent.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchBlog, fetchBunner } from '../Services/Requests.js';
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
const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => (
    <section className="flex relative flex-col items-start px-20 pt-3 pb-64 mt-10 max-w-full tracking-tight leading-none min-h-[517px] w-[521px] max-md:px-5 max-md:pb-24 max-md:mt-10 overflow-visible">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/706f3998d1c1f52f87841c723498b8a4667d4a81285389c564317c69a8f210f7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
            alt=""
            className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start mb-0 max-w-full w-[221px] max-md:mb-2.5">
            {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
            ))}
        </div>
    </section>
);
export default function News() {
    const [chatData, setChatData] = useState<any[]>([]);
    const [CommetsData, setCommetsData] = useState<any[]>([]);
    const [otherBlogs, setotherBlogs] = useState<any[]>([]);
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: Blog,
        isLoading: loadingBlog,
        error: errorBlog,
    } = useQuery({
        queryKey: ['Blog', language],
        queryFn: fetchBlog,
    });
    const {
        data: Bunner,
        isLoading: loadingBunner,
        error: errorBunner,
    } = useQuery({
        queryKey: ['Bunner', language],
        queryFn: fetchBunner,
    });
    console.log(Bunner);
    useEffect(() => {
        function splitArray(inputArr: any[]) {
            const firstArr = inputArr.slice(0, 3); // Get the first 4 elements
            const secondArr = inputArr.slice(3, 7);
            const thirddArr = inputArr.slice(8);

            setotherBlogs(thirddArr);
            setChatData(firstArr);
            setCommetsData(secondArr);
        }
        if (Blog) {
            splitArray(Blog.data);
        }
    }, [Blog]);

    if (loadingBlog || loadingBunner) return <Loading />;
    if (errorBlog || errorBunner) return <div>Error loading data</div>;
    console.log('CommetsData:', CommetsData);
    // write program
    return (
        <div>
            <Header />

            {/* <section
                className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center min-h-[420px]"
                style={{
                    backgroundImage: `url('https://regional.epart.az/storage/${Bunner.data[0].image}')`,
                }}
            >
                <div className="w-full h-full  min-h-[420px]  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                {Bunner.data[0].title}
                            </h1>
                            <div
                                className="mt-[16px]"
                                dangerouslySetInnerHTML={{
                                    __html: Bunner.data[0].description,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="mt-[252px] flex flex-row w-full justify-center gap-6 items-start flex-wrap  lg:px-0 px-5   mb-[120px]">
                <div className="max-w-[1000px] flex justify-center flex-col items-center w-full">
                    <Chat data={chatData} />
                    <NewsComments data={CommetsData} />
                </div>
                <NewsAside data={otherBlogs} />
            </section>

            <Footer />
        </div>
    );
}
