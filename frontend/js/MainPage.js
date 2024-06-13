import Component from "./core/Component.js";
import Title from "./components/Title.js";

export default class MainPage extends Component{
    template() {
      return `
      <header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
      <div class="container centered-container">
        <div class="text-center d-flex flex-column justify-content-center align-items-center">
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btn1v1"></button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btnTournament"></button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btnMultiplay"></button>
          <hr>
          <hr>
          <hr>
          <hr>
          <hr>
          <div class="dropdown">
            <button class="btn btn-primary btn-small mb-2 d-block dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" id="btnEnglish">English</a></li>
              <li><a class="dropdown-item" id="btnKorean">Korean</a></li>
              <li><a class="dropdown-item" id="btnTatar">Tagalog</a></li>
            </ul>
          </div>
        </div>
      </div>
      `;
    }

    get getPageTitle () {
      return "PhiloPong";
    }

    mounted () {
      const { getPageTitle } = this;
      const $title = this.$target.querySelector('[data-component="title"]');
      setLanguage("english");
        changeLanguage("mainpage");
        // const $btn1v1 = this.$target.querySelector('#btn1v1');
        // const $btnTournament = this.$target.querySelector('#btnTournament');
        // const $btnMultiplay = this.$target.querySelector('#btnMultiplay');
        
            new Title($title, {
              getPageTitle,
            });

            document.getElementById('btnEnglish').addEventListener('click', function() {
              setLanguage('english');
              changeLanguage("mainpage");
            });

            document.getElementById('btnKorean').addEventListener('click', function() {
              setLanguage('korean');
              changeLanguage("mainpage");
            });

            document.getElementById('btnTatar').addEventListener('click', function() {
              setLanguage('tatar');
              changeLanguage("mainpage");
            });
      }
  }
  