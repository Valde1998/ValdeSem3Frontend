document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
    const grandchild = document.querySelector('.grandchild');

    parent.addEventListener('click', (event) => {
        alert('Parent clicked');
        console.log('Parent clicked');
    });

    child.addEventListener('click', (event) => {
        alert('Child clicked');
        console.log('Child clicked');
    });

    grandchild.addEventListener('click', (event) => {
        alert('Grandchild clicked');
        console.log('Grandchild clicked');
        // Uncomment the next line to stop the event from bubbling up
        // event.stopPropagation();
    });
});
