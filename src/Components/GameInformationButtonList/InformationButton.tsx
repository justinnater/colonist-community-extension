import { createSignal } from "solid-js";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener.tsx";
import { InformationButtonProps } from "./Type.ts";

export const InformationButton = (props: InformationButtonProps) => {
    const [isPopperVisible, setIsPopperVisible] = createSignal(false);

    return (
        <ClickAwayListener
            onClickAway={() => setIsPopperVisible(false)}
        >
            <div
                class={`in-game-information-button ${
                    isPopperVisible() ? "" : "card-closed"
                }`}
                onClick={() => setIsPopperVisible(!isPopperVisible())}
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
                    <div class="in-game-information-content" style={{ width: props.width }}>
                        { props.children }
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
}
