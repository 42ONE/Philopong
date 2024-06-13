window.translations = {
    language: "english",
    english: {
        btnTournament: "Tournament",
        btn1v1: "1v1",
        btnAI: "AI Mode",
        btnMultiplay: "Multiplay",
        language: "Language",
    },
    korean: {
        btnTournament: "토너먼트",
        btn1v1: "1대1",
        btnAI: "인공지능 모드",
        btnMultiplay: "멀티플레이",
        language: "언어",
    },
    tatar: {
        btnTournament: "турнир",
        btn1v1: "1 дән 1",
        btnAI: "ясалма",
        btnMultiplay: "мультиплеер",
        language: "тел",
    },
}

function setLanguage(language) {
    window.translations.language = language;
}

function changeLanguage(page) {
    const language = window.translations.language;
    if (page == "mainpage")
    {
        document.querySelector('#btn1v1').textContent = window.translations[language].btn1v1;
        document.querySelector('#btnAI').textContent = window.translations[language].btnAI;
        document.querySelector('#btnTournament').textContent = window.translations[language].btnTournament;
        document.querySelector('#btnMultiplay').textContent = window.translations[language].btnMultiplay;
    }
}