const passForm = document.querySelector("#password-generator");
const submitBtn = document.querySelector(".submit-btn");
const passwordInput = document.querySelector("#password");
const servNameInput = document.querySelector("#servName");

passForm.addEventListener("submit", (e) => {
	e.preventDefault();

	function passGenerator(basicWord, serviceName) {
		const servNameInputValue = serviceName.value;

		//Last character of the service name
		let lastCharServName = servNameInputValue.slice(-1);
		// console.log(lastCharServName);

		//Character of service at index of vowels count of service
		function countVowel(str) {
			const count = str.match(/[aeiou]/gi).length;
			let result = "";

			if (count >= 1) {
				result += servNameInputValue.at(count);
			} else {
				result += servNameInputValue.at(0);
			}

			return result;
		}

		let letterOfVowelNumber = countVowel(servNameInputValue);
		// console.log(letterOfVowelNumber);

		//Full basic password
		const passwordInputValue = basicWord.value;

		// Number of non-vowel characters of service
		function removeVowels(originalArray) {
			let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
			let result = "";

			for (let i = 0; i < originalArray.length; i++) {
				if (!vowels.includes(originalArray[i])) {
					result += originalArray[i];
				}
			}

			return result;
		}

		let removedVowelsString = removeVowels(servNameInputValue);
		// console.log(removedVowelsString);
		let wordWithoutVowelsLength = removedVowelsString.length;
		// console.log(wordWithoutVowelsLength);

		//Service name first character
		let firstCharServName = servNameInputValue[0];
		// console.log(firstCharServName);

		//Generated password
		let generatedPassword = lastCharServName.concat(
			letterOfVowelNumber,
			passwordInputValue,
			wordWithoutVowelsLength,
			firstCharServName
		);

		return generatedPassword;
		// console.log(generatedPassword);
	}

	let createdNewPassword = passGenerator(passwordInput, servNameInput);
	console.log(createdNewPassword);

	displayCreatedPassword(createdNewPassword);
});

function displayCreatedPassword(str) {
	const passDisplay = document.querySelector("p");
	if (passDisplay !== null) {
		passDisplay.remove();
	}

	let passHolder = document.createElement("p");
	passHolder.setAttribute("class", "passwordHolder");
	let passText = document.createTextNode(`Your new password: ${str};`);
	let divPass = document.createElement("div");
	passHolder.setAttribute("class", "generated-pass");

	let divPassHolder = document.querySelector(".app");

	passHolder.appendChild(passText);
	divPass.appendChild(passHolder);
	divPassHolder.appendChild(divPass);
}
