import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { NewsSection } from '../components/NewsSection.tsx';
import { FeaturedNews } from '../components/FeaturedNews.tsx';
import { NewsCard } from '../components/NewsCard.tsx';
import { Pagination } from '../components/Pagination.tsx';

export const newsData = [
    {
        id: '1',
        date: 'Mart 11, 2024',
        views: 123450,
        likes: 45678,
        title: 'Innovative packaging',
        description:
            'Lorem ipsum dolor sit amet consectetur. Vel pellentesque ut nisi volutpat integer lacus quis leo placerat.',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e25b6e7b071bf16e45ac1f486ca5011db0e624ec87d3437411a900a9b2a20dcc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        category: 'Yeniliklər',
    },
    {
        id: '2',
        date: 'Mart 11, 2024',
        views: 98765,
        likes: 34567,
        title: 'Əməyin Mühafizəsi',
        description:
            'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/175ea05ed4605f89db7999a491a9c410afb0f9b2a558b6280fdfff5b9f0104a8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        category: 'Yeniliklər',
    },
    {
        id: '3',
        date: 'Mart 11, 2024',
        views: 87654,
        likes: 23456,
        title: 'Əməyin Mühafizəsi',
        description:
            'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4ce6cddbe32fc43f617c6f8923d1c5ce5787970120e9a34015a2953515ce31a8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        category: 'Yeniliklər',
    },
];
export default function Blog() {
    const cards = [
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
    ];
    return (
        <div>
            <Header />

            <section
                className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                }}
            >
                <div className="w-full h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Blog{' '}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <NewsSection /> */}
            <section className="flex flex-row flex-wrap gap-6 justify-center px-[60px] mt-[54px] mb-[74px]">
                <FeaturedNews
                    title="title"
                    description="description"
                    date="10.2022.22"
                />
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col  w-fit ">
                        <NewsCard {...card} />
                    </div>
                ))}
            </section>
            <Pagination
                totalPages={10}
                currentPage={1}
                onPageChange={() => {}}
            />
            <Footer />
        </div>
    );
}
