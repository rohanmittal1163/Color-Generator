const direction = document.querySelector('select');
const colorInput = document.querySelectorAll('input[type="color"]');
const textArea = document.querySelector('.code');
const demo = document.querySelector('.demo');
const copyBtn = document.querySelector('.copy');
const refreshBtn = document.querySelector('.refresh');

function getRandomCode() {
	const a = Math.floor(Math.random() * 0xffffff).toString(16);
	return `#${a}`;
}
function generateGradient(random) {
	if (random) {
		colorInput[0].value = getRandomCode();
		colorInput[1].value = getRandomCode();
	}
	const gradient = `linear-gradient(to ${direction.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
	textArea.innerText = `background-image: ${gradient}`;
	demo.style.backgroundImage = gradient;
}

function copyCode() {
	copyBtn.innerText = 'copied';
	navigator.clipboard.writeText(textArea.value);
	setTimeout(() => {
		copyBtn.innerText = 'copy code';
	}, 1000);
}

colorInput.forEach((value, index, array) => {
	value.addEventListener('input', () => {
		generateGradient(false);
	});
});
direction.onchange = () => {
	generateGradient(false);
};
copyBtn.onclick = copyCode;
refreshBtn.addEventListener('click', () => {
	generateGradient(true);
});
