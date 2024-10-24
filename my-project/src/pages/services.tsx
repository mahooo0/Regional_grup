import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import InfoSection from '../components/InfoSection.tsx';

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
                            <p className="mt-6 text-lg leading-6 max-md:max-w-full">
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
            <InfoSection direction="row" />
            <InfoSection direction="col" />
            <InfoSection direction="row" />
            <InfoSection direction="col" />
            <Footer />
        </div>
    );
}
