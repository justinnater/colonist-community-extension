import { store } from "./Store.ts";

const rankedDiceThrows = () => Object.entries(store.diceThrows)
    .sort(([, countA], [, countB]) => countB - countA) // Sort descending by count
    .map(([value, count], index) => ({
        value,
        count,
        rank: 11 - index, // Assign rank (highest count = rank 11)
    }));

const valueToRank = () => Object.fromEntries(
    rankedDiceThrows().map(({ value, rank }) => [value, rank])
);

export const calculateHeight = (value: string, count: number) => {
    const rankFactor = 100 / 11;
    const rank = valueToRank()[value]; // Get the rank for the current dice value
    const percentage = (rank * rankFactor) - rankFactor;

    // Find matches with the same count
    const matches = rankedDiceThrows().filter(({ count: countValue }) => countValue === count);

    // Determine the index of the current value in the matches array
    const index = matches.findIndex(({ value: valueMatch }) => valueMatch === value);
    const countMatches = matches.length;

    // Calculate the delta for the current value
    const percentageDelta = (rankFactor / countMatches) + (rankFactor * index);

    // Final height value
    return count === 0 ? 0 : (percentage + percentageDelta);
};
