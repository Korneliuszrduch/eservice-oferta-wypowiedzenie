document.addEventListener('DOMContentLoaded', () => {
    const inputMinuts = document.querySelector(".js-time-for-show");
    const butonShowContacbeforTime = document.querySelector(".js-button-show-contacs");

    // Funkcja do wyświetlania kontaktów na podstawie czasu
    const showContacs = () => {
        // Pobranie wartości z inputa i przeliczenie minut na milisekundy
        const minutes = parseInt(inputMinuts.value, 10) || 0;
        const currentDate = new Date(Date.now() + minutes * 3600 * 1000);

        console.log("Bieżąca data (pomniejszona o " + minutes + " minut):", currentDate);

        document.querySelectorAll('.data-table').forEach(row => {
            const input = row.querySelector('.js-date-time-local');

            if (input) {
                const inputValue = input.value;

                if (inputValue) {
                    const inputDate = new Date(inputValue);

                    if (inputDate > currentDate) {
                        row.classList.add('hidden');
                    } else {
                        row.classList.remove('hidden');
                    }
                } else {
                    row.classList.add('hidden');
                }
            }
        });
    };

    // Wywołanie funkcji showContacs przy załadowaniu strony
    showContacs();

    // Dodanie nasłuchiwacza zdarzeń kliknięcia do przycisku
    butonShowContacbeforTime.addEventListener("click", () => {
      showContacs();
    });
});



const buttonShowContacts = document.querySelector(".js-button-show-hidden");
buttonShowContacts.addEventListener("click", () => {
    const allDataTable = document.querySelectorAll(".data-table");
    allDataTable.forEach(row => {
        row.classList.remove("hidden");
    });
});

const buttonHiddenContacts = document.querySelector(".js-button-hidden-contact");
buttonHiddenContacts.addEventListener("click", () => {
    const currentDate = new Date();

    const allDataTable = document.querySelectorAll('.data-table');
    allDataTable.forEach(row => {
        const input = row.querySelector('.js-date-time-local');

        // Sprawdzenie istnienia inputu i warunku daty
        if (input) {
            new Date(input.value) > currentDate ? row.classList.add('hidden') : row.classList.remove('hidden');
          //  console.log("Data obecna:", currentDate);
          //  console.log("Data kontaktu:", input.value);
        }
    });
});








