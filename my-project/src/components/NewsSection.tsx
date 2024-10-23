import React from 'react';
import { FeaturedNews } from './FeaturedNews.tsx';
import { NewsCard } from './NewsCard.tsx';
// import { FeaturedNews } from './components/FeaturedNews';
// import { NewsCard } from './components/NewsCard';

export const NewsSection: React.FC = () => {
    const newsData = {
        featured: {
            date: 'Mart 11, 2024',
            title: 'Innovative packaging',
            description:
                'Lorem ipsum dolor sit amet consectetur. Vel pellentesque ut nisi volutpat integer lacus quis leo placerat. Cras morbi neque ultricies pharetra nibh sagittis tincidunt.',
            stats: [
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e25b6e7b071bf16e45ac1f486ca5011db0e624ec87d3437411a900a9b2a20dcc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                    value: '123.45B',
                },
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/175ea05ed4605f89db7999a491a9c410afb0f9b2a558b6280fdfff5b9f0104a8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                    value: '123.45B',
                },
            ],
        },
        cards: [
            {
                date: 'Mart 11, 2024',
                category: 'Yeniliklər',
                title: '​Əməyin Mühafizəsi',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
                stats: [
                    {
                        icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4ce6cddbe32fc43f617c6f8923d1c5ce5787970120e9a34015a2953515ce31a8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                        value: '123.45B',
                    },
                    {
                        icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e1fb9dc426e050ab8619a16a7cc37746d38193cfb201ca19b2f19a4d718910dc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                        value: '123.45B',
                    },
                ],
            },
            {
                date: 'Mart 11, 2024',
                category: 'Yeniliklər',
                title: '​Əməyin Mühafizəsi',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
                stats: [
                    {
                        icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/50a5ab75c577323e60f74bcd2316bb46211266d08e11058b1518f29981999d56?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                        value: '123.45B',
                    },
                    {
                        icon: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e1fb9dc426e050ab8619a16a7cc37746d38193cfb201ca19b2f19a4d718910dc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
                        value: '123.45B',
                    },
                ],
            },
        ],
    };

    return (
        <main className="mt-14 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
            <section className="flex gap-5 max-md:flex-col">
                <FeaturedNews {...newsData.featured} />
                {newsData.cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full"
                    >
                        <NewsCard {...card} />
                    </div>
                ))}
            </section>
        </main>
    );
};
