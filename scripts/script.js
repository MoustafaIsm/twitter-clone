const signup = document.getElementById('signup');
const quit = document.getElementById('quit');
const signup_modal = document.getElementById('signup_modal');
const signup_next = document.getElementById('next');
const signup_modal_password = document.getElementById('signup_modal_password');
const back = document.getElementById('back');

signup.addEventListener('click', () => {
	signup_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

quit.addEventListener('click', () => {
	signup_modal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
});

signup_next.addEventListener('click', () => {
	signup_modal.close();
	signup_modal_password.showModal();
});

back.addEventListener('click', () => {
	signup_modal_password.close();
	signup_modal.showModal();
});
