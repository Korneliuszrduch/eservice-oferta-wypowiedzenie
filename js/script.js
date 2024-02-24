{

   
    // Pobierz element paragrafu, gdzie chcesz wyświetlić datę
    var currentDateParagraph = document.getElementById('currentDateParagraph');
    

    // Utwórz obiekt daty
    var currentDate = new Date();

    // Pobierz składowe daty
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Dodaj 1, ponieważ styczeń to 0
    var year = currentDate.getFullYear();

    // Formatuj datę na "DD.MM.RRRR"
    var formattedDate = day + '.' + month + '.' + year+" " +"r.";

    // Wyświetl sformatowaną datę na stronie
    currentDateParagraph.textContent = 'Data: ' + formattedDate; 
    document.getElementById('sqm-170').value = formattedDate;


 

   
    console.log('Sformatowana data:',currentDateParagraph);

    var printButton = document.getElementById('printButton');

    printButton.addEventListener('click', function() {
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