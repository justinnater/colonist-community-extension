import { GameModeSubscriber } from "./GameModeSubscriber.ts";
import { subscribers } from "./config.ts";

export class GameModeController {
    private static subscribers: GameModeSubscriber[] = subscribers;

    public static startLobby() {
        this.subscribers.forEach(subscriber => subscriber.startLobby());
    }

    public static endLobby() {
        this.subscribers.forEach(subscriber => subscriber.endLobby());
    }

    public static startGame() {
        setTimeout(() => {
            this.subscribers.forEach(subscriber => subscriber.startGame())
        }, 1000);
    }

    public static endGame() {
        this.subscribers.forEach(subscriber => subscriber.endGame());
    }
}
