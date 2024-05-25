




{

    const legalFormField = document.getElementById('sqm-f317');
    const dataCompanyDocumentSections = document.querySelectorAll(".section--dataCompanyDocument");
    const formDataCompany = document.querySelector(".form--dataCompany");
    const buttonNextStep = document.querySelector(".js-button--nextStep");
    const formBackStep = document.querySelector(".formBackStep");
    const buttonBackStep = document.querySelector(".js-button--backStep");
    const addPlaceButton = document.querySelector(".js-button--addPlace");
    const removePlaceButtton = document.querySelector(".js-button--removePlace");
    const sectionsPlace = document.querySelectorAll(".section--place");

    const forms = document.querySelectorAll("form");


    document.addEventListener('DOMContentLoaded', () => {
        updateVisibility();
        hideSectionPlace();
        forms.forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault();
            });
        });
    });

    buttonNextStep.addEventListener("click", () => sendFormDataCompany());
    buttonBackStep.addEventListener("click", () => sendFormBackStep());
    addPlaceButton.addEventListener("click", () => showHiddenPlace());
    let currentSectionIndex = 0;


    const hideSectionPlace = () => {
        for (let i = 1; i < sectionsPlace.length; i++) {
            sectionsPlace[i].style.display = "none";
            sectionsPlace[i].classList.add("hidden");
        };
    };

    const sendFormDataCompany = () => {
        checkAndAddEmptyClass();
        const invalidInputs = document.querySelectorAll(".input.visible.incorrect");
        if (invalidInputs.length > 0) {
            alert("Wypełnij wszystkie formularze", invalidInputs.length);
            console.log("liczba wierszy niewypelnionych ", invalidInputs.length);
        } else {
            formDataCompany.submit();
        }
    };
    const sendFormBackStep = () => {
        formBackStep.submit();
    };
    const showHiddenPlace = () => {
        if (currentSectionIndex < sectionsPlace.length - 1) {
            currentSectionIndex++;
            sectionsPlace[currentSectionIndex].style.display = "grid";
            sectionsPlace[currentSectionIndex].classList.remove('hidden');
            const inputs = sectionsPlace[currentSectionIndex].querySelectorAll(".input");
            inputs.forEach(input => {
                input.classList.remove("invisible");
                input.classList.add("visible");
            });
        };

        updateVisibility();

    };

    removePlaceButtton.addEventListener("click", () => {
        if (currentSectionIndex > 0) {
            sectionsPlace[currentSectionIndex].style.display = "none";
            sectionsPlace[currentSectionIndex].classList.add("hidden");
            const inputs = sectionsPlace[currentSectionIndex].querySelectorAll(".input");
            inputs.forEach(input => {
                input.classList.remove("visible");
                input.classList.add("invisible");
            });
            currentSectionIndex--;
        }
    });


    const checkAndAddEmptyClass = () => {
        sectionsPlace.forEach(section => {
            const inputs = section.querySelectorAll(".input.visible");
            console.log(inputs);
            inputs.forEach(input => {
                console.log(input);
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

    const updateVisibility = () => {
        dataCompanyDocumentSections.forEach(section => {
            if (legalFormField.value !== "Jednoosobowa działalność" && legalFormField.value !== "Spółka cywilna") {
                section.classList.add('hidden');
            }

            else {
                section.classList.remove('hidden');
            }

            //   const inputsInSection = section.querySelectorAll(".input");
            //  inputsInSection.forEach(sectioninput => {
            //    const inputsInSections = sectioninput.querySelectorAll(".input")

            //   console.log("Liczba inputów  section--dataCompanyDocument:", inputsInSections.length);
            //   if (legalFormField.value !== "Jednoosobowa działalność") {
            ////      sectioninput.classList.remove('visible');
            //       sectioninput.classList.add('invisible');
            //   }

            // else {
            //      sectioninput.classList.remove('invisible');
            //      sectioninput.classList.add('visible');
            // }
            // })
        })


        legalFormField.addEventListener('change', updateVisibility);

    };

}

