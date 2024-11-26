import * as React from 'react';
import { ServiceCard } from './ServiceCard.tsx';
import { fetchAservices, fetchService_extra } from '../../Services/Requests.js';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading.tsx';
import { useRecoilValue } from 'recoil';
import { Languege } from '../../Atom/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';

export const ServicesLayout: React.FC = () => {
    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: Service_extra,
        isLoading: loadingService_extra,
        error: errorService_extra,
    } = useQuery({
        queryKey: ['Service_extra', language],
        queryFn: fetchService_extra,
    });
    const {
        data: Services,
        isLoading: loadingServices,
        error: errorServices,
    } = useQuery({
        queryKey: ['Services', language],
        queryFn: fetchAservices,
    });
    console.log('Services:', Services);
    React.useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Adjust duration and other options as needed
    }, []);
    if (loadingServices) return <Loading />;
    return (
        <div className=" w-full flex justify-center max-w-[100wh]">
            <div className="flex flex-col items-center w-full pr-2 mb-[120px] mt-[120px] max-w-[1224px] lg:min-w-[1224px]">
                <h1 className="text-5xl font-medium text-black max-md:text-4xl text-wrap">
                    {Service_extra?.data[0]?.main_title}{' '}
                </h1>

                {/* <ServiceCard
                    title={Services.data[0]?.title}
                    description={Services.data[0]?.short_description}
                    imageUrl={`https://regional.epart.az/storage/${Services.data[0]?.icon_about}`}
                    imagePosition="top"
                /> */}

                <section className="self-stretch max-md:max-w-full justify-center ">
                    <div className="flex gap-[13%] lg:flex-row flex-col justify-center items-center">
                        <div className="flex flex-col w-full justify-end items-end">
                            <div className="flex z-10 flex-col  w-full text-right max-md:max-w-full gap-[45px]  justify-end lg:items-end items-center">
                                <HashLink
                                    to={`/services/#${Services.data[0]?.slug}`}
                                    scroll={(el) =>
                                        el.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    }
                                >
                                    <ServiceCard
                                        title={Services.data[0]?.title}
                                        description={
                                            Services.data[0]?.short_description
                                        }
                                        imageUrl={`https://regional.epart.az/storage/${Services.data[0]?.icon_about}`}
                                    />
                                </HashLink>
                                <div className="lg:mr-[22%] mr-0 flex flex-col gap-[45px]">
                                    <HashLink
                                        to={`/services/#${Services.data[1]?.slug}`}
                                        scroll={(el) =>
                                            el.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                        }
                                    >
                                        <ServiceCard
                                            title={Services.data[1]?.title}
                                            description={
                                                Services.data[1]
                                                    ?.short_description
                                            }
                                            imageUrl={`https://regional.epart.az/storage/${Services.data[1]?.icon_about}`}
                                        />
                                    </HashLink>{' '}
                                    <HashLink
                                        to={`/services/#${Services.data[2]?.slug}`}
                                        scroll={(el) =>
                                            el.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                        }
                                    >
                                        <ServiceCard
                                            title={Services.data[2]?.title}
                                            description={
                                                Services.data[2]
                                                    ?.short_description
                                            }
                                            imageUrl={`https://regional.epart.az/storage/${Services.data[2]?.icon_about}`}
                                        />
                                    </HashLink>
                                </div>

                                <HashLink
                                    to={`/services/#${Services.data[3]?.slug}`}
                                    scroll={(el) =>
                                        el.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    }
                                >
                                    <ServiceCard
                                        title={Services.data[3]?.title}
                                        description={
                                            Services.data[3]?.short_description
                                        }
                                        imageUrl={`https://regional.epart.az/storage/${Services.data[3]?.icon_about}`}
                                    />
                                </HashLink>
                            </div>
                        </div>
                        <div className=" absolute  w-full  justify-center lg:flex hidden ">
                            <div className="flex flex-col  w-[22%] max-md:ml-0 max-md:w-full justify-center items-center">
                                <div className="flex flex-col justify-center px-12 py-12 mt-3  border-[#2858A4] border-[10px] border-solid rounded-[330px] max-md:px-5 w-[520px]">
                                    <div className="flex overflow-hidden flex-col justify-center items-center px-11 bg-white aspect-square rounded-full shadow-[0px_0px_11px_rgba(0,0,0,0.12)] max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src={`https://regional.epart.az/storage/${Service_extra?.data[0]?.image}`}
                                            alt="Service icon"
                                            className="object-contain aspect-[1.14] w-[118px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col   w-full">
                            <div className="flex flex-col w-full max-md:max-w-full gap-[45px] lg:items-start items-center">
                                <HashLink
                                    to={`/services/#${Services.data[4]?.slug}`}
                                    scroll={(el) =>
                                        el.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    }
                                >
                                    <ServiceCard
                                        title={Services.data[4]?.title}
                                        description={
                                            Services.data[4]?.short_description
                                        }
                                        imageUrl={`https://regional.epart.az/storage/${Services.data[4]?.icon_about}`}
                                        imagePosition="left"
                                    />
                                </HashLink>
                                <div className="lg:ml-[22%] ml-0 flex flex-col gap-[45px]">
                                    <HashLink
                                        to={`/services/#${Services.data[5]?.slug}`}
                                        scroll={(el) =>
                                            el.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                        }
                                    >
                                        <ServiceCard
                                            title={Services.data[5]?.title}
                                            description={
                                                Services.data[5]
                                                    ?.short_description
                                            }
                                            imageUrl={`https://regional.epart.az/storage/${Services.data[5]?.icon_about}`}
                                            imagePosition="left"
                                        />
                                    </HashLink>
                                    <HashLink
                                        to={`/services/#${Services.data[6]?.slug}`}
                                        scroll={(el) =>
                                            el.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                        }
                                    >
                                        <ServiceCard
                                            title={Services.data[6]?.title}
                                            description={
                                                Services.data[6]
                                                    ?.short_description
                                            }
                                            imageUrl={`https://regional.epart.az/storage/${Services.data[6]?.icon_about}`}
                                            imagePosition="left"
                                        />
                                    </HashLink>
                                </div>

                                <HashLink
                                    to={`/services/#${Services.data[7]?.slug}`}
                                    scroll={(el) =>
                                        el.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    }
                                >
                                    <ServiceCard
                                        title={Services.data[7]?.title}
                                        description={
                                            Services.data[7]?.short_description
                                        }
                                        imageUrl={`https://regional.epart.az/storage/${Services.data[7]?.icon_about}`}
                                        imagePosition="left"
                                    />
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex z-10 flex-col justify-center  max-w-full text-center w-[479px] ">
                    {/* <ServiceCard
                        title={Services.data[5]?.title}
                        description={Services.data[5]?.short_description}
                        imageUrl={`https://regional.epart.az/storage/${Services.data[5]?.icon_about}`}
                        imagePosition="bottom"
                    /> */}
                </section>
            </div>
        </div>
    );
};
