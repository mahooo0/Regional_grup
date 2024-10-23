import * as React from 'react';

interface NewsItem {
    imageUrl: string;
    title: string;
    date: string;
    timeIconUrl: string;
}

interface NewsCardProps {
    item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
    return (
        <article className="flex gap-2.5 items-center py-3.5 w-full border-b border-gray-200 min-h-[115px]">
            <img
                loading="lazy"
                src={item.imageUrl}
                alt={item.title}
                className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[1.03] w-[75px]"
            />
            <div className="flex flex-col justify-center self-stretch my-auto h-[88px] w-[150px]">
                <h3 className="text-black rotate-[-0.00034299155930933323rad]">
                    {item.title}
                </h3>
                <div className="flex gap-2.5 items-center self-start mt-2.5 whitespace-nowrap h-[15px] text-zinc-300">
                    <img
                        loading="lazy"
                        src={item.timeIconUrl}
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                    <time className="self-stretch my-auto">{item.date}</time>
                </div>
            </div>
        </article>
    );
};

const newsItems: NewsItem[] = [
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/dd6eeab03b8ddb564a92132e954ef5abde543ee3b90ffdb42675ec013952a4c3?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        title: 'Lorem Ipsum dolor sit ament Lorem Ipsum dolor',
        date: '18-10-2024',
        timeIconUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/08eaf81e8d5df27d452b68c9a9376f5d6ccc2e7cff99b48b96f22f836af350c8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
];

export const OtherBlogs: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'popular' | 'latest'>(
        'popular'
    );

    return (
        <section className="flex flex-col p-3.5 bg-white rounded-lg shadow-[0px_0px_11px_rgba(101,101,101,0.12)] h-fit">
            <nav
                className="flex gap-6 items-center self-center text-base tracking-tight leading-none"
                role="tablist"
            >
                <button
                    role="tab"
                    aria-selected={activeTab === 'popular'}
                    onClick={() => setActiveTab('popular')}
                    className={`gap-2.5 self-stretch p-2.5 my-auto font-medium whitespace-nowrap rounded-lg ${
                        activeTab === 'popular'
                            ? 'text-white bg-blue-800'
                            : 'text-black'
                    }`}
                >
                    Populyar
                </button>
                <button
                    role="tab"
                    aria-selected={activeTab === 'latest'}
                    onClick={() => setActiveTab('latest')}
                    className={`gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap rounded-lg ${
                        activeTab === 'latest'
                            ? 'text-white bg-blue-800'
                            : 'text-black'
                    }`}
                >
                    Son Xəbər
                </button>
            </nav>
            <main className="flex flex-col mt-5 w-full text-sm">
                {newsItems.map((item, index) => (
                    <NewsCard key={index} item={item} />
                ))}
            </main>
        </section>
    );
};
