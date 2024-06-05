import Component from "./core/Component.js";
import Title from "./components/Title.js";
import Info from "./components/Info.js";
import MatchHistory from "./components/MatchHistory.js";

export default class Profile extends Component {
	setup () {
		this.state = {
			user_data : {
                info: [
                    {
                        profile: "./images/philopong.webp",
                        id: "test_id",
                        nickname: "test_nickname",
                        win: 10,
                        lose: 5
                    }
                ],
				history_list: [
					{ opponent_id: "woosekim", result: "win", o_score: 3, u_score: 11 },
					{ opponent_id: "phan", result: "lose", o_score: 2, u_score: 0 },
					{ opponent_id: "hcho2", result: "win", o_score: 3, u_score: 11 },
					{ opponent_id: "soohlee", result: "lose", o_score: 8, u_score: 5 },
					{ opponent_id: "soohlee", result: "lose", o_score: 8, u_score: 5 }
				]
			}
		}
	}

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
                    <div class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></div>
                </div>
                <div class="row" data-component="info"></div>
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
    
    mounted() {
        const { getPageTitle } = this;

		const $title = this.$target.querySelector('[data-component="title"]');
        const $Info = this.$target.querySelector('[data-component="info"]');
        const $MatchHistory = this.$target.querySelector('[data-component="match-history"]');

        new Title($title, { getPageTitle });
        
        const { info, history_list } = this.state.user_data;

        new Info($Info, { info: info[0] });
        new MatchHistory($MatchHistory, { match_history: history_list, user_id: info[0].id });
    }

    get getPageTitle() {
        return 'Profile';
    }
}
