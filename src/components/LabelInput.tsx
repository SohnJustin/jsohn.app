// react
import { FC } from "react";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  textarea,
}) => {
  return (
    <div className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={placeholderText}
        className="text-textSecondary text-base sm:text-lg"
      >
        {labelText}
      </label>
      {textarea ? (
        <textarea
          name={placeholderText}
          id={placeholderText}
          rows={9}
          placeholder={placeholderText}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
           placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        ></textarea>
      ) : (
        <input
          name={placeholderText}
          type="text"
          id={placeholderText}
          placeholder={placeholderText}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
           placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        />
      )}
    </div>
  );
};

export default LabelInput;
