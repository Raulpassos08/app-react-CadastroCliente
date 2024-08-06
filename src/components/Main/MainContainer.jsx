import { ButtonCadastrarClientes } from "../Button/Button";
import { ModalForm } from "../Modal/ModalForm";
import { Tabela } from "../Tabela/Tabela";
import "./Main.css";
const MainContainer = () => {
  return (
    <main>
      {/* button(cadastrarClientes) */}
      <ButtonCadastrarClientes />
      {/* tabela */}
      <Tabela />
      {/* modal */}
      <ModalForm />
    </main>
  );
};

export default MainContainer;
