window.goosseTooltip = { version: '1.0' };

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(el => new bootstrap.Tooltip(el));
});
