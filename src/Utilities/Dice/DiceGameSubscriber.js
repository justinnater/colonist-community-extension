import { GameSubscriber } from "../Game/GameSubscriber.ts";
export class DiceGameSubscriber extends GameSubscriber {
    startGame() {
        console.log("DiceGameSubscriber: Starting game");
    }
}
