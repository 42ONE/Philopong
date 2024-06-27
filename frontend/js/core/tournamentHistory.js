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
        user1: 'match1 winner',
        user2: 'match2 winner',
        score1: 0,
        score2: 0,
        winner: 'winner',
    },
}

localStorage.setItem('tournament', JSON.stringify(tournamentHistory));
