document.addEventListener('DOMContentLoaded', () => {
    function resetModal() {
        document.getElementById('modal-title-input').value = '';
        document.getElementById('description').value = '';
        document.getElementById('assigned').value = '';
        document.getElementById('priority').value = 'media';
        document.getElementById('status').value = 'backlog';
        document.getElementById('deadline').value = '';
    }

    document.querySelectorAll('.add-card-button').forEach(button => {
        button.addEventListener('click', () => {
            const columnId = event.target.closest('.card').id;
            document.getElementById('status').value = columnId;
            document.getElementById('modal').classList.remove('hidden');
        });
    });

    document.querySelector('.close-button').addEventListener('click', () => {
        resetModal();
        document.getElementById('modal').classList.add('hidden');
    });
    
    document.getElementById('modal').addEventListener('click', (event) => {
        if (event.target === document.getElementById('modal')) {
            resetModal();
            document.getElementById('modal').classList.add('hidden');
        }
    });
        
    document.getElementById('save-button').addEventListener('click', () => {
        const title = document.getElementById('modal-title-input').value;
        const description = document.getElementById('description').value;
        const assigned = document.getElementById('assigned').value;
        const priority = document.getElementById('priority').value;
        const status = document.getElementById('status').value;
        const deadline = document.getElementById('deadline').value;
    
        const newTask = document.createElement('p');
        newTask.className = 'task';
        newTask.draggable = true;
        newTask.textContent = `${title}`;
    
        document.getElementById(status).querySelector('.tasks').appendChild(newTask);
        document.getElementById('modal').classList.add('hidden');
        resetModal();
    });
    
});