import Component from "./core/Component.js";
import Avatar from "./components/Avatar.js";
import Info from "./components/Info.js";
import MatchHistory from "./components/MatchHistory.js";

export default class Profile extends Component {

    template() {
        return `
            <div class="container">
                <div class="sidebar">
                    <div class="sidebar-header">
                        <img src="./images/philopong.webp" alt="Profile Image">
                        <b>Hyuim</b>
                    </div>

                    <div class="menu">
                        <ul>
                            <li><a href="#">My page</a></li>
                            <li><a href="#">Local Game</a></li>
                            <li><a href="#">Multi Game</a></li>
                        </ul>
                    </div>

                    <hr>
                    <div class="friend-list">
                        <b class="title">Friend List</b>
                        <button class="friend-add-button"></button>
                        <input class="friend-search-bar" type="text" placeholder="Search..">

                        <ul>
                            <li class="friend-status">woosekim</li>
                            <li class="friend-status">phan</li>
                            <li class="friend-status">hcho2</li>
                            <li class="friend-status">soohlee</li>
                        </ul>
                    </div>
                </div>
                    
                <div class="row">
                    <h1 class="py-3 title">Profile</h1>
                </div>
                <div class="row">   
                    <div class="col-md" data-component="avatar"></div>
                    <div class="col-md info" data-component="info"></div>
                </div>
                <div class="profile-edit">
                    <span class="btn">Profile Edit</span>
                </div>
                <div class="row">
                    <div class="match-history-title">Match History</div>
                </div>
                <div data-component="match-history"></div>
            </div>
        `;
    }
    
    mounted()
    {
        const $Avatar = this.$target.querySelector('[data-component="avatar"]');
        const $Info = this.$target.querySelector('[data-component="info"]');
        const $MatchHistory = this.$target.querySelector('[data-component="match-history"]');
        console.log($Avatar);
        new Avatar($Avatar);
        new Info($Info);
        new MatchHistory($MatchHistory);
    }
}