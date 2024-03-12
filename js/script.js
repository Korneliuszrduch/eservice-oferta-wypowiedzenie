

/*

{
const paragrafDate = document.querySelector('.paragraf--date');
 
// Utwórz obiekt daty
const currentDate = new Date();
 
// Pobierz składowe daty
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Dodaj 1, ponieważ styczeń to 0
const year = currentDate.getFullYear();
 
// Formatuj datę na "DD.MM.RRRR"
const formattedDate = `${day}.${month}.${year} r.`;
 
const updateDate = () => {
 
    paragrafDate.value = formattedDate;
 
};
 
// Wywołaj funkcję
updateDate();
 
 
   
 
    var printButton = document.getElementById('printButton');
 
    printButton.addEventListener('click', function () {
       prepareForPrint();
       window.print();
       restoreAfterPrint();
   });
 
    function prepareForPrint() {
        var contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';
 
        // Wyłączanie tytułu strony przed drukowaniem
        document.title = ".";
 
 
 
    }
 
    function restoreAfterPrint() {
        var contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';
 
        // Przywracanie tytułu strony po drukowaniu
        document.title = "Print Page";
    }
 
    function selectOption(option) {
        document.getElementById('selectedOption').textContent = option;
 
 
    }
 
    function toggleDropdown() {
        var dropdownOptions = document.getElementById('dropdownOptions');
        dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
 
    }
 
 
    function closeDropdown() {
        var dropdownOptions = document.getElementById('dropdownOptions');
        dropdownOptions.style.display = 'none';
    }
 
 
*/



/* 
 
    document.addEventListener("DOMContentLoaded", function () {
        // Pobieramy przycisk "Dodaj punkt"
        var addButton = document.querySelector(".button--addPlace");
    
        // Dodajemy obsługę zdarzenia click na przycisku
        addButton.addEventListener("click", function () {
            // Tworzymy nowy element sekcji
            var newSection = document.createElement("section--place");
            newSection.className = "section--place";
    
            // Dodajemy nowy element sekcji do formularza
            var form = document.querySelector(".form--dataCompany");
            form.appendChild(newSection);
    
            // Dodajemy sekcję z danymi do nowo utworzonej sekcji
            newSection.innerHTML = `
            <section class="section section--dataCompany">
            <label class="label" for="sqm-f140">Nazwa punktu</label>
            <input class="input" id="sqm-f140" name="fields[140]" type="text" required
                value="[[nazwapunktuinstalacjiterminal1]]" placeholder="Nazwa punktu" data-placeholder="Imię" />
        </section>
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f134">Nazwa ulicy instalacji terminala</label><input id="sqm-f134"
                name="fields[134]" type="text" required value="[[ulicainstalacjiterminal1]]"
                placeholder="Ulica instalacji terminala" data-placeholder="Ulica instalacji terminala" />
        </section>
 
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f135">Numer budynku / numer lokalu</label>
            <input class="input" id="sqm-f135" name="fields[135]" type="text"
                value="[[numerulicainstalacjiterminal1]]" placeholder="Numer budynku"
                data-placeholder="Numer budynku / numer lokalu" required />
        </section>
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f137">Miasto instalacji terminala</label>
            <input class="input" id="sqm-f137" name="fields[137]" type="text"
                value="[[miastoinstalacjiterminal1]]" placeholder="Miasto instalacji"
                data-placeholder="Miasto instalacji terminala" required />
        </section>
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f136">Kod pocztowy (XX-XXX)</label>
            <input class="input" id="sqm-f136" name="fields[136]" type="text"
                value="[[kodpocztowyinstalacjiterminal1]]" placeholder="Kod pocztowy"
                data-placeholder="Kod pocztowy" required />
        </section>
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f145">Numer rachunku bankowego</label>
            <input class="input" id="sqm-f145" name="fields[145]" type="text"
                value="[[numerrachunkubankowegoterminal1]]" placeholder="Numer rachunku bankowwego"
                data-placeholder="Numer rachunku bankowego" required />
        </section>
 
 
 
 
 
 
        <section class="section section--dataCompany">
            <label class="label" for="sqm-f143"> Terminal stacjonarny </label>
            <select class="select" id="sqm-f143" name="fields[143]" type="text" required>
                <option value="[[terminalkomercyjnystacjonarny]]">[[terminalkomercyjnystacjonarny]]
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
            <label class="label" for="sqm-f144"> Terminal przenośny </label>
            <select class="select" id="sqm-f144" name="fields[144]" type="text" required>
 
                <option value="[[terminalstandardowyprzenosny]]">[[terminalstandardowyprzenosny]] </option>
                <option value="1 x Terminal Przenośny">1 x Terminal przenośny</option>
                <option value="2 x Terminale Przenośne">2 x Terminale przenośne</option>
                <option value="3 x Terminale Przenośne">3 x Terminale przenośne</option>
                <option value="Aplikacja na telefon">Aplikacja na telefon</option>Przenośny</option>
                <option value="Liczba zgodna z ustaleniami">Liczba zgodna z ustaleniami</option>
                <option value="Nie dotyczy">Nie dotyczy</option>
            </select>
        </section>
            `;
        });
    });
}
*/








