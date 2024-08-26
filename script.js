document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const saveButton = document.getElementById('save-button');
    const modalTitle = document.getElementById('modal-title');
    
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modalTitle.textContent = task.textContent;
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    saveButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});