import Component from "../core/Component.js";

export default class MatchBoard extends Component {
	template() {
		const { final, match } = this.props;
		let tags;
		if (final === true)
		{
			tags =  `
				<li class="tournament-bracket__item">
				<div class="tournament-bracket__match">
				  <table class="tournament-bracket__table">
					<tbody class="tournament-bracket__content">
					  <tr>
						<td class="tournament-bracket__score d-flex justify-content-center">
							<span style="color: #000; font-weight: bold;">🏆🏆</span>
						</td>
						<td class="tournament-bracket__player" style="text-align: center;">
						  <span style="color: #000; font-weight: bold;">${match.winner}</span>
						</td>
					  </tr>
					</tbody>
				  </table>
				</div>
			  </li>
			  `
		}
		else {
			tags = match.map(({ user1, user2, score1, score2, winner }) =>
			`
				<li class="tournament-bracket__item">
				<div class="tournament-bracket__match">
				  <table class="tournament-bracket__table">
					<tbody class="tournament-bracket__content" ${user1 !== winner ? 'style="opacity: 0.5;"' : ""}>
					  <tr>
						<td class="tournament-bracket__score d-flex justify-content-center">
							<span style="color: #000; font-weight: bold;">${score1}</span>
						</td>
						<td class="tournament-bracket__player" style="text-align: center;">
						  <span style="color: #000; font-weight: bold;">${user1}</span>
						</td>
					  </tr>
					</tbody>
				  </table>
				</div>
			  </li>
			  <li class="tournament-bracket__item">
				<div class="tournament-bracket__match">
				  <table class="tournament-bracket__table">
					<tbody class="tournament-bracket__content" ${user2 !== winner ? 'style="opacity: 0.5;"' : ""}>
					  <tr>
						<td class="tournament-bracket__score d-flex justify-content-center">
							<span style="color: #000; font-weight: bold;">${score2}</span>
						</td>
						<td class="tournament-bracket__player" style="text-align: center;">
						  <span style="color: #000; font-weight: bold;">${user2}</span>
						</td>
					  </tr>
					</tbody>
				  </table>
				</div>
			  </li>
		`
		).join('');
		}
		return tags;
	}
}
