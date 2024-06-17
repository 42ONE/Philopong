import Component from "./core/Component.js";
import Title from "./components/Title.js";
import MatchBoard from "./components/MatchBoard.js";
import { changeUrl } from "./core/changeUrl.js";

export default class TournamentResult extends Component {
	setup () {

		const result = JSON.parse(localStorage.getItem('tournament'));
		this.state = {
			...result
		}
	}

	template () {
		return `
			<header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
			<main class="container tournament-bracket tournament-bracket--rounded">
				<div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
					<h3 class="tournament-bracket__round-title" id="semi-final"></h3>
					<ul class="tournament-bracket__list" data-component="semifinals-players">
					</ul>
				</div>
				<div class="tournament-bracket__round tournament-bracket__round--semifinals">
					<h3 class="tournament-bracket__round-title" id="final"></h3>
					<ul class="tournament-bracket__list" data-component="final-players">
					</ul>
				</div>
				<div class="tournament-bracket__round tournament-bracket__round--gold">
					<h3 class="tournament-bracket__round-title" id="winner"></h3>
					<ul class="tournament-bracket__list" data-component="winner-player">
					</ul>
				</div>
			</main>
			<footer class="mt-5">
				<div class="container centered-container">
					<button class="btn btn-primary btn-lg mb-2" id="go-main"></button>
				</div>
			</footer>
		`;
	}

	mounted () {
		const { getPageTitle } = this;
		changeLanguage("tournament-result");
		const $title = this.$target.querySelector('[data-component="title"]');
		const $semiFinal = this.$target.querySelector('[data-component="semifinals-players"]');
		const $final = this.$target.querySelector('[data-component="final-players"]');
		const $winner = this.$target.querySelector('[data-component="winner-player"]');

		new Title($title, {
			getPageTitle,
		});

		const result = JSON.parse(localStorage.getItem('tournament'));
		const match1 = result.match1;
		const match2 = result.match2;
		const match3 = result.match3;
		const winner = { winner: match3.winner}

		new MatchBoard($semiFinal, {final: false, match: [match1, match2] });

		new MatchBoard($final, {final: false, match: [match3] });

		new MatchBoard($winner, {final: true, match: winner });

		document.getElementById('go-main').addEventListener('click', function() {
			changeUrl("/");
		  });
	}

	get getPageTitle () {
		return 'Philopong Tournament';
	}
}
