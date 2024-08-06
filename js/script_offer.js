


function updateTotalCost() {

    const monthlyCardTurnover = parseFloat(document.getElementById("sqm-f183").value) || 0;
    const averageTransaction = parseFloat(document.getElementById("sqm-f184").value) || 0;

    const commissionRate = parseFloat(document.getElementById("sqm-f217")?.textContent) || 0;
    const authorizationFee = parseFloat(document.getElementById("sqm-f219")?.textContent) || 0;
    const exemptRevenue = parseFloat(document.getElementById("sqm-f318")?.textContent) || 0;
    const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208")?.textContent) || 0;
    const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
    const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
    const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;
    const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
    const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;
    const monthsOfRentExemption = parseFloat(document.getElementById("sqm-f215")?.textContent) || 0;
    const priceInstalationTerminal = parseFloat(document.getElementById("sqm-f233")?.textContent) || 0;
    const fixedMonthlyCosts = (terminalCostStacjonarny + terminalCostPrzenosny + pinPadCost + gprsCost + serviceCost + logoCost);
    const timeOfCooperation = parseFloat(document.getElementById("sqm-f327").value) || 0;



    const fixedMonthlyCostsCompetition = parseFloat(document.getElementById("sqm-f324").value) || 0;
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
    const monthlyTotalCost = Math.max(0, monthlyCommission + fixedMonthlyCosts - (monthsOfRentExemption * fixedMonthlyCosts)).toFixed(2);
    const totalCost = ((priceInstalationTerminalCompetition + (timeOfCooperation * monthlyCommission) - amountOfCommissionFromExemptTurnover + Math.max(0, (timeOfCooperation - monthsOfRentExemption) * fixedMonthlyCosts))).toFixed(2);

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


    const differencePrice = (totalCostCompetition - totalCost).toFixed(2) + " zł ";

    document.getElementById("fixed-monthly-costs").textContent = fixedMonthlyCosts;
    document.getElementById("monthly-total-cost").value = monthlyTotalCost;
    document.getElementById("monthly-total-cost-competition").value = monthlyTotalCostCompetition;
    document.getElementById("sqm-f328").value = differencePrice;

    document.getElementById("sqm-f321").value = totalCost + " zł";
    document.getElementById("sqm-f322").value = totalCostCompetition + " zł";



    console.log("koszt terminal stacjonarny :", terminalCostStacjonarny);
    console.log("koszt terminal przenosny  :", terminalCostPrzenosny);
    console.log("cena pinpada :", pinPadCost);
    console.log("GPRS Koszt", gprsCost);
    console.log("Serwis koszt :", serviceCost);
    console.log("logo:", logoCost);
    console.log("liczba zwolnienia z opłat", monthsOfRentExemption);
    console.log("Miesięczne płaty stałe:", fixedMonthlyCosts);
    console.log("Obrót kartowy :", monthlyCardTurnover);
    console.log("prowizja:", commissionRate);
    console.log("zwolniona prowizja:", exemptRevenue);
    console.log("opłata autoryzacyjna:", authorizationFee);
    console.log("średnia wartośc transakcji", averageTransaction);
    console.log("opłata instalacyjna ", priceInstalationTerminal);
    console.log("Czas współpracy liczba miesieczy ", timeOfCooperation);
    console.log("Suma Miesięczne opłaty stałe:", fixedMonthlyCosts);
    console.log("Całe Miesięczne opłaty :", monthlyCommission);
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
    
    const formCalculate = document.querySelector(".js-form--calculate");
    console.log(formCalculate);

   
    formCalculate.submit();

};

const buttonRecalculate = document.querySelector(".js-button");
buttonRecalculate.addEventListener("click", updateTotalCost);


const buttonNextStep = document.querySelector(".js-nextStep");
buttonNextStep.addEventListener("click", () => {
    event.preventDefault();

    const formNextStep = document.querySelector(".js-form--DataCompany");
    console.log(buttonNextStep);

   console.log(formNextStep);
    formNextStep.submit();

    

});

