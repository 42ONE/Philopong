import { changeUrl , routes, $style, checkLoginStatus } from "./core/changeUrl.js";
import { isUndefined } from "./core/type.js";
import { tournamentHistory } from "./core/tournamentHistory.js";
import { getUserInfo } from "./core/changeUrl.js";

const routeKeys = Object.keys(routes);
const isNotFoundPage = routeKeys.find(elem => elem === window.location.pathname);

if (isUndefined(isNotFoundPage))
{
  alert(window.translations[localStorage.getItem('language')].notFoundError);
  changeUrl('/');
}

changeUrl(window.location.pathname);

// routes['/login'].page.render();
// $style.href = routes['/login'].css;

window.addEventListener("popstate", async () => {
  // changeUrl(window.location.pathname);
  const routeKeys = Object.keys(routes);
    const isnotFoundPage = routeKeys.find(elem => elem === window.location.pathname);
    const data = await checkLoginStatus();
    const path = data.logged_in ? (isUndefined(isnotFoundPage) ? '/' : window.location.pathname) : '/login';
    // history.pushState(null, null, path);
    if (path === '/1v1' || path === '/multi' || path === '/ai' || path === '/tournament')
        routes[path].page.gameStart();

    if (path === '/' || path === '/main-page')
    {
        const userData = await getUserInfo();
        // const userData = {user_name : "asdf", profile_img: ""};
        routes[path].page.setState({ 'username': userData.user_name, 'profile_img': userData.profile_image_link});
    }
    routes[path].page.render();
    $style.href = routes[path].css;
});
