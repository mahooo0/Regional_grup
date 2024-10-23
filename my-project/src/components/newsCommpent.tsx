import * as React from 'react';

interface NewsItem {
    id: string;
    imageUrl: string;
    title: string;
    date: string;
    dateIconUrl: string;
}

interface NewsCardProps {
    imageUrl: string;
    title: string;
    date: string;
    dateIconUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
    imageUrl,
    title,
    date,
    dateIconUrl,
}) => {
    return (
        <article className="flex gap-2.5 items-center self-stretch my-auto min-h-[88px] min-w-[240px] w-[438px] max-md:max-w-full">
            <img
                loading="lazy"
                src={imageUrl}
                alt={title}
                className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[1.03] w-[91px]"
            />
            <div className="flex flex-col justify-center self-stretch py-1 my-auto min-h-[88px] min-w-[240px] w-[315px]">
                <h2 className="text-base font-medium rotate-[-0.00034299155930933323rad]">
                    {title}
                </h2>
                <time className="flex gap-3.5 items-center self-start mt-2.5 text-sm whitespace-nowrap">
                    <img
                        loading="lazy"
                        src={dateIconUrl}
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                    <span className="self-stretch my-auto">{date}</span>
                </time>
            </div>
        </article>
    );
};

const newsItems: NewsItem[] = [
    {
        id: '1',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/bcf3faee60f1a2df14e4d1c95a538ccd98af400d00ae64478afe4dfc85f82659?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        dateIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f3c86cb051418b22240ebc8d989a3f8c88b518d5537ffbe3e5f6142f8aebc6d6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        id: '2',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/6d022af0fbadd8bb5011a554304097a5ae53dc9aaf59f8d28fc57c8590a61eba?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        dateIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f3c86cb051418b22240ebc8d989a3f8c88b518d5537ffbe3e5f6142f8aebc6d6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        id: '3',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/bcf3faee60f1a2df14e4d1c95a538ccd98af400d00ae64478afe4dfc85f82659?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        dateIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f3c86cb051418b22240ebc8d989a3f8c88b518d5537ffbe3e5f6142f8aebc6d6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        id: '4',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/6d022af0fbadd8bb5011a554304097a5ae53dc9aaf59f8d28fc57c8590a61eba?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        dateIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f3c86cb051418b22240ebc8d989a3f8c88b518d5537ffbe3e5f6142f8aebc6d6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
];

export const NewsComments: React.FC = () => {
    return (
        <section className="flex flex-wrap gap-9 items-center mt-16 text-black max-md:mt-10 max-md:max-w-full">
            {newsItems.map((item) => (
                <NewsCard
                    key={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    date={item.date}
                    dateIconUrl={item.dateIconUrl}
                />
            ))}
        </section>
    );
};
