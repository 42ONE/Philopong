export var tournamentHistory = {
    cnt: 0,
    round: ['match1', 'match2', 'match3'],
    match1: {
        user1: '',
        user2: '',
        score1: 0,
        score2: 0,
        winner: '',
    },
    match2: {
        user1: '',
        user2: '',
        score1: 0,
        score2: 0,
        winner: '',
    },
    match3: {
        user1: '',
        user2: '',
        score1: 0,
        score2: 0,
        winner: '',
    },
}

localStorage.setItem('tournament', JSON.stringify(tournamentHistory));