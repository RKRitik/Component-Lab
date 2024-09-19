type ButtonSize = "large" | "medium" | "small";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  size: ButtonSize;
}

export const Button = ({
  label,
  primary = true,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${primary ? "text-blue " : ""}${
        size === "large" ? "p-24" : size === "medium" ? "p-22" : "p-18"
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};
