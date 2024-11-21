
{
    document.addEventListener('DOMContentLoaded', () => {





        const ShowPhoneTopups = () => {

            const commissionRateOrange = document.querySelector(".js-commission-rate-orange");
            const sectionCommisionPhoneCard = document.querySelector(".js-phone-top-ups");
            commissionRateOrange.textContent.trim() === ""
                ? sectionCommisionPhoneCard.classList.add("hidden")
                : sectionCommisionPhoneCard.classList.remove("hidden");
        };


        const setSideForProductType = () => {
            const typeProduct = document.querySelector(".js-product-type").textContent.trim();
            const sectionQuestionsAplication = document.querySelector(".js-questions-to-aplication");
            const sectionQuestionsterminals = document.querySelector(".js-questions-terminals");
            const sectionImageTerminals = document.querySelector(".js-offer-section-image-terminals");
            const sectionService = document.querySelector(".js-offer-section-service");
            const sectionIntro = document.querySelector(".js-offer-section-intro-for-terminals");
            const sectionImageIntroAplication = document.querySelector(".js-offer-section-image-intro-for-aplication");
            const sectionImageAplication = document.querySelector(".js-offer-section-image-for-aplication");
            const sectionImagesTerminals = document.querySelector(".js-offer-section-image-for-terminals");
            const sectionImagesStepsAplication = document.querySelector(".js-offer-section-image-steps-for-aplication")
            const priceTerminalSmartPos = document.querySelector(".js-price-smartpos");
            const priceTerminalStacionary = document.querySelector(".js-price-terminal-stationary");
            const priceTerminalPortable = document.querySelector(".js-price-terminal-portable");
            const pricePinpad = document.querySelector(".js-price-pinpad");
            const aplicationEserviceTom = document.querySelector(".js-aplication-eservicet-tom").textContent.trim();
            const sectionOneTimeFeesApliction = document.querySelector(".js-one-time-fees-aplication");
            const sectionOneTimeFeesTerminals = document.querySelector(".js-one-time-fees-terminals");
            const sectionWideoForAplication = document.querySelector(".js-offer-section-wideo-for-aplication");

            const hasPrice = priceTerminalSmartPos.textContent.trim() ||
                priceTerminalStacionary.textContent.trim() ||
                priceTerminalPortable.textContent.trim() ||
                pricePinpad.textContent.trim();

            if (aplicationEserviceTom === "Aplikacja terminalowa eService Tom") {
                // sectionQuestionsAplication.classList.remove("hidden");
                //  sectionImageAplication.classList.remove("hidden");
                //  sectionImagesStepsAplication.classList.remove("hidden");
                // sectionImageIntroAplication.classList.remove("hidden");
                sectionOneTimeFeesApliction.classList.remove("hidden");
                // sectionWideoForAplication.classList.remove("hidden");
            }

            if (hasPrice) {
                console.log("pinpad cena", pricePinpad.textContent,
                    "cena stacjonarny", priceTerminalStacionary.textContent,
                    "cena przenośny", priceTerminalPortable.textContent,
                    "cena smart pos", priceTerminalSmartPos.textContent);

                //  sectionIntro.classList.remove("hidden");
                //  sectionService.classList.remove("hidden");
                // sectionImageTerminals.classList.remove("hidden");
                //  sectionQuestionsterminals.classList.remove("hidden");
                // sectionImagesTerminals.classList.remove("hidden");
                sectionOneTimeFeesTerminals.classList.remove("hidden");
            }
        };
        const ShowIntegrationTheCashRegisterSystem = () => {

            const nameIntegrationTheCashRegisterSystem = document.querySelector(".js-name-cash-register-system");
            const sectionIntegrationTheCashRegisterSystem = document.querySelector(".js-section-integration-with-the-cash-register-system");
            nameIntegrationTheCashRegisterSystem.textContent.trim() === ""
                ? sectionIntegrationTheCashRegisterSystem.classList.add("hidden")
                : sectionIntegrationTheCashRegisterSystem.classList.remove("hidden");

        };


        const buttonNextStep = document.querySelector(".js-nextStep");

        if (buttonNextStep) {
            buttonNextStep.addEventListener("click", (event) => {
                event.preventDefault();
                const formNextStep = document.querySelector(".js-form--recommended");
                if (formNextStep) {

                    console.log("formularz", formNextStep);
                    formNextStep.submit();
                    setTimeout(() => {
                        formNextStep.submit();
                    }, 300);
                } else {
                    console.error("Nie znaleziono formularza z klasą .js-form--recommended");
                }
            });
        } else {
            console.error("Nie znaleziono przycisku z klasą .js-nextStep");
        }


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



        ShowIntegrationTheCashRegisterSystem();
        ShowPhoneTopups();
        setSideForProductType();
        loadStatusOpenOffer();

        // handleSectionVisibility();

        // loadStatusOpenOffer();






    });

}
