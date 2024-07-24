



{



    document.addEventListener("DOMContentLoaded", function () {
        const paragrafDate = document.querySelector('.paragraf--date');
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Dodaj 1, ponieważ styczeń to 0
        const year = currentDate.getFullYear();
        const formattedDate = `${day}.${month}.${year} r.`;

        const updateDate = () => {
            paragrafDate.value = formattedDate;
        };
        updateDate();

    });

    const printButton = document.getElementById('printButton');

    printButton.addEventListener('click', function () {
        prepareForPrint();
        window.print();
        restoreAfterPrint();
    });

    const buttonPrintToPdf = document.getElementById('printToPdf');
    buttonPrintToPdf.addEventListener('click', function () {

        prepareForPrint();
        saveAsPdf();
        restoreAfterPrint();
    });

    function saveAsPdf() {
        const contentToPrint = document.getElementById('printContent');
        contentToPrint.style.border = 'none';
        html2canvas(contentToPrint).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.addImage(imgData, 'PNG', 10, 10, 180, canvas.height * 180 / canvas.width);
            doc.save('wypowiedzenie.pdf');
        });
    }

    function prepareForPrint() {
        const contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';
        document.title = ".";

    }

    function restoreAfterPrint() {
        const contentToPrint = document.getElementById('printContent');
        contentToPrint.style.display = 'block';

        document.title = "Print Page";
    }



}



