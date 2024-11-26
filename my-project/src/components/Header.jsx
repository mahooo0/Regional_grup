import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { noWait, useRecoilState } from 'recoil';
import { CurrentServiceState, Languege } from '../Atom';
import LangText from './langugeComponent.tsx';
import { useLangText } from '../hooks/useLangText.tsx';
import { fetchAservices } from '../Services/Requests.js';
import { useQuery } from '@tanstack/react-query';
import { HashLink } from 'react-router-hash-link';

const languages = [
    { code: 'az', name: 'Azərbaycan', flag: '/svg/az.svg' },
    {
        code: 'en',
        name: 'English',
        flag: '/svg/en.svg',
    },
    { code: 'ru', name: 'Русский', flag: '/svg/ru.svg' },
];

export default function Header({ isBlog = false, ishome = false }) {
    const [sohowAside, setsohowAside] = useState(false);
    const [sohowSech, setsohowSech] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const storedLangCode = localStorage.getItem('Accept-Language');
        return storedLangCode
            ? languages.find((lang) => lang.code === storedLangCode) ||
                  languages[0]
            : languages[0];
    });

    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [language, setLanguie] = useRecoilState(Languege);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentService, setCurrentService] =
        useRecoilState(CurrentServiceState);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsLanguageDropdownOpen(false);
        localStorage.setItem('Accept-Language', language.code);
        setLanguie(language.code);
    };
    const {
        data: Services,
        isLoading: loadingServices,
        error: errorServices,
    } = useQuery({
        queryKey: ['Services', language],
        queryFn: fetchAservices,
    });
    useEffect(() => {
        // Retrieve language from localStorage if available
        const storedLangCode = localStorage.getItem('Accept-Language');
        if (storedLangCode) {
            const language = languages.find(
                (lang) => lang.code === storedLangCode
            );
            if (language) setSelectedLanguage(language);
        }
    }, []);
    if (loadingServices) return <div></div>;
    if (errorServices) return <div>Error loading data</div>;
    const filteredServices = Services?.data?.filter((service) =>
        service?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    // useEffect(() => {
    //     // Save selected language to localStorage on change
    //     localStorage.setItem('Accept-Language', selectedLanguage.code);
    // }, [selectedLanguage]);
    const handleBlur = () => {
        setTimeout(() => {
            setsohowSech(false);
        }, 100);
    };
    return (
        <div>
            <div className=" absolute  lg:block  hidden top-0 w-full z-50">
                <div className="relative">
                    <svg
                        className="drop-shadow-2xl"
                        width="100%"
                        viewBox="0 0 1440 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="w-full"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1446 6C1446 1.58172 1442.42 -2 1438 -2H2C-2.41828 -2 -6 1.58172 -6 6C-6 10.4183 -2.41828 14 2 14H71C91.4345 14 108 30.5655 108 51C108 71.4345 124.565 88 145 88H325C345.435 88 362 71.4345 362 51C362 30.5655 378.565 14 399 14H1438C1442.42 14 1446 10.4183 1446 6Z"
                            fill="white"
                        />
                    </svg>
                    <div className=" w-[20%] h-full z-50 absolute top-0 left-0  flex justify-end">
                        <Link to="/">
                            <img
                                className="h-full"
                                src="/imges/logo.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div
                        className={` w-[50%] h-full z-50 absolute top-0 ${
                            ishome ? 'left-[25%]' : 'left-[20%]'
                        }   flex items-center justify-center ml-[13px]`}
                    >
                        <ul
                            className={`${
                                isBlog ? 'text-black' : 'text-white'
                            } ${
                                ishome ? ' w-full' : ' gap-4'
                            }  text-[16px] font-normal flex flex-row`}
                        >
                            <div
                                className={`flex flex-row gap-4 ${
                                    ishome ? 'w-[50%] justify-center' : ''
                                }`}
                            >
                                <li>
                                    <Link to="/">
                                        {' '}
                                        <LangText
                                            azText="Əsas"
                                            enText="Home"
                                            ruText="Главная"
                                        />
                                    </Link>
                                </li>
                                <li className="text-nowrap">
                                    <Link to="/about">
                                        <LangText
                                            azText="Haqqımızda"
                                            enText="About Us"
                                            ruText="О нас"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        {' '}
                                        <LangText
                                            azText="Xidmətlər"
                                            enText="Services"
                                            ruText="Услуги"
                                        />
                                    </Link>
                                </li>
                            </div>
                            <div
                                className={`flex flex-row gap-4 ${
                                    ishome ? 'w-[50%] justify-center' : ''
                                }`}
                            >
                                <li className="ml-2">
                                    <Link to="/news">
                                        {' '}
                                        <LangText
                                            azText="Blog"
                                            enText="Blog"
                                            ruText="Блог"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/galery">
                                        <LangText
                                            azText="Galereya"
                                            enText="Gallery"
                                            ruText="Галерея"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        {' '}
                                        <LangText
                                            azText="Əlaqə"
                                            enText="Contact"
                                            ruText="Связь"
                                        />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="w-[25%] h-full absolute top-0 right-0 flex justify-center items-center">
                        <div className="w-[212px] h-fit rounded-xl px-[16px] py-[6px] bg-white  relative flex-row">
                            <input
                                type="text"
                                name=""
                                id=""
                                onFocus={() => setsohowSech(true)}
                                onBlur={() => handleBlur(false)}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="bg-none focus:outline-none w-full"
                                placeholder={'Search'}
                            />

                            <button className=" absolute top-[5px] right-3">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17 17.5L21 21.5M3 11.5C3 13.6217 3.84285 15.6566 5.34315 17.1569C6.84344 18.6571 8.87827 19.5 11 19.5C13.1217 19.5 15.1566 18.6571 16.6569 17.1569C18.1571 15.6566 19 13.6217 19 11.5C19 9.37827 18.1571 7.34344 16.6569 5.84315C15.1566 4.34285 13.1217 3.5 11 3.5C8.87827 3.5 6.84344 4.34285 5.34315 5.84315C3.84285 7.34344 3 9.37827 3 11.5Z"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>

                            <div
                                style={{
                                    ...(sohowSech && searchTerm
                                        ? { borderRadius: '8px' }
                                        : { display: 'none' }),
                                    '--scrollbar-width': '4px',
                                }}
                                className="w-full bg-white left-0 h-fit max-h-[300px] overflow-y-auto absolute top-[27px] rounded-lg overflow-hidden [&::-webkit-scrollbar]:w-[var(--scrollbar-width)] [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent"
                            >
                                {' '}
                                {filteredServices.length > 0 ? (
                                    filteredServices.map((service) => (
                                        <HashLink
                                            to={`/services/#${service?.slug}`}
                                            scroll={(el) =>
                                                el.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start',
                                                })
                                            }
                                        >
                                            <div
                                                onClick={() => {
                                                    setCurrentService(
                                                        service?.slug
                                                    );
                                                }}
                                                key={service.id}
                                                className="p-2  bg-white hover:bg-slate-300"
                                            >
                                                <h2 className="text-lg ">
                                                    {service.title}
                                                </h2>
                                            </div>
                                        </HashLink>
                                    ))
                                ) : (
                                    <div className="p-2  bg-white hover:bg-slate-300">
                                        <h2 className="text-lg ">
                                            No services found.
                                        </h2>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="relative flex flex-col leading-none text-black whitespace-nowrap w-[70px]">
                            <button
                                className="flex gap-1.5 justify-center items-center"
                                onClick={() =>
                                    setIsLanguageDropdownOpen(
                                        !isLanguageDropdownOpen
                                    )
                                }
                                aria-haspopup="listbox"
                                aria-expanded={isLanguageDropdownOpen}
                            >
                                <img
                                    loading="lazy"
                                    src={selectedLanguage.flag}
                                    alt={`${selectedLanguage.name} flag`}
                                    className="object-contain shrink-0 self-stretch my-auto w-5  aspect-square"
                                />
                                <div className="self-stretch my-auto text-white">
                                    {selectedLanguage.code}
                                </div>
                            </button>
                            {isLanguageDropdownOpen && (
                                <ul
                                    className="absolute top-full left-[-70px] mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-fit"
                                    role="listbox"
                                >
                                    {languages.map((language) => (
                                        <li key={language.code}>
                                            <button
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 "
                                                onClick={() =>
                                                    handleLanguageChange(
                                                        language
                                                    )
                                                }
                                                role="option"
                                                aria-selected={
                                                    language.code ===
                                                    selectedLanguage.code
                                                }
                                            >
                                                <img
                                                    src={language.flag}
                                                    alt={`${language.name} flag`}
                                                    className="w-5 h-5 "
                                                />
                                                {language.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className=" absolute lg:hidden  block top-0 w-full z-50 min-h-[60px] ">
                <img
                    src="/imges/headerbg.png"
                    alt=" "
                    className="w-full shadow-2xl max-h-[80px] lg:hidden md:hidden block"
                />
                <div className=" absolute top-0 w-full h-full flex lg:justify-around md:justify-between justify-around items-center lg:px-0 md:px-6 px-0">
                    <div className="relative ml-3">
                        <div onClick={() => setsohowAside((prew) => !prew)}>
                            <div className="w-[33px] h-[33px]   aspect-square rounded-full bg-white bg-opacity-40 bg-blur-[4px] flex justify-center items-center">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                                        fill={isBlog ? 'black' : 'white'}
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            className={`absolute  ${
                                sohowAside ? '' : 'hidden'
                            }  right-[-160px] z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/" className="w-full">
                                    <LangText
                                        azText="Əsas"
                                        enText="Home"
                                        ruText="Главная"
                                    />
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/about">
                                    {' '}
                                    <LangText
                                        azText="Haqqımızda"
                                        enText="About Us"
                                        ruText="О нас"
                                    />
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/services">
                                    {' '}
                                    <LangText
                                        azText="Xidmətlər"
                                        enText="Services"
                                        ruText="Услуги"
                                    />
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700  ">
                                <Link to="/news">
                                    {' '}
                                    <LangText
                                        azText="Blog"
                                        enText="Blog"
                                        ruText="Блог"
                                    />
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/galery">
                                    {' '}
                                    <LangText
                                        azText="Galereya"
                                        enText="Gallery"
                                        ruText="Галерея"
                                    />
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <LangText
                                    azText="Əlaqə"
                                    enText="Contact"
                                    ruText="Связь"
                                />{' '}
                            </div>
                        </div>
                    </div>
                    <Link to="/">
                        <img
                            className="w-[64px] h-[64px] mt-[-3%] lg:block md:hidden block"
                            src="/imges/logo.png"
                            alt=""
                        />
                    </Link>

                    {/* <div className="w-[33px] h-[33px] aspect-square rounded-full bg-white bg-opacity-40 bg-blur-[4px] flex justify-center items-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div> */}
                    <div className="relative flex flex-col leading-none text-black whitespace-nowrap w-[70px]">
                        <button
                            className="flex gap-1.5 justify-center items-center"
                            onClick={() =>
                                setIsLanguageDropdownOpen(
                                    !isLanguageDropdownOpen
                                )
                            }
                            aria-haspopup="listbox"
                            aria-expanded={isLanguageDropdownOpen}
                        >
                            <img
                                loading="lazy"
                                src={selectedLanguage.flag}
                                alt={`${selectedLanguage.name} flag`}
                                className="object-contain shrink-0 self-stretch my-auto w-5  aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                {selectedLanguage.code}
                            </div>
                        </button>
                        {isLanguageDropdownOpen && (
                            <ul
                                className="absolute top-full left-[-60px] mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                                role="listbox"
                            >
                                {languages.map((language) => (
                                    <li key={language.code}>
                                        <button
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                            onClick={() =>
                                                handleLanguageChange(language)
                                            }
                                            role="option"
                                            aria-selected={
                                                language.code ===
                                                selectedLanguage.code
                                            }
                                        >
                                            <img
                                                src={language.flag}
                                                alt={`${language.name} flag`}
                                                className="w-5 h-5 "
                                            />
                                            {language.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
