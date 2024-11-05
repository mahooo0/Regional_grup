import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { NewsCard } from './NewsCard.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchBlog } from '../Services/Requests.js';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom/index.js';

// Initialize SwiperCore with the Navigation module
SwiperCore.use([Navigation]);

const BlogSwiper: React.FC = () => {
    const swiperRef = useRef<SwiperCore>();
    const language = useRecoilValue(Languege);

    const {
        data: Blog,
        isLoading: loadingBlog,
        error: errorBlog,
    } = useQuery({
        queryKey: ['Blog', language],
        queryFn: fetchBlog,
    });

    return (
        <div className="relative w-full h-fit ">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={4}
                spaceBetween={24}
                className="w-full h-full !pl-[107px]"
            >
                {Blog?.data?.map((item: any) => (
                    <SwiperSlide className="!w-fit ">
                        <NewsCard
                            views={item.views}
                            id={item.id}
                            category=" "
                            date={item.date}
                            description={item.short_description}
                            title={item.title}
                            img={item.image}
                        />
                    </SwiperSlide>
                ))}

                {/* <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-fit">
                    <NewsCard
                        category="category"
                        date="date"
                        description="description"
                        title="title"
                    />
                </SwiperSlide> */}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="mt-[26px] w-full flex justify-end flex-row gap-4 ">
                <button
                    className="  w-[32px] h-[32px] rounded-lg z-50 bg-[#E8EAE7] stroke-[#2758A3] hover:stroke-[white] hover:bg-[#2758A3] flex justify-center items-center rotate-180"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        // className=" stroke-[#2758A3] hover:stroke-[white]"
                    >
                        <path
                            d="M13.7344 8.85265L3.93848 8.85265"
                            // stroke="#2758A3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.7832 12.7869L13.7342 8.85291L9.7832 4.91821"
                            // stroke="#2758A3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <button
                    className=" w-[32px] h-[32px] rounded-lg z-50 bg-[#E8EAE7] stroke-[#2758A3] hover:stroke-[white] hover:bg-[#2758A3]  flex justify-center items-center mr-[108px]"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" "
                    >
                        <path
                            d="M13.7344 8.85265L3.93848 8.85265"
                            // stroke=""
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.7832 12.7869L13.7342 8.85291L9.7832 4.91821"
                            // stroke="#2758A3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogSwiper;
