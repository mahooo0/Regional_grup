import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { Pagination } from '../components/Pagination.tsx';
import GalerySwipper from '../components/GalerySwipper.tsx';
// interface ContactInfoProps {
//     title: string;
//     value: string;
// }

// interface ContactSectionProps {
//     contactInfo: ContactInfoProps[];
// }

// const ContactInfo: React.FC<ContactInfoProps> = ({ title, value }) => (
//     <div className="flex flex-col mt-10 whitespace-nowrap">
//         <h3 className="text-2xl text-slate-900">{title}</h3>
//         <p className="mt-3 text-lg text-blue-800">{value}</p>
//     </div>
// );
// const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => (
//     <section className="flex relative flex-col items-start px-20 pt-3 pb-64 mt-10 max-w-full tracking-tight leading-none min-h-[517px] w-[521px] max-md:px-5 max-md:pb-24 max-md:mt-10 overflow-visible">
//         <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/706f3998d1c1f52f87841c723498b8a4667d4a81285389c564317c69a8f210f7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
//             alt=""
//             className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative flex-col items-start mb-0 max-w-full w-[221px] max-md:mb-2.5">
//             {contactInfo.map((info, index) => (
//                 <ContactInfo key={index} {...info} />
//             ))}
//         </div>
//     </section>
// );
export default function Galery() {
    // const contactInfo = [
    //     { title: 'Phone number', value: '+994 123 45 67' },
    //     { title: 'Email', value: 'nümunə@gmail.com' },
    //     { title: 'Location', value: '221B Baker Street' },
    // ];
    const [show, setshow] = useState<boolean>(false);

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
                                Galery{' '}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[28px] lg:px-[108px] md:px-[60px] px-[30px] w-full flex flex-col gap-6 ">
                <div className=" w-full lg:h-[100vh] h-fit flex lg:flex-row flex-col gap-6 ">
                    <div className="lg:w-1/2 w-full h-full  flex flex-row gap-6">
                        <div className="w-1/2  flex flex-col gap-6">
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end  relative overflow-hidden "
                                onClick={() => setshow(true)}
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>

                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                        <div
                            className=" w-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            {' '}
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    alt="image"
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-[100vh]  flex flex-col gap-6">
                        <div
                            className="w-full h-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    alt="image"
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex flex-row gap-6">
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                {' '}
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full lg:h-[100vh] h-fit flex lg:flex-row flex-col gap-6 ">
                    <div className="lg:w-1/2 w-full h-full  flex flex-row gap-6">
                        <div className="w-1/2  flex flex-col gap-6">
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end  relative overflow-hidden "
                                onClick={() => setshow(true)}
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>

                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                        <div
                            className=" w-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            {' '}
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    alt="image"
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-[100vh]  flex flex-col gap-6">
                        <div
                            className="w-full h-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    alt="image"
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex flex-row gap-6">
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                {' '}
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=" w-full h-[100vh] flex lg:flex-row flex-col gap-6 ">
                    <div className="lg:w-1/2 w-full h-full  flex flex-row gap-6">
                        <div className="w-1/2  flex flex-col gap-6">
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="h-full w-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-full  flex flex-col gap-6">
                        <div
                            className="w-full h-1/2 rounded-2xl flex items-end relative overflow-hidden"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                            }}
                        >
                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                <img
                                    src="/imges/image.png"
                                    className="w-[24px]"
                                />
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex flex-row gap-6">
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                {' '}
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                            <div
                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                }}
                            >
                                {' '}
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <Pagination
                totalPages={12}
                currentPage={1}
                onPageChange={() => {}}
            />
            <GalerySwipper show={show} setshow={setshow} />
            <Footer />
        </div>
    );
}
