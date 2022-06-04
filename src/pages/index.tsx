import type { NextPage } from "next";
import Titulo from "../ui/components/Titulo/Titulo";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal você pode{" "}
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      ></Titulo>
    </div>
  );
};

export default Home;
