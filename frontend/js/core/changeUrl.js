import Login from "../Login.js";
import Tournament from "../Tournament.js";
import MainPage from "../MainPage.js"
import OneVOne from "../OneVOne.js";
import Multi from "../Multi.js";
import AI from "../AI.js";

export const $app = document.querySelector("#app");
export const $style = document.querySelector("#page-style");

export const routes = {
    "/": {
        page: new Login($app),
        css: "../css/login.css",
    },
    "/login": {
        page: new Login($app),
        css: "../css/login.css",
    },
    "/tournament-match": {
        page: new Tournament($app),
        css: "../css/tournament.css",
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
    history.pushState(null, null, requestedUrl);

    if (requestedUrl === '/1v1' || requestedUrl === '/multi' || requestedUrl === '/ai')
        routes[requestedUrl].page.gameStart();

    routes[requestedUrl].page.render();
    $style.href = routes[requestedUrl].css;
}