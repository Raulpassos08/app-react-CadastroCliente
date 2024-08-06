import { useState } from "react";

export const ModalForm = () => {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    celular: "",
    cidade: "",
  });

  const clickBotao = () => {
    alert("careca não troca");
  };

  const clickCancelar = () => {
    alert("cancelar");
  };
  return (
    <form id="form" className="modal-form">
      <input
        type="text"
        id="nome"
        data-index="new"
        className="modal-field"
        placeholder="Nome do Cliente"
        required
        value={user.nome}
      />
      <input
        type="email"
        id="email"
        className="modal-field"
        placeholder="e-mail do Cliente"
        required
        value={user.email}
      />
      <input
        type="text"
        id="celular"
        className="modal-field"
        placeholder="Celular do Cliente"
        required
        value={user.celular}
      />
      <input
        type="text"
        id="cidade"
        className="modal-field"
        placeholder="Cidade do Cliente"
        required
        value={user.cidade}
      />
      <button onClick={clickBotao} id="salvar" className="button bege active">
        Salvar
      </button>
      <button onClick={clickCancelar} id="cancelar" className="button blue">
        Cancelar
      </button>
    </form>
  );
};
