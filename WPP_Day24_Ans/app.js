document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('draggable-list');
    let draggingItem = null;

    list.addEventListener('dragstart', (event) => {
        console.log("dragstart triggered")
        draggingItem = event.target;
        event.target.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
    });

    list.addEventListener('dragend', (event) => {
        console.log("dragend triggered")
        event.target.classList.remove('dragging');
        draggingItem = null;
    });

    list.addEventListener('dragover', (event) => {
        console.log("dragover triggered")
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';

        const target = event.target;
        if (target && target !== draggingItem && target.nodeName === 'LI') {
            const bounding = target.getBoundingClientRect();
            const offset = bounding.y + bounding.height / 2;
            console.log("offset", offset)
            console.log("event.clientY", event.clientY)
            list.insertBefore(draggingItem, (event.clientY - offset > 0) ? target.nextSibling : target);
        }
    });
});
