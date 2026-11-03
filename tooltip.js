function initGoosseTooltips(root = document) {
    root
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(el => {
            if (!el._goosseTooltip) {
                el._goosseTooltip = new bootstrap.Tooltip(el);
            }
        });
}

window.goosseTooltip = { version: '1.1', init: initGoosseTooltips };

document.addEventListener('DOMContentLoaded', () => {
    initGoosseTooltips();
});
