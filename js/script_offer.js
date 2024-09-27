
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
                sectionQuestionsAplication.classList.remove("hidden");
                sectionImageAplication.classList.remove("hidden");
                sectionImagesStepsAplication.classList.remove("hidden");
                sectionImageIntroAplication.classList.remove("hidden");
                sectionOneTimeFeesApliction.classList.remove("hidden");
                sectionWideoForAplication.classList.remove("hidden");
            }

            if (hasPrice) {
                console.log("pinpad cena", pricePinpad.textContent,
                    "cena stacjonarny", priceTerminalStacionary.textContent,
                    "cena przenośny", priceTerminalPortable.textContent,
                    "cena smart pos", priceTerminalSmartPos.textContent);

                sectionIntro.classList.remove("hidden");
                sectionService.classList.remove("hidden");
                sectionImageTerminals.classList.remove("hidden");
                sectionQuestionsterminals.classList.remove("hidden");
                sectionImagesTerminals.classList.remove("hidden");
                sectionOneTimeFeesTerminals.classList.remove("hidden");
            }
        };
        const setMemoryOptions = () => {
            const memoryOption = document.getElementById("sqm-f332").value;
            console.log("Początek setMemoryOptions, memoryOption:", memoryOption);

            const option1 = document.getElementById("option1");
            const option2 = document.getElementById("option2");
            const option3 = document.getElementById("option3");

            // Resetowanie zaznaczenia, aby upewnić się, że tylko jedna opcja jest wybrana
            option1.checked = false;
            option2.checked = false;
            option3.checked = false;

            if (memoryOption === "option1") {
                option1.checked = true;
                console.log("Wybrano option1 w setMemoryOptions");
                doOption1();
            } else if (memoryOption === "option2") {
                option2.checked = true;
                console.log("Wybrano option2 w setMemoryOptions");
                doOption2();
            } else if (memoryOption === "option3") {
                option3.checked = true;
                console.log("Wybrano option3 w setMemoryOptions");
                hideForm();
                hideButton();
                showUploadFile();
            }

            console.log("Koniec setMemoryOptions");
        };

        const checkOptions = () => {
            event.preventDefault();
            const memoryOption = document.getElementById("sqm-f332");
            console.log("Początek checkOptions");

            if (document.getElementById('option1').checked) {
                doOption1();
                memoryOption.value = "option1";
                memoryOption.setAttribute('value', 'option1');
                console.log("Ustawiono option1", memoryOption);
            } else if (document.getElementById('option2').checked) {
                doOption2();
                memoryOption.value = "option2";
                memoryOption.setAttribute('value', 'option2');
                console.log("Ustawiono option2", memoryOption);
            } else if (document.getElementById('option3').checked) {
                hideForm();
                hideButton();
                showUploadFile();
                memoryOption.value = "option3";
                memoryOption.setAttribute('value', 'option3');
                console.log("Ustawiono option3", memoryOption);
            }

            console.log("Koniec checkOptions");
        };

        document.querySelectorAll('input[name="costOption"]').forEach((input) => {
            input.addEventListener('change', checkOptions);
        });



        const doOption1 = () => {

            showInvoiceCommissionAmount();
            hiddenUploadFile();
            showButton();
            showForm();
            hiddenFieldsForOption1();
            hiddenCommissionRateCompetition();
            showCalculatedCommissionRateCompetition();
            checkAndAddEmptyClass();
            updateTotalCostToOption1();

        };

        const doOption2 = () => {


            hideInvoiceCommissionAmount();
            hiddenUploadFile();
            showButton();
            showForm();
            ShowFieldsForOption();
            showCommissionRateCompetition();
            hiddenCalculatedCommissionRateCompetition();
            checkAndAddEmptyClass();
            updateTotalCostToOption2();

        };





        const hideInvoiceCommissionAmount = () => {

            const invoiceCommissionAmount = document.querySelector(".js-invoice-commission-amount");
            const inputInvoiceCommissionAmount = document.getElementById("sqm-f330");
            inputInvoiceCommissionAmount.classList.add("hidden");
            invoiceCommissionAmount.classList.add("hidden");




        };

        const showInvoiceCommissionAmount = () => {

            const invoiceCommissionAmount = document.querySelector(".js-invoice-commission-amount");
            invoiceCommissionAmount.classList.remove("hidden");
            const inputInvoiceCommissionAmount = document.getElementById("sqm-f330");
            inputInvoiceCommissionAmount.classList.remove("hidden");
        };

        const showUploadFile = () => {
            const fileUploadSection = document.querySelector(".js-file-upload");
            fileUploadSection.classList.remove("hidden");

        };
        const hiddenUploadFile = () => {
            const fileUploadSection = document.querySelector(".js-file-upload");
            fileUploadSection.classList.add("hidden");

        };


        const hideForm = () => {
            const formCalculate = document.querySelector(".js-form--calculate");
            formCalculate.classList.add("hidden");


        };

        const showForm = () => {
            const formCalculate = document.querySelector(".js-form--calculate");
            formCalculate.classList.remove("hidden");


        };


        const hideButton = () => {
            const buttonRecalculate = document.querySelector(".js-button")
            buttonRecalculate.classList.add("hidden");

        };

        const showButton = () => {
            const buttonRecalculate = document.querySelector(".js-button")
            buttonRecalculate.classList.remove("hidden");

        };

        showCommissionRateCompetition = () => {
            const commissionRateCompetition = document.getElementById("sqm-f326");
            commissionRateCompetition.classList.remove("hidden");
        };

        hiddenCommissionRateCompetition = () => {
            const commissionRateCompetition = document.getElementById("sqm-f326");
            //  commissionRateCompetition.value === ""
            //   ?
            commissionRateCompetition.classList.add("hidden")
            // : 
            //   commissionRateCompetition.classList.remove("hidden");

        };

        hiddenCalculatedCommissionRateCompetition = () => {
            const calculatedCommissionRateCompetition = document.querySelector(".js-calculated-average-commission-rate-competition");
            calculatedCommissionRateCompetition.classList.add("hidden")
        };
        showCalculatedCommissionRateCompetition = () => {
            const calculatedCommissionRateCompetition = document.querySelector(".js-calculated-average-commission-rate-competition");
            calculatedCommissionRateCompetition.classList.remove("hidden")
        };





        const hiddenFieldsForOption1 = () => {
            const authorizationFeeCompetition = document.querySelector(".js-authorization-Fee-Competition");

            const exemptRevenueCompetition = document.getElementById("sqm-f319");
            const monthsOfRentExemptionCompetition = document.getElementById("sqm-f325");
            authorizationFeeCompetition.classList.add("hidden");

            exemptRevenueCompetition.classList.add("hidden");
            monthsOfRentExemptionCompetition.classList.add("hidden");
        };

        const ShowFieldsForOption = () => {
            const authorizationFeeCompetition = document.querySelector(".js-authorization-Fee-Competition");

            const exemptRevenueCompetition = document.getElementById("sqm-f319");
            const monthsOfRentExemptionCompetition = document.getElementById("sqm-f325");
            authorizationFeeCompetition.classList.remove("hidden");

            exemptRevenueCompetition.classList.remove("hidden");
            monthsOfRentExemptionCompetition.classList.remove("hidden");


        };







        const fixedMonthlyCostsTerminal = () => {
            const aplicationCost = parseFloat(document.querySelector(".js-aplication-eservice-tom")?.textContent) || 0;
            const terminalCostSmartPos = parseFloat(document.querySelector(".js-price-smartpos")?.textContent) || 0;
            const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208")?.textContent) || 0;
            const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
            const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
            const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;
            const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
            const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;
            const rkas = parseFloat(document.getElementById("sqm-f290")?.textContent) || 0;
            const bestPrice = Math.min(
                ...[aplicationCost, terminalCostSmartPos, terminalCostStacjonarny, terminalCostPrzenosny, pinPadCost].filter(cost => cost > 0)
            );
            const fixedMonthlyCosts = (bestPrice + gprsCost + serviceCost + logoCost + rkas);
            document.getElementById("fixed-monthly-costs").value = fixedMonthlyCosts;
            //console.log("Najlepsza cena:", bestPrice);

            return {

                fixedMonthlyCosts,


            }
        };

        const summaryCalculation = () => {
            const timeOfCooperation = parseFloat(document.getElementById("sqm-f327").value) || 0;
            const savingMoney = parseFloat(document.getElementById("sqm-f328").value) || 0;
            const handleSummaryCalculation = document.querySelector(".container__section--summary");
            const summaryElement = document.querySelector(".js-summary");
            const buttonNextStep = document.querySelector(".js-nextStep");
            summaryElement.textContent = `W ciągu ${timeOfCooperation} miesięcy zaoszczędzisz ${savingMoney} zł, jeśli zmienisz operatora terminali płatniczych. Jeśli z obecnym operatorem ostatnio podpisywałeś umowę czy rozszerzenie na nowy terminal i minęło już ponad 2 lata, to 90% operatorów ma umowy z jednomiesięcznym okresem wypowiedzenia. Po kliknięciu przycisku "Podaję dane", przekieruję Cię do podania danych do umowy, a na końcu automatycznie wygeneruje się druk wypowiedzenia do twojego operatora terminali płatniczych. Kliknij przycisk "Podaję dane" i oszczędzaj!`;

            // Logika widoczności sekcji na podstawie wartości savingMoney
            if (savingMoney >= 100) {
                handleSummaryCalculation.classList.add("visible");
                buttonNextStep.classList.remove("hidden");
            } else {
                handleSummaryCalculation.classList.remove("visible");
                buttonNextStep.classList.add("hidden");
            }
        };




        const updateTotalCostToOption1 = (event) => {
            if (event) event.preventDefault();
            const monthlyCardTurnover = parseFloat(document.getElementById("sqm-f183").value) || 0;
            const averageTransaction = parseFloat(document.getElementById("sqm-f184").value) || 0;
            const commissionRate = parseFloat(document.getElementById("sqm-f217").value) || 0;
            const authorizationFee = parseFloat(document.getElementById("sqm-f219").value) || 0;
            const exemptRevenue = parseFloat(document.getElementById("sqm-f318").value) || 0;
            const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208")?.textContent) || 0;
            const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
            const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
            const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;

            const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
            const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;
            const monthsOfRentExemption = parseFloat(document.getElementById("sqm-f215").value) || 0;
            const priceInstalationTerminal = parseFloat(document.getElementById("sqm-f233").value) || 0;
            const { fixedMonthlyCosts } = fixedMonthlyCostsTerminal();

            const timeOfCooperation = parseFloat(document.getElementById("sqm-f327").value) || 0;
            const fixedMonthlyCostsCompetition = parseFloat(document.getElementById("sqm-f329").value) || 0;
            // const monthsOfRentExemptionCompetition = parseFloat(document.getElementById("sqm-f325").value) || 0;
            const monthsOfRentExemptionCompetition = 0;
            // const exemptRevenueCompetition = parseFloat(document.getElementById("sqm-f319").value) || 0;
            const exemptRevenueCompetition = 0;
            //  const commissionRateCompetition = parseFloat(document.getElementById("sqm-f326").value) || 0;

            const authorizationFeeCompetition = 0;
            const priceInstalationTerminalCompetition = parseFloat(document.getElementById("sqm-f323").value) || 0;
            const invoiceCommissionAmount = parseFloat(document.getElementById("sqm-f330").value) || 0;
            const monthlyCommissionCompetition = parseFloat(invoiceCommissionAmount) || 0;


            const calculatedCommissionRateCompetition = (invoiceCommissionAmount / monthlyCardTurnover) * 100;
            //console.log("wyliczona prowizja konkurencja opcja 1", calculatedCommissionRateCompetition);
            const monthlyCommission = (timeOfCooperation * monthlyCardTurnover - exemptRevenue >= 0)
                ? Math.max(0,
                    authorizationFee * monthlyCardTurnover / averageTransaction + monthlyCardTurnover * commissionRate / 100
                )
                : 0;
            const amountOfCommissionFromExemptTurnover = (timeOfCooperation * monthlyCardTurnover) - exemptRevenue >= 0
                ? Math.max(0, (exemptRevenue / averageTransaction) * authorizationFee + (exemptRevenue * commissionRate) / 100)
                : 0;
            const monthlyTotalCost = Math.max(0, monthlyCommission + fixedMonthlyCosts - (monthsOfRentExemption * fixedMonthlyCosts));
            const totalCost = (priceInstalationTerminal + (timeOfCooperation * monthlyCommission) - amountOfCommissionFromExemptTurnover + Math.max(0, (timeOfCooperation - monthsOfRentExemption) * fixedMonthlyCosts)).toFixed(2);



            const amountOfCommissionFromExemptTurnoverCompetition = (timeOfCooperation * monthlyCardTurnover) - exemptRevenueCompetition >= 0
                ? Math.max(0, (exemptRevenueCompetition / averageTransaction) * authorizationFeeCompetition + (exemptRevenueCompetition * calculatedCommissionRateCompetition) / 100)
                : 0;
            const monthlyTotalCostCompetition = Math.max(0, monthlyCommissionCompetition + Math.max(0, fixedMonthlyCostsCompetition - (monthsOfRentExemptionCompetition * fixedMonthlyCostsCompetition))).toFixed(2);
            const totalCostCompetition = ((priceInstalationTerminalCompetition + (timeOfCooperation * monthlyCommissionCompetition) - amountOfCommissionFromExemptTurnoverCompetition + Math.max(0, (timeOfCooperation - monthsOfRentExemptionCompetition) * fixedMonthlyCostsCompetition))).toFixed(2);
            const savingMoney = totalCostCompetition - totalCost;

            document.querySelector(".js-calculated-average-commission-rate-competition").value = calculatedCommissionRateCompetition.toFixed(2);

            document.getElementById("sqm-f328").value = savingMoney <= 0 ? "Brak oszczędności lub niepoprawne dane" : `${savingMoney.toFixed(2)} zł`;


            document.getElementById("monthly-total-cost").value = monthlyTotalCost;
            // document.getElementById("sqm-f326").value = ((invoiceCommissionAmount / monthlyCardTurnover) * 100).toFixed(2);
            document.getElementById("monthly-total-cost-competition").value = monthlyTotalCostCompetition;
            document.getElementById("sqm-f321").value = totalCost + " zł";
            document.getElementById("sqm-f322").value = totalCostCompetition + " zł";



            console.log("koszt terminal stacjonarny :", terminalCostStacjonarny);
            console.log("koszt terminal przenosny  :", terminalCostPrzenosny);
            console.log("cena pinpada :", pinPadCost);
            console.log("GPRS Koszt", gprsCost);
            console.log("Serwis koszt :", serviceCost);
            console.log("logo:", logoCost);
            console.log("liczba zwolnienia z opłat", monthsOfRentExemption);

            console.log("Obrót kartowy :", monthlyCardTurnover);
            console.log("prowizja eservice:", commissionRate);
            console.log("zwolniona prowizja:", exemptRevenue);
            console.log("opłata autoryzacyjna:", authorizationFee);
            console.log("średnia wartośc transakcji", averageTransaction);
            console.log("opłata instalacyjna ", priceInstalationTerminal);
            console.log("Czas współpracy liczba miesieczy ", timeOfCooperation);
            console.log("Suma Miesięczne opłaty stałe:", fixedMonthlyCosts);
            console.log("Prowizja eservice miesieczna  :", monthlyCommission);
            console.log("Całkowity 12 miesięczny koszt:", totalCost);

            console.log("liczba zwolnienia z opłat konkurencja", monthsOfRentExemptionCompetition);
            console.log("Miesięczne płaty stałe konkurencja", fixedMonthlyCostsCompetition);
            console.log("prowizja konkurencja:", calculatedCommissionRateCompetition);
            console.log("zwolniona prowizja konkurencja:", exemptRevenueCompetition);
            console.log("opłata autoryzacyjna konkurencja:", authorizationFeeCompetition);
            console.log("opłata instalacyjna konkurencja:", priceInstalationTerminalCompetition);
            console.log("Miesięczne opłaty stałe: konkurencja", fixedMonthlyCostsCompetition);

            console.log("Obrót kartowy :", monthlyCardTurnover);
            console.log("prowizja z faktury  :", invoiceCommissionAmount);
            console.log("wyliczona Całe prowizja  konkurencja :", monthlyCommissionCompetition);
            //console.log("kwota prowizji zwolnionej", amountOfCommissionFromExemptTurnoverCompetition);
            console.log("Całkowity 12 miesięczny koszt konkurencja :", totalCostCompetition);


            // event.preventDefault();


            fixedMonthlyCostsTerminal();
            summaryCalculation();

            // alert("Uwaga");

        };




        const updateTotalCostToOption2 = () => {
            if (event) event.preventDefault();
            const monthlyCardTurnover = parseFloat(document.getElementById("sqm-f183").value) || 0;
            const averageTransaction = parseFloat(document.getElementById("sqm-f184").value) || 0;
            const commissionRate = parseFloat(document.getElementById("sqm-f217").value) || 0;
            const authorizationFee = parseFloat(document.getElementById("sqm-f219").value) || 0;
            const exemptRevenue = parseFloat(document.getElementById("sqm-f318").value) || 0;
            const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208")?.textContent) || 0;
            const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
            const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
            const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;
            const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
            const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;
            const monthsOfRentExemption = parseFloat(document.getElementById("sqm-f215").value) || 0;
            const priceInstalationTerminal = parseFloat(document.getElementById("sqm-f233").value) || 0;
            const { fixedMonthlyCosts } = fixedMonthlyCostsTerminal();


            const timeOfCooperation = parseFloat(document.getElementById("sqm-f327").value) || 0;
            const fixedMonthlyCostsCompetition = parseFloat(document.getElementById("sqm-f329").value) || 0;
            const monthsOfRentExemptionCompetition = parseFloat(document.getElementById("sqm-f325").value) || 0;
            const exemptRevenueCompetition = parseFloat(document.getElementById("sqm-f319").value) || 0;
            const commissionRateCompetition = parseFloat(document.getElementById("sqm-f326").value) || 0;
            //  const commissionRateCompetition = [[sredniaprowizjaterminalkonkurencja]];
            const authorizationFeeCompetition = parseFloat(document.getElementById("sqm-f320").value) || 0;
            const priceInstalationTerminalCompetition = parseFloat(document.getElementById("sqm-f323").value) || 0;


            const monthlyCommission = (timeOfCooperation * monthlyCardTurnover - exemptRevenue >= 0)
                ? Math.max(0,
                    authorizationFee * monthlyCardTurnover / averageTransaction + monthlyCardTurnover * commissionRate / 100
                )
                : 0;
            const amountOfCommissionFromExemptTurnover = (timeOfCooperation * monthlyCardTurnover) - exemptRevenue >= 0
                ? Math.max(0, (exemptRevenue / averageTransaction) * authorizationFee + (exemptRevenue * commissionRate) / 100)
                : 0;
            const monthlyTotalCost = Math.max(0, monthlyCommission + fixedMonthlyCosts - (monthsOfRentExemption * fixedMonthlyCosts));
            const totalCost = (priceInstalationTerminal + (timeOfCooperation * monthlyCommission) - amountOfCommissionFromExemptTurnover + Math.max(0, (timeOfCooperation - monthsOfRentExemption) * fixedMonthlyCosts)).toFixed(2);

            const monthlyCommissionCompetition = (timeOfCooperation * monthlyCardTurnover - exemptRevenueCompetition >= 0)
                ? Math.max(0,
                    authorizationFeeCompetition * monthlyCardTurnover / averageTransaction + monthlyCardTurnover * commissionRateCompetition / 100
                )
                : 0;
            const amountOfCommissionFromExemptTurnoverCompetition = (timeOfCooperation * monthlyCardTurnover) - exemptRevenueCompetition >= 0
                ? Math.max(0, (exemptRevenueCompetition / averageTransaction) * authorizationFeeCompetition + (exemptRevenueCompetition * commissionRateCompetition) / 100)
                : 0;
            const monthlyTotalCostCompetition = Math.max(0, monthlyCommissionCompetition + Math.max(0, fixedMonthlyCostsCompetition - (monthsOfRentExemptionCompetition * fixedMonthlyCostsCompetition))).toFixed(2);
            const totalCostCompetition = ((priceInstalationTerminalCompetition + (timeOfCooperation * monthlyCommissionCompetition) - amountOfCommissionFromExemptTurnoverCompetition + Math.max(0, (timeOfCooperation - monthsOfRentExemptionCompetition) * fixedMonthlyCostsCompetition))).toFixed(2);
            const savingMoney = totalCostCompetition - totalCost;

            document.getElementById("sqm-f328").value = savingMoney <= 0 ? "Brak oszczędności lub niepoprawne dane" : `${savingMoney.toFixed(2)} zł`;
            document.getElementById("monthly-total-cost").value = monthlyTotalCost;
            //  document.getElementById("sqm-f326").value = monthlyCommissionCompetition;
            document.getElementById("monthly-total-cost-competition").value = monthlyTotalCostCompetition;
            document.getElementById("sqm-f321").value = totalCost + " zł";
            document.getElementById("sqm-f322").value = totalCostCompetition + " zł";



            console.log("koszt terminal stacjonarny :", terminalCostStacjonarny);
            console.log("koszt terminal przenosny  :", terminalCostPrzenosny);
            console.log("cena pinpada :", pinPadCost);
            console.log("GPRS Koszt", gprsCost);
            console.log("Serwis koszt :", serviceCost);
            console.log("logo:", logoCost);
            console.log("liczba zwolnienia z opłat", monthsOfRentExemption);

            console.log("Obrót kartowy :", monthlyCardTurnover);
            console.log("prowizja eservice:", commissionRate);
            console.log("zwolniona prowizja:", exemptRevenue);
            console.log("opłata autoryzacyjna:", authorizationFee);
            console.log("średnia wartośc transakcji", averageTransaction);
            console.log("opłata instalacyjna ", priceInstalationTerminal);
            console.log("Czas współpracy liczba miesieczy ", timeOfCooperation);
            console.log("Suma Miesięczne opłaty stałe:", fixedMonthlyCosts);
            console.log("Prowizja eservice miesieczna  :", monthlyCommission);
            console.log("Całkowity 12 miesięczny koszt:", totalCost);

            console.log("liczba zwolnienia z opłat konkurencja", monthsOfRentExemptionCompetition);
            console.log("Miesięczne płaty stałe konkurencja", fixedMonthlyCostsCompetition);
            console.log("prowizja konkurencja:", commissionRateCompetition);
            //   console.log("zwolniona prowizja konkurencja:", exemptRevenueCompetition);
            console.log("opłata autoryzacyjna konkurencja:", authorizationFeeCompetition);
            //  console.log("opłata instalacyjna konkurencja:", priceInstalationTerminalCompetition);
            console.log("Miesięczne opłaty stałe: konkurencja", fixedMonthlyCostsCompetition);
            console.log("Obrót kartowy :", monthlyCardTurnover);
            console.log("Całe prowizja  konkurencja :", monthlyCommissionCompetition);
            console.log("kwota prowizji zwolnionej", amountOfCommissionFromExemptTurnoverCompetition);
            console.log("Całkowity 12 miesięczny koszt konkurencja :", totalCostCompetition);

            // event.preventDefault();


            fixedMonthlyCostsTerminal();
            summaryCalculation();
            // alert("Uwaga");

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


        const buttonRecalculate = document.querySelector(".js-button");
        buttonRecalculate.addEventListener("click", () => {

            if (document.getElementById('option1').checked) {
                updateTotalCostToOption1();
                summaryCalculation();
                hiddenCommissionRateCompetition();
                checkAndAddEmptyClass();
                // showCommissionRateCompetition();
                sendFormDataCompany();

            }
            if (document.getElementById('option2').checked) {
                updateTotalCostToOption2();
                summaryCalculation();
                hiddenCommissionRateCompetition();
                checkAndAddEmptyClass();
                showCommissionRateCompetition();
                sendFormDataCompany();
                //   console.log("myFunction is called");
            }



        })




        const buttonNextStep = document.querySelector(".js-nextStep");
        buttonNextStep.addEventListener("click", () => {
            event.preventDefault();

            const formNextStep = document.querySelector(".js-form--DataCompany");
            // console.log(buttonNextStep);

            // console.log(formNextStep);
            formNextStep.submit();



        });






        const showAlertCalculate = () => {




            const savingMoney = parseFloat(document.getElementById("sqm-f328").value) || 0;
            if (savingMoney === 0) {


                setTimeout(function () {
                    alert("Przelicz naszą ofertę z twoją obecną używając naszego kalkulatora.");
                }, 45000); // 5000 milisekund = 5 sekund



            } else {

                setTimeout(function () {
                    alert(`${savingMoney} zł zaoszczędzisz`);
                }, 2000); // 2000 milisekund = 5 sekund


            }

            const conversionSection = document.querySelector(".container--conversion");
            conversionSection.scrollIntoView({ behavior: "smooth" });
            // console.log("Wartość savingMoney:", savingMoney);
        };






        //console.log("zaoszczedzone pieniadze", savingMoney);
        fixedMonthlyCostsTerminal();
        doOption1();
        doOption1();
        checkOptions();
        setMemoryOptions();
        setSideForProductType();

        ShowPhoneTopups();
        showAlertCalculate();




        // updateTotalCostToOption2();
        summaryCalculation();

        // handleSectionVisibility();
        ShowIntegrationTheCashRegisterSystem();





    });

}
