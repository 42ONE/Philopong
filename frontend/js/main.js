// import Profile from "./Profile.js";

import { changeUrl , $app, routes, $style } from "./core/changeUrl.js";

// import SignUp from "./SignUp.js";

routes[window.location.pathname].page.render();
$style.href = routes[window.location.pathname].css;

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});
