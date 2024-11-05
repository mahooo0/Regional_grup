import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import LangText from './langugeComponent.tsx';

interface NewsItem {
    title: string;
    time: string;
    iconSrc: string;
}

export const NewsAside = ({ data }: { data: any }) => {
    // const newsItems: NewsItem[] = [
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/331a3753eb8e092f076a0864e036d658215dd5ebe69a586c0297acac9e7616a2?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4b29453a5c064df10e75ffe2014b22daa29fc4ecb258925b07622bada27ed3b5?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/7b81a7a74c16777169e123d97e7d3bebbdd2160ed9d8a880fbf42d0f176e6a0f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/93708cbbe81ca7fbc64d176f55dbb2c15888994e792e2d25e57e5e56661e2c78?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a2d46012c344dee6d68240098102ddc1bb2f3db99c0963af5eab502b38c4400f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d9f907b0a23a5d5148e647a90b61cc51fde9202a2ef8c7e73bf639186b0f3eec?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/7f49b568113a5730dcfe129d75d64d8085c82a4cf23f7e546e47223abb26afe1?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/289e86fd3bff6aa45859faa06b70fb4c95f6605d196948a64e5a8a34b514d861?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    //     {
    //         title: 'Lorem Ipsum dolor sit ament',
    //         time: '20:18',
    //         iconSrc:
    //             'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d15c4db7ddd865ba92b0087cc8715e1a50fb4bc4e2493a111cfcffed8805f3a7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //     },
    // ];
    const navigate = useNavigate();

    return (
        <section className="flex flex-col px-4 py-3.5  lg:w-[288px] lg:mx-0 mx-[20px]  w-full bg-white rounded-lg shadow-[0px_0px_11px_rgba(101,101,101,0.12)] max-md:mt-6 h-fit">
            <div className="flex gap-5 justify-between items-center py-5 w-full text-black border-b border-gray-200">
                <h2 className="self-stretch my-auto text-xl font-medium">
                    <LangText
                        azText="Xəbər lenti"
                        enText="News Feed"
                        ruText="Новостная лента"
                    />
                </h2>
                {/* <button
                    className="flex gap-2.5 justify-center items-center self-stretch my-auto text-sm rounded"
                    aria-label="View all news"
                >
                    <span className="self-stretch my-auto">bütün xəbərlər</span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/331a3753eb8e092f076a0864e036d658215dd5ebe69a586c0297acac9e7616a2?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                </button> */}
            </div>
            <div>
                {data.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col py-3 w-full border-b border-gray-200 cursor-pointer"
                        onClick={() => navigate(`/news/${item.id}`)}
                    >
                        <h3 className="text-base text-black">{item.title}</h3>
                        <div className="flex gap-2.5 items-center self-start mt-2 text-xs whitespace-nowrap text-zinc-300">
                            <img
                                loading="lazy"
                                src={
                                    'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/331a3753eb8e092f076a0864e036d658215dd5ebe69a586c0297acac9e7616a2?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                                }
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                            />
                            <time className="self-stretch my-auto">
                                {item.date}
                            </time>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
