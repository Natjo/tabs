/**
 *
 * @param {*} el role=tablist element
 *
 */

function tabs(el) {
    const tabs = el.querySelectorAll('[role="tab"]');
    let isFocused = false;

    const keyup = () => {
        if (!el.contains(document.activeElement)) {
            document.removeEventListener('keydown', keydown);
            document.removeEventListener('keyup', keyup);
            isFocused = false;
        }
    };

    const keydown = e => {
        let index;
        let dir = 0;

        if (e.key === 'ArrowLeft') dir = -1;
        if (e.key === 'ArrowRight') dir = 1;

        tabs.forEach((tab, i) => {
            if (tab.getAttribute('aria-selected') === 'true') {
                index = i;
            }
        });

        if (dir === -1 || dir === 1) {
            index = index + dir;
            if (index < 0) index = tabs.length - 1;
            if (index > tabs.length - 1) index = 0;
            tabs[index].focus();
            onclick(tabs[index]);
        }
    };

    const active = (tab, val) => {
        const id = tab.getAttribute('aria-controls');
        const panel = document.getElementById(id);
        tab.setAttribute('aria-selected', val);
        tab.setAttribute('tabindex', val ? 0 : -1);
        panel.setAttribute('aria-hidden', !val);
        panel.setAttribute('aria-expanded', val);
    };

    const onclick = selected => {
        tabs.forEach(tab => {
            selected === tab ? active(tab, true) : active(tab, false);
        });
    };

    tabs.forEach(tab => {
        tab.onclick = () => {
            onclick(tab);
        };
        tab.onfocus = () => {
            if (!isFocused) {
                document.addEventListener('keyup', keyup);
                document.addEventListener('keydown', keydown);
            }
            isFocused = true;
        };
    });
}
export default tabs;
