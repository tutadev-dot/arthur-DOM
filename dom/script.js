document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Função para adicionar tarefa
    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const span = document.createElement('span');
        span.textContent = taskText;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-task';
        
        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Adicionar evento de remoção de tarefa
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }

    // Evento de clique no botão "Adicionar Tarefa"
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = '';  // Limpa o campo de entrada
        }
    });

    // Teste automático: Adicionar 3 tarefas e removê-las
    function testTasks() {
        const tasks = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];
        tasks.forEach(task => addTask(task));

        setTimeout(() => {
            const removeButtons = document.querySelectorAll('.remove-task');
            removeButtons.forEach(button => button.click());
        }, 3000);  // Remover as tarefas após 3 segundos
    }

    testTasks();
});
