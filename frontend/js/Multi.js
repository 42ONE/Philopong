import Component from "./core/Component.js";
import { init, animate } from "./components/Pong2VS2.js";

export default class Multi extends Component {
	setup () {
	}

	template () {
		return `
		`;
	}

	mounted () {
		
	}

	gameStart() {
		init();
		animate();
	}
}
