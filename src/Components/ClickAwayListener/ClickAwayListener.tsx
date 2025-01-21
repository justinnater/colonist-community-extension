import { onCleanup, onMount } from "solid-js";
import { ClickAwayListenerProps } from "./Type.ts";

export const ClickAwayListener = (props: ClickAwayListenerProps) => {
    let ref: HTMLDivElement | undefined;

    const handleClickOutside = (event: PointerEvent) => {
        const clickedElement = event.target as Element;

        if (ref && !ref.contains(clickedElement)) {
            props.onClickAway(event);
        }
    };

    onMount(() => {
        document.addEventListener("pointerdown", handleClickOutside);
    });

    onCleanup(() => {
        document.removeEventListener("pointerdown", handleClickOutside);
    });

    return (
        <div ref={ref}>
            {props.children}
        </div>
    );
}

export default ClickAwayListener;
