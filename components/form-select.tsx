import Select, { ActionMeta, Props } from "react-select";

type Option = {
  value: string;
  label: string;
};
/**
 * FormSelect component
 * @param {string} title - The title of the select input
 * @param {object[]} options - The options for the select input
 * @param {string} options[].value - The value of the option
 * @param {string} options[].label - The label of the option
 * @param {Props} props - The props for the select input, see react-select docs for props
 * @param {CallableFunction} onSelectChange - The function to call when an option is selected
 * @returns {JSX.Element} - The select input
 */

const FormSelect = ({
  title,
  onSelectChange,
  options,
  ...props
}: Props & {
  title: string;
  onSelectChange: CallableFunction;
  options: string[] | { value: string; label: string }[];
}) => {
  const labeledOptions =
    typeof options[0] === "string"
      ? options.map((option) => ({
          value: option,
          label: option,
        }))
      : options;
  const handleChange = (selectedOption: Option | null) => {
    onSelectChange(selectedOption?.value);
  };
  const handleMultiChange = (selectedOption: readonly Option[] | null) => {
    onSelectChange(selectedOption?.map((option) => option.value));
  };

  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <Select
        onChange={(newValue: unknown, actionMeta: ActionMeta<unknown>) =>
          props.isMulti
            ? handleMultiChange(newValue as Option[] | null)
            : handleChange(newValue as Option | null)
        }
        options={labeledOptions}
        {...props}
        classNames={{
          control: () =>
            "border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",
          placeholder: () => "dark:text-gray-300",
          input: () => "dark:text-white",
          singleValue: () => "dark:text-white",
          menuList: () => "dark:bg-gray-700 dark:text-white",
          option: () => "dark:hover:bg-gray-600",
        }}
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
        }}
      />
    </div>
  );
};

export default FormSelect;
