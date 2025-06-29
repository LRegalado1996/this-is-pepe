interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary py-2 px-4 rounded-lg text-sm uppercase font-semibold cursor-pointer transition-all hover:bg-dark-primary ${className}`}
    >
      {children}
    </button>
  );
};
