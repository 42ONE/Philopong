class Profile {
    template() {
      return `
      <div class="container">
            <div class="sidebar">
                <div class="sidebar-header">
                    <img src="./images/philopong.webp" alt="Profile Image">
                    <b>Hyuim</b>
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="#">My page</a></li>
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
            <div class="row">
                <h1 class="py-3 title">Profile</h1>
            </div>
            <div class="row">   
                <div class="col-md">
                    <img class="info-picture" src="../images/philopong.webp">
                </div>
                <div class="col-md info">
                    <div class="info-element">ID : test</div>
                    <div class="info-element">Nickname : test</div>
                    <div class="info-element">전적 : 0W-0L</div>
                </div>
            </div>
            <div class="profile-edit">
                <span class="btn">Profile Edit</span>
            </div>
            <div class="row">
                <div class="match-history-title">Match History</div>
            </div>
            <div class="row match-history-list-win">
                <div class="col">user1</div>
                <div class="col">11 : 8</div>
                <div class="col">user2</div>
            </div>
            <div class="row match-history-list-lose">
                <div class="col">user1</div>
                <div class="col">9 : 11</div>
                <div class="col">user2</div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      `;
    }
  }
  export default new Profile();