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
        const currentDate = new Date(Date.now() - minutes * 60 * 1000); // Odejmowanie minut
        console.log("Bieżąca data (pomniejszona o " + minutes + " minut):", currentDate);

        const rows = Array.from(document.querySelectorAll('.js-data-table'));

        // Sortowanie wierszy, aby te z klasą highlight były na górze
        rows.sort((a, b) => {
            if (a.classList.contains('highlight') && !b.classList.contains('highlight')) {
                return -1;
            }
            if (!a.classList.contains('highlight') && b.classList.contains('highlight')) {
                return 1;
            }
            return 0;
        }).forEach(row => {
            const input = row.querySelector('.js-date-time-local');
            if (input) {
                const inputValue = input.value;
                if (inputValue) {
                    const inputDate = new Date(inputValue);
                    if (inputDate > currentDate) {
                        row.classList.add('hidden');
                        allDataTable.forEach(dataTable => {
                            const inputInTable = dataTable.querySelector(".js-email-contact");
                            if (inputInTable && inputInTable.value === wartoscEmail) {
                                dataTable.classList.remove("hidden");
                                dataTable.classList.add("highlight");
                            }
                        });


                    } else {
                        row.classList.remove('hidden');
                    }
                } else {
                    row.classList.add('hidden');
                }
            } else {
                row.classList.add('hidden');
                allDataTable.forEach(dataTable => {
                    const inputInTable = dataTable.querySelector(".js-email-contact");
                    if (inputInTable && inputInTable.value === wartoscEmail) {
                        dataTable.classList.remove("hidden");
                        dataTable.classList.add("highlight");
                    }
                });
            }


            row.parentNode.appendChild(row);
        });
    };

    allDataTable.forEach(dataTable => {
        const inputInTable = dataTable.querySelector(".js-email-contact");
        if (inputInTable && inputInTable.value === wartoscEmail) {
            dataTable.classList.remove("hidden");
            dataTable.classList.add("highlight");
        }
    });

    // Wywołanie showContacs po załadowaniu strony
    showContacs();

    butonShowContacbeforTime.addEventListener("click", () => {
        showContacs(); // Wywołanie funkcji, kiedy użytkownik kliknie przycisk
    });



    const readPhoneNameForUrl = () =>{
        
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
    }

    const buttonReadPhoneForUrl = document.querySelector(".js-read-phone-url");
    buttonReadPhoneForUrl.addEventListener("click", readPhoneNameForUrl);

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


 
    readPhoneNameForUrl();
     
       

    
});
