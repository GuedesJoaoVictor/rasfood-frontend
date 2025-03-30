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
        <NavBar currentPage="Home" />
        <div className="flex flex-col justify-center items-center h-full w-full gap-y-10">
          <h1 className="text-3xl mt-8 mb-10 font-instrument-serif">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-lg mt-4 w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            mollitia!
          </p>
          <button className="py-3 px-8 bg-red-500 rounded-2xl text-white font-instrument-serif text-xl cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out">
            See our menu
          </button>
        </div>
      </div>
    </ContainerFull>
  );
}
