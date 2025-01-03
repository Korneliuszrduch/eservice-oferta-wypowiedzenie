document.addEventListener('DOMContentLoaded', () => {



  const ustawAlarm = () => {
    const teraz = new Date();
    const elementInputDaty = document.querySelector(".js-date-input");

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


  const generateCalendarLink = () => {
    // Pobierz wartość z inputa (data w formacie 2024-09-12T14:11)
    const dateInputElement = document.querySelector(".js-date-input");
    const fnameElement = document.querySelector(".js-fname");
    const phoneElement = document.querySelector(".js-phone");
    const emailElement = document.querySelector(".js-email");
    const latestCustomerStatusElement = document.querySelector(".js-latest-custumer-status");

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
    const latestCustomerStatus = latestCustomerStatusElement.value.trim();

    // console.log("datainput", dateInput);
    // console.log("fname", fname);
    //console.log("email", email);

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
    const calendarLink = encodeURI(`https://calendar.google.com/calendar/r/eventedit?text=${fname} ${phone} ${latestCustomerStatus} &details=https://terminal.terminaleservice.pl/crm.php?mail=${email}&phone=${phone}&dates=${startDateStr}/${endDateStr}&color=%23B1365F`);

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




  const loadlatestCustomerStatusAll = (statusValue) => {
    const latestCustomerStatusAll = document.querySelectorAll(".js-latest-custumer-status");
    latestCustomerStatusAll.forEach((latestCustomerStatus) => {
      latestCustomerStatus.value = statusValue;
      
    });
  };

  const loadElementsStatusSentOffer = (statusSendOffer) => {
    const selectedStatusSentOfferAll = document.querySelectorAll(".js-offer-sent-status");
    selectedStatusSentOfferAll.forEach((selectedStatusSentOffer) => {
      selectedStatusSentOffer.value = statusSendOffer;
    });
  };


  const generateICS = () => {
    const dateInputElement = document.querySelector(".js-date-input");
    const fnameElement = document.querySelector(".js-fname");
    const phoneElement = document.querySelector(".js-phone");
    const emailElement = document.querySelector(".js-email");
    const latestCustomerStatusElement = document.querySelector(".js-latest-custumer-status");

    if (!dateInputElement || !fnameElement || !phoneElement || !emailElement) {
      console.error('Brakuje jednego z inputów');
      return;
    }

    const dateInput = dateInputElement.value.trim();
    const fname = fnameElement.value.trim();
    const phone = phoneElement.value.trim();
    const email = emailElement.value.trim();
    const latestCustomerStatus = latestCustomerStatusElement.value.trim();

    if (!dateInput || !fname || !phone || !email) {
      console.error('Brakuje niezbędnych danych');
      return;
    }

    const startDate = new Date(dateInput);
    const endDate = new Date(startDate.getTime() + 15 * 60 * 1000); // +15 minut

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hour = String(date.getHours()).padStart(2, '0');
      const minute = String(date.getMinutes()).padStart(2, '0');
      return `${year}${month}${day}T${hour}${minute}00`;
    };

    const startDateStr = formatDate(startDate);
    const endDateStr = formatDate(endDate);

    // Zawartość pliku .ics
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
DTSTAMP:${startDateStr}
DTSTART:${startDateStr}
DTEND:${endDateStr}
SUMMARY:${fname} ${phone} ${latestCustomerStatus}
DESCRIPTION:Wydarzenie utworzone dla https://terminal.terminaleservice.pl/crm.php?mail=${email}
CATEGORIES:Zielone wydarzenie
END:VEVENT
END:VCALENDAR
        `.trim();

    // Utworzenie pliku do pobrania
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `wydarzenie-${fname}.ics`;

    // Kliknięcie w link, aby pobrać plik
    link.click();
  };

  // Obsługa kliknięcia przycisku do generowania pliku .ics
  const buttonCreateICS = document.querySelector(".js-create-ics");
  if (buttonCreateICS) {
    buttonCreateICS.addEventListener('click', generateICS);
  }


  const buttonAddEventToCalendar = document.querySelector(".js-create-event-callendar");
  if (buttonAddEventToCalendar) {
    buttonAddEventToCalendar.addEventListener('click', generateCalendarLink);
  }

  const buttonPreparationOffer = document.querySelector(".js-preparation-of-the-offer");
  buttonPreparationOffer.addEventListener("click", (event) => {
    event.preventDefault();
    const statusValue = "39% Przygotowano ofertę do wysłania";
    loadlatestCustomerStatusAll(statusValue);
    const formOffer = document.querySelector(".js-offer");
    const mlid = document.querySelector(".js-mlid1");
    const token = document.querySelector(".js-token1");
    const nameList = document.querySelector(".js-name-list1");
    token.value = "da945ba7449d1e092316ba46f044f0b134483b6b";
    mlid.value = "303";
    nameList.value = "";
    console.log("mlid", mlid.value);
    console.log("token", token.value);
    formOffer.submit();
  });


  const buttonSentOfferToClient = document.querySelector(".js-send-of-the-offer-to-client");
  buttonSentOfferToClient.addEventListener("click", (event) => {
    event.preventDefault();
    const confirmation = confirm("Czy na pewno chcesz wysłać ofertę?");
    if (confirmation) {
      const statusValue = "40% Wysłano maila z ofertą"
      const statusSendOffer = "Ofertę wysłano";
      loadlatestCustomerStatusAll(statusValue);
      loadElementsStatusSentOffer(statusSendOffer);
      const formOffer = document.querySelector(".js-offer");
      const mlid = document.querySelector(".js-mlid1");
      const token = document.querySelector(".js-token1");
      const nameList = document.querySelector(".js-name-list1");
      token.value = "cb29a9d46aa5307cfef544fea7dbf8ab8f14b10b";
      mlid.value = "285";
      nameList.value = "PROPOZYCJA WSPÓŁPRACY- WYSŁANIE OFERTY";
      console.log("mlid", mlid.value);
      console.log("token", token.value);
      console.log("formOffer", formOffer);
      formOffer.submit();
    } else {

      console.log("Oferta nie została wysłana.");
    }
  });




  const buttonSentNegotiationOfferToClient = document.querySelector(".js-send-of-the-offer-negotiation-to-client");
  buttonSentNegotiationOfferToClient.addEventListener("click", (event) => {
    event.preventDefault();
    const confirmation = confirm("Czy na pewno chcesz wysłać ofertę do negocjacyjną do obecnego klienta?");
    if (confirmation) {
      const statusValue = "40% Wysłano maila z ofertą"
      const statusSendOffer = "Ofertę wysłano";
      loadlatestCustomerStatusAll(statusValue);
      loadElementsStatusSentOffer(statusSendOffer);
      const formOffer = document.querySelector(".js-offer");
      const mlid = document.querySelector(".js-mlid1");
      const token = document.querySelector(".js-token1");
      const nameList = document.querySelector(".js-name-list1");
      token.value = "7699d433d9d0f043a957b6824e0a2e3e42ba189e";
      mlid.value = "305";
      nameList.value = "NEGOCJACJE OFERTA DLA OBECNYCH KLIENTÓW";
      console.log("mlid", mlid.value);
      console.log("token", token.value);
      console.log("formOffer", formOffer);
      formOffer.submit();
    } else {

      console.log("Oferta nie została wysłana.");
    }
  });





  const buttonsendRequestForContractData = document.querySelector(".js-send-of-the-dateCompany");
  buttonsendRequestForContractData.addEventListener("click", (event) => {
    event.preventDefault();
    const confirmation = confirm("Czy na pewno chcesz wysłać prośbę o dane?");
    if (confirmation) {
      const statusValue = "90% Wysłano prośbę o dane";
      const statusSendOffer = "Ofertę wysłano";
      loadlatestCustomerStatusAll(statusValue);
      loadElementsStatusSentOffer(statusSendOffer);

      const formOffer = document.querySelector(".js-offer");
      const mlid = document.querySelector(".js-mlid1");
      const token = document.querySelector(".js-token1");
      const nameList = document.querySelector(".js-name-list1");
      token.value = "da945ba7449d1e092316ba46f044f0b134483b6b";
      mlid.value = "246";
      nameList.value = "[[nazwalistyadresowej]] & CHCE TERMINAL ZAMAWIANIE TERMINALA KROK 0 ";
      console.log("mlid", mlid.value);
      console.log("token", token.value);
      console.log("formOffer", formOffer);
      formOffer.submit();
    } else {

      console.log("Prośba o dane nie została wysłana.");
    }
  });



  const buttonUpdateContact = document.querySelector(".js-button-update-contact");
  buttonUpdateContact.addEventListener("click", (event) => {
    event.preventDefault();
    const formUpdateContact = document.querySelector(".js-form-update-contact");
    const mlid = document.querySelector(".js-mlid");
    const token = document.querySelector(".js-token");
    const nameList = document.querySelector(".js-name-list");

    token.value = "da945ba7449d1e092316ba46f044f0b134483b6b";
    mlid.value = "273";
    nameList.value = "";
    console.log("mlid", mlid.value);
    console.log("token", token.value);
    formUpdateContact.submit();
  });



 
  const buttonRegardingInvoice = document.querySelector(".js-button-regarding-the-invoice");
  buttonRegardingInvoice.addEventListener("click", (event) => {
    event.preventDefault();

    const confirmation = confirm("Czy na pewno chcesz wysłać prośbę o fakturę?");
    if (confirmation) {

      const formUpdateContact = document.querySelector(".js-form-update-contact");

      const statusValue = "7% Wysłany mail ws. faktury z terminali";
      const statusSendOffer = "Ofertę wysłano";
      loadlatestCustomerStatusAll(statusValue);
      loadElementsStatusSentOffer(statusSendOffer);


      const mlid = document.querySelector(".js-mlid");
      const token = document.querySelector(".js-token");
      const nameList = document.querySelector(".js-name-list");
      token.value = "da945ba7449d1e092316ba46f044f0b134483b6b";
      mlid.value = "304";
      nameList.value = "PROŚBA O FAKTURĘ TERMINALE";
      console.log("mlid", mlid.value);
      console.log("token", token.value);
     formUpdateContact.submit();
    } else {

      console.log("Mail z prośbą o fakturę nie został wysłany.");
    }







  });




});