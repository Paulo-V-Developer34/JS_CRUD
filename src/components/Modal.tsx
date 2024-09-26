export default function ModalCadastro(){
    return (
        <div>
            <div id="modal">
                <header>
                    <span>Sei lá</span>
                </header>
                <form id="form">
                    <input 
                    type="text"
                    id="nome"
                    name="nome"
                    data-index="new"
                    placeholder="Nome do cliente "
                    required/>
                    <input 
                    type="gmail"
                    id="email"
                    name="email"
                    data-index="new"
                    placeholder="Email do cliente "
                    required/>
                    <input
                    type="text"
                    id="celular"
                    name="celular"
                    placeholder="Número de celular do Cliente"
                    required
                    />
                    <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Cidade do Cliente"
                    required
                    />
                </form>
                <footer>
                    <button id="salvar" type="button">
                        Salvar
                    </button>
                    <button id="cancelar" type="button">
                        Cancelar
                    </button>
                </footer>
            </div>
        </div>
    )
}