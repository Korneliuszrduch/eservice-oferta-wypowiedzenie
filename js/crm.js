document.addEventListener('DOMContentLoaded', () => {

    const rows = Array.from(document.querySelectorAll(".js-data-table"));
    const emailForUrl = new URLSearchParams(window.location.search).get('mail'); // Get email from URL
    const currentDate = new Date();



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
            if (aHighlight && !bHighlight) return -1;
            if (!aHighlight && bHighlight) return 1;


            const aHighlightRed = a.classList.contains('highlight-red');
            const bHighlightRed = b.classList.contains('highlight-red');
            if (aHighlightRed && !bHighlightRed) return -1;
            if (!aHighlightRed && bHighlightRed) return 1;


            const aDate = new Date(a.querySelector('.js-date-time-local')?.value);
            const bDate = new Date(b.querySelector('.js-date-time-local')?.value);


            if (!isNaN(aDate) && !isNaN(bDate)) {
                return bDate - aDate;
            } else if (!isNaN(aDate)) {
                return -1;
            } else if (!isNaN(bDate)) {
                return 1;
            } else {
                return 0;
            }
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





    const buttonShowContacts = document.querySelector(".js-button-show-contacs");
    buttonShowContacts.addEventListener("click", showContacts);

    const buttonSaveDateContact = document.querySelectorAll(".js-save-button");
    buttonSaveDateContact.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const formDateContact = button.closest('tr').querySelector(".js-form-date-contact");
            if (formDateContact) {
                formDateContact.submit();
            } else {
                console.error('Formularz nie został znaleziony dla tego przycisku.');
            }
        });
    });

    const dataTableAll = document.querySelectorAll(".js-data-table");

    dataTableAll.forEach(dataTable => {
        const buttonSaveDatabase = dataTable.querySelector(".js-save-button-date-to-database");

        if (!buttonSaveDatabase) return; // Jeśli przycisk nie istnieje, przerywamy

        buttonSaveDatabase.addEventListener("click", event => {
            event.preventDefault();
            const sid = buttonSaveDatabase.dataset.sid;

            const selectedOptionCompanyOfTerminal = dataTable.querySelector(".js-select-option-company-of-terminal")?.value.trim() || '';
            const nameFirst = dataTable.querySelector(".js-input-name-first")?.value.trim() || '';
            const email = dataTable.querySelector(".js-email-contact")?.value.trim() || '';
            const phone = dataTable.querySelector(".js-input-phone")?.value.trim() || '';

            const monthlyCardTurnover = dataTable.querySelector(".js-monthly-card-turnover")?.value.trim() || '';
            const companyTaxNumber = dataTable.querySelector(".js-company-tax-number")?.value.trim() || '';
            const monthlyCommissionCompetition = dataTable.querySelector(".js-monthly-comission-competition")?.value.trim() || '';
            const averageTransaction = dataTable.querySelector(".js-average-transaction")?.value.trim() || '';
            const fixedMonthlyCostsCompetition = dataTable.querySelector(".js-fixed-monthly-cost-competition")?.value.trim() || '';
            const selectedStatusSentOffer = dataTable.querySelector(".js-offer-sent-status")?.value.trim() || '';
            const selectedStatusOpenOffer = dataTable.querySelector(".js-offer-opening-status")?.value.trim() || '';
            const customerStatus = dataTable.querySelector(".js-latest-custumer-status")?.value.trim() || '';
            const dateContactCustomer = dataTable.querySelector(".js-date-time-local")?.value.trim() || '';
            const comments = dataTable.querySelector(".textarea")?.value.trim() || '';  // Upewnij się, że textarea ma klasę .textarea

            if (email) {
                const formData = new FormData();
                formData.append("selectedOptionCompanyOfTerminal", selectedOptionCompanyOfTerminal);
                //  formData.append("sid", sid); // Dodajemy SID do danych
                formData.append("nameFirst", nameFirst);
                formData.append("email", email);
                formData.append("phone", phone);

                formData.append("monthlyCardTurnover", monthlyCardTurnover);
                formData.append("companyTaxNumber", companyTaxNumber);
                formData.append("monthlyCommissionCompetition", monthlyCommissionCompetition);
                formData.append("averageTransaction", averageTransaction);
                formData.append("fixedMonthlyCostsCompetition", fixedMonthlyCostsCompetition);
                formData.append("selectedStatusSentOffer", selectedStatusSentOffer);
                formData.append("selectedStatusOpenOffer", selectedStatusOpenOffer);
                formData.append("customerStatus", customerStatus);
                formData.append("dateContactCustomer", dateContactCustomer);
                formData.append("comments", comments);

                // Wyświetlanie wszystkich danych z formData w konsoli
                console.log("FormData zawiera:");
                formData.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });

                // Opóźnienie o 2 sekundy przed wysyłką danych
                setTimeout(() => {
                    fetch("/php/update_contact.php", {
                        method: "POST",
                        body: formData
                    })
                        .then(response => response.text())
                        .then(result => {
                            console.log("Server response:", result); // Logowanie odpowiedzi serwera dla debugowania
                            window.location.href = `https://terminal.terminaleservice.pl/crm.php?mail=${encodeURIComponent(email)}`;
                        })
                        .catch(error => console.error("Error:", error));
                }, 2000);
            } else {
                alert("Proszę wypełnić wymagane pola");
            }
        });
    });

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
    highlightTheCustomerDidNotOpenOffers();
    highlightContact();

    //showContacts();

});
