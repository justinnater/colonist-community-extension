import { JSX } from "solid-js";

export type ClickAwayListenerProps = {
    children: JSX.Element;
    onClickAway: (event: PointerEvent) => void;
}
