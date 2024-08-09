
{

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





    const fixedMonthlyCostsTerminal = () => {
        const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208")?.textContent) || 0;
        const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
        const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
        const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;
        const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
        const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;
        const bestPrice = Math.min(
            ...[terminalCostStacjonarny, terminalCostPrzenosny, pinPadCost].filter(cost => cost > 0)
        );
        const fixedMonthlyCosts = (bestPrice + gprsCost + serviceCost + logoCost);
        document.getElementById("fixed-monthly-costs").value = fixedMonthlyCosts;
        console.log("Najlepsza cena:", bestPrice);

        return {

            fixedMonthlyCosts,
         

        }
    };

    const summaryCalculation = () => {

        const savingMoney = parseFloat(document.getElementById("sqm-f328").value) || 0;
        const handleSummaryCalculation = document.querySelector(".container__section--summary");
        console.log(savingMoney);



        if (savingMoney > 100) {
            handleSummaryCalculation.classList.add("visible");
        }
        else {
            handleSummaryCalculation.classList.remove("visible");
        }
    };

    const updateTotalCost = () => {

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
        console.log("zwolniona prowizja konkurencja:", exemptRevenueCompetition);
        console.log("opłata autoryzacyjna konkurencja:", authorizationFeeCompetition);
        console.log("opłata instalacyjna konkurencja:", priceInstalationTerminalCompetition);
        console.log("Miesięczne opłaty stałe: konkurencja", fixedMonthlyCostsCompetition);
        console.log("Całe prowizja  konkurencja :", monthlyCommissionCompetition);
        console.log("kwota prowizji zwolnionej", amountOfCommissionFromExemptTurnoverCompetition);
        console.log("Całkowity 12 miesięczny koszt konkurencja :", totalCostCompetition);

        event.preventDefault();

      
        fixedMonthlyCostsTerminal();
       
        // alert("Uwaga");
  
    };

    const sendFormDataCompany = () => {
        checkAndAddEmptyClass();
        const formCalculate = document.querySelector(".js-form--calculate");
    

        const invalidInputs = document.querySelectorAll(".container__input.incorrect");
        if (invalidInputs.length > 0) {
            alert("Wypełnij wszystkie formularze", invalidInputs.length);
        
        } else {
           formCalculate.submit();
        }
    };


    const checkAndAddEmptyClass = () => {
       const containerConnersion = document.querySelectorAll(".container--conversion")
        containerConnersion.forEach(section => {
            const inputs = section.querySelectorAll(".container__input");
             console.log(inputs);
            inputs.forEach(input => {
                //console.log(input);
                if (input.value.trim() !== "") {
                    input.classList.remove("incorrect");
                    input.classList.add("correct");
                } else {
                    input.classList.add("incorrect");
                    input.classList.remove("correct");
                }
            });
        });
    };


    const buttonRecalculate = document.querySelector(".js-button");
    buttonRecalculate.addEventListener("click", () => {
        updateTotalCost();
        summaryCalculation();
        checkAndAddEmptyClass();
      sendFormDataCompany();

    })




    const buttonNextStep = document.querySelector(".js-nextStep");
    buttonNextStep.addEventListener("click", () => {
        event.preventDefault();

        const formNextStep = document.querySelector(".js-form--DataCompany");
        console.log(buttonNextStep);

        console.log(formNextStep);
        formNextStep.submit();



    });






    const showAlertCalculate = () => {



        
        const savingMoney = parseFloat(document.getElementById("sqm-f328").value) || 0;
        if (savingMoney === 0) {


            setTimeout(function() {
                alert("Przelicz naszą ofertę z twoją obecną używając naszego kalkulatora.");
            }, 45000); // 5000 milisekund = 5 sekund


            
        } else {
          
            setTimeout(function() {
                alert(`${savingMoney} zł zaoszczędzisz`);
            }, 2000); // 2000 milisekund = 5 sekund
          
          
        }

        const conversionSection = document.querySelector(".container--conversion");
        conversionSection.scrollIntoView({ behavior: "smooth" });
       // console.log("Wartość savingMoney:", savingMoney);
    };

    window.onload = showAlertCalculate();

    fixedMonthlyCostsTerminal();
    // updateTotalCost();
    summaryCalculation();

   // handleSectionVisibility();

}