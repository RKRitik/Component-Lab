type ButtonSize = "large" | "medium" | "small";

type ButtonProps = {
  label: string;
  primary?: boolean;
  onClick: Function;
  size: ButtonSize;
};

export const Button = ({ label, primary = true, size }: ButtonProps) => {
  return <button className={`${primary ? 'text-blue ' : ''}${size === 'large' ? "p-24" : size === 'medium' ? 'p-22' : "p-18"}`}>{label}</button>;
};
