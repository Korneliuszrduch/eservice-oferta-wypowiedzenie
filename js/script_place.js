




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
        hideSectionPlace();
        updateVisibility();
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
            // console.log("liczba wierszy niewypelnionych ", invalidInputs.length);
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
            // console.log(inputs);
            inputs.forEach(input => {
                input.classList.remove("invisible");
                input.classList.add("visible");
            });
        };

        updateVisibility();
        //  console.log(hiddenSectionPlace);

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



    const updateVisibility = () => {
        // Przeglądamy wszystkie sekcje
        dataCompanyDocumentSections.forEach(section => {
            // Jeśli legalFormField nie jest "Jednoosobowa działalność" ani "Spółka cywilna"
            if (legalFormField.value !== "Jednoosobowa działalność" && legalFormField.value !== "Spółka cywilna") {
                section.classList.add('hidden');
                const hiddenSections = document.querySelectorAll('.hidden');
                hiddenSections.forEach(section => {
                    //console.log("liczba sekcji z hidden" ,section);
                    const inputs = section.querySelectorAll('input');
                    //  console.log(inputs);
                    inputs.forEach(input => {
                        // console.log("liczba inputów sekcji z hidden", input);
                        input.classList.remove('visible');
                        input.classList.add('invisible');
                    });
                });
            }
            else {

                section.classList.remove('hidden');
                const inputs = section.querySelectorAll('input');
                inputs.forEach((input, index) => {
                    console.log("inputy", input);
                    if (index < 4) {
                        input.classList.remove('invisible');
                        input.classList.add('visible');
                    } else {
                        input.classList.remove('visible');
                        input.classList.add('invisible');
                    }

                });

                const hiddenSections = document.querySelectorAll('.hidden');
                hiddenSections.forEach(section => {
                    const inputs = section.querySelectorAll('input');
                    inputs.forEach(input => {
                        input.classList.remove('visible');
                        input.classList.add('invisible');
                    });
                });
            }
        });
    };


    legalFormField.addEventListener('change', updateVisibility);

};



