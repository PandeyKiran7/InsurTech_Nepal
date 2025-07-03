import React from 'react';

export type InputProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export const InputField: React.FC<InputProps> = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required,
}) => (
  <div className="mb-8">
    <label htmlFor={id} className="block text-gray-700 text-xl font-bold mb-3">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
    />
  </div>
);

export type SelectProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
};

export const SelectField: React.FC<SelectProps> = ({
  label,
  id,
  value,
  onChange,
  options,
  required,
}) => (
  <div className="mb-8">
    <label htmlFor={id} className="block text-gray-700 text-xl font-bold mb-3">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
    >
      <option value="">Please Select One</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  required,
}) => (
  <label className="flex items-center text-gray-700 text-lg">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mr-3"
      required={required}
    />
    {label}
  </label>
);
