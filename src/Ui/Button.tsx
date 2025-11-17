export interface ButtonProps {
  children: React.ReactNode;
  type: "primary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ children, type, onClick, disabled }: ButtonProps) {
  const base =
    " text-sm rounded-lg text-white bg-gradient-to-r from-violet-500  to-violet-400  font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-gradient-to-r hover:from-violet-400  hover:to-violet-300 focus:bg-violet-300 focus:outline-none  disabled:cursor-not-allowed ";

  const styles: Record<string, string> = {
    primary: base + "px-2 py-1.5 md:px-2 md:py-2.5",
  };
  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
