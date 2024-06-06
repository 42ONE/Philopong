import Component from "../core/Component.js";

export default class Menu extends Component {
  template() {
    return `
    <ul>
        <li><a class="moveToProfile" href="#">My page</a></li>
        <li><a href="#">Local Game</a></li>
    </ul>
    <button class="btn" data-bs-toggle="dropdown" aria-expanded="false" data-component="multi-game">
        Multi Game
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">1 vs 1</a></li>
        <li><a class="dropdown-item" href="#">Tournament</a></li>
    </ul>
    `
  }

  mounted () {
    const $multiGame = this.$target.querySelector('[data-component="multi-game"]');
  }

}