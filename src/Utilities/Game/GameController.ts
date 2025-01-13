import { GameSubscriber } from "./GameSubscriber.ts";
import { subcribers } from "./config.ts";

export class GameController {
    private static subscribers: GameSubscriber[] = subcribers;

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
        this.subscribers.forEach(subscriber => subscriber.endGame())
    }

    public static subscribe(subscriber: GameSubscriber) {
        this.subscribers.push(subscriber);
    }
}