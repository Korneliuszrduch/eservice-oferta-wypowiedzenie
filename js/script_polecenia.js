




{


    const formDataRecommended = document.querySelector(".js-form-recommended-terminal");
    const buttonNextStep = document.querySelector(".js-button--nextStep");
    const sectionsPlace = document.querySelectorAll(".section--place");
    const forms = document.querySelectorAll("form");
    document.addEventListener('DOMContentLoaded', () => {

        forms.forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault();
            });
        });

    });

    buttonNextStep.addEventListener("click", () =>{
        saveToDataBase();
        sendFormDataCompany();


    })

    const sendFormDataCompany = () => {
        checkAndAddEmptyClass();
        const invalidInputs = document.querySelectorAll(".input.visible.incorrect");
        if (invalidInputs.length > 0) {
            alert("Proszę wypełnij wszystkie formularze :)", invalidInputs.length);
            // console.log("liczba wierszy niewypelnionych ", invalidInputs.length);
        } else {
            formDataRecommended.submit();
        }
    };

    const checkAndAddEmptyClass = () => {
        sectionsPlace.forEach(section => {
            const inputs = section.querySelectorAll(".input.visible");
            //  console.log(inputs);
            inputs.forEach(input => {
                //console.log(input);
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



    const saveToDataBase = (event, dataTable, buttonSaveDatabase) => {
        event.preventDefault();
        formDataRecommended.classList.remove("highlight-green");

       // const sid = buttonSaveDatabase.dataset.sid;
        const nameOfTheFirstRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-first-recommended-terminal")?.value.trim() || '';
        const nameOfTheSecondRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-second-recommended-terminal")?.value.trim() || '';
        const nameOfTheThirdRecommendedTerminal = formDataRecommended.querySelector(".js-name-of-the-third-recommended-terminal")?.value.trim() || '';
        const phoneOfTheFirstdRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-first-recommended-terminal")?.value.trim() || '';
        const phoneOfTheSecondRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-second-recommended-terminal")?.value.trim() || '';
        const phoneOfTheThirdRecommendedTerminal = formDataRecommended.querySelector(".js-phone-of-the-third-recommended-terminal")?.value.trim() || '';
        const email = formDataRecommended.querySelector(".js-email")?.value.trim() || '';
       // const customerStatus = formDataRecommended.querySelector(".js-latest-custumer-status")?.value.trim() || '';
       // const selectedStatusSentOffer = dataTable.querySelector(".js-offer-sent-status")?.value.trim() || '';
       // const selectedStatusOpenOffer = dataTable.querySelector(".js-offer-opening-status")?.value.trim() || '';
        //const dateContactCustomer = dataTable.querySelector(".js-date-time-local")?.value.trim() || '';
       

        if (email) {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("nameOfTheFirstRecommendedTerminal", nameOfTheFirstRecommendedTerminal);
            formData.append("nameOfTheSecondRecommendedTerminal", nameOfTheSecondRecommendedTerminal);
            formData.append("nameOfTheThirdRecommendedTerminal", nameOfTheThirdRecommendedTerminal);

            formData.append("phoneOfTheFirstdRecommendedTerminal", phoneOfTheFirstdRecommendedTerminal);
            formData.append("phoneOfTheSecondRecommendedTerminal", phoneOfTheSecondRecommendedTerminal);
            formData.append("phoneOfTheThirdRecommendedTerminal", phoneOfTheThirdRecommendedTerminal);

           // formData.append("customerStatus", customerStatus);
          
         

            fetch("/php/update_contact_recommended.php", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    console.log("Server response:", result);
                    if (result.message && result.message.includes("Dane zostaly zaktualizowane lub dodane")) {
                        formDataRecommended.classList.add("highlight-green");
                    }
                })
                .catch(error => console.error("Error:", error));
        } else {
            alert("Proszę wypełnić wymagane pola");
        }
    };










};



