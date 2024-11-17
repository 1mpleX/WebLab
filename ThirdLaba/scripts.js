document.querySelector('.burger-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
});

document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-modal').showModal();
});

document.getElementById('task-modal').addEventListener('click', (e) => {
    if (e.target.tagName === 'DIALOG') {
        e.target.close();
    }
});
// Обработчик для кнопки "Отмена"
document.querySelector('button[value="cancel"]').addEventListener('click', () => {
    document.getElementById('task-modal').close();
});