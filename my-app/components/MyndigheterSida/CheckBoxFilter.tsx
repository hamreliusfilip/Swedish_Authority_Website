import React, { useEffect, useState } from 'react';

interface CheckboxFilterProps {
    options: string[];
    onChange: (filters: Record<string, boolean>) => void;
    reset: boolean;
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ options, onChange, reset }) => {
    const [filters, setFilters] = useState<Record<string, boolean>>(
        options.reduce((acc, option) => {
            acc[option] = false;
            return acc;
        }, {} as Record<string, boolean>)
    );

    useEffect(() => {
        if (reset) {
            setFilters(prevFilters => {
                const resetFilters = { ...prevFilters };
                for (const option in resetFilters) {
                    resetFilters[option] = false;
                }
                onChange(resetFilters); // Reset the filters
                return resetFilters;
            });
        }
    }, [reset, options, onChange]);

    const handleCheckboxChange = (option: string) => {
        const newFilters = { ...filters, [option]: !filters[option] };
        setFilters(newFilters);
        onChange(newFilters);
    };

    return (
        <div>
            {options.map((option) => (
                <div className='mt-2' key={option}>
                    <label className="ms-2 text-sm font-regular ">
                        <input
                            type="checkbox"
                            checked={filters[option]}
                            onChange={() => handleCheckboxChange(option)}
                            className="mr-2"
                        />
                        {option}
                        <br />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxFilter;
