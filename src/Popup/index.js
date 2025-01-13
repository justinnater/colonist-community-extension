"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("solid-js/web");
var App_tsx_1 = require("../Components/App.tsx");
var appContainer = document.querySelector("#app-container");
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
(0, web_1.render)(App_tsx_1.default, appContainer);
