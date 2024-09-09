document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date();

    const allDataTable = document.querySelectorAll('.data-table');
    allDataTable.forEach(row => {
        const input = row.querySelector('.js-date-time-local');

        // Sprawdzenie istnienia inputu i warunku daty
        if (input) {
            new Date(input.value) > currentDate ? row.classList.add('hidden') : row.classList.remove('hidden');
            console.log("Data obecna:", currentDate);
            console.log("Data kontaktu:", input.value);
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
            console.log("Data obecna:", currentDate);
            console.log("Data kontaktu:", input.value);
        }
    });
});





