import { render } from "solid-js/web";
import App from "../Components/App.tsx";
const appContainer = document.querySelector("#app-container");
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
render(App, appContainer);
