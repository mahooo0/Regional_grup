import * as React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

interface PaginationItemProps {
    number: number;
    isActive?: boolean;
    onClick?: () => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
    number,
    isActive = false,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 w-8 h-8 rounded-lg ${
                isActive ? 'text-white bg-blue-800' : 'bg-neutral-100'
            }`}
            aria-current={isActive ? 'page' : undefined}
        >
            {number}
        </button>
    );
};

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <nav aria-label="Pagination navigation" className=" mb-[120px]">
            <div className="flex gap-4 justify-center items-center mt-20 text-base font-medium tracking-wide text-center text-blue-800 whitespace-nowrap max-md:mt-10">
                <button
                    className="flex items-center"
                    onClick={handlePrevious}
                    aria-label="Previous page"
                    disabled={currentPage === 1}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/2de423749e642867f9234165a24938928b2cdf9588d343cd6065b87c0140930f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </button>
                <div className="flex gap-2 items-end self-stretch my-auto">
                    <PaginationItem
                        number={1}
                        isActive={currentPage === 1}
                        onClick={() => onPageChange(1)}
                    />
                    {totalPages > 1 && (
                        <PaginationItem
                            number={2}
                            isActive={currentPage === 2}
                            onClick={() => onPageChange(2)}
                        />
                    )}

                    {totalPages > 2 && (
                        <PaginationItem
                            number={3}
                            isActive={currentPage === 3}
                            onClick={() => onPageChange(3)}
                        />
                    )}

                    {totalPages < 4 ? (
                        <></>
                    ) : (
                        <>
                            {' '}
                            <div className="flex gap-1 pb-1 min-h-[6px]">
                                {' '}
                                ...
                            </div>
                            <PaginationItem
                                number={totalPages}
                                isActive={currentPage === totalPages}
                                onClick={() => onPageChange(totalPages)}
                            />
                        </>
                    )}
                </div>
                <button
                    className="flex items-center"
                    onClick={handleNext}
                    aria-label="Next page"
                    disabled={currentPage === totalPages}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/32e251b14d565c4eb407dc8336096dd9c021e5846afae8e292102cae656ec431?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </button>
            </div>
        </nav>
    );
};
