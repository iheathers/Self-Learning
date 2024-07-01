class ToDoComponent {
  constructor(selector) {
    const template = `
        <div>
            <input id="todo-input" />
            <button id="add-button">Add</button>
        </div>

        <ul id="item-list"></ul>
        `;

    const root = document.querySelector(selector);

    root.insertAdjacentHTML("beforeend", template);

    const addButton = document.querySelector("#add-button");
    const todoInput = document.querySelector("#todo-input");
    const itemList = document.querySelector("#item-list");

    addButton.addEventListener("click", () => {
      console.log({ todoInput });
      const item = `<li>${todoInput.value}</li>`;

      itemList.insertAdjacentHTML("beforeend", item);
      todoInput.value = "";
    });
  }
}

module.exports = ToDoComponent;
