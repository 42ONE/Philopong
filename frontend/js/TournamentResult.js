import Component from "./core/Component.js";
import Title from "./components/Title.js";
import MatchBoard from "./components/MatchBoard.js";

export default class TournamentResult extends Component {
	setup () {
		this.state = {
			matchs : {
				semifinal: [
					{ name: "hyuim", profile: "../images/philopong.webp" },
					{ name: "woosekim", profile: "../images/philopong.webp" },
					{ name: "phan", profile: "../images/philopong.webp" },
					{ name: "hcho2", profile: "../images/philopong.webp" },
				],
				final: [
					{ name: "woosekim", profile: "../images/philopong.webp" },
					{ name: "phan", profile: "../images/philopong.webp" },
				],
				winner: [
					{ name: "phan", profile: "../images/philopong.webp" },
				]
			}
		}
	}

	template () {
		return `
			<header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
			<main class="container tournament-bracket tournament-bracket--rounded">
				<div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
					<h3 class="tournament-bracket__round-title">semi final</h3>
					<ul class="tournament-bracket__list" data-component="semifinals-players">
					</ul>
				</div>
				<div class="tournament-bracket__round tournament-bracket__round--semifinals">
					<h3 class="tournament-bracket__round-title">final</h3>
					<ul class="tournament-bracket__list" data-component="final-players">
					</ul>
				</div>
				<div class="tournament-bracket__round tournament-bracket__round--gold">
					<h3 class="tournament-bracket__round-title">winner</h3>
					<ul class="tournament-bracket__list" data-component="winner-player">
					</ul>
				</div>
			</main>
		`;
	}

	mounted () {
		const { getPageTitle } = this;
		const $title = this.$target.querySelector('[data-component="title"]');
		const $semiFinal = this.$target.querySelector('[data-component="semifinals-players"]');
		const $final = this.$target.querySelector('[data-component="final-players"]');
		const $winner = this.$target.querySelector('[data-component="winner-player"]');

		new Title($title, {
			getPageTitle,
		});

		const { semifinal, final, winner } = this.state.matchs;

		new MatchBoard($semiFinal, { players: semifinal });

		new MatchBoard($final, { players: final });

		new MatchBoard($winner, { players: winner });
	}

	get getPageTitle () {
		return 'Philopong Tournament';
	}
}
