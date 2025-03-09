const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = {
  getTodos: async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },

  getTodo: async (id: string) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },
};
