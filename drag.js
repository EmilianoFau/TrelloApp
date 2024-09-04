const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".tasks");

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
});

droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const currentTask = document.querySelector(".is-dragging");

        if (!bottomTask) {
            zone.appendChild(currentTask);
        } else {
            zone.insertBefore(currentTask, bottomTask);
        }
    });

    zone.addEventListener("drop", () => {
        const currentTask = document.querySelector(".is-dragging");
        const newState = zone.closest('.card').id;
        currentTask.setAttribute('status', newState);
    });
});

const insertAboveTask = (zone, mouseY) => {
    const elements = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    elements.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
        }
    });

    return closestTask;
};