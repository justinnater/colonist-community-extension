import { styled } from "solid-styled-components";

export const NumberContainer = styled("div")({
    "text-align": "center",
    "height": "25.81px"
});

export const GridContainer = styled("div")({
    "display": "grid",
    "height": "200px",
    "pointer-events": "none",
    "grid-template-columns": "repeat(11, 1fr)",
    "grid-template-rows": "1fr 0.175fr",
    "column-gap": "10px",
    "align-items": "end",
});

export const OtherContainer = styled(NumberContainer)<{ height: number }>(
    ({ height }) => ({
        "height": `${height}%`,
        "min-height": "25px",
        "background-color": "#157ee0",
        "border": "1px solid black",
        "border-radius": "8px",
        "color": "#fff",
    })
);
