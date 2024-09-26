import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="paginalogin" className="telacentralizada">
      <h1 className="titulo">Cadastro de clientes marechal</h1>
      <button type="button" className="botao">
        <Link href={'/home'}>Entrar</Link>
      </button>
    </div>
  );
}
