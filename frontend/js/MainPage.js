import Component from "./core/Component.js";
import Title from "./components/Title.js";
import Sidebar from "./components/Sidebar.js";

export default class MainPage extends Component{
    template() {
      return `
      <div class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></div>
      <div class="sidebar" data-component="sidebar"></div>
      <div class="game-example" data-component="mainSection"></div>
      `;
    }

    get getPageTitle () {
		return 'Philopong';
	}

    mounted () {
        const { getPageTitle } = this;
        const $title = this.$target.querySelector('[data-component="title"]');
        const $sidebar = this.$target.querySelector('[data-component="sidebar"]');
    
        new Title($title, {
          getPageTitle,
        });

        new Sidebar($sidebar);
      }


  }