import { createSignal } from "solid-js";

export type InformationButtonProps = {
    icon: string;
    text: string;
}

export const InformationButton = (props: InformationButtonProps) => {
    const [isPopperVisible, setIsPopperVisible] = createSignal(false);

    return (
        <div
            class={`in-game-information-button ${
                isPopperVisible() ? "" : "card-closed"
            }`}
            onClick={() => setIsPopperVisible(!isPopperVisible())} // Toggle signal on click
        >
            <img
                alt="info"
                src={props.icon}
                class="help-button-img darken-on-hover"
            />
            <div class="info-box-pointer-container">
                <div class="info-box-pointer" />
            </div>
            {isPopperVisible() && (
                <div class="in-game-information-content">
                    { props.text }
                </div>
            )}
        </div>
    );
}