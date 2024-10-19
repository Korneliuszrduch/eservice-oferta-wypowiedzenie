document.addEventListener('DOMContentLoaded', () => {
    // Usuwanie subskrybenta


    const rows = Array.from(document.querySelectorAll(".js-data-table"));
    const emailForUrl = new URLSearchParams(window.location.search).get('mail'); // Get email from URL
    const currentDate = new Date();

    document.querySelectorAll('.js-delete-button').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const sid = button.dataset.sid;
            if (confirm("Czy na pewno chcesz usunąć tego subskrybenta?")) {
                fetch('php/delete_subscriber.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ sid: sid })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert("Subskrybent został usunięty.");
                            button.closest('tr').remove();
                        } else {
                            alert("Wystąpił błąd: " + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("Wystąpił problem z usunięciem subskrybenta.");
                    });
            }
        });
    });


    const hideContactBecauseDone = () => {
        const dataTableAll = document.querySelectorAll(".js-data-table");
        dataTableAll.forEach(dataTable => {
            const latestCustomerStatus = dataTable.querySelector(".js-latest-custumer-status");
            const inputDate = dataTable.querySelector('.js-date-time-local');
            if (latestCustomerStatus && latestCustomerStatus.value.trim() === "100% Dokumenty wprowadzone") {

                if (inputDate && new Date(inputDate.value) < currentDate) {
                    dataTable.classList.add("hidden");
                } else {
                    dataTable.classList.add("hidden");
                }
            }
        });
    };

    const sortRows = (rows) => {
        return rows.sort((a, b) => {
            const aHighlight = a.classList.contains('highlight');
            const bHighlight = b.classList.contains('highlight');
            if (aHighlight && !bHighlight) return -1; // a ma highlight, b nie
            if (!aHighlight && bHighlight) return 1;  // b ma highlight, a nie
            const aDate = new Date(a.querySelector('.js-date-time-local')?.value);
            const bDate = new Date(b.querySelector('.js-date-time-local')?.value);
            return bDate - aDate;
        });
    };


    const highlightContact = () => {

        if (!emailForUrl) return;


        rows.forEach(dataTable => {
            const emailInTable = dataTable.querySelector(".js-email-contact")?.value.trim();
            if (emailInTable === emailForUrl) {
                dataTable.classList.remove("hidden");
                dataTable.classList.add("highlight");
            }
        });


        const tableBody = document.querySelector('.js-tbody');
        const sortedRows = sortRows(rows);
        sortedRows.forEach(row => tableBody.appendChild(row));
    };


    const showContacts = () => {
        const inputMinuts = document.querySelector(".js-time-for-show");
        const minutes = parseInt(inputMinuts.value, 10) || 0;
        const currentDate = new Date(Date.now() - minutes * 60 * 1000);
        const rows = Array.from(document.querySelectorAll('.js-data-table'));
        hideRowsByTimeContact(rows, currentDate, emailForUrl);

    };



    const hideRowsByTimeContact = (rows, currentDate, emailForUrl) => {
        rows.forEach(row => {
            const inputDate = row.querySelector('.js-date-time-local');
            const emailInTable = row.querySelector('.js-email-contact')?.value.trim();


            if (emailForUrl && emailInTable === emailForUrl) {

                row.classList.remove('hidden');
            } else if (inputDate && new Date(inputDate.value) > currentDate) {

                row.classList.add('hidden');
            } else {

                row.classList.remove('hidden');
            }
        });
    };




    // Obsługa przycisku "Pokaż kontakty"
    const buttonShowContacts = document.querySelector(".js-button-show-contacs");
    buttonShowContacts.addEventListener("click", showContacts); // Wywołanie funkcji po kliknięciu przycisku

    const buttonSaveDateContact = document.querySelectorAll(".js-save-button");
    buttonSaveDateContact.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const formDateContact = button.closest('tr').querySelector(".js-form-date-contact");
            if (formDateContact) {
                formDateContact.submit(); // Wysłanie odpowiedniego formularza
            } else {
                console.error('Formularz nie został znaleziony dla tego przycisku.');
            }
        });
    });

    // Funkcja odczytująca dane z URL i ustawiająca w odpowiednich polach
    const readParametersForUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const inputPhone = document.querySelector('.js-input-phone');
        const inputFname = document.querySelector('.js-input-name-first');
        const inputEmails = document.querySelectorAll('.js-input-email');
        const inputPlaceOfAcquiringTheCustomer = document.querySelector('.js-input-place-of-acquiring-the-customer');

        if (inputPhone) inputPhone.value = params.get("phone") || '';
        if (inputFname) inputFname.value = params.get("fname") || '';
        if (inputPlaceOfAcquiringTheCustomer) inputPlaceOfAcquiringTheCustomer.value = params.get("a") || '';
        inputEmails.forEach(input => input.value = params.get("mail") || '');
    };

    // Obsługa przycisku "Pokaż ukryte kontakty"
    const buttonShowHiddenContacts = document.querySelector(".js-button-show-hidden");
    buttonShowHiddenContacts.addEventListener("click", () => {
        document.querySelectorAll(".js-data-table").forEach(row => {
            row.classList.remove("hidden");
        });
    });

    // Obsługa przycisku "Ukryj kontakty"
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

    const registerUpdateButton = document.querySelector('.js-button-register-update-contact');
    registerUpdateButton.addEventListener('click', () => {
        const nameFirst = document.querySelector('.js-input-name-first').value.trim();
        const email = document.querySelector('.js-input-email').value.trim();
        const phone = document.querySelector('.js-input-phone').value.trim();
        const isUpdate = registerUpdateButton.dataset.update === 'true';

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
                    console.log('Server response:', result); // Logowanie odpowiedzi serwera dla debugowania
                    window.location.href = `https://terminal.terminaleservice.pl/crm.php?mail=${encodeURIComponent(email)}`;
                })
                .catch(error => console.error('Error:', error));
        } else {

            alert('Proszę wypełnić wymagane pola');
        }
    });

    const highlightTheCustomerDidNotOpenOffers = () => {
        const dataTableAll = document.querySelectorAll(".js-data-table");
    
        dataTableAll.forEach(dataTable => {
            const offerSentStatus = dataTable.querySelector(".js-offer-sent-status").value;
            const offerOpeningStatus = dataTable.querySelector(".js-offer-opening-status").value; // Używamy querySelector
    
            // Sprawdzamy, czy oferta została wysłana i czy oferta nie została otwarta
            if (offerSentStatus === "Ofertę wysłano" && offerOpeningStatus === "") {
                dataTable.classList.add("highlight-red");
                console.log("status wysyłki", offerSentStatus, "status otwarcia", offerOpeningStatus);
            } else {
                dataTable.classList.remove("highlight-red");
            }
        });
    };
    

    // Inicjalizacja
    readParametersForUrl();


    hideRowsByTimeContact(rows, currentDate, emailForUrl);
    hideContactBecauseDone();
    highlightContact();
    highlightTheCustomerDidNotOpenOffers();
    //showContacts();

});
