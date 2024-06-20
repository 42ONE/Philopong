import { changeUrl , routes, $style, checkLoginStatus } from "./core/changeUrl.js";
import { isUndefined } from "./core/type.js";
import { tournamentHistory } from "./core/tournamentHistory.js";

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

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});
