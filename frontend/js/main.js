import { changeUrl , routes, $style } from "./core/changeUrl.js";
import { isUndefined } from "./core/type.js";

const routeKeys = Object.keys(routes);
const isNotFoundPage = routeKeys.find(elem => elem === window.location.pathname);

if (isUndefined(isNotFoundPage))
{
  alert(window.translations[localStorage.getItem('language')].notFoundError);
  changeUrl('/');
}

routes[window.location.pathname].page.render();
$style.href = routes[window.location.pathname].css;

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});
