"use client";
import React from "react";

type FilterInputProps = {
  id: string;
  labelText: string;
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterInput: React.FC<FilterInputProps> = ({
  handleChange,
  id,
  labelText,
  name,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="flex flex-col justify-start ">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-gray-800 p-2 rounded-md mx-auto w-full"
        placeholder={placeholder}
      />
    </div>
  );
};
