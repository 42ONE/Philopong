import Login from "../Login.js";
import Tournament from "../Tournament.js";
import TournamentResult from "../TournamentResult.js";
import MainPage from "../MainPage.js"
import OneVOne from "../OneVOne.js";
import Multi from "../Multi.js";
import AI from "../AI.js";
import { isUndefined } from "./type.js";

export const $app = document.querySelector("#app");
export const $style = document.querySelector("#page-style");

export const routes = {
    "/": {
        page: new MainPage($app),
        css: "../css/main-page.css",
    },
    "/login": {
        page: new Login($app),
        css: "../css/login.css",
    },
    "/tournament-result": {
        page: new TournamentResult($app),
        css: "../css/tournament-result.css",
    },
    "/tournament": {
        page: new Tournament($app),
        // css: "../css/main-page.css",
    },
    "/main-page": {
        page: new MainPage($app),
        css: "../css/main-page.css",
    },
    "/1v1": {
        page: new OneVOne($app),
        // css: "../css/pong.css",
    },
    "/ai": {
        page: new AI($app)
    },
    "/multi": {
        page: new Multi($app),
        // css: "../css/pong.css",
    },
};

export const changeUrl = (requestedUrl) => {
    const routeKeys = Object.keys(routes);
    const isnotFoundPage = routeKeys.find(elem => elem === requestedUrl);
    const path = isUndefined(isnotFoundPage) ? '/' : requestedUrl;

    history.pushState(null, null, path);

    if (path === '/1v1' || path === '/multi' || path === '/ai')
        routes[path].page.gameStart();

    routes[path].page.render();
    $style.href = routes[path].css;
}
