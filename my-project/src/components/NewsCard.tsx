import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { NewsCardType } from '../types/NewsTypes';
export type StatType = {
    icon: string;
    value: string;
};

export type NewsCardType = {
    date: string;
    category: string;
    title: string;
    description: string;
    img: string;
    id: string | number;
    imageClassName?: string;
    views: string;
};

export type FeaturedNewsType = {
    date: string;
    title: string;
    description: string;
};
export const NewsCard: React.FC<NewsCardType> = ({
    date,
    category,
    title,
    description,
    img,
    imageClassName,
    id,
    views,
}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col grow rounded-lg max-md:mt-6 max-w-[288px]  min-w-[288px]                                    ">
            <div className="flex flex-col w-full max-w-[288px]">
                <div
                    onClick={() => navigate(`/news/${id}`)}
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('https://regional.epart.az/storage/${img}')`,
                    }}
                    className={`flex overflow-hidden flex-col items-start  w-full text-xs leading-6 text-white whitespace-nowrap rounded-lg ${imageClassName}`}
                >
                    <div className=" bg-black bg-opacity-30 max-md:pr-5 max-md:pb-24 px-5 pt-5 pb-44 w-full">
                        <div className="flex gap-6 items-center mb-0 max-md:mb-2.5">
                            <div
                                key={1}
                                className="flex gap-2 items-start self-stretch my-auto"
                            >
                                <img
                                    loading="lazy"
                                    src={
                                        'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e25b6e7b071bf16e45ac1f486ca5011db0e624ec87d3437411a900a9b2a20dcc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                                    }
                                    alt=""
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <div>{views}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 justify-between items-start mt-2.5 w-full text-xs">
                    <div className="text-zinc-800">{category}</div>
                    <time className="text-zinc-600">{date}</time>
                </div>
                <div className="flex flex-col mt-2.5 w-full">
                    <div className="flex flex-col w-full">
                        <h3 className="text-base font-medium text-black">
                            {title}
                        </h3>
                        <p className="mt-1.5 text-sm text-zinc-500">
                            {description}
                        </p>
                    </div>
                    <div className="flex gap-2.5 mt-2 max-w-full text-base text-sky-900 w-[110px]">
                        <span
                            className="grow"
                            onClick={() => navigate(`/news/${id}`)}
                        >
                            {' '}
                            Daha çox
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/46035d282241ce868355623fdf49b9fc680b2f8d5f0cae1f754ec4eed544855e?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt=""
                            className="object-contain shrink-0 w-6 aspect-square"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
