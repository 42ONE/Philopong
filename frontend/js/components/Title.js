import Component from "../core/Component.js";

export default class Title extends Component {
	template() {
		const { getPageTitle } = this.props;
		return `
			<h1> ${ getPageTitle } </h1>
		`;
	}
}
