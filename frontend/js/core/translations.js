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
    },
}

function setLanguage(language) {
    window.translations.language = language;
    localStorage.setItem('language', language);
}

function changeLanguage(page) {
    const language = localStorage.getItem('language');
    console.log(language);
    if (page == "mainpage")
    {
        document.querySelector('#welcome').textContent = window.translations[language].welcome;
        document.querySelector('#logout').textContent = window.translations[language].logout;
        document.querySelector('#btn1v1').textContent = window.translations[language].btn1v1;
        document.querySelector('#btnAI').textContent = window.translations[language].btnAI;
        document.querySelector('#btnTournament').textContent = window.translations[language].btnTournament;
        document.querySelector('#btnMultiplay').textContent = window.translations[language].btnMultiplay;
    }
}
