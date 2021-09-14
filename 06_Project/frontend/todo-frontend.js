const list = document.getElementById('list');
const API = 'http://localhost:3000';

const loadTodos = function() {
  fetch(API)
    .then(response => response.json())
    .then(todos => {
      todos.forEach(t => {
        const li = document.createElement('li');
        li.innerText = t;
        list.appendChild(li);
      });
    });
}

loadTodos();