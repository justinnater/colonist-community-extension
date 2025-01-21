export interface GameEventSubscriber {
    onEvent(event: string, element: Element): void;
}
