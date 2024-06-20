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

async function getUserInfo() {
    const url = 'https://127.0.0.1:8000/oauth/get_user_data/';
    const options = {
        credentials: 'include'  // 세션 정보를 포함하여 요청
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export const changeUrl = async (requestedUrl) => {
    const routeKeys = Object.keys(routes);
    const isnotFoundPage = routeKeys.find(elem => elem === requestedUrl);
    const data = await checkLoginStatus();
    const path = data.logged_in ? (isUndefined(isnotFoundPage) ? '/' : requestedUrl) : '/login';

    history.pushState(null, null, path);

    if (path === '/1v1' || path === '/multi' || path === '/ai' || path === '/tournament')
        routes[path].page.gameStart();

    if (path === '/' || path === '/main-page')
    {
        const userData = await getUserInfo();
        routes[path].page.setState({ 'username': userData.user_name, 'profile_img': userData.profile_image_link});
    }
    routes[path].page.render();
    $style.href = routes[path].css;
}

export async function checkLoginStatus() {
    // Define the URL and request options
    const url = 'https://127.0.0.1:8000/oauth/check_login_status/';
    const options = {
        credentials: 'include'  // 세션 정보를 포함하여 요청
    };

    // let isLogin = false;

    // Log the URL and request options before making the request
    console.log('Request URL:', url);
    console.log('Request Options:', options);

    const response = await fetch(url, options);
    const data = await response.json();
    // const isLoginStatus = await data.logged_in;

    // console.log("login status : ", isLoginStatus);
    return data;
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // 쿠키의 이름을 확인하고, 해당 쿠키의 값을 가져옵니다.
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function logoutUser() {
    const logoutUrl = 'https://127.0.0.1:8000/oauth/logout/';
    const csrfToken = getCookie('csrftoken');  // CSRF 토큰 가져오기
    console.log(csrfToken);
    const options = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken  // CSRF 토큰을 헤더에 포함
        }
    };

    fetch(logoutUrl, options)
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log('Logout successful:', data.message);
                // 로그아웃 후 로그인 페이지로 리다이렉트
                changeUrl('/login');
            } else {
                console.error('Logout failed:', data.error);
            }
        })
        .catch(error => console.error('Error:', error));
}
