import Component from "./core/Component.js";
import { init, animate } from "./components/Pong.js";

export default class OneVOne extends Component {
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
