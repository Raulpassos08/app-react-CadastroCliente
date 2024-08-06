import { getLocalStorage, updateClient } from "./crud-utils";
import { clearFields, saveClient, update } from "./validFilds";

export const openModal = () =>
  document.getElementById("modal").classList.add("active");

export const closeModal = () => {
  document.getElementById("modal").classList.remove("active");
  document.getElementById("salvar").classList.add("active");
  document.getElementById("editar").classList.remove("active");
  document.getElementById("editar").classList.add("hiden");
  clearFields();
  setCurrentUserEdit("");
};

export const showEditButton = () => {
  document.getElementById("editar").classList.add("active");
  document.getElementById("salvar").classList.remove("active");
  document.getElementById("salvar").classList.add("hiden");
  document.getElementById("editar").classList.remove("hiden");
};
export const editClient = (id, data) => {
  const dbClient = getLocalStorage();
  const index = dbClient.findIndex((client) => client.id === id);
  updateClient(index, data);
  update();
  closeModal();
};
//Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("salvar").addEventListener("click", saveClient);
document.getElementById("editar").addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("edit_client"));

  if (user.id) {
    console.log(user);
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    editClient(user.id, { ...client, id: user.id });
  } else {
    console.log("ID do usuário não encontrado no localStorage");
  }
});
document.getElementById("cancelar").addEventListener("click", closeModal);

export const tableBody = document.getElementById("table-body");

export const getCurrentUserEdit = () => {
  JSON.parse(localStorage.getItem("edit_client")) || {};
};
export const setCurrentUserEdit = (Client) =>
  localStorage.setItem("edit_client", JSON.stringify(Client));
// CRUD - create read update delete

/*Linha 14: Está transformando o que está em localStorage em JSON e depois armazena em uma variável.
  Linha 18: Está 'acrescentando' um objeto novo.
  Linha 16: Mandando novamente para o meu banco.*/

export const validFields = () => {
  return document.getElementById("form").reportValidity();
};
//Interação com o layout
