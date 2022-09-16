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

const day = document.getElementById('day');
const year = document.getElementById('year');
const month = document.getElementById('month');

const name_input = document.getElementById('name_input');
const email_input = document.getElementById('email_input');
const email_label = document.getElementById('email_label');
const password_input = document.getElementById('password_input');
const signin_input = document.getElementById('signin_input');
const signin_pass = document.getElementById('signin_input_pass');

const valid_email_form = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let nameValid;
let emailValid;
let monthValid;
let dayValid;
let yearValid;
let passwordValid;
let signinInputValid;
let signinPassValid;

for (let i = 1; i < 32; i++) {
	const option = document.createElement('option');
	option.value = i;
	option.textContent = i;
	day.appendChild(option);
}

for (let i = 2022; i > 1901; i--) {
	const option = document.createElement('option');
	option.value = i;
	option.textContent = i;
	year.appendChild(option);
}

signup.addEventListener('click', () => {
	signup_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

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

signup_next.addEventListener('click', () => {
	signup_modal.close();
	signup_modal_password.showModal();
});

back.addEventListener('click', () => {
	signup_modal_password.close();
	signup_modal.showModal();
});

signin.addEventListener('click', () => {
	signin_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

signin_quit.addEventListener('click', () => {
	signin_modal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
	signin_input.value = '';
	signin_pass.value = '';
});

signup_link.addEventListener('click', () => {
	signin_modal.close();
	signup_modal.showModal();
});

email_input.addEventListener('focusout', () => {
	if (email_input.value != '' && email_input.value != null) {
		email_label.style.top = '19px';
		email_label.style.fontSize = '12px';
		email_label.style.color = 'rgb(83, 100, 113)';
	} else {
		email_label.style.top = '30px';
		email_label.style.fontSize = '17px';
		email_label.style.color = 'rgb(83, 100, 113)';
	}
});

email_input.addEventListener('focus', () => {
	email_label.style.top = '19px';
	email_label.style.fontSize = '12px';
	email_label.style.color = '#1d9bf0';
});

name_input.addEventListener('keyup', enableNext);
email_input.addEventListener('keyup', enableNext);
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

function check_name(name) {
	if (name.value) {
		nameValid = true;
	} else {
		nameValid = false;
	}
}

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
