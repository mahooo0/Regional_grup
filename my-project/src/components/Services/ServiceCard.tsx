import * as React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition?: 'left' | 'right' | 'bottom' | 'top';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    imageUrl,
    imagePosition = 'right',
}) => {
    switch (imagePosition) {
        case 'top':
            return (
                <section className="flex z-10 lg:flex-col-reverse flex-col lg:mb-[-70px] mb-[0] justify-center items-center mt-16  text-center max-w-[479px] gap-6  ">
                    <div className=" rounded-[151px] w-[70px] flex justify-center items-center h-[70px] bg-[#2858A4]">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={title}
                            className="object-contain shrink-0  my-auto aspect-square w-[32px]"
                        />
                    </div>

                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl font-medium text-black text-wrap">
                            {title}
                        </h3>
                        <p className="mt-3.5 text-base leading-7 text-neutral-500">
                            {description}
                        </p>
                    </div>
                </section>
            );
        case 'bottom':
            return (
                <section className="flex z-10 flex-col justify-center items-center   text-center max-w-[479px] gap-6   lg:mt-[-60px] mt-0">
                    <div className=" rounded-[151px] w-[70px] flex justify-center items-center bg-[#2858A4] h-[70px]">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={title}
                            className="object-contain shrink-0  my-auto aspect-square  w-[32px]"
                        />
                    </div>

                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl font-medium text-black text-wrap">
                            {title}
                        </h3>
                        <p className="mt-3.5 text-base leading-7 text-neutral-500">
                            {description}
                        </p>
                    </div>
                </section>
            );
        case 'left':
            return (
                <section className="flex z-10 lg:flex-row flex-col justify-center items-center   text-center max-w-[479px] gap-6  min-h-[180px] lg:mt-0 mt-6 ">
                    <div className=" rounded-[151px] w-[70px] flex justify-center items-center bg-[#2858A4] h-[70px]">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={title}
                            className="object-contain shrink-0  my-auto aspect-square w-[32px]"
                        />
                    </div>

                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl lg:text-left text-center font-medium text-black text-wrap">
                            {title}
                        </h3>
                        <p className="mt-3.5 lg:text-left text-center leading-7 text-neutral-500">
                            {description}
                        </p>
                    </div>
                </section>
            );
        case 'right':
            return (
                <section className="flex z-10 lg:flex-row flex-col-reverse justify-center items-center   text-center max-w-[479px] gap-6  min-h-[180px]  lg:mt-0 mt-6">
                    <>
                        <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                            <h3 className="text-2xl font-medium lg:text-right text-center text-black text-wrap">
                                {title}
                            </h3>
                            <p className="mt-3.5 text-base lg:text-right text-center leading-7 text-neutral-500">
                                {description}
                            </p>
                        </div>
                        <div className=" rounded-[151px] w-[70px] flex justify-center items-center bg-[#2858A4] h-[70px]">
                            <img
                                loading="lazy"
                                src={imageUrl}
                                alt={title}
                                className="object-contain shrink-0  my-auto aspect-square  w-[32px]"
                            />
                        </div>
                    </>
                </section>
            );
    }
};
