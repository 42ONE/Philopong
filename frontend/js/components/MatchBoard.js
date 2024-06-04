import Component from "../core/Component.js";

export default class MatchBoard extends Component {
	template() {
		const { players } = this.props;
		return players.map(({name, profile}) =>
				`
				<li class="tournament-bracket__item">
				<div class="tournament-bracket__match">
				  <table class="tournament-bracket__table">
					<tbody class="tournament-bracket__content">
					  <tr>
						<td class="tournament-bracket__score d-flex justify-content-center">
							<img style="max-width:100%; width: 40px; height:40px; border-radius: 100%;" src="${profile}" class alt="">
						</td>
						<td class="tournament-bracket__player" style="text-align: center;">
						  <span style="color: #000; font-weight: bold;">${name}</span>
						</td>
					  </tr>
					</tbody>
				  </table>
				</div>
			  </li>
				`
			).join('');
	}
}
