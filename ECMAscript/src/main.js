import { createApp } from "vue";
import Todos from "./api/todos";
import css from "./assets/css/main.css";

const apiTodos = new Todos();

const app = createApp({
  data() {
    return {
      todos: [],
      form: {
        text: "",
        done: false,
      },
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      this.todos = await apiTodos.list();
      console.log(this.todos);
    },
    async createTodo() {
      const data = await apiTodos.create(this.form);
      this.todos.push(data);
      this.limparFormulario();
    },
    limparFormulario() {
      this.form.text = "";
      this.form.done = false;
    },
    async toggleTodoStatus(todo) {
      const data = await apiTodos.update({
        ...todo,
        done: !todo.done,
      });

      const index = this.todos.findIndex(({ id }) => id === data.id);
      this.todos[index] = data;
    },
    async deleteTodo(id) {
      try {
        await apiTodos.delete({ id });
        const index = this.todos.findIndex((todo) => id == todo.id);
        this.todos.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

app.mount("#app");
