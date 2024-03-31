



{
const paragrafDate = document.querySelector('.paragraf--date');
 
// Utwórz obiekt daty
const currentDate = new Date();
 
// Pobierz składowe daty
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Dodaj 1, ponieważ styczeń to 0
const year = currentDate.getFullYear();
 
// Formatuj datę na "DD.MM.RRRR"
const formattedDate = `${day}.${month}.${year} r.`;
 
const updateDate = () => {
 
    paragrafDate.value = formattedDate;
 
};
 
// Wywołaj funkcję
updateDate();
 
 
   
 
    var printButton = document.getElementById('printButton');
 
    printButton.addEventListener('click', function () {
       prepareForPrint();
       window.print();
       restoreAfterPrint();
   });
 
    function prepareForPrint() {
        var contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';
 
        // Wyłączanie tytułu strony przed drukowaniem
        document.title = ".";
 
 
 
    }
 
    function restoreAfterPrint() {
        var contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';
 
        // Przywracanie tytułu strony po drukowaniu
        document.title = "Print Page";
    }
 
    function selectOption(option) {
        document.getElementById('selectedOption').textContent = option;
 
 
    }
 
    function toggleDropdown() {
        var dropdownOptions = document.getElementById('dropdownOptions');
        dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
 
    }
 
 
    function closeDropdown() {
        var dropdownOptions = document.getElementById('dropdownOptions');
        dropdownOptions.style.display = 'none';
    }
 
 
}



 