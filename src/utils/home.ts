export const openModal = () => document.getElementById('modal')?.classList.add('active')

const closeModal = () => {
    clearField()
    document.getElementById('modal')?.classList.remove('active')
}

const getLocalStorage = () => JSON.parse(
    localStorage.getItem('db_client')
) ?? []

const setLocalStorage = (dbClient)=>localStorage.setItem("db_client", JSON.stringify(dbClient))

//CRUD
const deleteClient = (index)=>{
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

const isValidFields = ()=>{
    return document.getElementById('form')?.reportValidity()//eu preciso adicionar o id form corretamente, caso o contrário o código não funcionará
}

//interação com o layout

const clearField = () =>{
    const fields = document.querySelectorAll('.modal-field')//devo acrescentar esta classe ou adaptar
    fields.forEach(field => field.value = "")
    document.getElementById('nome')?.dataset.index = 'new'
    document.querySelector(".modal-header>h2")?.textContent = 'Novo Cliente'
}

const saveClient = ()=>{
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,//vai dar problema essa questão de ID e Classe :/
            email: document.getElementById('email').value,//vai dar problema essa questão de ID e Classe :/
            celular: document.getElementById('celular').value,//vai dar problema essa questão de ID e Classe :/
            cidade: document.getElementById('cidade').value,//vai dar problema essa questão de ID e Classe :/
        }
        const index = document.getElementById('nome')?.dataset.index
        if (index === 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}