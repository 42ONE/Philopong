import Component from "./core/Component.js";
import { tournamentHistory } from "./core/tournamentHistory.js";
import { changeUrl } from "./core/changeUrl.js";

export default class TournamentStart extends Component {
	setup () {
	}

	template () {
		return `
        <body>
            <div class="container">
                <h1 id="header"></h1>
                <form id="nicknameForm">
                    <div class="input-group">
                        <label for="player1" id="p1"></label>
                        <input type="text" id="player1" name="player1" required>
                    </div>
                    <div class="input-group">
                        <label for="player2" id="p2"></label>
                        <input type="text" id="player2" name="player2" required>
                    </div>
                    <div class="input-group">
                        <label for="player3" id="p3"></label>
                        <input type="text" id="player3" name="player3" required>
                    </div>
                    <div class="input-group">
                        <label for="player4" id="p4"></label>
                        <input type="text" id="player4" name="player4" required>
                    </div>
                    <button type="submit" class="submit-btn" id="start"></button>
                </form>
            </div>
        </body>
		`;
	}

	mounted () {
        changeLanguage("tournament-start");

        

        document.getElementById('start').addEventListener('click', function(e) {
            e.preventDefault();
            const player1 = document.getElementById('player1').value;
            const player2 = document.getElementById('player2').value;
            const player3 = document.getElementById('player3').value;
            const player4 = document.getElementById('player4').value;
            if (player1 && player2 && player3 && player4)
            {
                localStorage.removeItem('tournament');
                tournamentHistory.cnt = 0;
                tournamentHistory.match1.user1 = player1;
                tournamentHistory.match1.user2 = player2;
                tournamentHistory.match2.user1 = player3;
                tournamentHistory.match2.user2 = player4;
                localStorage.setItem('tournament', JSON.stringify(tournamentHistory));
                console.log(localStorage.getItem('tournament'));
                changeUrl("/tournament");
            }
          });

	}
}
