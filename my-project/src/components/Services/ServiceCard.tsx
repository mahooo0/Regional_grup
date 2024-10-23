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
                <section className="flex z-10 lg:flex-col-reverse flex-col justify-center items-center mt-16  text-center max-w-[479px] gap-6 lg:mb-[-4%] mb-[0]">
                    <img
                        loading="lazy"
                        src={imageUrl}
                        alt={title}
                        className="object-contain shrink-0  my-auto aspect-square rounded-[151px] w-[70px]"
                    />
                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl font-medium text-black">
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
                <section className="flex z-10 flex-col justify-center items-center   text-center max-w-[479px] gap-6 lg:mt-[-5%]  mt-6">
                    <img
                        loading="lazy"
                        src={imageUrl}
                        alt={title}
                        className="object-contain shrink-0  my-auto aspect-square rounded-[151px] w-[70px]"
                    />
                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl font-medium text-black">
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
                    <img
                        loading="lazy"
                        src={imageUrl}
                        alt={title}
                        className="object-contain shrink-0  my-auto aspect-square rounded-[151px] w-[70px]"
                    />
                    <div className="flex flex-col justify-center  my-auto min-w-[240px] w-[306px]">
                        <h3 className="text-2xl font-medium text-black">
                            {title}
                        </h3>
                        <p className="mt-3.5 text-base leading-7 text-neutral-500">
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
                            <h3 className="text-2xl font-medium text-black">
                                {title}
                            </h3>
                            <p className="mt-3.5 text-base leading-7 text-neutral-500">
                                {description}
                            </p>
                        </div>
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={title}
                            className="object-contain shrink-0  my-auto aspect-square rounded-[151px] w-[70px]"
                        />
                    </>
                </section>
            );
    }
};
