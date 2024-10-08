import ModalCadastro from "@/components/Modal";

export default function PaginaPrincipal() {
    return (
        <>
            <button type="button" id="cadastrarCliente" className="button blue 0mobile">Cadastrar clientes</button>
            <table id="tableclientes">
                <thead id="tableClient">
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