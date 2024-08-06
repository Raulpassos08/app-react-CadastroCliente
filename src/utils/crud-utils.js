export const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};
export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) || [];
export const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

export const readClient = () => getLocalStorage();

export const createClient = (client) => {
  const dbClient = getLocalStorage();
  const newClient = { ...client, id: Date.now() };
  dbClient.push(newClient);
  setLocalStorage(dbClient);
};
