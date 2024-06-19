import Login from "../Login.js";
import TournamentStart from "../TournamentStart.js";
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
    "/tournament-start": {
        page: new TournamentStart($app),
        css: "../css/tournament-start.css",
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
    // "/login_check": {
    //     page: new OneVOne($app),
    // },
        

};

export const changeUrl = (requestedUrl) => {
    const routeKeys = Object.keys(routes);
    const isnotFoundPage = routeKeys.find(elem => elem === requestedUrl);
    const path = isUndefined(isnotFoundPage) ? '/' : requestedUrl;

    history.pushState(null, null, path);

    console.log("here");
    if (path === '/1v1')
    {
        checkLoginStatus();
    }
    // if (path === '/1v1' || path === '/multi' || path === '/ai' || path === '/tournament')
    //     routes[path].page.gameStart();

    routes[path].page.render();
    $style.href = routes[path].css;
}

function checkLoginStatus() {
    // Define the URL and request options
    const url = 'http://127.0.0.1:8000/oauth/check_login_status';
    const options = {
        credentials: 'include'  // 세션 정보를 포함하여 요청
    };

    // Log the URL and request options before making the request
    console.log('Request URL:', url);
    console.log('Request Options:', options);

    fetch(url, options)
        .then(response => {
            // Log response details before processing the JSON
            console.log('---------------------------------');
            console.log('Response Status:', response.status);
            console.log('Response Headers:', Array.from(response.headers.entries()));
            console.log('---------------------------------');

            return response.json();
        })
        .then(data => {
            // Log the response data
            console.log('Response Data:', data);

            if (data.logged_in) {
                console.log(`User is logged in as ${data.username}`);
                window.location.href = 'main-page';
                // 로그인된 사용자에게 보여줄 화면을 표시하거나 데이터를 가져오는 로직 추가
            } else {
                console.log('User is not logged in');
                // 로그인 페이지로 리다이렉트 등 처리
                window.location.href = '/login';
            }
        })
        .catch(error => console.error('Error:', error));
}
