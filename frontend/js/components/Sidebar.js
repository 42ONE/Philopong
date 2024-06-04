import Component from "../core/Component.js";
import FriendList from "./FriendList.js";

export default class Sidebar extends Component {
  template() {
    return `
      <div data-component="profile"></div>
      <div data-component="menus"></div>
      <div data-component="FriendList"></div>
    `
  }

  mounted () {
    const $friends = this.$target.querySelector('[data-component="FriendList"]');

    new FriendList($friends);
  }

}