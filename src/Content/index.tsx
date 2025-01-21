import { GameModeController } from "../Utilities/Game/GameModeController.ts";

const targetElement = document.getElementById("matchmaking-searchmatch-popup");

if (targetElement) {
    console.error("Could not find target element");
}

const styleObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "style") {
            const displayStyle = targetElement!.style.display;

            if (displayStyle === "none") {
                setGameMode(GameMode.INGAME);
            } else if (!targetElement!.hasAttribute("style") || displayStyle === "") {
                setGameMode(GameMode.LOBBY);
            }
        }
    }
});


// Set up the observer to watch for changes in the 'style' attribute
const styleConfig = {
    attributes: true,   // Watch for changes in attributes (style)
    attributeFilter: ["style"],  // Only observe the style attribute
};

if (targetElement) {
    styleObserver.observe(targetElement, styleConfig);
}

enum GameMode {
    INGAME,
    LOBBY,
}

const setGameMode = (mode: GameMode) => {
    switch (mode) {
        case GameMode.INGAME:
            GameModeController.startGame();
            break;
        case GameMode.LOBBY:
            GameModeController.startLobby();
            break;
    }
}
