var tournament = {
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

localStorage.setItem('tournament', tournament);
//localStorage.getItem('tournament');로 꺼내다 쓰시면 됩니다