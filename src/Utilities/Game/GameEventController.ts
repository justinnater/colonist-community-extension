import { GameModeSubscriber } from "./GameModeSubscriber.ts";
import { GameEventSubscriber } from "./GameEventSubscriber.ts";
import { DiceGameEventSubscriber } from "../Dice/DiceGameEventSubscriber.tsx";

export class GameEventController extends GameModeSubscriber {

    private static subscribers: GameEventSubscriber[] = [
        new DiceGameEventSubscriber(),
    ];

    public startGame(): void {
        const gameLogText = document.getElementById("game-log-text");

        if (!gameLogText) return;

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => this.handleMutation(mutation));
        });

        observer.observe(gameLogText, {
            childList: true,
            subtree: false,
        });
    }

    private handleAddedNode(node: Node): void {
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        const element = node as Element;
        const content = element.textContent?.trim();

        if (!content) return;

        GameEventController.subscribers.forEach((subscriber) =>
            subscriber.onEvent(content, element)
        );
    }

    private handleMutation(mutation: MutationRecord): void {
        if (mutation.type !== "childList") return;

        mutation.addedNodes.forEach(this.handleAddedNode);
    }
}
