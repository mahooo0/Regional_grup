import React from 'react';
export type StatType = {
    icon: string;
    value: string;
};

export type NewsCardType = {
    date: string;
    category: string;
    title: string;
    description: string;
    stats: StatType[];
    imageClassName?: string;
};

export type FeaturedNewsType = {
    date: string;
    title: string;
    description: string;
};

export const FeaturedNews: React.FC<FeaturedNewsType> = ({
    date,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col lg:w-[600px] w-full">
            <div className="flex flex-col grow rounded-lg max-md:mt-6 max-md:max-w-full ">
                <div
                    className="flex overflow-hidden flex-col w-full text-white rounded   max-md:max-w-full max-h-[220px] "
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage:
                            "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                    }}
                >
                    <div className="w-full h-full bg-black bg-opacity-40  px-7 pt-5 pb-52 max-md:px-5  max-md:pb-24 ">
                        <div className="flex flex-wrap gap-10 justify-between items-center mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
                            <time className="self-stretch my-auto text-base font-medium">
                                {date}
                            </time>
                            <div className="flex gap-6 items-center self-stretch my-auto text-sm leading-loose whitespace-nowrap">
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
                </div>
                <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                    <h2 className="text-lg font-medium text-black max-md:max-w-full">
                        {title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-neutral-500 max-md:max-w-full">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
