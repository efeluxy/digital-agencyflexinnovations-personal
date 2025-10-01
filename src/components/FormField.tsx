import type { FC, ChangeEvent } from "react";

type FormFieldProps = {
  name?: string;
  type: string;
  htmlFor?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
};

const FormField: FC<FormFieldProps> = ({
  name,
  type,
  htmlFor,
  placeholder,
  value,
  onChange,
  className,
  required,
}) => {
  return (
    <div className="flex flex-col">
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md shadow-md resize-none ${className}`}
        />
      ) : type === "label" ? (
        <label
          htmlFor={htmlFor}
          className={`text-gray-200 font-medium mb-1 ${className}`}
        >
          {value}
        </label>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md shadow-md ${className}`}
        />
      )}
    </div>
  );
};

export default FormField;
