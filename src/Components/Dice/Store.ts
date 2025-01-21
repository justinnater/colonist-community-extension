import { createStore } from "solid-js/store";

export type DiceThrow = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const [store, setStore] = createStore<{
    diceThrows: Record<DiceThrow, number>;
}>({
    diceThrows: {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 1,
        7: 2,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
    },
});
