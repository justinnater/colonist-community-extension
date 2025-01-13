import { GameSubscriber } from "../Game/GameSubscriber.ts";
import { render } from "solid-js/web";
import { HelpButton } from "../../Components/Dice/HelpButton.tsx";

export class DiceGameSubscriber extends GameSubscriber {
    public startGame(): void {
        console.log("DiceGameSubscriber: Starting game")
        const gameLogText = document.getElementById("help_buttons_section");

        if (gameLogText) {
            render(() => <HelpButton />, gameLogText);
        }
    }
}