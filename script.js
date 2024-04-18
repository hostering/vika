function toggleProjectVisibility(projectId) {
    var project = document.getElementById(projectId);
    var button = project.previousElementSibling;

    if (project.style.display === 'none') {
        project.style.display = 'block';
        button.textContent = 'Skrýt projekt';
    } else {
        project.style.display = 'none';
        button.textContent = 'Zobrazit projekt';
    }
}
