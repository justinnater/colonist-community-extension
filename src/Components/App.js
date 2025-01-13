"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solid_js_1 = require("solid-js");
var solid_svg_1 = require("../Assets/solid.svg");
var vite_svg_1 = require("../Assets/vite.svg");
require("./App.css");
function App() {
    var _a = (0, solid_js_1.createSignal)(0), count = _a[0], setCount = _a[1];
    return (<>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={vite_svg_1.default} class="logo" alt="Vite logo"/>
                </a>
                <a href="https://solidjs.com" target="_blank">
                    <img src={solid_svg_1.default} class="logo solid" alt="Solid logo"/>
                </a>
            </div>
            <h1>Vite + Solid</h1>
            <div class="card">
                <button onClick={function () { return setCount(function (count) { return count + 1; }); }}>
                    count is {count()}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Solid logos to learn more
            </p>
        </>);
}
exports.default = App;
