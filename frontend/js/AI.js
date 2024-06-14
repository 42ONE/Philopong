import Component from "./core/Component.js";
import { init, animate } from "./components/PongAI.js";

export default class AI extends Component {
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
