import Component from "../core/Component.js";

export default class Friend extends Component {
  setup () {
    this.state = { friends: ['cutePhan', 'sexyKingWoosekim', 'trueLoverHcho2', 'mr.ProteinBarSoohalee'] };

  }
  template () {
    const { friends } = this.state;
    return `
    <div class="btn-group dropend">
    ${friends.map((friend, key) => `
    <button type="button" class="btn btn-secondary">
    ${friend}
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropright</span>
    </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/profile/${friend}">Profile</a></li>
    <li class="dropdown-item deleteFriend" data-index="${key}" style="cursor:pointer;">Delete</li>
    </ul>
    `).join('')}
    </div>`
  }
  
  setEvent () {
    this.$target.addEventListener('click', ({ target }) => {
      const friends = [ ...this.state.friends ];
      
      if (target.classList.contains('deleteFriend')) {
        friends.splice(target.dataset.index, 1);
        this.setState({ friends });
      }
    });
  }
}