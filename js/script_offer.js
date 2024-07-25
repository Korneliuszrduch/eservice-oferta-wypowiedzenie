


function updateTotalCost() {

    const monthlyCardTurnover = parseFloat(document.getElementById("sqm-f183").value) || 0;
    const averageTransaction = parseFloat(document.getElementById("sqm-f184").value) || 0;

    const commissionRateElement = document.getElementById("sqm-f217");
    const commissionRate = commissionRateElement ? parseFloat(commissionRateElement.textContent.replace(/[^0-9.]/g, "")) || 0 : 0;

    
    const authorizationFeeElement = document.getElementById("sqm-f219");
    const authorizationFee = authorizationFeeElement ? parseFloat(authorizationFeeElement.textContent.replace(/[^0-9.]/g, "")) || 0 : 0;
    const exemptRevenueElement = document.getElementById("sqm-f318");
    const exemptRevenue = exemptRevenueElement ? parseFloat(exemptRevenueElement.textContent.replace(/[^0-9.]/g, "")) || 0 : 0;
    


    const terminalCostStacjonarny = parseFloat(document.getElementById("sqm-f208").textContent) || 0;
    const terminalCostPrzenosny = parseFloat(document.getElementById("sqm-f210")?.textContent) || 0;
    const pinPadCost = parseFloat(document.getElementById("sqm-f211")?.textContent) || 0;
    const gprsCost = parseFloat(document.getElementById("sqm-f212")?.textContent) || 0;
    const serviceCost = parseFloat(document.getElementById("sqm-f213")?.textContent) || 0;
    const logoCost = parseFloat(document.getElementById("sqm-f214")?.textContent) || 0;


    const fixedMonthlyCosts = (terminalCostStacjonarny + terminalCostPrzenosny + pinPadCost + gprsCost + serviceCost + logoCost).toFixed(2);

    // Ustawienie obliczonej wartości w elemencie HTML
 
     document.getElementById("fixed-monthly-costs").textContent = fixedMonthlyCosts;
   

    const monthlyCommission = (fixedMonthlyCosts + authorizationFee * ((monthlyCardTurnover - exemptRevenue) / averageTransaction) + (((monthlyCardTurnover - exemptRevenue) * (commissionRate / 100))));
    const totalCost = (12 * parseFloat(monthlyCommission)).toFixed(2);

    document.getElementById("sqm-f321").value = totalCost + " PLN";

    console.log("koszt terminal stacjonarny :", terminalCostStacjonarny);
    console.log("koszt terminal przenosny  :", terminalCostPrzenosny);
    console.log("cena pinpada :", pinPadCost);
    console.log("GPRS Koszt", gprsCost);
    console.log("Miesięczne płaty stałe:", fixedMonthlyCosts);
    console.log("Serwis koszt :", serviceCost);
    console.log("logo:", logoCost);



    console.log("prowizja:", commissionRate);
    console.log("zwolniona prowizja:", exemptRevenue);
    console.log("opłata autoryzacyjna:", authorizationFee);
    console.log("średnia wartośc transakcji", averageTransaction);
    console.log("Suma Miesięczne opłaty stałe:", fixedMonthlyCosts);
    console.log("Całe Miesięczne opłaty :", monthlyCommission);
    console.log("Całkowity 12 miesięczny koszt:", totalCost);

};

const buttonRecalculate = document.querySelector(".js-button");
buttonRecalculate.addEventListener("click", updateTotalCost);

