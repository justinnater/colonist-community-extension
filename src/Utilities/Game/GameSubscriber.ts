export abstract class GameSubscriber {
    public startLobby(): void {};
    public endLobby(): void {};

    public startGame(): void {};
    public endGame(): void {};
}