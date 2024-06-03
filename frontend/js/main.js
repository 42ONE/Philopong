import Login from "./Login.js";

const $app = document.querySelector("#app");

const routes = {
    "/": {
        page: new Login($app),
        css: "../css/login.css",
    },
};

// routes.page;
const style = document.querySelector("#page-style");
style.href = routes["/"].css;

// export const changeUrl = (requestedUrl) => {
//     history.pushState(null, null, requestedUrl);

//     $app.innerHTML = routes[requestedUrl].page.template();
//     style.href = routes[requestedUrl].css;
// }

// window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("moveToProfile")) {
//         e.preventDefault();
//         changeUrl("/profile");
//     }
// });
