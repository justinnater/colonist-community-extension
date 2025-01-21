import diceInfo from "../../Assets/dice_info.svg"
import { InformationButton } from "../GameInformationButtonList/InformationButton.tsx";
import * as Styled from "./Dice.styled.ts";
import { store } from "./Store.ts";
import { For } from "solid-js";
import { calculateHeight } from "./Dice.helper.ts";

export const HelpButton = () => {
    return (
        <InformationButton
            icon={diceInfo}
            width={"400px"}
        >
            <div class="in-game-information-title-container">
                <p class="in-game-information-title">Dice Stats</p>
            </div>
            <Styled.GridContainer>
                {/* Bars for counts */}
                <For each={Object.entries(store.diceThrows)}>
                    {([value, count]) => {
                        return (
                            <Styled.OtherContainer height={calculateHeight(value, count)}>
                                {count}
                            </Styled.OtherContainer>
                        );
                    }}
                </For>

                <For each={Object.entries(store.diceThrows)}>
                    {([value]) => (
                        <Styled.NumberContainer>{value}</Styled.NumberContainer>
                    )}
                </For>
            </Styled.GridContainer>
        </InformationButton>
    );
};
