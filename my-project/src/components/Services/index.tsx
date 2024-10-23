import * as React from 'react';
import { ServiceCard } from './ServiceCard.tsx';

const servicesData = [
    {
        title: 'Dəniz nəqliyyatı',
        description:
            'Konteynerlərdə yüklərin daşınması, gəmilərin və barjaların kirayələnməsi, terminal əməliyyatları və limanlarda gömrük rəsmiləşdirilməsi',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/85ad817edcbb739d056408163c1214b5d638ff95e05569a375e265a221fc8d2d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        title: 'Multimodal nəqliyyat',
        description:
            'Şərtləri və xərcləri optimallaşdırmaq üçün fərdi daşıma sxeminin inkişafı ilə yerli və beynəlxalq yük daşımaları "qapıdan qapıya"',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/84875b39da1d7736989377a5f6df5f4b95f5470f96f20b0ec9a0b9b3e1ca9571?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        title: 'Yük daşımaları',
        description:
            'LTL/FTL yükləri, o cümlədən böyük ölçülü, ağır, təhlükəli, kövrək, tez xarab olan və temperatura həssas yüklər',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/84875b39da1d7736989377a5f6df5f4b95f5470f96f20b0ec9a0b9b3e1ca9571?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        title: 'Dəmir yolu nəqliyyatı',
        description:
            'Böyük ölçülü yüklərin sxemlərinin işlənib hazırlanması və xüsusi temperatur tələbləri ilə müxtəlif qeyri-standart yüklərin, o cümlədən təhlükəli və tez xarab olan yüklərin daşınmasının təşkili',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/bf3fdcff6c04aa3b9583d9d696b2a3d2523fbdc8de990d8d10084f4cb4c8dab8?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    {
        title: 'Hava nəqliyyatı',
        description:
            'İxrac/idxal, tranzit, təcili çatdırılma, o cümlədən təhlükəli və tez xarab olan mallar. Təyyarə ilə charter daşınması',
        imageUrl:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/68121318f45ca54c21961fe0cb44310d860ebb528bb0f9ce59582606f7f171f9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
];

export const ServicesLayout: React.FC = () => {
    return (
        <div className="flex flex-col items-center pr-2 mb-[120px]">
            <h1 className="text-5xl font-medium text-black max-md:text-4xl">
                Lorem Ipsum
            </h1>

            <ServiceCard
                title={servicesData[0].title}
                description={servicesData[0].description}
                imageUrl={servicesData[0].imageUrl}
                imagePosition="top"
            />

            <section className="self-stretch max-md:max-w-full justify-center ">
                <div className="flex gap-[14%] lg:flex-row flex-col justify-center items-center">
                    <div className="flex flex-col max-w-[480px]">
                        <div className="flex z-10 flex-col  w-full text-right max-md:max-w-full ">
                            <ServiceCard
                                title={servicesData[1].title}
                                description={servicesData[1].description}
                                imageUrl={servicesData[1].imageUrl}
                            />
                            <ServiceCard
                                title={servicesData[1].title}
                                description={servicesData[1].description}
                                imageUrl={servicesData[1].imageUrl}
                            />
                        </div>
                    </div>

                    <div className=" absolute  w-full  justify-center lg:flex hidden">
                        <div className="flex flex-col  w-[22%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col justify-center px-12 py-12 mt-3 border border-sky-900 border-solid rounded-[330px] max-md:px-5">
                                <div className="flex overflow-hidden flex-col justify-center items-center px-11 bg-white aspect-square rounded-[151px] shadow-[0px_0px_11px_rgba(0,0,0,0.12)] max-md:px-5">
                                    <img
                                        loading="lazy"
                                        src={servicesData[2].imageUrl}
                                        alt="Service icon"
                                        className="object-contain aspect-[1.14] w-[118px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col   max-w-[480px]">
                        <div className="flex flex-col w-full max-md:max-w-full ">
                            <ServiceCard
                                title={servicesData[2].title}
                                description={servicesData[2].description}
                                imageUrl={servicesData[2].imageUrl}
                                imagePosition="left"
                            />

                            <ServiceCard
                                title={servicesData[3].title}
                                description={servicesData[3].description}
                                imageUrl={servicesData[3].imageUrl}
                                imagePosition="left"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex z-10 flex-col justify-center  max-w-full text-center w-[479px]">
                <ServiceCard
                    title={servicesData[4].title}
                    description={servicesData[4].description}
                    imageUrl={servicesData[4].imageUrl}
                    imagePosition="bottom"
                />
            </section>
        </div>
    );
};
