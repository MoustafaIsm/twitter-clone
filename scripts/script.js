const signup = document.getElementById('signup');
const quit = document.getElementById('quit');

signup.addEventListener('click', () => {
	document.querySelector('.modal').showModal();
});

quit.addEventListener('click', () => {
	document.querySelector('.modal').close();
});
