import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
SwiperCore.use([Navigation]);

export default function GalerySwipper({
    setshow,
    show,
}: {
    setshow: (par: boolean) => void;
    show: boolean;
}) {
    const swiperRef = useRef<SwiperCore>();
    if (show) {
        return (
            <div className=" w-[100vw] h-[100vh]   fixed top-0  z-[99999999] ">
                <div className="w-full h-full relative flex justify-center items-center">
                    <div
                        className="w-full h-full absolute bg-black bg-opacity-35"
                        onClick={() => setshow(false)}
                    ></div>
                    <div className="lg:w-[65%] md:w-4/5 w-full h-4/5  z-50 flex  justify-between items-center gap-6">
                        <button
                            className="lg:block md:block hidden "
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.24728 12.2743L19.2393 12.2743"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.2939 18.2987L4.24718 12.2747L10.2939 6.2497"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="bg-white lg:w-[95%] md:w-[95%]  w-full h-fit  rounded-[20px] p-[24px]">
                            <Swiper
                                onSwiper={(swiper) =>
                                    (swiperRef.current = swiper)
                                }
                                slidesPerView={1}
                                spaceBetween={4}
                                className="w-full h-[80%]"
                            >
                                <SwiperSlide className="">
                                    <img
                                        className="w-full  object-cover lg:max-h-[420px] md:max-h-[420px] h-[300px]"
                                        src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <img
                                        className="w-full  object-cover lg:max-h-[420px] md:max-h-[420px] h-[300px]"
                                        src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <img
                                        className="w-full  object-cover lg:max-h-[420px] md:max-h-[420px] h-[300px]"
                                        src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <img
                                        className="w-full  object-cover lg:max-h-[420px] md:max-h-[420px] h-[300px]"
                                        src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <img
                                        className="w-full  object-cover lg:max-h-[420px] md:max-h-[420px] h-[300px]"
                                        src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className="w-full h-[20%] rounded-[] py-2 flex flex-row gap-2 flex-wrap justify-center">
                                <img
                                    onClick={() =>
                                        swiperRef.current?.slideTo(2)
                                    }
                                    className="w-[120px]  object-cover rounded-[20px] h-[80px]"
                                    src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                />
                                <img
                                    className="w-[120px]  object-cover rounded-[20px] h-[80px]"
                                    src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                />
                                <img
                                    className="w-[120px]  object-cover rounded-[20px] h-[80px]"
                                    src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                />
                                <img
                                    className="w-[120px]  object-cover rounded-[20px] h-[80px]"
                                    src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                />
                                <img
                                    className="w-[120px]  object-cover rounded-[20px] h-[80px]"
                                    src="https://s3-alpha-sig.figma.com/img/32a7/5318/1b9da39962ef76c72ac5625679bbaf24?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFhKRPD2g-nZXKAhkAnZjRQMA3dore6Itmu3Dolz6c5Yn8tAKMM7nBLzjbEPZmGTpEmN5AmXBsbhRFL~gw8iO1zsShGRoECV0yOq-dtVbReE8xVYxlQjkpuiyK~y2FaGHERlzxTB-Zju3EiT0A8ZZEkFESxf7~NGQmgYtPao-eSk2J6L7f7rVu~IgS9tnn6sTuPeD-xtG8pXns0ZaSa0wf4rVOG-s0HaxmkETgbnU7Mfj6NaXP39tq~~UDZIH7s9AUyKVDFZrPyYbAeP~G58~FP7NzC~oXhUANJgyeNiG1A~hI0voSnsoBWyQfPDmAKGbg0dotLnDIJywKfn-6D8Qw__"
                                />
                            </div>
                        </div>
                        <button
                            className=" rotate-180  lg:block md:block hidden"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.24728 12.2743L19.2393 12.2743"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.2939 18.2987L4.24718 12.2747L10.2939 6.2497"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
