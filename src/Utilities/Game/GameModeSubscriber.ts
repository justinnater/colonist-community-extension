export abstract class GameModeSubscriber {
    public startLobby(): void {};
    public endLobby(): void {};

    public startGame(): void {};
    public endGame(): void {};
}
