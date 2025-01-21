import { GameEventSubscriber } from "../Game/GameEventSubscriber.ts";
import { DiceThrow, setStore } from "../../Components/Dice/Store.ts";

export class DiceGameEventSubscriber implements GameEventSubscriber {
    public onEvent(event: string, element: Element): void {
        if (!event.includes("rolled")) return;

        // Find dice images within the message
        const diceImages = element.querySelectorAll<HTMLImageElement>(
            'img[src*="dice_"]'
        );

        // Extract dice numbers from their `src` attributes
        const diceNumbers = Array.from(diceImages).map((img) => {
            const match = img.src.match(/dice_(\d)/);
            return match ? parseInt(match[1], 10) : null;
        });

        // Filter out null values and log the rolled numbers
        const rolledNumbers = diceNumbers.filter((num) => num !== null);
        console.log("Numbers rolled:", rolledNumbers);

        const sum = rolledNumbers.reduce((acc, num) => acc + num, 0) as DiceThrow;

        setStore("diceThrows", sum, (value) => value + 1);
    }
}
