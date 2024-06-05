import Component from "./core/Component.js";
import Title from "./components/Title.js";
import Sidebar from "./components/Sidebar.js";

export default class MainPage extends Component{
    template() {
      return `
      <div data-component="title"></div>
      <div data-component="sidebar"></div>
      <div data-component="mainSection"></div>
      `;
    }

    get getPageTitle () {
		return 'Philopong';
	}

    mounted () {
        const { getPageTitle, login } = this;
        const $title = this.$target.querySelector('[data-component="title"]');
    
        new Title($title, {
			getPageTitle,
		});
      }


  }