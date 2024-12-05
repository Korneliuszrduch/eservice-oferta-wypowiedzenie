document.addEventListener('DOMContentLoaded', () => {
    const buttonSentDate = document.querySelector(".js-button");
    const inputCalculatedCommissionRateCompetition = document.querySelector(".js-calculated-average-commission-rate-competition");
    const formCalculateInvoice = document.querySelector(".js-form-calculate-invoice");

    buttonSentDate.addEventListener("click", () => {

        const fixedMonthlyCostsCompetition = parseFloat(document.querySelector(".js-fixed-monthly-cost-competition").value) || 0;
        const monthlyCardTurnover = parseFloat(document.querySelector(".js-monthly-card-turnover").value) || 0;
        const inputInvoiceCommissionAmountCompetition = parseFloat(document.querySelector(".js-invoice-commission-amount-competition").value) || 0;
        let calculatedCommissionRateCompetition = 0;

        checkAndAddEmptyClass();
        if (monthlyCardTurnover > 0) {
            calculatedCommissionRateCompetition = (100 * inputInvoiceCommissionAmountCompetition / monthlyCardTurnover).toFixed(2);
        }

        inputCalculatedCommissionRateCompetition.value = `${calculatedCommissionRateCompetition}%`;
        sentForm();
    });

    const checkAndAddEmptyClass = () => {
        const formCalculateInvoice = document.querySelector(".js-form-calculate-invoice");
        const inputs = formCalculateInvoice.querySelectorAll("input");
      //  console.log("form", formCalculateInvoice);
        //console.log("inputy", inputs);

        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                input.classList.remove("incorrect");
                input.classList.add("correct");
            } else {
                input.classList.add("incorrect");
                input.classList.remove("correct");
            }
        });

    };

    const sentForm =()=>{
        const formCalculateInvoice = document.querySelector(".js-form-calculate-invoice");
        const inputsInCorect = formCalculateInvoice.querySelectorAll(".incorrect");
        console.log("form", formCalculateInvoice);
        console.log("incorrect", inputsInCorect);
        if(inputsInCorect.length>0){
            alert("uzupełnij wszystkie pola wyświetlone na czerwono")
            return;
        }

        console.log("formularz wysłąny")
    }
    
});
