var email = inputData.email;
var phone = inputData.phone;
var fields116 = inputData.fields116;
var lname = inputData.lname;
var fname = inputData.fname;
var mlid = inputData.mlid;
var req = inputData.req;
var token = inputData.token;

data = {

    "email": "+ email +",
    "phone": "+phone+",
    "fields[116]": "+fields116+",
    "lname": "+lname+",
    "fname": "+fname+",
    "mlid": "+mlid+",
    "req": "+req+",
    "token": "+token+"
};


fetch('https://mail.korneliuszrduch.pl/subscribe.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))








    <form accept-charset="UTF-8" action="https://mail.korneliuszrduch.pl/subscribe.php" method="POST"><div id="sqm-liveform" data-enhance="false" style="border-width: 10px 3px; border-radius: 5px; background: rgb(242, 242, 242); border-color: rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 20px; border-style: solid;">  
    <div class="sqm-description" style="margin-bottom: 20px; width: 100%; float: none; padding-right: 0px; display: none;" wfd-invisible="true">
        przykładowy opis                                    </div>
    <div class="sqm-form" style="float: none; width: 100%;">
        <div class="sqm-fields" style="float: none;"><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-femail" style="width: inherit;">Adres e-mail</label><input type="text" name="email" class="form-control sqm-textinput" id="sqm-femail" value="" data-placeholder="Adres e-mail" placeholder="Adres e-mail" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f293" style="width: inherit;">Imię i nazwisko osoba do kontaktu w punkcie 1</label><input type="text" name="fields[293]" class="form-control sqm-textinput" id="sqm-f293" value="" data-placeholder="Imię i nazwisko osoba do kontaktu w punkcie 1" placeholder="Imię i nazwisko osoba do kontaktu w punkcie 1" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f294" style="width: inherit;">Telefon osoba do kontaktu w punkcie1</label><input type="text" name="fields[294]" class="form-control sqm-textinput" id="sqm-f294" value="" data-placeholder="Telefon osoba do kontaktu w punkcie1" placeholder="Telefon osoba do kontaktu w punkcie1" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f295" style="width: inherit;">Nazwa punktu terminal 2</label><input type="text" name="fields[295]" class="form-control sqm-textinput" id="sqm-f295" value="" data-placeholder="Nazwa punktu terminal 2" placeholder="Nazwa punktu terminal 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f296" style="width: inherit;">Nazwa ulicy punktu terminal 2</label><input type="text" name="fields[296]" class="form-control sqm-textinput" id="sqm-f296" value="" data-placeholder="Nazwa ulicy punktu terminal 2" placeholder="Nazwa ulicy punktu terminal 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f297" style="width: inherit;">Nazwa miasta punktu 2 terminal</label><input type="text" name="fields[297]" class="form-control sqm-textinput" id="sqm-f297" value="" data-placeholder="Nazwa miasta punktu 2 terminal" placeholder="Nazwa miasta punktu 2 terminal" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f298" style="width: inherit;">Kod pocztowy punktu terminal 2</label><input type="text" name="fields[298]" class="form-control sqm-textinput" id="sqm-f298" value="" data-placeholder="Kod pocztowy punktu terminal 2" placeholder="Kod pocztowy punktu terminal 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f299" style="width: inherit;">Imię i nazwisko osoby kontaktowej w punkcie 2</label><input type="text" name="fields[299]" class="form-control sqm-textinput" id="sqm-f299" value="" data-placeholder="Imię i nazwisko osoby kontaktowej w punkcie 2" placeholder="Imię i nazwisko osoby kontaktowej w punkcie 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f300" style="width: inherit;">Telefon osoba kontaktowa punkt 2</label><input type="text" name="fields[300]" class="form-control sqm-textinput" id="sqm-f300" value="" data-placeholder="Telefon osoba kontaktowa punkt 2" placeholder="Telefon osoba kontaktowa punkt 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f301" style="width: inherit;">Numer konta bankowego punktu 2</label><input type="text" name="fields[301]" class="form-control sqm-textinput" id="sqm-f301" value="" data-placeholder="Numer konta bankowego punktu 2" placeholder="Numer konta bankowego punktu 2" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f302" style="width: inherit;">Terminal stacjonarny punkt 2</label><select name="fields[302]" id="sqm-f302" class="form-control sqm-textinput" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "><option value=""></option></select></div><div class="sqm-form-group" style="margin: 10px 0px; display: block;"><label for="sqm-f303" style="width: inherit;">Terminal przenośny punkt 2</label><select name="fields[303]" id="sqm-f303" class="form-control sqm-textinput" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border-color: rgb(63, 81, 181); width: 100%; display: block;" onblur="this.style.backgroundColor = '#ffffff'; this.style.color = '#000000'; this.style.borderColor = '#3f51b5'; " onfocus="this.style.backgroundColor = '#d7d7d7'; this.style.color = '#3f51b5'; this.style.borderColor = '#ffffff'; "><option value=""></option></select></div></div>
        <div id="sqm-coregister" style="display: none;" wfd-invisible="true">
            <h5 id="sqm-coregister-text">Zapisz mnie również na poniższe listy:</h5>
        </div>
        <div id="sqm-submit-box" style="width: 100%; text-align: left; float: none;"><div id="sqm-submit1" class="sqm-form-group form-group" style="margin: 10px 0px; text-align: left; display: block;"><input type="submit" class="sqm-submit" id="sqm-submit" value="Zapisz się" style="border-style: solid; background: rgb(63, 81, 181); color: rgb(255, 255, 255); border-color: rgb(102, 181, 240); border-width: 0px 0px 4px; border-radius: 3px; padding: 7px 25px; margin: 0px; font-size: 16px;" onmouseover="this.style.backgroundColor = '#98c8eb';" onmouseout="this.style.backgroundColor = '#3f51b5';"></div>
            
        </div>
    </div>
    <div style="clear: both;"></div>
</div><input type="hidden" name="mlid" value="86" />
<input type="hidden" name="req" value="email" />
<input type="hidden" name="token" value="29ee236865e35b38aa28bb36f16ab616992701be" />
<input type="hidden" name="coregister" value="" />

</form>




nazwapunktuinstalacjiterminal2 295
ulicainstalacjiterminal2 

Nazwa miasta punktu 2 terminal [[miastoinstalacjiterminal2]] 297

Kod pocztowy punktu terminal 2
[[kodpocztowyinstalacjiterminal2]]
Imię i nazwisko osoby kontaktowej  299
[[osobakontaktowapunkt2]] 

Telefon do osoby kontaktowej punkt 
[[telefonosobadokontaktuwpunkcie2]] fields 300
Numer konta bankowego punktu 2
[[numerrachunkubankowegoterminalpunkt2]] firelds 301

Terminal stacjonarny punkt 2
[[terminalstacjonarnypunkt2]] fielsd 302
Terminal przenośny punkt 2
[[terminalprzenosnypunkt2]] fielsd 303

[[numerbudynkuilokalupunkt2]] 304