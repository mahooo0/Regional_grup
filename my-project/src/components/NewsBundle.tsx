import * as React from 'react';
export interface NewsItemProps {
    date: string;
    views: number;
    likes: number;
    title: string;
    description: string;
    imageUrl: string;
}

export interface NewsGridProps {
    newsData: NewsItemProps[];
}

export const NewsGrid: React.FC<NewsGridProps> = ({ newsData }) => {
    return (
        <main className="flex flex-col rounded-none">
            <section className="w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    {newsData.slice(0, 3).map((news, index) => (
                        <article
                            key={index}
                            className={`flex flex-col ${
                                index === 0 ? 'w-[51%]' : 'w-[24%]'
                            } max-md:ml-0 max-md:w-full`}
                        >
                            <div className="flex flex-col grow rounded-lg max-md:mt-6">
                                <div className="flex flex-col w-full max-w-[288px]">
                                    <div className="flex overflow-hidden flex-col items-start px-5 pt-5 pb-44 w-full text-xs leading-6 text-white whitespace-nowrap rounded-lg bg-black bg-opacity-30 max-md:pr-5 max-md:pb-24">
                                        <div className="flex gap-6 items-center mb-0 max-md:mb-2.5">
                                            <div className="flex gap-2 items-center self-stretch my-auto">
                                                <img
                                                    loading="lazy"
                                                    src={news.imageUrl}
                                                    alt=""
                                                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    {news.views}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center self-stretch my-auto">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e1fb9dc426e050ab8619a16a7cc37746d38193cfb201ca19b2f19a4d718910dc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                    alt=""
                                                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    {news.likes}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10 justify-between items-start mt-2.5 w-full text-xs">
                                        <div className="text-zinc-800">
                                            Yeniliklər
                                        </div>
                                        <time className="text-zinc-600">
                                            {news.date}
                                        </time>
                                    </div>
                                    <div className="flex flex-col mt-2.5 w-full">
                                        <div className="flex flex-col w-full">
                                            <h2 className="text-base font-medium text-black">
                                                {news.title}
                                            </h2>
                                            <p className="mt-1.5 text-sm text-zinc-500">
                                                {news.description}
                                            </p>
                                        </div>
                                        <button
                                            className="flex gap-2.5 mt-2 max-w-full text-base text-sky-900 w-[110px]"
                                            aria-label={`Read more about ${news.title}`}
                                        >
                                            <span className="grow">
                                                Daha çox
                                            </span>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/46035d282241ce868355623fdf49b9fc680b2f8d5f0cae1f754ec4eed544855e?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                alt=""
                                                className="object-contain shrink-0 w-6 aspect-square"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            {[...Array(3)].map((_, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className="flex flex-wrap gap-6 items-center mt-16 max-md:mt-10"
                >
                    {newsData.slice(0, 4).map((news, index) => (
                        <article
                            key={index}
                            className="flex flex-col self-stretch my-auto w-72 rounded-lg min-w-[240px]"
                        >
                            <div className="flex flex-col w-full max-w-[288px]">
                                <div className="flex overflow-hidden flex-col items-start px-5 pt-5 pb-44 w-full text-xs leading-6 text-white whitespace-nowrap rounded-lg bg-black bg-opacity-30 max-md:pr-5 max-md:pb-24">
                                    <div className="flex gap-6 items-center mb-0 max-md:mb-2.5">
                                        <div className="flex gap-2 items-center self-stretch my-auto">
                                            <img
                                                loading="lazy"
                                                src={news.imageUrl}
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                            />
                                            <div className="self-stretch my-auto">
                                                {news.views}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center self-stretch my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e1fb9dc426e050ab8619a16a7cc37746d38193cfb201ca19b2f19a4d718910dc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                            />
                                            <div className="self-stretch my-auto">
                                                {news.likes}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-10 justify-between items-start mt-2.5 w-full text-xs">
                                    <div className="text-zinc-800">
                                        Yeniliklər
                                    </div>
                                    <time className="text-zinc-600">
                                        {news.date}
                                    </time>
                                </div>
                                <div className="flex flex-col mt-2.5 w-full">
                                    <div className="flex flex-col w-full">
                                        <h2 className="text-base font-medium text-black">
                                            {news.title}
                                        </h2>
                                        <p className="mt-1.5 text-sm text-zinc-500">
                                            {news.description}
                                        </p>
                                    </div>
                                    <button
                                        className="flex gap-2.5 mt-2 max-w-full text-base text-sky-900 w-[110px]"
                                        aria-label={`Read more about ${news.title}`}
                                    >
                                        <span className="grow">Daha çox</span>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/46035d282241ce868355623fdf49b9fc680b2f8d5f0cae1f754ec4eed544855e?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                            alt=""
                                            className="object-contain shrink-0 w-6 aspect-square"
                                        />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            ))}
        </main>
    );
};
