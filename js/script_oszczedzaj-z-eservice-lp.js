document.addEventListener("DOMContentLoaded", function () {
    const checkAndAddEmptyClass = () => {
        const form = document.querySelector(".js-form");
        const inputs = form.querySelectorAll(".js-input");
        const checkbox = form.querySelector(".js-checkbox");
        let allValid = true;
        let emptyFieldFound = false; 
        inputs.forEach(input => {
            if (input.classList.contains("hidden")) {
                input.classList.remove("incorrect");
                input.classList.add("correct");
            } else {
                if (input.value.trim() !== "") {
                    input.classList.remove("incorrect");
                    input.classList.add("correct");
                } else {
                    input.classList.add("incorrect");
                    input.classList.remove("correct");
                    allValid = false;
                    emptyFieldFound = true; 
                }
            }
        });
    
      
        if (emptyFieldFound) {
            alert("Wypełnij wszystkie pola zaznaczone na czerwono");
        }
   
        if (!checkbox.checked) {
            checkbox.classList.add("incorrect");
            allValid = false;
            alert("Zaznacz checkbox");
        } else {
            checkbox.classList.remove("incorrect");
            checkbox.classList.add("correct");
        }
    
        return allValid;
    };
    
    const sendForm = (event) => {
        event.preventDefault(); 
        const allValid = checkAndAddEmptyClass(); 
        if (allValid) {
            const form = document.querySelector(".js-form");
            form.submit(); 
        }
    };

    const buttonSendForm = document.querySelector(".js-button-send-form");
    buttonSendForm.addEventListener("click", sendForm);


   

    const sectionForm = document.querySelector(".js-form");
    const buttonScroll = document.querySelector(".js-button-scroll")

    buttonScroll.addEventListener("click", () => {
        sectionForm.scrollIntoView({
            behavior: "smooth", // Zapewnia płynne przewijanie
            block: "start" // Przewija sekcję do początku widoku
        });

    })




 

});
