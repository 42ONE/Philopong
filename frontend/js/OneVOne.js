import Component from "./core/Component.js";
import { init, animate, myReq } from "./components/Pong.js";

export default class OneVOne extends Component {
	setup () {
	}

	template () {
		return `
		`;
	}

	mounted () {
		window.addEventListener('popstate', function() {
			const $canvas = document.getElementsByTagName('canvas');
                const $scoreBoard = document.getElementById('scoreBoard');
                const $winnerMessage = document.getElementById('winnerMessage');
                if (myReq)
                    cancelAnimationFrame(myReq);
                if ($canvas.length > 0)
                    document.body.removeChild($canvas[0]);
                if ($scoreBoard)
                    document.body.removeChild($scoreBoard);
                if ($winnerMessage)
                    document.body.removeChild($winnerMessage);
		  });
	}

	gameStart() {
		init();
		animate();
	}
}
