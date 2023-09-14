import React from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
};

const Input: React.FC<InputProps> = ({ label, name, register }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        id={name}
      />
    </div>
  );
};

export default Input;
