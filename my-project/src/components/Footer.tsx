import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom';
import { fetchFooterData } from '../Services/Requests';

const Footer = ({ id }: { id?: string }) => {
    const footerData = [
        {
            title: 'Xidmətlər',
            items: [
                'Air Transport',
                'Sea Transport',
                'Road Transport',
                'Lorem Transport',
            ],
        },
        {
            title: 'Gizlilik siyasəti',
            items: ['Şərtlər və qaydalar', 'Şəxsi məlumarların gizliliyi'],
        },
        {
            title: 'Şirkət',
            items: ['Regional Group haqqında', 'Lorem Ipsum'],
        },
    ];
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: FooterData,
        isLoading: loadingFooterData,
        error: errorFooterData,
    } = useQuery({
        queryKey: ['FooterData', language],
        queryFn: fetchFooterData,
    });
    // console.log(FooterData);

    return (
        <footer
            className="flex overflow-hidden flex-col justify-center items-center px-20 py-11 bg-neutral-900 max-md:px-5 z-40"
            id={id}
        >
            <div className="flex flex-col w-full  max-md:max-w-full ">
                <div className="flex gap-10 items-start w-full flex-wrap max-md:max-w-full justify-between">
                    <div className="flex flex-col text-base leading-6 text-white">
                        <p>
                            Fermentum nulla integer consequat porttitor vitae
                            nulla scelerisque at
                        </p>
                        <div className="flex flex-row gap-6 mt-8">
                            {FooterData?.filter((item: any) =>
                                item.title === 'Privacy Policy' ? false : true
                            )?.map((item: any) => (
                                <a href={item?.links} key={item?.links}>
                                    <img
                                        src={`https://regional.epart.az/storage/${item?.icon}`}
                                        alt=""
                                        className="w-[22px] h-[22px]"
                                    />
                                </a>
                            ))}
                        </div>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4340594156e3153af78d8c8f01367c7b78f29e8a8712bb31125953e11dfbb8ca?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="Company logo"
                            className="object-contain mt-8 max-w-full aspect-[9.62] w-[202px]"
                        /> */}
                    </div>
                    {footerData.map((column, index) => (
                        <div
                            key={index}
                            className="flex flex-col self-stretch text-base text-white"
                        >
                            <h2 className="font-bold">{column.title}</h2>
                            <nav className="flex flex-col mt-9">
                                {column.items.map(
                                    (item: any, itemIndex: number) => (
                                        <a
                                            href="//"
                                            key={itemIndex}
                                            className={
                                                itemIndex > 0 ? 'mt-3' : ''
                                            }
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </nav>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mt-10 text-sm text-white max-md:max-w-full">
                    <hr className="w-full min-h-0 border border-solid border-zinc-800 max-md:max-w-full" />
                    <p className="mt-6 max-md:max-w-full">
                        Copyright © {new Date().getFullYear()}{' '}
                        <span className="font-bold text-white">
                            Regional Group
                        </span>
                        . Bütün hüquqlar qorunur.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
