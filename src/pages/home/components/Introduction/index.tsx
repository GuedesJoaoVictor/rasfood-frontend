import { ContainerFull } from "../../../../components/ContainerFull";
import { NavBar } from "../../../../components/NavBar";
import { Title } from "../../../../components/Title";
import { Button } from "../Button";
import esfiha from "../../../../assets/esfiha_na_bancada.jpeg";
import AboutUs from "../AboutUs";

function Introduction() {
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
          <Title font="instrument-serif">Lorem ipsum dolor sit amet.</Title>
          <p className="text-lg mt-4 w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            mollitia!
          </p>
          <Button>See our menu!</Button>
        </div>
      </div>
      <AboutUs />
    </ContainerFull>
  );
}

export default Introduction;
