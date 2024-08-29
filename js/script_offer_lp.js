document.addEventListener("DOMContentLoaded", function() {
    const checkAndAddEmptyClass = () => {
        const form = document.querySelector(".js-form");
        const inputs = form.querySelectorAll(".form__input");
        const checkbox = form.querySelector(".form__checkbox");
        let allValid = true;

        inputs.forEach(input => {
            if (input.classList.contains("hidden")) {
                input.classList.remove("incorrect");
                input.classList.add("correct");
            } else {
                if (input.value.trim() !== "") {
                    input.classList.remove("incorrect");
                    input.classList.add("correct");
                } else {
                    input.classList.add("incorrect");
                    input.classList.remove("correct");
                    allValid = false;
                }
            }
        });

        if (!checkbox.checked) {
            checkbox.classList.add("incorrect");
            allValid = false;
            alert("Zaznacz checkbox");
        } else {
            checkbox.classList.remove("incorrect");
            checkbox.classList.add("correct");
        }

        return allValid;
    };

    const sendForm = (event) => {
        event.preventDefault(); // Zatrzymanie domyślnej akcji submit
        const allValid = checkAndAddEmptyClass(); // Sprawdzanie walidacji
        if (allValid) {
            const form = document.querySelector(".js-form");
            form.submit(); // Wysyłanie formularza, jeśli wszystkie pola są poprawne
        }

    };

    const buttonSendForm = document.querySelector(".js-button-send-form");
    buttonSendForm.addEventListener("click", sendForm);
});
