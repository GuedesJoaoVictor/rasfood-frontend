interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="py-3 px-8 bg-red-500 rounded-2xl text-white font-instrument-serif text-xl cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out">
      {children}
    </button>
  );
};

export { Button };
