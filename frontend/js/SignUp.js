import Component from "./core/Component.js";
import SignForm from "./components/SignForm.js";
import Title from "./components/Title.js";

export default class SignUp extends Component {
	setup() {}

	template() {
		return `
			<header class="text-point-color d-flex justify-content-center py-3 title" data-component="title"></header>
			<main class="mw-100 m-auto my-5" data-component="sign-form"></main>
		`;
	}

	mounted() {
		const { getPageTitle, signUp } = this;
		const $title = this.$target.querySelector('[data-component="title"]');
		const $signForm = this.$target.querySelector('[data-component="sign-form"]');

		new Title($title, {
			getPageTitle,
		});

		new SignForm($signForm, {
			signUp: signUp.bind(this),
		});
	}

	get getPageTitle() {
		return 'PhiloPong';
	}

	signUp () {

	}
}