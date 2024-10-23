import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { OtherBlogs } from '../components/otherBlogs.tsx';
import BlogSwiper from '../components/BlogsSwipper.tsx';

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
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl mt-11">
                                Understanding the Basics of Contract Law for
                                Small Business Owners
                            </h1>
                            <p className="mt-7 text-lg leading-6 max-md:max-w-full ">
                                Learn essential contract law principles to
                                protect your business interests and avoid common
                                pitfalls in contractual agreements.
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
                </nav>
                <div className="flex flex-col lg:w-[90%] w-full ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h1 className="text-4xl font-medium tracking-tight leading-10 text-slate-900 max-md:max-w-full">
                            The Importance of Contract Law for Small Businesses
                        </h1>
                        <p className="mt-4 text-base tracking-wide leading-7 text-neutral-600 max-md:max-w-full">
                            Contracts are the backbone of business transactions,
                            serving as legally binding agreements that define
                            the rights and obligations of parties involved. For
                            small business owners, understanding the basics of
                            contract law is crucial for protecting their
                            interests and minimizing risks. Whether it's a
                            partnership agreement, client contract, or vendor
                            agreement, having a solid grasp of contract
                            fundamentals can help prevent disputes and ensure
                            smooth business operations.
                            <br />
                            <br />
                            Contract law governs the formation, interpretation,
                            and enforcement of agreements, providing a framework
                            for parties to negotiate terms, outline
                            responsibilities, and resolve conflicts. By
                            familiarizing themselves with key contract
                            principles, small business owners can enter into
                            agreements confidently, knowing their rights are
                            protected under the law.
                        </p>
                    </div>
                    {articleSections.map((section, index) => (
                        <ArticleSection key={index} section={section} />
                    ))}
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
        </div>
    );
}
