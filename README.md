# Goosse Tooltip Module

**Version 1.0** — see [CHANGELOG.md](CHANGELOG.md)

Reusable JavaScript & CSS module for **styled Bootstrap 5.3 tooltips**
with **correctly coloured arrows**.

Built on top of **Bootstrap 5.3 (CSS + JS + Popper)**.  
Designed for **Goosse MVC admin interfaces**.

No SCSS, no build step, no framework magic.

---

## Features

- ✅ Custom tooltip styles:
  - primary
  - secondary
  - info
  - success
  - warning
- ✅ Tooltip arrow colour always matches tooltip background
- ✅ Works with **Bootstrap 5.3 + Popper**
- ✅ Plain JavaScript (no jQuery)
- ✅ Safe for AJAX / dynamic table reloads
- ✅ Explicit, production‑first implementation

---

## Requirements

- Bootstrap **5.3.x**
  - Use the **Bootstrap bundle** (includes Popper)
- Plain JavaScript
- CSS loaded **after Bootstrap**
- Server‑side rendering (Goosse MVC or equivalent)

---

## How it Works

Bootstrap 5.3 renders tooltips dynamically using **Popper**.

Internally:
- Popper calculates placement
- Popper sets `data-popper-placement`
- Bootstrap renders the tooltip HTML

The tooltip arrow is directional and must be styled
**per placement** (`top`, `bottom`, `left`, `right`).

This module:
- uses `data-bs-custom-class`
- relies on `data-popper-placement`
- explicitly sets `border-*-color` on `.tooltip-arrow::before`

This guarantees **predictable arrow colouring**.

---

## CSS Implementation

Create one CSS file, for example:

```text
public/goosse/tooltip/tooltip.css
```

✅ Load this file **after Bootstrap CSS**.

---

## JavaScript Requirements

Bootstrap tooltips **must be explicitly initialised**.

### Base initialisation

```js
document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(el => {
            new bootstrap.Tooltip(el);
        });
});
```

### Re‑initialisation after AJAX / reloads

```js
function initGoosseTooltips(root = document) {
    root
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(el => {
            if (!el._goosseTooltip) {
                el._goosseTooltip = new bootstrap.Tooltip(el);
            }
        });
}
```

Call `initGoosseTooltips()` after dynamic DOM updates.

The module version is readable via `window.goosseTooltip.version`.

***

## Usage Examples

### Primary tooltip

Standard button with a primary‑styled tooltip.

```html
<button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    data-bs-custom-class="tooltip-primary"
    title="Primary action">
    <i class="ti ti-check"></i>
</button>
````

Typical use cases:

*   Primary call‑to‑action buttons
*   Confirm actions
*   Main workflow steps

***

### Secondary icon‑only tooltip

Compact icon‑only button with a secondary tooltip.\
Recommended pattern for admin toolbars.
```html
<button
    type="button"
    class="btn btn-outline-secondary btn-sm"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-custom-class="tooltip-secondary"
    title="Secondary action">
    <i class="ti ti-settings"></i>
</button>
````
Typical use cases:

*   Toolbar icons
*   Settings buttons
*   Non‑primary admin actions

***

### Success tooltip

Inline success feedback without a button.

```html
<button
    type="button"
    class="btn btn-warning"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-custom-class="tooltip-success"
    title="Saved successfully">
    <i class="ti ti-alert-triangle"></i>
</button>
````

Typical use cases:

*   Status indicators
*   Inline confirmation feedback
*   Read‑only UI hints

***

### Warning tooltip

Tooltip with warning semantics and dark text.

```html
<button
    type="button"
    class="btn btn-warning"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-custom-class="tooltip-warning"
    title="This action cannot be undone">
    <i class="ti ti-alert-triangle"></i>
</button>
````


Typical use cases:

*   Destructive actions
*   Irreversible operations
*   Validation warnings

***

## Best Practices

*   Always load tooltip CSS **after Bootstrap**
*   Always use `data-bs-custom-class`
*   Avoid Bootstrap `.bs-tooltip-*` classes
*   Avoid SCSS nesting (`&`)
*   Tooltips should enhance clarity, not replace critical information

***

## Extending the Module

To add a new colour:

1.  Copy an existing colour block in the CSS
2.  Adjust background and arrow colour
3.  Use a new `data-bs-custom-class`

Example:

```css
.tooltip-warning .tooltip-inner {
    background-color: var(--bs-warning);
    color: #000;
}
```

***

## Summary

The Goosse Tooltip Module provides:

*   predictable tooltip styling
*   correctly coloured arrows
*   explicit behaviour
*   zero framework dependencies
*   full compatibility with Bootstrap 5.3

✅ **Production‑ready for Goosse MVC admin environments**

