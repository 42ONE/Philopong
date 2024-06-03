import Component from "./core/Component.js";
import Title from "./components/Title.js";
import LoginForm from "./components/LoginForm.js";

export default class Login extends Component {
	setup () {
	}

	template () {
		return `
			<header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
			<main class="mw-100 m-auto my-5" style="width: 33%" data-component="login-form"></main>
		`;
	}

	mounted () {
		const { getPageTitle, login } = this;
		const $title = this.$target.querySelector('[data-component="title"]');
		const $loginForm = this.$target.querySelector('[data-component="login-form"]');

		new Title($title, {
			getPageTitle,
		});

		new LoginForm($loginForm, {
			login: login.bind(this),
		});
	}

	get getPageTitle () {
		return 'Philopong';
	}

	login() {
		// const { items } = this.state;
		// const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
		// const active = false;
		// this.setState({ items: [ ...items, {seq, contents, active} ] });
	}

}
