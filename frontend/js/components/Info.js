import Component from "../core/Component.js";

export default class Info extends Component {

    template() {
        const { profile, id, nickname, win, lose } = this.props.info;
        return `
            <div class="col-md">
                <img class="info-picture" src=${profile} alt="Profile Image">
            </div>
            <div class="col-md info">
                <div class="info-element">ID : ${id}</div>
                <div class="info-element">Nickname : ${nickname}</div>
                <div class="info-element">전적 : ${win}W-${lose}L</div>
            </div>
        `;
    }
}
