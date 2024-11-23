document.addEventListener('DOMContentLoaded', () => {
    const formDataRecommended = document.querySelector(".js-form-recommended-terminal");
    const buttonNextStep = document.querySelector(".js-button--nextStep");
    const sectionCommands = document.querySelectorAll(".js-section-commands");
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();
        });
    });

    buttonNextStep.addEventListener("click", () => {
        saveToDataBase();
        setTimeout(() => {
            sendFormDataCompany();
        }, 300);

    });

    const sendFormDataCompany = () => {

        checkAndAddEmptyClass();
        const invalidInputs = document.querySelectorAll(".input.visible.incorrect");

        if (invalidInputs.length > 0) {
            alert(`Proszę wypełnić wszystkie formularze (niewypełnione: ${invalidInputs.length}).`);
        } else {
            formDataRecommended.submit();
            setTimeout(() => {
                formDataRecommended.submit();
            }, 300);
        }
    };

    const checkAndAddEmptyClass = () => {
        sectionCommands.forEach(section => {
            const inputs = section.querySelectorAll(".input.visible");

            inputs.forEach(input => {
                if (input.value.trim() !== "") {
                    input.classList.remove("incorrect");
                    input.classList.add("correct");
                } else {
                    input.classList.add("incorrect");
                    input.classList.remove("correct");
                }
            });
        });
    };

  
    const saveToDataBase = () => {
        const nameOfTheFirstRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-first-recommended-terminal")?.value.trim() || '';
        const nameOfTheSecondRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-second-recommended-terminal")?.value.trim() || '';
        const nameOfTheThirdRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-third-recommended-terminal")?.value.trim() || '';
        const phoneOfTheFirstRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-first-recommended-terminal")?.value.trim() || '';
        const phoneOfTheSecondRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-second-recommended-terminal")?.value.trim() || '';
        const phoneOfTheThirdRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-third-recommended-terminal")?.value.trim() || '';
        const email = formDataRecommended.querySelector(".js-email")?.value.trim() || '';
        let customerStatus = '';

        if (nameOfTheThirdRecommendedTerminal && phoneOfTheThirdRecommendedTerminal) {
            customerStatus = "100% polecił 3 osoby terminal";
        } else if (nameOfTheSecondRecommendedTerminal && phoneOfTheSecondRecommendedTerminal) {
            customerStatus = "100% polecił 2 osoby terminal";
        } else if (nameOfTheFirstRecommendedTerminal && phoneOfTheFirstRecommendedTerminal) {
            customerStatus = "100% polecił 1 osobę terminal";
        }

        if (email) {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("nameOfTheFirstRecommendedTerminal", nameOfTheFirstRecommendedTerminal);
            formData.append("nameOfTheSecondRecommendedTerminal", nameOfTheSecondRecommendedTerminal);
            formData.append("nameOfTheThirdRecommendedTerminal", nameOfTheThirdRecommendedTerminal);
            formData.append("phoneOfTheFirstRecommendedTerminal", phoneOfTheFirstRecommendedTerminal);
            formData.append("phoneOfTheSecondRecommendedTerminal", phoneOfTheSecondRecommendedTerminal);
            formData.append("phoneOfTheThirdRecommendedTerminal", phoneOfTheThirdRecommendedTerminal);
            formData.append("customerStatus", customerStatus);

            fetch('https://terminal.terminaleservice.pl/php/update_contact_recommended.php', {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    console.log("Server response:", result);
                    if (result.message && result.message.includes("Dane zostaly zaktualizowane lub dodane")) {
                        // formDataRecommended.classList.add("highlight-green");
                    }
                })
                .catch(error => console.error("Error:", error));
        } else {
            alert("Proszę wypełnić wymagane pola.");
        }
    };
    checkAndAddEmptyClass();
});
