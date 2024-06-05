import Component from "../core/Component.js";

export default class Info extends Component {

    template() {
        return `
            <div class="info-element">ID : test</div>
            <div class="info-element">Nickname : test</div>
            <div class="info-element">전적 : 0W-0L</div>
        `
    }
}