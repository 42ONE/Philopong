window.translations = {
    language: "english",
    english: {
        welcome: 'Hello',
        logout: 'logout',
        btnTournament: "Tournament",
        btn1v1: "1v1",
        btnAI: "AI Mode",
        btnMultiplay: "Multiplay",
        language: "Language",
        notFoundError: "URL Not Found!",
        enterNick: "Enter Player Nicknames",
        player: "Player",
        start: "Start",
        goMain: "go to Main",
        semiFinal: "Semi-final",
        final: "Final",
        winner: "Winner",
    },
    korean: {
        welcome: '반가워요',
        logout: '로그아웃',
        btnTournament: "토너먼트",
        btn1v1: "1대1",
        btnAI: "인공지능 모드",
        btnMultiplay: "멀티플레이",
        language: "언어",
        notFoundError: "존재하지 않는 URL 입니다.",
        enterNick: "닉네임을 입력하세요",
        player: "플레이어",
        start: "시작",
        goMain: "메인 화면으로",
        semiFinal: "준결승",
        final: "결승",
        winner: "우승자",
    },
    tatar: {
        welcome: 'Сәлам',
        logout: 'чыгу',
        btnTournament: "турнир",
        btn1v1: "1 дән 1",
        btnAI: "ясалма",
        btnMultiplay: "мультиплеер",
        language: "тел",
        notFoundError: "URL табылмады!",
        enterNick: "Плеер кушаматларын кертегез",
        player: "Плеер",
        start: "Башлау",
        goMain: "Төп экранга",
        semiFinal: "ярымфинал",
        final: "финал",
        winner: "җиңүче",
    },
}

function setLanguage(language) {
    window.translations.language = language;
    localStorage.setItem('language', language);
}

function changeLanguage(page) {
    const language = localStorage.getItem('language');
    if (page == "mainpage")
    {
        document.querySelector('#welcome').textContent = window.translations[language].welcome;
        document.querySelector('#logout').textContent = window.translations[language].logout;
        document.querySelector('#btn1v1').textContent = window.translations[language].btn1v1;
        document.querySelector('#btnAI').textContent = window.translations[language].btnAI;
        document.querySelector('#btnTournament').textContent = window.translations[language].btnTournament;
        document.querySelector('#btnMultiplay').textContent = window.translations[language].btnMultiplay;
    }
    else if (page == "tournament-start")
    {
        document.querySelector('#header').textContent = window.translations[language].enterNick;    
        document.querySelector('#p1').textContent = `${window.translations[language].player} 1`;    
        document.querySelector('#p2').textContent = `${window.translations[language].player} 2`;    
        document.querySelector('#p3').textContent = `${window.translations[language].player} 3`;    
        document.querySelector('#p4').textContent = `${window.translations[language].player} 4`;    
        document.querySelector('#start').textContent = window.translations[language].start;    
    }
    else if (page == "tournament-result")
    {
        document.querySelector('#semi-final').textContent = window.translations[language].semiFinal;    
        document.querySelector('#final').textContent = window.translations[language].final;    
        document.querySelector('#winner').textContent = window.translations[language].winner;    
        document.querySelector('#go-main').textContent = window.translations[language].goMain;    
    }
}
