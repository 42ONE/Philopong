import Login from "./Login.js";
import Tournament from "./Tournament.js";

const $app = document.querySelector("#app");

const routes = {
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
    "/sign-up": {
        page: new Tournament($app),
        css: "../css/tournament.css",
    },
    "/main-page": {
        page: new MainPage($app),
        css: "../css/main-page.css",
    }
};

routes[window.location.pathname].page.render();
const $style = document.querySelector("#page-style");
$style.href = routes[window.location.pathname].css;

export const changeUrl = (requestedUrl) => {
    history.pushState(null, null, requestedUrl);

    routes[requestedUrl].page.render();
    $style.href = routes[requestedUrl].css;
}

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});

// window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("moveToProfile")) {
//         e.preventDefault();
//         changeUrl("/profile");
//     }
// });
