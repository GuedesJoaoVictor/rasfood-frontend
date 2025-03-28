import esfiha from "../../assets/esfiha_na_bancada.jpeg";
import { ContainerFull } from "../../components/ContainerFull";
import { NavBar } from "../../components/NavBar";

export default function Home() {
  return (
    <ContainerFull>
      <div className="flex flex-col h-[70%] w-full text-center relative">
        <img
          src={esfiha}
          alt="bruschetta"
          className="w-full h-full object-cover object-top absolute -z-10"
        />
        <NavBar />
      </div>
    </ContainerFull>
  );
}
