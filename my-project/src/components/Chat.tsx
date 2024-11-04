import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MessageProps {
    title: string;
    description: string;
    time: string;
    iconSrc: string;
    variant?: 'default' | 'highlighted';
    setcurrentBlog: () => void;
    id: string | number;
}

const Message: React.FC<MessageProps> = ({
    title,
    description,
    time,
    iconSrc,
    variant = 'default',
    setcurrentBlog,
    id,
}) => {
    const bgColor = variant === 'highlighted' ? 'bg-blue-800' : 'bg-slate-400';
    const borderClass =
        variant === 'highlighted' ? 'border-b border-gray-700' : '';
    const navigate = useNavigate();
    return (
        <div
            className={`flex flex-col px-4 py-2.5 w-full bg-[#2557A3]  hover:bg-[#7798C9] max-md:max-w-full h-1/3 cursor-pointer`}
            aria-labelledby={`message-title-${title}`}
            onMouseEnter={() => setcurrentBlog()}
            onClick={() => navigate(`/news/${id}`)}
        >
            <div className="flex flex-col w-full max-md:max-w-full">
                <h3
                    id={`message-title-${title}`}
                    className="text-lg font-medium text-white"
                >
                    {title}
                </h3>
                <div
                    className="mt-1.5 text-base text-neutral-200 max-md:max-w-full"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
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

export const Chat = ({ data }: { data: any }) => {
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
    const [currentBlog, setcurrentBlog] = React.useState<any>();
    React.useEffect(() => {
        setcurrentBlog(data[0]);
    }, [data]);
    console.log(currentBlog);
    const navigate = useNavigate();

    return (
        <div className="flex lg:flex-row flex-col items-center max-md:max-w-full rounded-lg overflow-hidden !px-['auto']   w-full ">
            <div
                style={{
                    backgroundImage: `url('https://regional.epart.az/storage/${currentBlog?.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                onClick={() => navigate(`/news/${currentBlog?.id}`)}
                className="flex cursor-pointer overflow-hidden flex-col items-center self-stretch   text-lg font-medium text-white aspect-square  min-w-[240px] lg:!w-[392px] w-full max-h-[400px] "
            >
                <div className="bg-black bg-opacity-40 w-full h-full pt-52">
                    <p className="px-6 pt-32 pb-9 max-md:px-5 ">
                        {currentBlog?.title}
                    </p>
                </div>
            </div>
            <section
                className="flex flex-col self-stretch  min-w-[240px]  lg:!w-[60%] !w-full max-md:max-w-full"
                aria-label="Chat messages"
            >
                {data.map((message: any, index: number) => (
                    <Message
                        setcurrentBlog={() => setcurrentBlog(message)}
                        title={message.title}
                        description={message.description}
                        time={message.date}
                        id={message.id}
                        iconSrc={
                            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/795ed745a72d23670fdcc3a02a9bc3916ef72aee3e31144a1f0488c1d96cc79b?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                        }
                        key={`message-${index}`}
                        // {...message}
                        variant={index === 0 ? 'default' : 'highlighted'}
                    />
                ))}
            </section>
        </div>
    );
};
