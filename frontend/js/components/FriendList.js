import Component from "../core/Component.js";
import FriendHeader from "./FriendHeader.js"
import Friend from "./Friend.js";

export default class FriendList extends Component {
    template () {
      return `
        <hr>
        <div data-component="header"></div>
        <div data-component="list"></div>
      `
    }

    mounted () {
        const $header = this.$target.querySelector('[data-component="header"]');
        const $list = this.$target.querySelector('[data-component="list"]');
    
        new FriendHeader($header);
        new Friend($list);
      }
  }