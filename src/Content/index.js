"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameController_ts_1 = require("../Utilities/Game/GameController.ts");
var targetElement = document.getElementById('matchmaking-searchmatch-popup');
if (targetElement) {
    console.error('Could not find target element');
}
var styleObserver = new MutationObserver(function (mutationsList) {
    for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
        var mutation = mutationsList_1[_i];
        // Check if the 'style' attribute is being changed
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            var displayStyle = targetElement.style.display;
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
var styleConfig = {
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
var setGameMode = function (mode) {
    switch (mode) {
        case GameMode.INGAME:
            console.log('Game mode: INGAME');
            // select element id: help_buttons_section
            // const helpButtonsSection = document.getElementById('help_buttons_section');
            // console.log(helpButtonsSection);
            GameController_ts_1.GameController.startGame();
            break;
        case GameMode.LOBBY:
            console.log('Game mode: LOBBY');
            GameController_ts_1.GameController.startLobby();
            break;
    }
};
