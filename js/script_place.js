




{
    document.addEventListener('DOMContentLoaded', () => {
        const legalFormField = document.getElementById('sqm-f317');
        const dataCompanyDocumentSections = document.querySelectorAll(".section--dataCompanyDocument");
        console.log("Liczba sekcji section--dataCompanyDocument:", dataCompanyDocumentSections);
        function updateVisibility() {
            dataCompanyDocumentSections.forEach(section => {

                if (legalFormField.value !== "Jednoosobowa działalność") {
                    //  section.classList.remove('visible');
                    //  section.classList.add('invisible');
                    section.classList.add('hidden');
                }

                else {
                    // section.classList.remove('invisible');
                    //  section.classList.add('visible');
                    section.classList.remove('hidden');
                }
                const inputsInSection = section.querySelectorAll(".input");
                inputsInSection.forEach(sectioninput => {
                    const inputsInSections = sectioninput.querySelectorAll(".input")

                    console.log("Liczba inputów  section--dataCompanyDocument:", inputsInSections.length);
                    if (legalFormField.value !== "Jednoosobowa działalność") {
                        sectioninput.classList.remove('visible');
                        sectioninput.classList.add('invisible');
                    }

                    else {
                        sectioninput.classList.remove('invisible');
                        sectioninput.classList.add('visible');
                    }
                })
            })
      

      
        legalFormField.addEventListener('change', updateVisibility);

        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault();
            });
        });
    }
        const sectionsPlace = document.querySelectorAll(".section--place");
        let currentSectionIndex = 0;
        for (let i = 1; i < sectionsPlace.length; i++) {
            sectionsPlace[i].style.display = "none";
            sectionsPlace[i].classList.add("hidden");
        };
        const formDataCompany = document.querySelector(".form--dataCompany");
        const buttonNextStep = document.querySelector(".js-button--nextStep");
        const formBackStep = document.querySelector(".formBackStep");
        const buttonBackStep = document.querySelector(".js-button--backStep");
        const addPlaceButton = document.querySelector(".js-button--addPlace");
        const removePlaceButtton = document.querySelector(".js-button--removePlace");


        buttonNextStep.addEventListener("click", () => sendFormDataCompany());

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

        buttonBackStep.addEventListener("click", () => sendFormBackStep());
        const sendFormBackStep = () => {
            formBackStep.submit();
        };

        addPlaceButton.addEventListener("click", () => showHiddenPlace());

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
                // Ukrywamy bieżącą sekcję
                sectionsPlace[currentSectionIndex].style.display = "none";
                sectionsPlace[currentSectionIndex].classList.add("hidden");

                // Znajdujemy inputy w bieżącej sekcji i dodajemy im klasę 'visible'
                const inputs = sectionsPlace[currentSectionIndex].querySelectorAll(".input");
                inputs.forEach(input => {
                    input.classList.remove("visible"); // Usuwamy klasę 'invisible'
                    input.classList.add("invisible"); // Dodajemy klasę 'visible'
                });

                currentSectionIndex--; // Zmniejszamy indeks bieżącej sekcji

                console.log("usunąłem Punkt", currentSectionIndex);
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
    });
}

