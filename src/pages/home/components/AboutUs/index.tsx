import { Title } from "../../../../components/Title";
import pizza from "../../../../assets/pizza.png";

function AboutUs() {
  return (
    <div className="container mx-auto py-4 mt-10">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center text-center gap-y-10 w-1/2 h-full">
          <Title font="Nunito">About Us</Title>
          <p className="w-1/2 text-justify font-instrument-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos,
            harum sequi consequuntur quae ipsum, distinctio incidunt ipsam
            repudiandae laudantium veniam. Autem non eum cumque consectetur
            soluta quaerat reiciendis quo consequuntur aut? Veniam beatae
            reprehenderit illum fugiat vitae cupiditate, optio ut dolor porro
            quis iure.
          </p>
        </div>
        <div className="w-1/2 h-full">
          <img src={pizza} alt="pizza" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
