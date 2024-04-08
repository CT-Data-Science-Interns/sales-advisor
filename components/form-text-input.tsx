import React, { ChangeEvent } from "react";

const FormTextInput = ({
  title,
  value,
  onInputChange,
  disabled,
}: {
  title: string;
  value: string;
  onInputChange: CallableFunction;
  disabled: boolean;
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <input
        type="text"
        value={value}
        id={`${title.toLowerCase()}-id`}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-4 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        required
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

export default FormTextInput;
