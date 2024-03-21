"use client";

import React, { FC, useState } from 'react';

interface DropdownProps {
    name: string;
    values: string[];
    onSelectCallback: (value: string) => void;
}

interface DropdownButtonProps {
    onClickCallback: () => void;
}

interface DropdownItemsProps {
    name: string;
    values: string[];
    onClickCallback: (value: string) => void;
}

/**
 * DropdownButton component
 * @param onClickCallback - function callback
 * @example
 * <DropdownButton onClickCallback={handleClick} />
 */
const DropdownButton:FC<DropdownButtonProps> = ({onClickCallback}) => {
    return (
        <button id="dropdownRadioButton" onClick={onClickCallback} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Dropdown radio 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
    );
}

/**
 * DropdownItems component
 * @param name - string name
 * @param values - string array values
 * @param onClickCallback - function callback
 * @example
 * <DropdownItems name='dropdown' values={['one', 'two', 'three']} onClickCallback={handleSelect} />
 */
const DropdownItems:FC<DropdownItemsProps> = ({ name, values, onClickCallback }) => {
    return (
        <div id="dropdownDefaultRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                {values.map((value, index) => (
                    <li key={index} onClick={() => onClickCallback(value)}>
                        <div className="flex items-center">
                            <input id={`${name}-dropdown-radio-${index}`} type="radio" value={value} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor={`${name}-dropdown-radio-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/**
 * Dropdown component
 * @param name - string name
 * @param values - string array values
 * @param onSelectCallback - function callback
 * @example
 * <Dropdown name='dropdown' values={['one', 'two', 'three']} onSelectCallback={handleSelect} />
 * @returns {JSX.Element} - JSX Element
 */
const Dropdown: FC<DropdownProps> = ({ name, values, onSelectCallback }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log('isOpen', isOpen);
    }
    
    const handleSelect = (value: string) => {
        onSelectCallback(value);
    }

    return (
        <div>
            <DropdownButton onClickCallback={toggleDropdown} />
            {isOpen && <DropdownItems name={name} values={values} onClickCallback={handleSelect} />}
        </div>
    );
};

export default Dropdown;