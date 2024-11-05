import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { OtherBlogs } from '../components/otherBlogs.tsx';
import BlogSwiper from '../components/BlogsSwipper.tsx';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom/index.js';
import { fetchBlogById } from '../Services/Requests.js';

interface ArticleSectionType {
    title: string;
    content: string;
}

interface ArticleSectionProps {
    section: ArticleSectionType;
}

function ArticleSection({ section }: ArticleSectionProps) {
    return (
        <section className="flex flex-col mt-12 w-full max-md:mt-10">
            <h2 className="text-3xl font-medium tracking-tight leading-tight text-slate-900 max-md:max-w-full">
                {section.title}
            </h2>
            <p className="mt-4 text-base tracking-wide leading-7 text-neutral-600 max-md:max-w-full">
                {section.content}
            </p>
        </section>
    );
}
export default function BlogID() {
    const articleSections: ArticleSectionType[] = [
        {
            title: 'Essential Elements of a Valid Contract',
            content:
                'Several essential elements must be present for a contract to be legally enforceable. These include offer, acceptance, consideration, legality of purpose, capacity, and consent. An offer is a proposal made by one party to another, indicating an intention to enter into a contract under specific terms. Acceptance occurs when the other party agrees to the terms of the offer, creating mutual assent or meeting of the minds.\n\nConsideration refers to something of value exchanged between parties, such as goods, services, or money, which forms the basis of the contract. Additionally, contracts must have a lawful purpose, be entered into by competent parties, and be formed without duress or fraud. Understanding these fundamental elements is essential for drafting, negotiating, and executing contracts that are valid and enforceable.',
        },
        {
            title: 'Empowering Small Business Owners',
            content:
                'In the dynamic world of entrepreneurship, knowledge of contract law is a valuable asset that empowers small business owners to navigate transactions with confidence and protect their interests. By understanding the basics of contract formation, essential elements, and legal principles, entrepreneurs can mitigate risks, foster stronger business relationships, and position their ventures for long-term success. As small business owners continue to grow and expand their enterprises, a solid foundation in contract law remains essential for navigating the complexities of the business landscape with clarity and integrity.',
        },
    ];
    const [language, setLanguie] = useRecoilValue(Languege);

    const { id } = useParams();
    console.log(id);
    const {
        data: BlogById,
        isLoading: loadingBlogById,
        error: errorBlogById,
    } = useQuery({
        queryKey: ['BlogById', language, id],
        queryFn: () => fetchBlogById(id),
    });
    if (loadingBlogById) return <div>Loading...</div>;
    if (errorBlogById) return <div>Error loading data</div>;
    console.log(BlogById);

    return (
        <div className=" relative">
            <Header />
            <section
                className="flex  min-h-[420px] overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://regional.epart.az/storage/${BlogById.data.image}')`,
                }}
            >
                <div className="w-full h-full  min-h-[420px]  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl mt-11">
                                {BlogById.data.title}
                            </h1>
                            <p className="mt-7 text-lg leading-6 max-md:max-w-full ">
                                {BlogById.data.short_description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex lg:flex-row flex-col lg:px-[108px] md:px-[60px] px-[30px] gap-[65px] mt-[70px] mb-[120px]">
                <nav className="flex flex-col text-xs font-medium tracking-wide leading-relaxed uppercase whitespace-nowrap text-slate-900">
                    <a
                        href="https://facebook.com"
                        className="flex gap-4 items-center max-w-full w-[119px]"
                        aria-label="Visit our Facebook page"
                    >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/06ef69cf610fcf062aef6e6026c15ecc68fd7d39120ea1646af7dbd4b13636e4?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt="Facebook icon"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <span className="self-stretch my-auto">Facebook</span>
                    </a>

                    <a
                        href="https://instagram.com"
                        className="flex gap-4 items-center mt-4 max-w-full w-[119px]"
                        aria-label="Visit our Instagram page"
                    >
                        {' '}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d921f1c989076a037e2748df56598b4930ddc84b91a740ac54cf13e1d704dfdb?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt="Instagram icon"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <span className="self-stretch my-auto">Instagram</span>
                    </a>
                    <a
                        className="flex gap-4 items-center mt-4 max-w-full w-[119px]"
                        aria-label="Visit our Instagram page"
                    >
                        {' '}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                                stroke="#2858A4"
                                stroke-width="0.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 12C3.6 7.903 7.336 5 12 5C16.664 5 20.4 7.903 22 12C20.4 16.097 16.664 19 12 19C7.336 19 3.6 16.097 2 12Z"
                                stroke="#2858A4"
                                stroke-width="0.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span className="self-stretch my-auto">
                            {BlogById.data.views}
                        </span>
                    </a>
                </nav>
                <div className="flex flex-col lg:w-[90%] w-full ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h1 className="text-4xl font-medium tracking-tight leading-10 text-slate-900 max-md:max-w-full">
                            {BlogById.data.title}
                        </h1>
                        <div
                            className="mt-4 text-base tracking-wide leading-7 text-neutral-600 max-md:max-w-full"
                            dangerouslySetInnerHTML={{
                                __html: BlogById.data.description,
                            }}
                        />
                    </div>
                    {/* {articleSections.map((section, index) => (
                        <ArticleSection key={index} section={section} />
                    ))} */}
                </div>
                <OtherBlogs />
            </section>
            <section className="w-full flex justify-center flex-col mb-[120px]">
                <h2 className="text-[48px] font-medium text-center mb-[60px]">
                    Lorem Ipsum
                </h2>
                <BlogSwiper />
            </section>
            {/* <NewsSection /> */}
            <Footer />
            <img
                alt="bgimg"
                src="/svg/bgAnimateIcon.svg"
                className=" absolute top-[200vh] left-0 "
            />
        </div>
    );
}
