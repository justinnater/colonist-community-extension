import diceInfo from "../../Assets/dice_info.svg"
import { InformationButton } from "../GameInformationButtonList/InformationButton.tsx";

export const HelpButton = () => {
    return (
        <InformationButton
            icon={diceInfo}
            text="teste"
        />
    );
};
