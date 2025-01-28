import state from './state.js'

import Split from "split.js";

const btnModeEditor = document.getElementById('btn-mode-editor');
const btnModeSerial = document.getElementById('btn-mode-serial');
const btnModeBlockly = document.getElementById('btn-mode-blockly');

export const mainContent = document.getElementById('main-content');
const editorPage = document.getElementById('editor-page');
const serialPage = document.getElementById('serial-page');
const pageSeparator = document.getElementById('page-separator');
const blocklyPage = document.getElementById('blockly-page');


btnModeEditor.addEventListener('click', async function (e) {
    if (btnModeEditor.classList.contains('active') && !btnModeBlockly.classList.contains('active')) {
        // this would cause both editor & serial pages to disappear
        return;
    }
    btnModeEditor.classList.toggle('active');
    editorPage.classList.toggle('active')
    updatePageLayout(false, true);
});

btnModeSerial.addEventListener('click', async function (e) {
    btnModeSerial.classList.toggle('active');
    serialPage.classList.toggle('active');
    updatePageLayout(false, true);
});

btnModeBlockly.addEventListener('click', async function (e) {
    if(btnModeBlockly.classList.contains('active') && !btnModeEditor.classList.contains('active')) {
        return;
    }
    btnModeBlockly.classList.toggle('active');
    blocklyPage.classList.toggle('active');
    updatePageLayout(true, false);
});



function updatePageLayout(blockly = false, editor = false) {
    if (editorPage.classList.contains('active') && blocklyPage.classList.contains('active')) {
        pageSeparator.classList.add('active');
    } else {
        pageSeparator.classList.remove('active');
        editorPage.style.width = null;
        editorPage.style.flex = null;
        blocklyPage.style.width = null;
        blocklyPage.style.flex = null;
        return;
    }

    if (mainContent.offsetWidth < 768) {
        if (editor) {
            btnModeBlockly.classList.remove('active');
            blocklyPage.classList.remove('active');
        } else if (blockly) {
            btnModeEditor.classList.remove('active');
            editorPage.classList.remove('active');
        }
        pageSeparator.classList.remove('active');
    } else {
        let w = mainContent.offsetWidth;
        let s = pageSeparator.offsetWidth;
        editorPage.style.width = ((w - s) / 2) + 'px';
        editorPage.style.flex = '0 0 auto';
        blocklyPage.style.width = ((w - s) / 2) + 'px';
        blocklyPage.style.flex = '0 0 auto';
    }

    if (serialPage.classList.contains('active')) {
        refitTerminal();
    }
}

export function showEditor() {
    btnModeEditor.classList.add('active');
    editorPage.classList.add('active');
    updatePageLayout(true, false);
}

export function showSerial() {
    btnModeSerial.classList.add('active');
    serialPage.classList.add('active');
    updatePageLayout(false, true);
}

function refitTerminal() {
    // Re-fitting the terminal requires a full re-layout of the DOM which can be tricky to time right.
    // see https://www.macarthur.me/posts/when-dom-updates-appear-to-be-asynchronous
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                if (state.fitter) {
                    state.fitter.fit();
                }
            });
        });
    });
}

// Fix the viewport height for mobile devices by setting
// the --vh css variable to 1% of the window inner height
function fixViewportHeight(e) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    updatePageLayout();
}
fixViewportHeight();
window.addEventListener("resize", fixViewportHeight);

function resize(e) {
    const w = mainContent.offsetWidth;
    const gap = pageSeparator.offsetWidth;
    const ratio = e.clientX / w;
    const hidingThreshold = 0.1;
    const minimumThreshold = 0.2;
    if (ratio < hidingThreshold) {
        blocklyPage.classList.remove('active');
        btnModeBlockly.classList.remove('active');
        updatePageLayout();
        stopResize();
        return;
    } else if (ratio > 1 - hidingThreshold) {
        editorPage.classList.remove('active');
        btnModeEditor.classList.remove('active');
        updatePageLayout();
        stopResize();
        return;
    } else if (ratio < minimumThreshold || ratio > 1 - minimumThreshold) {
        return;
    }
    blocklyPage.style.width = (e.clientX - gap / 2) + 'px';
    editorPage.style.width = (w - e.clientX - gap / 2) + 'px';
}

function stopResize(e) {
    window.removeEventListener('mousemove', resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}

pageSeparator.addEventListener('mousedown', async function (e) {
    window.addEventListener('mousemove', resize, false);
    window.addEventListener('mouseup', stopResize, false);
});
