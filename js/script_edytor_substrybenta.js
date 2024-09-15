document.addEventListener('DOMContentLoaded', () => {

    const generateCalendarLink = () => {
        // Pobierz wartość z inputa (data w formacie 2024-09-12T14:11)
        const dateInputElement = document.querySelector(".js-date-input");
        const fnameElement = document.querySelector(".js-fname");
        const phoneElement = document.querySelector(".js-phone");
        const emailElement = document.querySelector(".js-email");

        // Jeśli którykolwiek z elementów nie istnieje, przerywamy działanie funkcji
        if (!dateInputElement || !fnameElement || !phoneElement || !emailElement) {
            console.error('Brakuje jednego z inputów lub nie istnieją na stronie');
            return;
        }

        // Pobierz wartości z inputów
        const dateInput = dateInputElement.value.trim();  // Oczekiwany format: 2024-09-12T14:11
        const fname = fnameElement.value.trim();
        const phone = phoneElement.value.trim();
        const email = emailElement.value.trim();

        console.log("datainput", dateInput);
        console.log("fname", fname);
        console.log("email", email);

        // Sprawdzamy, czy wszystkie pola są uzupełnione
        if (!dateInput || !fname || !phone || !email) {
            console.error('Brakuje niezbędnych danych');
            return;
        }

        // Tworzymy obiekt Date z podanej wartości w formacie 2024-09-12T14:11
        const startDate = new Date(dateInput);

        // Obliczamy zakończenie wydarzenia (startDate + 15 minut)
        const endDate = new Date(startDate.getTime() + 15 * 60 * 1000);

        // Funkcja formatowania daty w formacie YYYYMMDDTHHMMSS
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Dodajemy 1, bo miesiące są indeksowane od 0
            const day = String(date.getDate()).padStart(2, '0');
            const hour = String(date.getHours()).padStart(2, '0');
            const minute = String(date.getMinutes()).padStart(2, '0');
            return `${year}${month}${day}T${hour}${minute}00`;
        };

        const startDateStr = formatDate(startDate);
        const endDateStr = formatDate(endDate);

        // Generowanie linku do kalendarza Google
        const calendarLink = encodeURI(`https://calendar.google.com/calendar/r/eventedit?text=Rozmowa telefoniczna z ${fname} ${phone}&details=https://terminal.terminaleservice.pl/crm.php?mail=${email}&phone=${phone}&dates=${startDateStr}/${endDateStr}`);

       // const calendarLink = `https://calendar.google.com/calendar/r/eventedit?text=Rozmowa telefoniczna z ${fname} ${phone} &details=https://terminal.terminaleservice.pl/crm.php?mail=${email}&phone=${phone}&dates=${startDateStr}/${endDateStr}`;

        console.log('Link do Google Calendar:', calendarLink);
        window.open(calendarLink, '_blank');

        // Wyświetlenie linku
        const linkElement = document.querySelector('.js-calendar-link');
        if (linkElement) {
            linkElement.href = calendarLink;
            linkElement.textContent = "Dodaj do kalendarza Google";
            linkElement.style.display = "block"; // Upewniamy się, że link jest widoczny
        }
    };

    // Obsługa kliknięcia przycisku generującego link do kalendarza
    const buttonAddEventToCalendar = document.querySelector(".js-create-event-callendar");
    if (buttonAddEventToCalendar) {
        buttonAddEventToCalendar.addEventListener('click', generateCalendarLink);
    }




   



     const buttonPreparationOffer = document.querySelector(".js-preparation-of-the-offer");
    buttonPreparationOffer.addEventListener("click", (event) => {
        event.preventDefault();
        const formOffer = document.querySelector(".js-offer");
        const mlid = document.querySelector(".js-mlid");
        const token = document.querySelector(".js-token");
        const nameList = document.querySelector(".js-name-list");
        
        token.value = "da945ba7449d1e092316ba46f044f0b134483b6b";
        mlid.value = "231";
        nameList.value = "";
        console.log("mlid", mlid.value);
        console.log("token", token.value);
        formOffer.submit();

    });

   
    const buttonSentOfferToClient = document.querySelector(".js-send-of-the-offer-to-client");
    buttonSentOfferToClient.addEventListener("click", (event) => {
        event.preventDefault();
        const formOffer = document.querySelector(".js-offer");
        const mlid = document.querySelector(".js-mlid");
        const token = document.querySelector(".js-token"); 
        const nameList = document.querySelector(".js-name-list"); 
        token.value = "cb29a9d46aa5307cfef544fea7dbf8ab8f14b10b";
        mlid.value = "285";
        nameList.value = "PROPOZYCJA WSPÓŁPRACY- WYSŁANIE OFERTY";
        formOffer.submit(); 

    });






    

});
