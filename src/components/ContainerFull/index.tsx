import React from "react";

interface ContainerFullProps {
  children: React.ReactNode;
}

function ContainerFull({ children }: ContainerFullProps) {
  return <div className="w-screen h-screen">{children}</div>;
}

export { ContainerFull };
