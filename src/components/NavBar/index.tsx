import { Container } from "../Container";
import { NavBarItens } from "./NavBarItens";

interface NavBarProps {
  currentPage: "Home" | "About" | "Menu" | "Categories";
}

function NavBar({ currentPage }: NavBarProps) {
  return (
    <Container>
      <div className="mx-auto py-4 flex justify-between flex-row">
        <h1 className="text-3xl color-white-400 font-instrument-serif">
          Rasfood
        </h1>
        <nav>
          <NavBarItens currentPage={currentPage} />
        </nav>
      </div>
    </Container>
  );
}

export { NavBar };
