import { GameModeSubscriber } from "../Game/GameModeSubscriber.ts";
import { render } from "solid-js/web";
import { HelpButton } from "../../Components/Dice/HelpButton.tsx";

export class DiceGameModeSubscriber extends GameModeSubscriber {
    public startGame(): void {
        const gameLogText = document.getElementById("help_buttons_section");

        if (gameLogText) {
            render(() => <HelpButton />, gameLogText);
        }
    }
}
