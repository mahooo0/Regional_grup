import * as React from 'react';
import { useNavigate } from 'react-router-dom';

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
    id: string | number;
}

const NewsCard: React.FC<NewsCardProps> = ({
    imageUrl,
    title,
    date,
    dateIconUrl,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/news/${id}`)}
            className="flex cursor-pointer gap-2.5 items-center self-stretch my-auto min-h-[88px] min-w-[240px] max-w-[438px] max-md:max-w-full"
        >
            <img
                loading="lazy"
                src={imageUrl}
                alt={title}
                className="object-cover shrink-0 self-stretch my-auto rounded-lg aspect-[1.03] w-[91px]"
            />
            <div className="flex flex-col justify-center self-stretch py-1 my-auto min-h-[88px]  max-w-[315px]">
                <h2 className="text-base font-medium ">{title}</h2>
                <time className="flex gap-3.5 items-center self-start mt-2.5 text-sm whitespace-nowrap">
                    <img
                        loading="lazy"
                        src={dateIconUrl}
                        alt=""
                        className="object-cover shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                    <span className="self-stretch my-auto">{date}</span>
                </time>
            </div>
        </div>
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

export const NewsComments = ({ data }: { data: any }) => {
    return (
        <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-9  mt-16 text-black max-md:mt-10 w-full">
            {data.map((item: any) => (
                <NewsCard
                    key={item.id}
                    id={item.id}
                    imageUrl={`https://regional.epart.az/storage/${item.image}`}
                    title={item.title}
                    date={item.date}
                    dateIconUrl={
                        'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f3c86cb051418b22240ebc8d989a3f8c88b518d5537ffbe3e5f6142f8aebc6d6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                    }
                />
            ))}
        </section>
    );
};
