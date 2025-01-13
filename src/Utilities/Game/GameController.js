import { subcribers } from "./config.ts";
export class GameController {
    static startLobby() {
        this.subscribers.forEach(subscriber => subscriber.startLobby());
    }
    static endLobby() {
        this.subscribers.forEach(subscriber => subscriber.endLobby());
    }
    static startGame() {
        this.subscribers.forEach(subscriber => subscriber.startGame());
    }
    static endGame() {
        this.subscribers.forEach(subscriber => subscriber.endGame());
    }
    static subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
}
Object.defineProperty(GameController, "subscribers", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: subcribers
});
