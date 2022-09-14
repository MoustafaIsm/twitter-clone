const signup = document.getElementById('signup');
const quit = document.getElementById('quit');
const signup_modal = document.getElementById('signup_modal');
const signup_next = document.getElementById('next');
const signup_modal_password = document.getElementById('signup_modal_password');
const signin = document.getElementById('signin');
const signin_modal = document.getElementById('signin_modal');
const signin_quit = document.getElementById('signin_quit');
const back = document.getElementById('back');
const effect = document.getElementById('quit_effect');

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

signin.addEventListener('click', () => {
	signin_modal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

signin_quit.addEventListener('click', () => {
	signin_modal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
});

/* effect.addEventListener('mouseover', () => {
	effect.style.background = 'black';
	effect.style.opacity = 0.3;
});
 */
