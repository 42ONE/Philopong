import Component from "../core/Component.js";

export default class FriendHeader extends Component {
  setup () {
  }
  template () {
    return `
    <div class="friend-list">
        <b class="title">Friend List</b>
        <button class="friend-add-button"></button>
        <input class="friend-search-bar" type="text" placeholder="Search..">
    `
  }
}