
export interface MockUser {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  password: string;
}

// Our "database"
export const mockUsers: MockUser[] = [
  {
    id: "1",
    name: "Usuário Teste",
    email: "teste@example.com",
    cpf: "123.456.789-00",
    password: "senha123",
  },
];

// Add a new user to our "database"
export const addUser = (
  name: string,
  email: string,
  cpf: string,
  password: string
): MockUser => {
  const newUser: MockUser = {
    id: (mockUsers.length + 1).toString(),
    name,
    email,
    cpf,
    password,
  };
  mockUsers.push(newUser);
  return newUser;
};
