import Component from "../core/Component.js";

export default class LoginForm extends Component {
    template() {
        return `
        <div id="login-btn" class="d-flex justify-content-around align-items-center mt-4 btn w-100 py-2">
                <svg version="1.1"
                    id="Calque_1" sodipodi:docname="42_logo.svg" inkscape:version="0.48.2 r9819" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="bi" height="42"  width="42" viewBox="0 -200 960 960"
                    enable-background="new 0 -200 960 960" xml:space="preserve" fill="white">
                    <polygon id="polygon5" points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1
                        32,279.1 "/>
                    <polygon id="polygon7" points="597.9,114.2 762.7,-51.1 597.9,-51.1 "/>
                    <polygon id="polygon9" points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "/>
                    <polygon id="polygon11" points="928,279.1 762.7,443.9 928,443.9 "/>
                </svg>
                <span class="fs-3 fw-semibold" id="42-login">로그인</span>
        </div>
        `;
    }

    setEvent() {
        const { login } = this.props;
        this.addEvent('click', '#login-btn', (event) => {
            const response = fetch('apl-url');

            alert(response);
        });
    }
}

