import { DiceGameModeSubscriber } from "../Dice/DiceGameModeSubscriber.tsx";
import { GameEventController } from "./GameEventController.ts";

export const subscribers = [
    new DiceGameModeSubscriber(),
    new GameEventController(),
];
