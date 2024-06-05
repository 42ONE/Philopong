import Component from "../core/Component.js";

export default class SignForm extends Component {
	template() {
		return `
			<p class="text-center lead">Welcome! Please fill out the form below to create your account.</p>
            <div class="m-auto col-md-5 fw-bold">
                <form class="needs-validation" novalidate>
                    	<!-- <div class="row g-3"> -->
						<div>
							<label for="ID" class="form-label">ID(e-mail)</label>
							<input type="text" class="form-control" id="ID" placeholder="example@philopong.com" value="" required>
							<div class="invalid-feedback">
								This ID is already in use.
							</div>
						</div>

						<div>
							<label for="PW" class="form-label">Password</label>
							<input type="text" class="form-control" id="PW" placeholder="" value="" required>
							<div class="invalid-feedback">
								This PW is already in use.
							</div>
						</div>

						<div>
							<label for="PW-check" class="form-label">Re-enter Password </label>
							<input type="text" class="form-control" id="PW-check" placeholder="" value="" required>
							<div class="invalid-feedback">
								This PW does not match the previous one.
							</div>
						</div>

						<div>
							<label for="NickName" class="form-label">NickName</label>
							<input type="text" class="form-control" id="NickName" placeholder="" value="" required>
							<div class="invalid-feedback">
								This NickName is already in use.
							</div>
						</div>

						<div class="mb-3">
							<label for="ProfileImage" class="form-label">Profile Image</label>
							<input class="form-control" type="file" id="ProfileImage" style="margin-bottom: 30px;">
						</div>

						<button id="sign-up" class="w-100 btn btn-primary btn-lg" type="submit">Sign up</button>
						<!-- </div> -->
					</form>
				</div>
       		</div>
		`;
	}

	setEvent() {
		const { singUp } = this.props;
		this.addEvent('click', '#sign-up', (event) => {
			event.preventDefault();
			alert("회원가입 API 대기중..");
		});
	}
}