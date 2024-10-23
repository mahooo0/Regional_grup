import React from 'react';

export default function Header() {
    return (
        <div>
            <div className=" absolute  lg:block  hidden top-0 w-full z-50">
                <div className="relative">
                    <svg
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
                        {/* <img
                            className="h-full"
                            src="https://s3-alpha-sig.figma.com/img/7e61/1388/9b68b91790cc47d8228cc0648b592052?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf7tNs0k0JK6liW9Gm52aTwdd0SQXAlNWQORiuQ4zaMudAA4cSH01x1X9NLbCD3VMUfwGGB0yY3BR9C8bQWEeGpUCqtZDKMXMPq5bx0mMglwjVR9QuYdaoOLAMLf4UI8WA~xWY9xCDROjWJbvo19ElF8Gj-ENWDuL5~dU1m4Cb4~ku6s6LCT~AhXh935AU3mXZiraGc~rRCf-z6YSBglItLTy-jNNieCp5b0FyXsjvGmnnjh6pzKtacVae3C2MhvKiWI1dKgAjnO76ANR3ikGxQWY1mZTmI1ydrtteVBd3zm0wpMDqp2cUPI8Rm46T8DZscN~qA7eTVbqgLFLiYnHQ__"
                        /> */}
                        <img
                            className="h-full"
                            src="https://s3-alpha-sig.figma.com/img/7e61/1388/9b68b91790cc47d8228cc0648b592052?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf7tNs0k0JK6liW9Gm52aTwdd0SQXAlNWQORiuQ4zaMudAA4cSH01x1X9NLbCD3VMUfwGGB0yY3BR9C8bQWEeGpUCqtZDKMXMPq5bx0mMglwjVR9QuYdaoOLAMLf4UI8WA~xWY9xCDROjWJbvo19ElF8Gj-ENWDuL5~dU1m4Cb4~ku6s6LCT~AhXh935AU3mXZiraGc~rRCf-z6YSBglItLTy-jNNieCp5b0FyXsjvGmnnjh6pzKtacVae3C2MhvKiWI1dKgAjnO76ANR3ikGxQWY1mZTmI1ydrtteVBd3zm0wpMDqp2cUPI8Rm46T8DZscN~qA7eTVbqgLFLiYnHQ__"
                            alt=""
                        />
                    </div>
                    <div className=" w-[50%] h-full z-50 absolute top-0 left-[20%]  flex items-center justify-center">
                        <ul className="text-white gap-4 text-[16px] font-normal flex flex-row ">
                            <li>Əsas</li>
                            <li>Haqqımızda</li>
                            <li>Xidmətlər</li>
                            <li>Blog</li>
                            <li>Əlaqə</li>
                        </ul>
                    </div>
                    <div className="w-[30%] h-full absolute top-0 right-0 flex justify-center items-center">
                        <div className="w-[212px] h-[35px] rounded-xl px-[16px] py-[6px] bg-white flex flex-row">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="bg-none focus:outline-none w-full"
                                placeholder="Text"
                            />
                            <button>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute lg:hidden  block top-0 w-full z-50 min-h-[60px] ">
                <img
                    src="/imges/headerbg.png"
                    alt=" "
                    className="w-full max-h-[61px] lg:hidden md:hidden block"
                />
                <div className=" absolute top-0 w-full h-full flex lg:justify-around md:justify-between justify-around items-center">
                    <div className="w-[33px] h-[33px] aspect-square rounded-full bg-white bg-opacity-40 bg-blur-[4px] flex justify-center items-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <img
                        className="w-[64px] h-[64px] mt-[-3%] lg:block md:hidden block"
                        src="https://s3-alpha-sig.figma.com/img/7e61/1388/9b68b91790cc47d8228cc0648b592052?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf7tNs0k0JK6liW9Gm52aTwdd0SQXAlNWQORiuQ4zaMudAA4cSH01x1X9NLbCD3VMUfwGGB0yY3BR9C8bQWEeGpUCqtZDKMXMPq5bx0mMglwjVR9QuYdaoOLAMLf4UI8WA~xWY9xCDROjWJbvo19ElF8Gj-ENWDuL5~dU1m4Cb4~ku6s6LCT~AhXh935AU3mXZiraGc~rRCf-z6YSBglItLTy-jNNieCp5b0FyXsjvGmnnjh6pzKtacVae3C2MhvKiWI1dKgAjnO76ANR3ikGxQWY1mZTmI1ydrtteVBd3zm0wpMDqp2cUPI8Rm46T8DZscN~qA7eTVbqgLFLiYnHQ__"
                        alt=""
                    />
                    <div className="w-[33px] h-[33px] aspect-square rounded-full bg-white bg-opacity-40 bg-blur-[4px] flex justify-center items-center">
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
                    </div>
                </div>
            </div>
            {/* <div className="bg-white w-[38px]  aspect-square rounded-full lg:hidden flex justify-center items-center absolute top-3 right-3 z-40  ">
                <svg
                    className="w-[24px] aspect-square"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    // style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                >
                    <path
                        d="M960 288H64C44.8 288 32 275.2 32 256s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32zM960 544H64C44.8 544 32 531.2 32 512s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32zM960 800H64c-19.2 0-32-12.8-32-32s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32z"
                        fill="#2F3448"
                    />
                </svg>
            </div> */}
            {/* <div></div> */}
        </div>
    );
}