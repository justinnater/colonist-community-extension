import { GameSubscriber } from "./GameSubscriber.ts";
export declare class GameController {
    private static subscribers;
    static startLobby(): void;
    static endLobby(): void;
    static startGame(): void;
    static endGame(): void;
    static subscribe(subscriber: GameSubscriber): void;
}
