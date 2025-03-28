import { Container } from "../Container";

function NavBar() {
  return (
    <Container>
      <div className="mx-auto py-4 flex justify-between flex-row">
        <h1 className="text-3xl color-white-100">Rasfood</h1>
        <nav>
          <ul className="flex gap-4 flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export { NavBar };
