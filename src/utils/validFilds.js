import {
  createClient,
  getLocalStorage,
  readClient,
  setLocalStorage,
} from "./crud-utils";
import {
  closeModal,
  openModal,
  setCurrentUserEdit,
  showEditButton,
  tableBody,
  validFields,
} from "./localStorage-utils";

export const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
};

export function saveClient(type, id) {
  if (validFields()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };

    createClient(client);

    update();
    closeModal();
  }
}
export const deleteClientById = (id) => {
  const dbClient = getLocalStorage();
  const updatedDbClient = dbClient.filter((client) => client.id !== id);
  setLocalStorage(updatedDbClient);
  return updatedDbClient;
};

export const setInputForm = (id) => {
  const dbClient = getLocalStorage();
  const data = dbClient.find((client) => client.id === id);
  setCurrentUserEdit(data);
  document.getElementById("nome").value = data.nome;
  document.getElementById("email").value = data.email;
  document.getElementById("celular").value = data.celular;
  document.getElementById("cidade").value = data.cidade;
  console.log(data);
};

export const handleClick = (action, id) => {
  if (action === "editar") {
    // Aqui você pode chamar a função de edição
    showEditButton();
    openModal();
    setInputForm(id);
  } else if (action === "excluir") {
    // Aqui você pode chamar a função de exclusão
    deleteClientById(id);
    update();
  }
};

export const createRow = (dbClient) => {
  // Limpa o conteúdo atual do corpo da tabela
  if (!tableBody) return;

  tableBody.innerHTML = "";

  // Itera sobre os objetos -> para cada objeto, cria uma nova linha.
  dbClient.forEach((item) => {
    // Cria uma nova linha
    const row = document.createElement("tr");

    // Cria e adiciona para cada propriedade do item
    Object.values(item).forEach((text) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });

    // Cria para os botões
    const actionCell = document.createElement("td");

    // Cria o botão de editar
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = () => handleClick("editar", item.id);
    actionCell.appendChild(editButton);

    // Cria o botão de excluir
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = () => handleClick("excluir", item.id);
    actionCell.appendChild(deleteButton);

    // Adiciona ação à linha
    row.appendChild(actionCell);

    // Adiciona a linha ao corpo da tabela
    tableBody.appendChild(row);
  });
};

export const clearTable = () => {
  const rows = document.querySelectorAll("#tabeClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};
export function update() {
  const dbClient = readClient();
  createRow(dbClient);
  console.log(dbClient);
}

update();
