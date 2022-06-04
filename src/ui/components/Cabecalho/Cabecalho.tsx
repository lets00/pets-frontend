import { CabecalhoContainer, Logo } from "./Cabecalho.style";

function Cabecalho() {
  return (
    <CabecalhoContainer>
      <Logo
        src="/imagens/logo.svg"
        alt="Logo da adote um pet. Uma pata de cachorro de cor roxa em formato de coração"
      />
    </CabecalhoContainer>
  );
}

export default Cabecalho;
