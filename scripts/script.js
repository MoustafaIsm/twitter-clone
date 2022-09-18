const signup = document.getElementById('signup');
const quit = document.getElementById('quit');
const signup_modal = document.getElementById('signup_modal');
const signup_next = document.getElementById('next');
const signup_modal_password = document.getElementById('signup_modal_password');
const signin = document.getElementById('signin');
const signin_modal = document.getElementById('signin_modal');
const signin_quit = document.getElementById('signin_quit');
const back = document.getElementById('back');
const signup_link = document.getElementById('signup_link');
const submit = document.getElementById('submit');
const signin_next = document.getElementById('signin_next');
const name_label = document.getElementById('name_label');
const invalid_name = document.getElementById('invalid_name');
const invalid_email = document.getElementById('invalid_email');
const valid_account = document.getElementById('valid_account');

// Date of birth selects
const day = document.getElementById('day');
const year = document.getElementById('year');
const month = document.getElementById('month');

// Inputs
const name_input = document.getElementById('name_input');
const email_input = document.getElementById('email_input');
const email_label = document.getElementById('email_label');
const signinEmailLabel = document.getElementById('signinEmailLabel');
const password_input = document.getElementById('password_input');
const signin_input = document.getElementById('signin_input');
const signin_pass = document.getElementById('signin_input_pass');

// Forms
const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

// Email regex
const valid_email_form = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Inputs checks
let nameValid;
let emailValid;
let monthValid;
let dayValid;
let yearValid;
let passwordValid;
let signinInputValid;
let signinPassValid;

// Create select day options
for (let i = 1; i < 32; i++) {
	const option = document.createElement('option');
	option.value = i;
	option.textContent = i;
	day.appendChild(option);
}

// Create select year options
for (let i = 2022; i > 1901; i--) {
	const option = document.createElement('option');
	option.value = i;
	option.textContent = i;
	year.appendChild(option);
}

