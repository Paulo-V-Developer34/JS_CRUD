import ModalCadastro from "@/components/Modal";

export default function PaginaPrincipal() {
    return (
        <>
            <button type="button" id="cadastrarCliente" className="botao">Cadastrar clientes</button>
            <table id="tableclientes">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gmail</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <h1 className="textoespecial">Bom dia turma do 3NT</h1>
            <ModalCadastro/>
        </>
    )
}