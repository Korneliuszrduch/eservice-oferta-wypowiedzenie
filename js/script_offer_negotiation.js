
{
    document.addEventListener('DOMContentLoaded', () => {


        /*  const handleSectionVisibility = (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      alert("Zaoszczędziłeś!");
                      observer.unobserve(entry.target); // Po wywołaniu alertu przestajemy obserwować sekcję
                  }
              });
          };
      
          // Konfiguracja IntersectionObserver
          const observer = new IntersectionObserver(handleSectionVisibility, {
              root: null, // Przestrzeń widoku przeglądarki
              threshold: 0.1 // Próg, przy którym wywołuje się zdarzenie (10% widoczności)
          });
      
          // Znalezienie sekcji do obserwowania
          const summarySection = document.querySelector(".container__section--summary");
          if (summarySection) {
              observer.observe(summarySection);
          }
      
      
      */


        loadRandomLinkJs = () => {
            const randomNum = Math.floor(Math.random() * 10000); // Generuje losową liczbę między 0 a 9999

            // Tworzenie nowego elementu <script> z klasą
            const newScript = document.createElement('script');
            newScript.src = `https://terminal.terminaleservice.pl/js/script_offer.js?${randomNum}`;
            newScript.defer = true;
            newScript.className = 'js-script-offer'; // Dodanie klasy do nowego skryptu
        
            // Dodanie nowego skryptu do dokumentu
            document.body.appendChild(newScript);
        
            // Usunięcie obecnego skryptu, aby zapobiec duplikatom
            const currentScript = document.querySelector('script[src*="script_offer.js"]');
            if (currentScript) {
                currentScript.remove();
            }
        }



        const ShowPhoneTopups = () => {

            const commissionRateOrange = document.querySelector(".js-commission-rate-orange");
            const sectionCommisionPhoneCard = document.querySelector(".js-phone-top-ups");
            commissionRateOrange.textContent.trim() === ""
                ? sectionCommisionPhoneCard.classList.add("hidden")
                : sectionCommisionPhoneCard.classList.remove("hidden");



        };

        const ShowIntegrationTheCashRegisterSystem = () => {

            const nameIntegrationTheCashRegisterSystem = document.querySelector(".js-name-cash-register-system");
            const sectionIntegrationTheCashRegisterSystem = document.querySelector(".js-section-integration-with-the-cash-register-system");
            nameIntegrationTheCashRegisterSystem.textContent.trim() === ""
                ? sectionIntegrationTheCashRegisterSystem.classList.add("hidden")
                : sectionIntegrationTheCashRegisterSystem.classList.remove("hidden");



        };





      
        

       
      


       



    

       


     

       

     



       

       
       

       




      






       

      


       




        
        const sendFormDataCompany = () => {
            checkAndAddEmptyClass();
            const formCalculate = document.querySelector(".js-form--calculate");
            const invalidInputs = document.querySelectorAll(".container__input.incorrect");
            if (invalidInputs.length > 0) {
                alert("Wypełnij wszystkie formularze", invalidInputs.length);

            } else {
                setMemoryOptions();
                formCalculate.submit();
            }
        };


        const checkAndAddEmptyClass = () => {
            const containerConnersion = document.querySelectorAll(".container--conversion");

            containerConnersion.forEach(section => {
                const inputs = section.querySelectorAll(".container__input");
                //console.log("Section Inputs:", inputs);

                inputs.forEach(input => {
                    // console.log("Current Input:", input); // Wyświetla aktualnie przetwarzany input

                    // Sprawdzenie, czy sekcja jest ukryta
                    if (input.classList.contains("hidden")) {
                        input.classList.remove("incorrect");
                        input.classList.add("correct");
                        //  console.log("Hidden: Input set to correct:", input);
                    } else {
                        // Sprawdzenie, czy input jest pusty
                        if (input.value.trim() !== "") {
                            input.classList.remove("incorrect");
                            input.classList.add("correct");
                            // console.log("Visible: Input set to correct:", input);
                        } else {
                            // Jeżeli input jest pusty i widoczny, dodaj klasę incorrect
                            input.classList.add("incorrect");
                            input.classList.remove("correct");
                            // console.log("Visible: Input set to incorrect:", input);
                        }
                    }
                });
            });
        };


       




        const buttonNextStep = document.querySelector(".js-nextStep");
        buttonNextStep.addEventListener("click", () => {
            event.preventDefault();

            const formNextStep = document.querySelector(".js-form--DataCompany");
            // console.log(buttonNextStep);

            // console.log(formNextStep);
            formNextStep.submit();



        });




        const loadStatusOpenOffer = () => {
            const emailElement = document.querySelector(".js-email");
            if (!emailElement) {
                console.error("Element z klasą .js-email nie został znaleziony.");
                return;
            }
        
            const email = emailElement.value;
        
            const formData = new FormData();
            formData.append('email', email);
            formData.append('offer-opening-status', 'kliknął w ofertę lub dokument');
        
            fetch('https://terminal.terminaleservice.pl/php/update_fields.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(result => {
                console.log('Status updated:', result);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Wystąpił błąd podczas aktualizacji statusu. Spróbuj ponownie później.');
            });
        };
        
      

        


       

       // loadRandomLinkJs();
      

        ShowPhoneTopups();
      




        // updateTotalCostToOption2();
   

        // handleSectionVisibility();
        ShowIntegrationTheCashRegisterSystem();





    });

}
