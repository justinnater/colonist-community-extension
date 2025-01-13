import { GameController } from "../Utilities/Game/GameController.ts";
const targetElement = document.getElementById('matchmaking-searchmatch-popup');
if (targetElement) {
    console.error('Could not find target element');
}
const styleObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        // Check if the 'style' attribute is being changed
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const displayStyle = targetElement.style.display;
            if (displayStyle === 'none') {
                setGameMode(GameMode.INGAME);
            }
            else if (!targetElement.hasAttribute('style') || displayStyle === '') {
                setGameMode(GameMode.LOBBY);
            }
        }
    }
});
// Set up the observer to watch for changes in the 'style' attribute
const styleConfig = {
    attributes: true, // Watch for changes in attributes (style)
    attributeFilter: ['style'], // Only observe the style attribute
};
if (targetElement) {
    // Start observing the target element
    console.log('Starting observer');
    styleObserver.observe(targetElement, styleConfig);
}
var GameMode;
(function (GameMode) {
    GameMode[GameMode["INGAME"] = 0] = "INGAME";
    GameMode[GameMode["LOBBY"] = 1] = "LOBBY";
})(GameMode || (GameMode = {}));
const setGameMode = (mode) => {
    switch (mode) {
        case GameMode.INGAME:
            console.log('Game mode: INGAME');
            // select element id: help_buttons_section
            // const helpButtonsSection = document.getElementById('help_buttons_section');
            // console.log(helpButtonsSection);
            GameController.startGame();
            break;
        case GameMode.LOBBY:
            console.log('Game mode: LOBBY');
            GameController.startLobby();
            break;
    }
};
