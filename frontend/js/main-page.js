class MainPage {
    template() {
      return `
      <div class="container">
            <header class="py-3">
                <div class="text-center">
                    <h1 class="title">PhiloPong</h1>
                </div>
            </header>

            <div class="sidebar">
                <div class="sidebar-header">
                    <img src="./images/philopong.webp" alt="Profile Image">
                    <b>Hyuim</b>
                </div>

                <div class="menu">
                    <ul>
                        <li><a class="moveToProfile" href="#">My page</a></li>
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

            <div class="game-example"></div>
        </div>
      `;
    }
  }
  export default new MainPage();