/* const addPlace = document.querySelector(".js-button--addPlace");
 addPlace.addEventListener("click", function () {
     event.preventDefault();
     const newSection = document.createElement("section");
     newSection.className = "section--place";

     const form = document.querySelector(".form--dataCompany");
     form.appendChild(newSection);

     newSection.innerHTML = `
             <section class="section section--dataCompany">
                 <label class="label" for="sqm-f150">Nazwa punktu</label>
                 <input class="input" id="sqm-f150" name="fields[150]" type="text" required
                     value="[[nazwapunktuinstalacjiterminal2]]" placeholder="Nazwa punktu 2" data-placeholder="Nazwa punktu" />
             </section>
 
          
         `;
 });

 */

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
    <label class="label" for="sqm-f140">Nazwa punktu</label>
    <input class="input" id="sqm-f140" name="fields[140]" type="text" required
        value="[[nazwapunktuinstalacjiterminal1]]" placeholder="Nazwa punktu" data-placeholder="Imię" />
</section>

<section class="section section--dataCompany">
    <label class="label" for="sqm-f134">Nazwa ulicy instalacji terminala</label><input id="sqm-f134"
        name="fields[134]" type="text" required value="[[ulicainstalacjiterminal1]]"
        placeholder="Ulica instalacji terminala" data-placeholder="Ulica instalacji terminala" />
</section>


<section class="section section--dataCompany">
    <label class="label" for="sqm-f135">Numer budynku / numer lokalu</label>
    <input class="input" id="sqm-f135" name="fields[135]" type="text"
        value="[[numerulicainstalacjiterminal1]]" placeholder="Numer budynku"
        data-placeholder="Numer budynku / numer lokalu" required />
</section>

<section class="section section--dataCompany">
    <label class="label" for="sqm-f137">Miasto instalacji terminala</label>
    <input class="input" id="sqm-f137" name="fields[137]" type="text"
        value="[[miastoinstalacjiterminal1]]" placeholder="Miasto instalacji"
        data-placeholder="Miasto instalacji terminala" required />
</section>

<section class="section section--dataCompany">
    <label class="label" for="sqm-f136">Kod pocztowy (XX-XXX)</label>
    <input class="input" id="sqm-f136" name="fields[136]" type="text"
        value="[[kodpocztowyinstalacjiterminal1]]" placeholder="Kod pocztowy"
        data-placeholder="Kod pocztowy" required />
</section>

<section class="section section--dataCompany">
    <label class="label" for="sqm-f145">Numer rachunku bankowego</label>
    <input class="input" id="sqm-f145" name="fields[145]" type="text"
        value="[[numerrachunkubankowegoterminal1]]" placeholder="Numer rachunku bankowwego"
        data-placeholder="Numer rachunku bankowego" required />
</section>


<section class="section section--dataCompany">
    <label class="label" for="sqm-f143"> Terminal stacjonarny </label>
    <select class="select" id="sqm-f143" name="fields[143]" type="text" required>
        <option value="[[terminalkomercyjnystacjonarny]]">[[terminalkomercyjnystacjonarny]]
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
    <label class="label" for="sqm-f144"> Terminal przenośny </label>
    <select class="select" id="sqm-f144" name="fields[144]" type="text" required>

        <option value="[[terminalstandardowyprzenosny]]">[[terminalstandardowyprzenosny]] </option>
        <option value="1 x Terminal Przenośny">1 x Terminal przenośny</option>
        <option value="2 x Terminale Przenośne">2 x Terminale przenośne</option>
        <option value="3 x Terminale Przenośne">3 x Terminale przenośne</option>
        <option value="Aplikacja na telefon">Aplikacja na telefon</option>Przenośny</option>
        <option value="Liczba zgodna z ustaleniami">Liczba zgodna z ustaleniami</option>
        <option value="Nie dotyczy">Nie dotyczy</option>
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