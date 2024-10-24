import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { ServicesLayout } from '../components/Services/index.tsx';
const StatCard = ({ value, label }) => (
    <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-[233px]">
        <div className="text-4xl font-semibold text-center text-blue-800">
            {value}
        </div>
        <div className="self-center mt-2 text-2xl font-medium text-black">
            {label}
        </div>
    </div>
);
export default function Ebout() {
    const stats = [
        { value: '10+', label: 'Təcrübə' },
        { value: '2000+', label: 'Müştəri' },
        { value: '1000+', label: 'Proffesional işçi' },
        { value: '1000+', label: 'Daşınma' },
    ];
    return (
        <div>
            <Header />

            <section
                className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                }}
            >
                <div className="w-full h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Haqqımızda
                            </h1>
                            <p className=" text-lg leading-6 max-md:max-w-full mt-5">
                                Lorem ipsum dolor sit amet consectetur. Enim
                                rutrum hac amet sagittis. Morbi enim integer
                                odio varius bibendum. Ac mattis ullamcorper id
                                massa. Hendrerit ipsum eu nulla molestie diam
                                at. Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                        <button className="gap-2.5 self-center p-2.5 mt-7 max-w-full text-base bg-blue-800 rounded w-[184px]">
                            Sorğu göndər
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center">
                <div className="flex flex-wrap gap-10 justify-center items-center self-center py-3.5 mt-24 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </section>
            <section className="flex overflow-hidden flex-col items-start px-20 pt-9 pb-20 mt-32 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[1169px] max-md:max-w-full">
                    <h1 className="self-center ml-7 text-5xl font-medium text-black max-md:text-4xl">
                        Haqqımızda
                    </h1>
                    <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e3efe11e1b76a282a8d6bfab75a8bf38f62bbbb17ebaccae60d85b1d960bdcfb?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    alt="About Us"
                                    className="object-contain grow w-full rounded-lg aspect-[1.8] max-md:mt-6 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                    <h2 className="self-start text-2xl text-black">
                                        Biz kimik?
                                    </h2>
                                    <p className="mt-4 text-base leading-7 text-neutral-500 max-md:max-w-full">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Vel pellentesque ut nisi volutpat
                                        integer lacus quis leo placerat. Cras
                                        morbi neque ultricies pharetra nibh
                                        sagittis tincidunt. Sit sit fermentum
                                        fermentum faucibus accumsan dolor cras.
                                        Est etiam blandit suspendisse enim risus
                                        blandit amet lacus sapien. Elit at nunc
                                        sit accumsan sollicitudin varius. Lacus
                                        nisl bibendum pellentesque purus.
                                        Viverra a risus arcu et sollicitudin
                                        vestibulum diam egestas. Quisque eget
                                        leo et elementum posuere ornare...
                                    </p>
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full justify-center">
                <ServicesLayout />
            </section>
            <Footer />
        </div>
    );
}
