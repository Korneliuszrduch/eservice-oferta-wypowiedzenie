
/*
 {
    document.addEventListener("DOMContentLoaded", function () {

        const handleRemoveButton = document.querySelector(".js-button--removePlace");
        const addPlaceButton = document.querySelector(".js-button--addPlace");
        const form = document.querySelector(".form--dataCompany");

        let currentIndex = 0;


        handleRemoveButton.addEventListener("click", function (event) {
            event.preventDefault();
            const sections = document.querySelectorAll(".section--place");

            if (sections.length > 1) {
                const lastSection = sections[sections.length - 1];
                lastSection.remove();
                currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            }
        });


        addPlaceButton.addEventListener("click", function (event) {
            event.preventDefault();
            currentIndex++;
            const newSection = document.createElement("section");
            newSection.className = "section section--place";
            newSection.setAttribute("data-index", currentIndex);

            // Wykorzystujemy dane z odpowiedniego przypadku
            switch (currentIndex) {
                case 1:
                    newSection.innerHTML = case1;
                    break;
                case 2:
                    newSection.innerHTML = case2;
                    break;
                case 3:
                    newSection.innerHTML = case3;
                    break;
                default:
                    break;
            }

            // Dodajemy nową sekcję do formularza
            form.appendChild(newSection);
        });

        const case1 = `

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f295">Nazwa punktu</label>
                    <input class="input" id="sqm-f295" name="fields[295]" type="text"
                        value="[[nazwapunktuinstalacjiterminal2]]" placeholder="Nazwa punktu 2"
                        data-placeholder="Nazwa punktu" required />
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f296">Nazwa ulicy instalacji terminala</label><input class="input"
                        id="sqm-f296" name="fields[296]" type="text" value="[[ulicainstalacjiterminal2]] "
                        placeholder="Ulica instalacji terminala" data-placeholder="Ulica instalacji terminala"
                        required />
                </section>


                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f304">Numer budynku / numer lokalu</label>
                    <input class="input" id="sqm-f304" name="fields[304]" type="text"
                        value="[[numerbudynkuilokalupunkt2]]" placeholder="Numer budynku"
                        data-placeholder="Numer budynku / numer lokalu" required />
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f297">Miasto instalacji terminala</label>
                    <input class="input" id="sqm-f297" name="fields[297]" type="text"
                        value="[[miastoinstalacjiterminal2]]" placeholder="Miasto instalacji"
                        data-placeholder="Miasto instalacji terminala" required />
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f298">Kod pocztowy (XX-XXX)</label>
                    <input class="input" id="sqm-f298" name="fields[298]" type="text"
                        value="[[kodpocztowyinstalacjiterminal2]]" placeholder="Kod pocztowy"
                        data-placeholder="Kod pocztowy" required />
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f299">Imię i nazwisko osoby kontaktowej w punkcie</label>
                    <input class="input" id="sqm-f299" name="fields[299]" type="text"
                        value="[[osobakontaktowapunkt2]] " placeholder="Imię i nazwisko osoby kontaktowej"
                        data-placeholder="Imię i nazwisko osoby kontaktowej" required />
                </section>
                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f300">Telefon kontaktowy w punkcie</label>
                    <input class="input" id="sqm-f300" name="fields[300]" type="text"
                        value="[[telefonosobadokontaktuwpunkcie2]]" placeholder="Telefon kontaktowy w punkcie"
                        data-placeholder="Telefon kontaktowy w punkcie" required />
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f301">Numer rachunku bankowego</label>
                    <input class="input" id="sqm-f301" name="fields[301]" type="text"
                        value="[[numerrachunkubankowegoterminalpunkt2]]" placeholder="Numer rachunku bankowwego"
                        data-placeholder="Numer rachunku bankowego" required />
                </section>






                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f302"> Terminal stacjonarny </label>
                    <select class="select" id="sqm-f302" name="fields[302]" type="text" required>
                        <option value="[[terminalstacjonarnypunkt2]]">[[terminalstacjonarnypunkt2]]
                        </option>
                        <option value="1 x Terminal stacjonarny">1 x Terminal stacjonarny</option>
                        <option value="2 x Terminale stacjonarne">2 x Terminale stacjonarne</option>
                        <option value="3 x Terminale stacjonarne">3 x Terminale stacjonarne</option>

                        <option value="1 x Terminal stacjonarny z pinpadem">1 x Terminal stacjonarny z pinpadem
                        </option>
                        <option value="2 x Terminale stacjonarne z pinpadem">2 x Terminale stacjonarne z pinpadem
                        </option>
                        <option value="3 x Terminale stacjonarne z pinpadem">3 x Terminale stacjonarne z pinpadem
                        </option>
                        <option value="Liczba zgodna z ustaleniami">Liczba zgodna z ustaleniami</option>
                        <option value="Nie dotyczy">Nie dotyczy</option>
                        <option value=""></option>
                    </select>
                </section>

                <section class="section section--dataCompany">
                    <label class="label" for="sqm-f303"> Terminal przenośny </label>
                    <select class="select" id="sqm-f303" name="fields[303]" type="text" required>

                        <option value="[[terminalprzenosnypunkt2]]">[[terminalprzenosnypunkt2]] </option>
                        <option value="1 x Terminal Przenośny">1 x Terminal przenośny</option>
                        <option value="2 x Terminale Przenośne">2 x Terminale przenośne</option>
                        <option value="3 x Terminale Przenośne">3 x Terminale przenośne</option>
                        <option value="Aplikacja na telefon">Aplikacja na telefon</option>Przenośny</option>
                        <option value="Liczba zgodna z ustaleniami">Liczba zgodna z ustaleniami</option>
                        <option value="Nie dotyczy">Nie dotyczy</option>
                        <option value=""></option>
                    </select>
                </section>

           
    `;

        const case2 = `
        <label class="label" for="sqm-fdane">Nazwa punktu 2</label>
        <input class="input" id="sqm-fdane" name="fields[dane]" type="text" required
            value="[[nazwapunktuinstalacjiterminal2]]" placeholder="Nazwa punktu 2" data-placeholder="Nazwa punktu szczecin" />
        <!-- Dodaj pozostałe pola z case2 -->
    `;

        const case3 = `
        <label class="label" for="sqm-fdate">Nazwa punktu szczecin</label>
        <input class="input" id="sqm-fdate" name="fields[date]" type="text" required
            value="[[nazwapunktuinstalacjiterminal3333]]" placeholder="Nazwa punktu 3" data-placeholder="Nazwa punktu bialystok" />
        <!-- Dodaj pozostałe pola z case3 -->
    `;


        const handleButtonNextStep = document.querySelector(".js-button--nextStep");

        const sendForm = (event) => {
            event.preventDefault();

            if (!validateCurrentSection()) {
                alert("Wypełnij wszystkie wymagane pola przed przejściem dalej.");
                return;
            }

            form.submit();
        };

        function validateCurrentSection() {
            // Pobieramy wszystkie wymagane pola w bieżącej sekcji
            const requiredFields = document.querySelectorAll(".section--place [required]");

            // Sprawdzamy, czy wszystkie wymagane pola są wypełnione
            const emptyFields = [];
            const isSectionValid = Array.from(requiredFields).every(field => {
                const isValid = field.value.trim() !== "";

                // Jeśli pole jest puste, dodajmy klasę 'invalid' dla wizualnego oznaczenia
                if (!isValid) {
                    field.classList.add('invalid');
                    emptyFields.push(field.id);
                } else {
                    field.classList.remove('invalid');
                }

                return isValid;
            });

            // Jeśli sekcja jest nieprawidłowa, wyświetlamy komunikat z pustymi polami
            if (!isSectionValid) {
                alert(`Wypełnij wszystkie wymagane pola przed przejściem dalej. Puste pola: `);
            }

            return isSectionValid;
        }

        // Dodanie funkcji obsługi zdarzenia kliknięcia przycisku "Dalej"
        handleButtonNextStep.addEventListener("click", sendForm);
    });




    const handBackButton = document.querySelector(".js-button--backStep");
    handBackButton.addEventListener("click", function () {
        handformBackStep = document.querySelector(".formBackStep");
        handformBackStep.submit();




    });


   

       
}

*/



{
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault(); // Zatrzymuje domyślną akcję formularza (czyli wysłanie danych)
                // Tutaj możesz dodać kod, który wykonuje się po naciśnięciu przycisku "Dodaj punkt"
            });
        });
    
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
                alert("Wypełnij wszystkie formularze" ,invalidInputs.length);
                console.log("liczba wierszy niewypelnionych ",  invalidInputs.length );
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

