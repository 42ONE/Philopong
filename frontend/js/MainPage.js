import Component from "./core/Component.js";
import Title from "./components/Title.js";
import { changeUrl } from "./core/changeUrl.js";
import { isUndefined } from "./core/type.js";
import { logoutUser } from "./core/changeUrl.js";

export default class MainPage extends Component{
   setup() {
    this.state = {username: '', profile_img: ''}
   }

    template() {
      return `
      <header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
      <div class="container centered-container">
      <div class="text-center d-flex flex-column justify-content-center align-items-center">
      <img class="userImage" width="40" src="${this.state.profile_img}" alt="Image">
      <p class="userInfo"> <span id="welcome">Hello</span>, ${this.state.username}!</p>
      <button class="btn-logout" id="logout">Logout</button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btn1v1"></button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btnAI"></button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btnTournament"></button>
          <button class="btn btn-primary btn-lg mb-2 d-block" id="btnMultiplay"></button>
          <hr>
          <div class="dropdown">
            <button class="btn btn-primary btn-small mb-2 d-block dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" id="btnEnglish">English</a></li>
              <li><a class="dropdown-item" id="btnKorean">Korean</a></li>
              <li><a class="dropdown-item" id="btnTatar">Tatar</a></li>
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
      const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'english';
      setLanguage(language);
      changeLanguage("mainpage");

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

      document.getElementById('btn1v1').addEventListener('click', function(e) {
        e.preventDefault();
        changeUrl("/1v1");
      });

      document.getElementById('btnMultiplay').addEventListener('click', function() {
        changeUrl("/multi");
      });

      document.getElementById('btnTournament').addEventListener('click', function() {
        changeUrl("/tournament-start");
      });

      document.getElementById('btnAI').addEventListener('click', function() {
        changeUrl("/ai");
      });

      document.getElementById('logout').addEventListener('click', function () {
        logoutUser();
      })
      }
  }
