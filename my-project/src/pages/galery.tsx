import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { Pagination } from '../components/Pagination.tsx';
import GalerySwipper from '../components/GalerySwipper.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetcGalery, fetcGaleryBunner } from '../Services/Requests.js';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom/index.js';
import Loading from '../components/Loading.tsx';

export default function Galery() {
    const [show, setshow] = useState<boolean>(false);
    const [CurrentImg, setCurrentImg] = useState<any>(null);
    const [page, setpage] = useState<number>(1);

    const [language, setLanguie] = useRecoilValue(Languege);

    const {
        data: GAlery,
        isLoading: loadingGAlery,
        error: errorGAlery,
    } = useQuery({
        queryKey: ['Galery', page],
        queryFn: () => fetcGalery(page),
    });
    const {
        data: GAleryBunner,
        isLoading: loadingGAleryBunner,
        error: errorGAleryBunner,
    } = useQuery({
        queryKey: ['GaleryBunner', language],
        queryFn: fetcGaleryBunner,
    });
    if (loadingGAlery || loadingGAleryBunner) return <Loading />;
    if (errorGAlery || errorGAleryBunner) return <div>Error loading data</div>;
    console.log('GAlery:0', GAlery);

    return (
        <div>
            <Header />
            <section
                className="flex overflow-hidden flex-col items-center w-full text-white bg-black bg-opacity-70 max-md:max-w-full bg-cover bg-center  min-h-[420px]"
                style={{
                    backgroundImage: `url('https://regional.epart.az/storage/${GAleryBunner.data[0].image}')`,
                }}
            >
                <div className="w-full h-full  bg-black bg-opacity-70  px-20 pt-20 pb-32 flex justify-center  min-h-[420px]">
                    <div className="flex flex-col mb-0 max-w-full w-[856px] max-md:mb-2.5">
                        <div className="flex flex-col w-full text-center max-md:max-w-full justify-center items-center h-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                {GAleryBunner.data[0].title}
                            </h1>
                            <div
                                className="mt-4"
                                dangerouslySetInnerHTML={{
                                    __html: GAleryBunner.data[0].description,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[28px] lg:px-[108px] md:px-[60px] px-[30px] w-full flex flex-col gap-6 ">
                <div className=" w-full lg:h-[100vh] h-fit flex lg:flex-row flex-col gap-6 ">
                    <div
                        className={`${
                            GAlery.data[3] ? 'lg:w-1/2' : ''
                        } w-full h-full  flex flex-row gap-6`}
                    >
                        <div
                            className={`${
                                GAlery.data[2] ? 'w-1/2' : ' w-full'
                            }  flex flex-col gap-6`}
                        >
                            <div
                                className="h-1/2 w-full rounded-2xl flex items-end  relative overflow-hidden "
                                onClick={() => {
                                    setshow(true);
                                    setCurrentImg(GAlery.data[0]);
                                }}
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[0].image}')`,
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>

                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            {GAlery.data[1] && (
                                <div
                                    onClick={() => {
                                        setshow(true);
                                        setCurrentImg(GAlery.data[1]);
                                    }}
                                    className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[1].image}')`,
                                    }}
                                >
                                    <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                    <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                        <img
                                            alt="image"
                                            src="/imges/image.png"
                                            className="w-[24px]"
                                        />
                                    </div>{' '}
                                </div>
                            )}
                        </div>
                        {GAlery.data[2] && (
                            <div
                                onClick={() => {
                                    setshow(true);
                                    setCurrentImg(GAlery.data[2]);
                                }}
                                className=" w-1/2 rounded-2xl flex items-end relative overflow-hidden"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[2].image}')`,
                                }}
                            >
                                {' '}
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {GAlery.data[3] && (
                        <div className="lg:w-1/2 w-full h-[100vh]  flex flex-col gap-6">
                            <div
                                onClick={() => {
                                    setshow(true);
                                    setCurrentImg(GAlery.data[3]);
                                }}
                                className={`w-full ${
                                    GAlery.data[4] ? 'h-1/2' : 'h-full'
                                } rounded-2xl flex items-end relative overflow-hidden`}
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[3].image}')`,
                                }}
                            >
                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                    <img
                                        alt="image"
                                        src="/imges/image.png"
                                        className="w-[24px]"
                                    />
                                </div>
                            </div>
                            {GAlery.data[4] && (
                                <div className="w-full h-1/2 flex flex-row gap-6">
                                    {GAlery.data[4] && (
                                        <div
                                            onClick={() => {
                                                setshow(true);
                                                setCurrentImg(GAlery.data[4]);
                                            }}
                                            className={`${
                                                GAlery.data[5]
                                                    ? 'w-1/2 '
                                                    : 'w-full'
                                            } h-full rounded-2xl flex items-end relative overflow-hidden`}
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[4].image}')`,
                                            }}
                                        >
                                            {' '}
                                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                                <img
                                                    alt="image"
                                                    src="/imges/image.png"
                                                    className="w-[24px]"
                                                />
                                            </div>{' '}
                                        </div>
                                    )}
                                    {GAlery.data[5] && (
                                        <div
                                            onClick={() => {
                                                setshow(true);
                                                setCurrentImg(GAlery.data[5]);
                                            }}
                                            className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[5].image}')`,
                                            }}
                                        >
                                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                                <img
                                                    alt="image"
                                                    src="/imges/image.png"
                                                    className="w-[24px]"
                                                />
                                            </div>{' '}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {GAlery.data[6] && (
                    <div className=" w-full lg:h-[100vh] h-fit flex lg:flex-row flex-col gap-6 ">
                        <div
                            className={`${
                                GAlery.data[9] ? 'lg:w-1/2' : 'w-full'
                            } w-full h-full  flex flex-row gap-6`}
                        >
                            <div
                                className={`${
                                    GAlery.data[8] ? 'w-1/2' : ' w-full'
                                }   flex flex-col gap-6`}
                            >
                                {GAlery.data[6] && (
                                    <div
                                        onClick={() => {
                                            setshow(true);
                                            setCurrentImg(GAlery.data[6]);
                                        }}
                                        className="h-1/2 w-full rounded-2xl flex items-end  relative overflow-hidden "
                                        style={{
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[6].image}')`,
                                        }}
                                    >
                                        <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>

                                        <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                            <img
                                                alt="image"
                                                src="/imges/image.png"
                                                className="w-[24px]"
                                            />
                                        </div>
                                    </div>
                                )}
                                {GAlery.data[7] && (
                                    <div
                                        onClick={() => {
                                            setshow(true);
                                            setCurrentImg(GAlery.data[7]);
                                        }}
                                        className="h-1/2 w-full rounded-2xl flex items-end relative overflow-hidden"
                                        style={{
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[7].image}')`,
                                        }}
                                    >
                                        <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                        <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                            <img
                                                alt="image"
                                                src="/imges/image.png"
                                                className="w-[24px]"
                                            />
                                        </div>{' '}
                                    </div>
                                )}
                            </div>
                            {GAlery.data[8] && (
                                <div
                                    onClick={() => {
                                        setshow(true);
                                        setCurrentImg(GAlery.data[8]);
                                    }}
                                    className=" w-1/2 rounded-2xl flex items-end relative overflow-hidden"
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[8].image}')`,
                                    }}
                                >
                                    {' '}
                                    <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                    <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                        <img
                                            alt="image"
                                            src="/imges/image.png"
                                            className="w-[24px]"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {GAlery.data[9] && (
                            <div className="lg:w-1/2 w-full h-[100vh]  flex flex-col gap-6">
                                <div
                                    onClick={() => {
                                        setshow(true);
                                        setCurrentImg(GAlery.data[9]);
                                    }}
                                    className={`w-full ${
                                        GAlery.data[10] ? 'h-1/2' : ' h-full'
                                    } rounded-2xl flex items-end relative overflow-hidden`}
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url('https://regional.epart.az/storage/${GAlery.data[9].image}')`,
                                    }}
                                >
                                    <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                    <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                        <img
                                            alt="image"
                                            src="/imges/image.png"
                                            className="w-[24px]"
                                        />
                                    </div>
                                </div>
                                {GAlery.data[10] && (
                                    <div className="w-full h-1/2 flex flex-row gap-6">
                                        <div
                                            onClick={() => {
                                                setshow(true);
                                                setCurrentImg(GAlery.data[10]);
                                            }}
                                            className={`${
                                                GAlery.data[11]
                                                    ? 'w-1/2 '
                                                    : 'w-full'
                                            } h-full rounded-2xl flex items-end relative overflow-hidden`}
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundImage:
                                                    "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                            }}
                                        >
                                            {' '}
                                            <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                            <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                                <img
                                                    src="/imges/image.png"
                                                    className="w-[24px]"
                                                />
                                            </div>{' '}
                                        </div>
                                        {GAlery.data[11] && (
                                            <div
                                                onClick={() => {
                                                    setshow(true);
                                                    setCurrentImg(
                                                        GAlery.data[11]
                                                    );
                                                }}
                                                className="w-1/2 h-full rounded-2xl flex items-end relative overflow-hidden"
                                                style={{
                                                    backgroundSize: 'cover',
                                                    backgroundPosition:
                                                        'center',
                                                    backgroundImage:
                                                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                                                }}
                                            >
                                                <div className="w-full h-[180px] bg-gradient-to-b from-transparent to-black"></div>
                                                <div className="flex justify-center items-center w-[48px] aspect-square bg-[#2758A3] rounded-md absolute top-6 left-6">
                                                    <img
                                                        src="/imges/image.png"
                                                        className="w-[24px]"
                                                    />
                                                </div>{' '}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </section>
            <Pagination
                totalPages={GAlery.total_pages}
                currentPage={page}
                onPageChange={(num: number) => {
                    setpage(num);
                }}
            />
            <GalerySwipper show={show} setshow={setshow} data={CurrentImg} />
            <Footer />
        </div>
    );
}
