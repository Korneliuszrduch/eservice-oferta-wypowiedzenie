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



    const readPhoneNameForUrl = () => {

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

    const ustawAlarm = () => {
        const teraz = new Date();
        const elementInputDaty = document.querySelector(".js-date-time-local");

        // Pobranie wartości z inputu (w formacie 'YYYY-MM-DDTHH:MM')
        const dataKontaktu = new Date(elementInputDaty.value);
        console.log("Data z inputu: ", dataKontaktu.toString());
        console.log("Obecny czas: ", teraz.toString());

        // Obliczenie różnicy czasu
        const roznicaCzasu = dataKontaktu - teraz;
        console.log("Różnica czasu: ", roznicaCzasu);

        // Sprawdzenie, czy data jest w przyszłości
        if (roznicaCzasu > 0) {
            setTimeout(() => {
                console.log("Wywołanie powiadomienia...");
                if (Notification.permission === "granted") {
                    new Notification("Przypomnienie", {
                        body: "Masz zaplanowany kontakt na teraz!",
                    });
                } else {
                    alert("Masz zaplanowany kontakt na teraz!");
                }
            }, 10000);  // 10 sekund na test
        } else {
            alert("Wybrana data musi być w przyszłości.");
        }
    };

    // Sprawdzenie, czy powiadomienia są wspierane i dozwolone
    if ("Notification" in window) {
        console.log("API powiadomień jest wspierane.");
        if (Notification.permission === "default") {
            Notification.requestPermission().then(permission => {
                console.log("Status uprawnień powiadomień: ", permission);
            });
        } else {
            console.log("Uprawnienia powiadomień są już udzielone lub odmówione.");
        }
    }

    const buttonSetAlarm = document.querySelector(".js-set-alarm");
    buttonSetAlarm.addEventListener("click", ustawAlarm);


    const registerUpdateButton = document.querySelector('.js-button-register-update-contact');
    registerUpdateButton.addEventListener('click', () => {
        const nameFirst = document.querySelector('.js-input-name-first').value.trim();
        const email = document.querySelector('.js-input-email').value.trim();
        const phone = document.querySelector('.js-input-phone').value.trim();
        const isUpdate = document.querySelector('.js-button-register-update-contact').dataset.update === 'true';

        if (email) {
            const formData = new FormData();
            formData.append('name_first', nameFirst);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('update', isUpdate ? 'true' : 'false');

            fetch('/php/register_mail.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(result => {
                    alert(result);
                    if (result.includes('Dane zostały zaktualizowane.') || result.includes('Nowy użytkownik został zarejestrowany.')) {
                        // Optionally, you can update the button state or do something else
                        document.querySelector('.js-button-register-update-contact').dataset.update = 'false'; // Reset update state
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            alert('Please fill out the required fields.');
        }
    });
});
