import "./Tabela.css";

export const Tabela = () => {
  return (
    <table id="tableClient" className="records">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Celular</th>
          <th>Cidade</th>
          <th>Ação</th>
        </tr>
      </thead>

      <tbody id="table-body"></tbody>
    </table>
  );
};
