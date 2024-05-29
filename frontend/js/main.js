import Profile from "./profile.js";
import MainPage from "./main-page.js"

const $app = document.querySelector(".App");

const routes = {
    "/": {
        page: MainPage, 
        css: "../css/main-page.css",
    },
    "/profile": {
        page: Profile,
        css: "../css/profile.css"
    }
};

$app.innerHTML = routes["/"].page.template();
const style = document.querySelector("#style");
style.href = routes["/"].css;

export const changeUrl = (requestedUrl) => {
    history.pushState(null, null, requestedUrl);

    $app.innerHTML = routes[requestedUrl].page.template();
    style.href = routes[requestedUrl].css;
}

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("moveToProfile")) {
        e.preventDefault();
        changeUrl("/profile");
    }
});