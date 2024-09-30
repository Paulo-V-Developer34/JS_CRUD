export default function ModalCadastro(){
    return (
        <div className="modal" id="modal">
            <div className="modal-content" id="modal">
                <header className="modal-header">
                    <h2>Novo Cliente</h2>
                    <span className="modal-close" id="modalClose">&#10006</span>
                </header>
                <form id="form" className="modal-form">
                    <input 
                    type="text"
                    id="nome"
                    className="modal-field"
                    name="nome"
                    data-index="new"
                    placeholder="Nome do cliente "
                    required/>
                    <input 
                    type="gmail"
                    id="email"
                    className="modal-field"
                    name="email"
                    data-index="new"
                    placeholder="Email do cliente "
                    required/>
                    <input
                    type="text"
                    id="celular"
                    className="modal-field"
                    name="celular"
                    placeholder="Número de celular do Cliente"
                    required
                    />
                    <input
                    type="text"
                    id="cidade"
                    className="modal-field"
                    name="cidade"
                    placeholder="Cidade do Cliente"
                    required
                    />
                </form>
                <footer className="modal-footer">
                    <button id="salvar" type="button" className="button green">
                        Salvar
                    </button>
                    <button id="cancelar" type="button" className="button blue">
                        Cancelar
                    </button>
                </footer>
            </div>
        </div>
    )
}