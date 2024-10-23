import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';

export default function Services() {
    return (
        <div>
            <Header />

            <section
                className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Xidmətlər{' '}
                            </h1>
                            <p className="mt-2 text-lg leading-6 max-md:max-w-full">
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
            <section className="mt-[200px] relative pb-[126px]">
                <div className=" flex flex-row lg:justify-end justify-start gap-6 flex-wrap">
                    <h2 className="text-[48px] font-semibold">Sea Transport</h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-1/2 w-full  h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex flex-wrap gap-10 items-start justify-center self-start mt-14 ml-9 max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56a7049deb9d85245293cf7d433414682d4560aead2a45416afbef7cd376339e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Sea Transport illustration"
                            className="object-contain aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full">
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
                                <button className="gap-2.5 self-stretch p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                                    Daha çox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-[64px]">
                    <img
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
            <section className="mt-[200px] relative  pb-[126px]">
                <div className=" flex flex-row-reverse lg:justify-end justify-start gap-6 flex-wrap">
                    <h2 className="text-[48px] font-semibold">Sea Transport</h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-1/2 w-full flex justify-end  h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex flex-wrap gap-10 items-start justify-center self-start mt-14 ml-9 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full">
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
                                <button className="gap-2.5 self-stretch p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
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
                <div className="w-full flex justify-center mt-[64px]">
                    <img
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
            <section className="mt-[200px] relative  pb-[126px]">
                <div className=" flex flex-row lg:justify-end justify-start gap-6 flex-wrap">
                    <h2 className="text-[48px] font-semibold">Sea Transport</h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-1/2 w-full  h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex flex-wrap gap-10 items-start justify-center self-start mt-14 ml-9 max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56a7049deb9d85245293cf7d433414682d4560aead2a45416afbef7cd376339e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Sea Transport illustration"
                            className="object-contain aspect-[1.11] min-w-[240px] w-[392px]"
                        />
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full">
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
                                <button className="gap-2.5 self-stretch p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
                                    Daha çox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-[64px]">
                    <img
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
            <section className="mt-[200px] relative  pb-[126px]">
                <div className=" flex flex-row-reverse lg:justify-end justify-start gap-6 flex-wrap">
                    <h2 className="text-[48px] font-semibold">Sea Transport</h2>
                    <div className=" border-b-[6px] border-[#2758A3]  lg:w-1/2 w-full flex justify-end  h-fit">
                        <img src="/svg/cater.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center px-[auto] mt-[54px]">
                    <div className="flex flex-wrap gap-10 items-start justify-center self-start mt-14 ml-9 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col min-w-[240px] w-[701px] max-md:max-w-full">
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
                                <button className="gap-2.5 self-stretch p-2.5 mt-7 max-w-full text-base text-white bg-blue-800 rounded w-[184px]">
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
                <div className="w-full flex justify-center mt-[64px]">
                    <img
                        src="/svg/mause_blue.svg"
                        alt=""
                        className="z-30   animate-bounce"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}
