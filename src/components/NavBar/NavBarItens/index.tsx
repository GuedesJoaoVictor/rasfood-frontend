import { useState } from "react";

interface NavBarItensProps {
  currentPage: "Home" | "About" | "Menu" | "Categories";
}

export function NavBarItens({ currentPage }: NavBarItensProps) {
  const isActive = (page: NavBarItensProps["currentPage"]) => {
    return currentPage === page ? "text-yellow-400" : "color-white-300";
  };
  return (
    <ul className="flex gap-4 flex-row">
      <li className={`cursor-pointer ${isActive("Home")}`}>Home</li>
      <li className={`cursor-pointer ${isActive("About")}`}>About</li>
      <li className={`cursor-pointer ${isActive("Menu")}`}>Menu</li>
      <li className={`cursor-pointer ${isActive("Categories")}`}>Categories</li>
    </ul>
  );
}