// Open signup modal
signup.addEventListener('click', () => {
	signup_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

// Close signup modal and delete the values inside
quit.addEventListener('click', () => {
	signup_modal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
	name_input.value = '';
	email_input.value = '';
	month.value = '';
	day.value = '';
	year.value = '';
});

// Open signup password modal
signup_next.addEventListener('click', () => {
	signup_modal.close();
	signup_modal_password.showModal();
});

// Go back to signup modal
back.addEventListener('click', () => {
	signup_modal_password.close();
	signup_modal.showModal();
	password_input.value = '';
});

// Open signin modal
signin.addEventListener('click', () => {
	signin_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

// Close signin modal and delete the values inside
signin_quit.addEventListener('click', () => {
	signin_modal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
	signin_input.value = '';
	signin_pass.value = '';
	valid_account.style.display = 'none';
});

// Open signup modal from signin modal
signup_link.addEventListener('click', () => {
	signin_modal.close();
	signup_modal.showModal();
});

// Focus effect for email label in signin and signup modals
email_input.addEventListener('focusout', () => {
	emailFocusOut(email_input.value, email_label);
});
email_input.addEventListener('focus', () => {
	emailFocus(email_label);
});

signin_input.addEventListener('focusout', () => {
	emailFocusOut(signin_input.value, signinEmailLabel);
});
signin_input.addEventListener('focus', () => {
	emailFocus(signinEmailLabel);
});

function emailFocus(label) {
	label.style.top = '19px';
	label.style.fontSize = '12px';
	label.style.color = '#1d9bf0';
}

function emailFocusOut(input, label) {
	if (input != '' && input != null) {
		label.style.top = '19px';
		label.style.fontSize = '12px';
		label.style.color = 'rgb(83, 100, 113)';
	} else {
		label.style.top = '30px';
		label.style.fontSize = '17px';
		label.style.color = 'rgb(83, 100, 113)';
	}
}

// Enable modal buttons only when all inputs are filled with values
name_input.addEventListener('keyup', enableNextInput);
email_input.addEventListener('keyup', enableNextEmail);
month.addEventListener('change', enableNext);
day.addEventListener('change', enableNext);
year.addEventListener('change', enableNext);

password_input.addEventListener('keyup', () => {
	checkPassword(password_input);
	if (passwordValid == true) {
		submit.disabled = false;
		submit.style.opacity = 1;
	} else {
		submit.disabled = true;
		submit.style.opacity = 0.4;
	}
});

signin_input.addEventListener('keyup', enableSignin);
signin_pass.addEventListener('keyup', enableSignin);

// Hover effects for modal buttons when activated
signup_next.addEventListener('mouseenter', () => {
	if (!signup_next.disabled) {
		signup_next.style.opacity = 0.9;
	}
});

signup_next.addEventListener('mouseleave', () => {
	if (!signup_next.disabled) {
		signup_next.style.opacity = 1;
	}
});

submit.addEventListener('mouseenter', () => {
	if (!submit.disabled) {
		submit.style.opacity = 0.9;
	}
});

submit.addEventListener('mouseleave', () => {
	if (!submit.disabled) {
		submit.style.opacity = 1;
	}
});

signin_next.addEventListener('mouseenter', () => {
	if (!signin_next.disabled) {
		signin_next.style.opacity = 0.9;
	}
});

signin_next.addEventListener('mouseleave', () => {
	if (!signin_next.disabled) {
		signin_next.style.opacity = 1;
	}
});

// Functions to check is an input is filled or not
function check_name(name) {
	if (name.value) {
		nameValid = true;
	} else {
		nameValid = false;
	}
}

// Check if email matches the email regex
function check_email(email) {
	if (email.match(valid_email_form)) {
		emailValid = true;
	} else {
		emailValid = false;
	}
}

function check_month(monthValue) {
	if (monthValue.value) {
		monthValid = true;
	} else {
		monthValid = false;
	}
}

function check_day(dayValue) {
	if (dayValue.value) {
		dayValid = true;
	} else {
		dayValid = false;
	}
}

function checkYear(yearValue) {
	if (yearValue.value) {
		yearValid = true;
	} else {
		yearValid = false;
	}
}

// Check if password has less than 8 characters
function checkPassword(password) {
	if (password.value.length >= 8) {
		passwordValid = true;
	} else {
		passwordValid = false;
	}
}

function checkUsername(username) {
	if (username.value) {
		signinInputValid = true;
	} else {
		signinInputValid = false;
	}
}

function checkUserPassword(password) {
	if (password.value.length >= 8) {
		signinPassValid = true;
	} else {
		signinPassValid = false;
	}
}
// Enable signup next button
function signupNext(name, email, month, day, year) {
	check_name(name);
	check_email(email);
	check_month(month);
	check_day(day);
	checkYear(year);
	if (nameValid == true && emailValid == true && monthValid == true && dayValid == true && yearValid == true) {
		signup_next.disabled = false;
		signup_next.style.opacity = 1;
		enabled = true;
	} else {
		signup_next.disabled = true;
		signup_next.style.opacity = 0.4;
		enabled = false;
	}
}
// Enable signin next button
function signinNext(username, password) {
	checkUsername(username);
	checkUserPassword(password);
	if (signinInputValid == true && signinPassValid == true) {
		signin_next.disabled = false;
		signin_next.style.opacity = 1;
	} else {
		signin_next.disabled = true;
		signin_next.style.opacity = 0.4;
	}
}

function enableNext() {
	signupNext(name_input, email_input.value, month, day, year);
}

function enableSignin() {
	signinNext(signin_input, signin_pass);
}

// Display warning text when user deletes input name
function enableNextInput() {
	signupNext(name_input, email_input.value, month, day, year);
	if (nameValid == false) {
		invalid_name.style.display = 'block';
	} else {
		invalid_name.style.removeProperty('display');
	}
}

// Display warning text when user inserts an invalid email
function enableNextEmail() {
	signupNext(name_input, email_input.value, month, day, year);
	if (emailValid == false) {
		invalid_email.style.display = 'block';
		invalid_email.innerHTML = 'Please enter a valid email.';
	} else {
		invalid_email.style.removeProperty('display');
	}
}

// Check if signup email is in the database, if not add the new data to users table in the database and move to the main page
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const signupData = new FormData(signupForm);
	signupData.append('name', name_input.value);
	signupData.append('email', email_input.value);
	signupData.append('month', month.value);
	signupData.append('day', day.value);
	signupData.append('year', year.value);
	fetch('http://localhost/twitter-clone-backend/APIs/signup.php', {
		method: 'POST',
		body: signupData
	})
		.then((response) => {
			return response.json();
		})
		.then((text) => {
			if (text.valid == false) {
				signup_modal.showModal();
				signup_modal_password.close();
				invalid_email.innerHTML = 'This email already has an account';
				invalid_email.style.display = 'block';
			} else {
				const signupDone = new FormData(signinForm);
				signupDone.set('email', email_input.value);
				signupDone.set('password', password_input.value);
				checkUser(signupDone);
			}
		})
		.catch((error) => {
			console.error(error);
		});
});

// Check if signin email and password are correct, if yes move to the main page of the user
signin_next.addEventListener('click', (e) => {
	e.preventDefault;

	const signinData = new FormData(signinForm);
	checkUser(signinData);
});

function checkUser(data) {
	fetch('http://localhost/twitter-clone-backend/APIs/signin.php', {
		method: 'POST',
		body: data
	})
		.then((response) => {
			return response.json();
		})
		.then((ResponseJson) => {
			if (ResponseJson.email == false) {
				valid_account.innerHTML = 'Sorry, we could not find your account';
				valid_account.style.display = 'block';
			} else {
				if (ResponseJson.password == false) {
					valid_account.innerHTML = 'Wrong password!';
					valid_account.style.display = 'block';
				} else {
					localStorage.setItem('username', ResponseJson[0].username);
					localStorage.setItem('email', ResponseJson[0].email);
					localStorage.setItem('name', ResponseJson[0].name);
					localStorage.setItem('password', ResponseJson[0].password);
					localStorage.setItem('date_of_birth', ResponseJson[0].date_of_birth);
					localStorage.setItem('date_of_registration', ResponseJson[0].date_of_registration);
					localStorage.setItem('bio', ResponseJson[0].bio);
					localStorage.setItem('location', ResponseJson[0].location);
					localStorage.setItem('profile_picture_link', ResponseJson[0].profile_picture_link);
					localStorage.setItem('banner_picture_link', ResponseJson[0].banner_picture_link);
					localStorage.setItem('website', ResponseJson[0].website);

					window.location.href = 'test.html';
				}
			}
		});
}
