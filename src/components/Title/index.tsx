interface TitleProps {
  font: "instrument-serif" | "Nunito";
  children: React.ReactNode;
  bold?: boolean;
}

function Title({ font, children, bold }: TitleProps) {
  return (
    <h1
      className={`text-3xl text-center mb-4 ${"font-" + font} ${
        bold && "font-bold"
      }`}
    >
      {children}
    </h1>
  );
}

export { Title };
