document.addEventListener('DOMContentLoaded', () => {
    // Odejmowanie 5 godzin od bieżącej daty
    const currentDate = new Date(Date.now() + 5 * 60  * 1000);

    console.log("Bieżąca data (pomniejszona o 5 godzin):", currentDate);

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








