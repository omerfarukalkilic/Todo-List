document.getElementById('add-btn').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value;
    if (todoText === '') return;

    var li = document.createElement('li');
    li.textContent = todoText;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    document.getElementById('todo-list').appendChild(li);
    todoInput.value = '';
});
