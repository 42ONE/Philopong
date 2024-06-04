import Component from "../core/Component.js";

export default class MatchHistory extends Component {

    template() {
        return `
            <div class="row match-history-list-lose">
                <div class="col">user1</div>
                <div class="col">11 : 8</div>
                <div class="col">user2</div>
            </div>
        `
    }
}