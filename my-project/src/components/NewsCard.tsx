import React from 'react';
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

    imageClassName?: string;
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

    imageClassName,
}) => {
    return (
        <div className="flex flex-col grow rounded-lg max-md:mt-6 max-w-[288px]  min-w-[288px]                                    ">
            <div className="flex flex-col w-full max-w-[288px]">
                <div
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage:
                            "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
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
                                <div>123.45B</div>
                            </div>
                            <div
                                key={2}
                                className="flex gap-2 items-start self-stretch my-auto"
                            >
                                <img
                                    loading="lazy"
                                    src={
                                        'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/175ea05ed4605f89db7999a491a9c410afb0f9b2a558b6280fdfff5b9f0104a8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                                    }
                                    alt=""
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <div>123.45B</div>
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
                    <a
                        href="#"
                        className="flex gap-2.5 mt-2 max-w-full text-base text-sky-900 w-[110px]"
                        aria-label={`Read more about ${title}`}
                    >
                        <span className="grow">Daha çox</span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/46035d282241ce868355623fdf49b9fc680b2f8d5f0cae1f754ec4eed544855e?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt=""
                            className="object-contain shrink-0 w-6 aspect-square"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
