const { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } = require('electron-spellchecker');
const { remote } = require('electron');
const languageCode = remote.getGlobal('spellCheckerLanguage');

setTimeout(() => {
    if (languageCode !== '') {
        window.spellCheckHandler = new SpellCheckHandler();
        window.spellCheckHandler.attachToInput();
        window.spellCheckHandler.switchLanguage(languageCode);

        let contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
        let contextMenuListener = new ContextMenuListener((info) => {
            contextMenuBuilder.showPopupMenu(info);
        });
    } 
}, 1000);
