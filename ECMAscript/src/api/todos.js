import axios from "../utils/axios";

export default class Todos {
  async list() {
    const { data } = await axios.get("/todos");
    return data;
  }
  async create({ text, done }) {
    const { data } = await axios.post("/todos", { text, done });
    return data;
  }
  async update({ id, text, done }) {
    const { data } = await axios.put(`/todos/${id}`, { text, done });
    return data;
  }
  async delete({ id }) {
    await axios.delete(`/todos/${id}`);
  }
}
