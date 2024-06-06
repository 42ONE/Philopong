import Component from "../core/Component.js";
import FriendList from "./FriendList.js";
import Menu from "./Menu.js";

export default class Sidebar extends Component {
  template() {
    return `
    <div class="sidebar-header" data-component="sidebar-header"></div>
    <div class="menu" data-component="menu"></div>
    <div class="friend-list" data-component="friend-list"></div>
    `
  }

  mounted () {
      // const $profile = this.$target.querySelector('[data-component="sidebar-header"]');
    const $menu = this.$target.querySelector('[data-component="menu"]');
    const $friends = this.$target.querySelector('[data-component="friend-list"]');

    new Menu($menu);
    new FriendList($friends);
  }

}