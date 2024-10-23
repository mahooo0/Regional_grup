import * as React from 'react';

interface MessageProps {
    title: string;
    description: string;
    time: string;
    iconSrc: string;
    variant?: 'default' | 'highlighted';
}

const Message: React.FC<MessageProps> = ({
    title,
    description,
    time,
    iconSrc,
    variant = 'default',
}) => {
    const bgColor = variant === 'highlighted' ? 'bg-blue-800' : 'bg-slate-400';
    const borderClass =
        variant === 'highlighted' ? 'border-b border-gray-700' : '';

    return (
        <div
            className={`flex flex-col px-4 py-2.5 w-full bg-[#2557A3]  hover:bg-[#7798C9] max-md:max-w-full`}
            aria-labelledby={`message-title-${title}`}
        >
            <div className="flex flex-col w-full max-md:max-w-full">
                <h3
                    id={`message-title-${title}`}
                    className="text-lg font-medium text-white"
                >
                    {title}
                </h3>
                <p className="mt-1.5 text-base text-neutral-200 max-md:max-w-full">
                    {description}
                </p>
            </div>
            <time
                dateTime={time}
                className="flex gap-3.5 items-center self-start mt-2.5 text-sm text-white whitespace-nowrap"
            >
                <img
                    loading="lazy"
                    src={iconSrc}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    aria-hidden="true"
                />
                <span className="self-stretch my-auto">{time}</span>
            </time>
        </div>
    );
};

export const Chat: React.FC = () => {
    const messages = [
        {
            title: 'Lorem Ipsum',
            description:
                'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
            time: '20:18',
            iconSrc:
                'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/795ed745a72d23670fdcc3a02a9bc3916ef72aee3e31144a1f0488c1d96cc79b?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        },
        {
            title: 'Lorem Ipsum',
            description:
                'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
            time: '20:18',
            iconSrc:
                'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f4134284c4d686f10147b244cf083c4aa40aa67475438e51fd8d9372b85b3c43?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        },
        {
            title: 'Lorem Ipsum',
            description:
                'Lorem ipsum dolor sit amet consectetur. Sed amet pulvinar cursus volutpat dolor.',
            time: '20:18',
            iconSrc:
                'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/c1c9cf23cfb70482ab223ce0112032814cbecc20aa5e5bbb9cc6a9e0db328be7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        },
    ];

    return (
        <div className="flex flex-wrap items-center max-md:max-w-full rounded-lg overflow-hidden">
            <div
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/8b02/e377/e396cc186698accba9ebcb781a02b78a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJiT4yca6EgjAzDyShJ3mJS0Pkf~2deDnzgTSAIpkoH8aa3DPB~TDho3lhwBqLy-F6hZb~~GaUASmCHlTOMbMBM9cKBVleufuqh4DzYTnqtG1bCASPi8bw4WMNAhN4sh1JepfkrvER4Ja7xYj8iYuyOt9KeEVf-pWzvlFne0FPH-X9mSFtd9ba4rG~jAzCmWOWOsbTtqXQoW0GVgXNmHPMvaGChkR777MdUJUvf~0UqzTTlki7n9vTPCpIhk9U2JeZdBBkaUZBWsn9saHVuO-kZ3goTVEmVszn5cbY9ELP7ddkIfj1IcnY7cPSJHLVExUOz4q3OYtmqfDY0g30IoIA')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="flex overflow-hidden flex-col items-center self-stretch   text-lg font-medium text-white aspect-square  min-w-[240px] lg:w-[392px] w-full max-h-[400px] "
            >
                <div className="bg-black bg-opacity-40 w-full h-full pt-52">
                    <p className="px-6 pt-32 pb-9 max-md:px-5 ">
                        Lorem Ipsum Dolor sit amet
                    </p>
                </div>
            </div>
            <section
                className="flex flex-col self-stretch  min-w-[240px] lg:w-[520px] w-full max-md:max-w-full"
                aria-label="Chat messages"
            >
                {messages.map((message, index) => (
                    <Message
                        key={`message-${index}`}
                        {...message}
                        variant={index === 0 ? 'default' : 'highlighted'}
                    />
                ))}
            </section>
        </div>
    );
};
