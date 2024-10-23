import * as React from 'react';

interface StatCardProps {
    icon: string;
    value: string;
    alt: string;
}

interface DashboardCardProps {
    date: string;
    title: string;
    description: string;
    stats?: Array<StatCardProps>;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, alt }) => (
    <div className="flex gap-2 items-start self-stretch my-auto">
        <img
            loading="lazy"
            src={icon}
            alt={alt}
            className="object-contain shrink-0 w-6 aspect-square"
        />
        <p>{value}</p>
    </div>
);

export const BlogCardLg: React.FC<DashboardCardProps> = ({
    date,
    title,
    description,
    stats,
}) => {
    return (
        <article className="flex flex-col grow rounded-lg max-md:mt-6 max-md:max-w-full">
            <header className="flex overflow-hidden flex-col px-7 pt-5 pb-52 w-full text-white rounded bg-black bg-opacity-40 max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-center mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
                    <time
                        className="self-stretch my-auto text-base font-medium"
                        dateTime={date}
                    >
                        {date}
                    </time>
                    {/* <div className="flex gap-6 items-center self-stretch my-auto text-sm leading-loose whitespace-nowrap">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                alt={stat.alt}
                            />
                        ))}
                    </div> */}
                </div>
            </header>
            <section className="flex flex-col mt-5 w-full max-md:max-w-full">
                <h2 className="text-lg font-medium text-black max-md:max-w-full">
                    {title}
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-neutral-500 max-md:max-w-full">
                    {description}
                </p>
            </section>
        </article>
    );
};
