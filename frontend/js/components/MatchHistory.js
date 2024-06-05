import Component from "../core/Component.js";

export default class MatchHistory extends Component {

    template() {
        const { user_id, match_history } = this.props;
		return match_history.map(({ opponent_id, result, o_score, u_score }) => `
            <div class="row match-history-list-${result}">
                <div class="col">${user_id}</div>
                <div class="col">${u_score} : ${o_score}</div>
                <div class="col">${opponent_id}</div>
            </div>
            `
        ).join('');
    }
}
