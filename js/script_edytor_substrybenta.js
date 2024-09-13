document.addEventListener('DOMContentLoaded', () => {
    const getParametr = (parametr) => new URLSearchParams(window.location.search).get(parametr);
    const inputMinuts = document.querySelector(".js-time-for-show");
    const butonShowContacbeforTime = document.querySelector(".js-button-show-contacs");
    const allDataTable = document.querySelectorAll(".js-data-table");
    const wartoscEmail = getParametr('mail');
    const emailInputs = document.querySelectorAll('.js-email');
    console.log("wartosc mail:", wartoscEmail);
    console.log("emailInputs:", emailInputs);

    if (wartoscEmail) {
        emailInputs.forEach(input => {
            input.value = wartoscEmail;
        });
    }

    const showContacs = () => {
        const minutes = parseInt(inputMinuts.value, 10) || 0;
        const currentDate = new Date(Date.now() + minutes * 60 * 1000); // Odejmowanie minut
        console.log("Bieżąca data (pomniejszona o " + minutes + " minut):", currentDate);

        document.querySelectorAll('.js-data-table').forEach(row => {
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
            } else {
                row.classList.add('hidden');
            }
        });
    };

    // Wywołanie showContacs po załadowaniu strony
    showContacs();

    allDataTable.forEach(dataTable => {
        const inputInTable = dataTable.querySelector(".js-email-contact");
        if (inputInTable && inputInTable.value === wartoscEmail) {
            dataTable.classList.remove("hidden");
            dataTable.classList.add("highlight");
           
        }
    });

    butonShowContacbeforTime.addEventListener("click", () => {
        showContacs(); // Wywołanie funkcji, kiedy użytkownik kliknie przycisk
    });

    const buttonReadPhoneForUrl = document.querySelector(".js-read-phone-url");
    buttonReadPhoneForUrl.addEventListener("click", () => {
        const phone = getParametr("phone");
        const fname = getParametr("fname");
        const inputPhone = document.querySelector('.js-phone');
        const inputFname = document.querySelector('.js-fname');
        if (inputPhone && phone) {
            inputPhone.value = phone;
        }
        if (inputFname && fname) {
            inputFname.value = fname;
        }
    });

    const buttonShowContacts = document.querySelector(".js-button-show-hidden");
    buttonShowContacts.addEventListener("click", () => {
        document.querySelectorAll(".js-data-table").forEach(row => {
            row.classList.remove("hidden");
        });
    });

    const buttonHiddenContacts = document.querySelector(".js-button-hidden-contact");
    buttonHiddenContacts.addEventListener("click", () => {
        const currentDate = new Date();
        document.querySelectorAll('.js-data-table').forEach(row => {
            const input = row.querySelector('.js-date-time-local');
            if (input) {
                const inputDate = new Date(input.value);
                row.classList.toggle('hidden', inputDate > currentDate);
            }
        });
    });
});
