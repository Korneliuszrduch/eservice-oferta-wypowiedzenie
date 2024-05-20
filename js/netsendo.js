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
numr budynku z numerem lokal [[numerbudynkuilokalupunkt2]] 304
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



------------------------------------------
[[nazwapunktuinstalacjiterminal3]] 305
[[ulicainstalacjiterminal3]] 306
[[numerbudynkuilokalupunkt3]] 307
[[miastoinstalacjiterminal3]] 308
[[kodpocztowyinstalacjiterminal3]] 309
[[osobakontaktowapunkt3]] 310
[[telefonosobadokontaktuwpunkcie3]] 311
[[numerrachunkubankowegoterminalpunkt3]] 312
terminalstacjonarnypunkt3 313

INSTALACJA TERMINALA PUNKT 3
Nazwa do wydruku z terminala: [[nazwapunktuinstalacjiterminal3]]
Ulica: [[ulicainstalacjiterminal3]]
Numer budynku/numer lokal: [[numerbudynkuilokalupunkt3]]

Imię i nazwisko osoby kontaktowej: [[osobakontaktowapunkt3]]
Telefon do osoby kontaktowej punkt: [[telefonosobadokontaktuwpunkcie2]] 
Miasto: [[miastoinstalacjiterminal3]]
Kod Pocztowy: [[kodpocztowyinstalacjiterminal3]]
Numer rachunku: [[numerrachunkubankowegoterminal3]]

Terminal Standardowy Stacjonarny: [[terminalstacjonarnypunkt3]]

Terminal Standardowy Przenośny: [[terminalprzenosnypunkt3]]



<form accept-charset="UTF-8" action="https://mail.korneliuszrduch.pl/subscribe.php" method="POST">
<div id="sqm-liveform" style="border-width: 10px 3px 10px 4px; border-radius: 5px; background: #ffffff; border-color: #ffffff; color: #000000; padding: 19px; border-style: solid;" data-enhance="false">
<div class="sqm-description" style="margin-bottom: 20px; width: 100%; float: none; padding-right: 0px; display: none;">

przykładowy opis

</div>
<div class="sqm-form" style="float: none; width: 100%;">
<div class="sqm-fields" style="float: none;">
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f129">Imię osoby uprawnionej do podpisania umowy</label><input id="sqm-f129" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[129]" type="text" value="[[imiereprezentantterminal1]]" placeholder="Imię" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f130">Nazwisko</label><input id="sqm-f130" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[130]" type="text" value="[[nazwiskoreprezentantterminal1]]" placeholder="Nazwisko" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f141">Email</label><input id="sqm-f141" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[141]" type="text" value="[[emailreprezentant1terminal]]" placeholder="Email" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f133">Telefon</label><input id="sqm-f133" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[133]" type="text" value="[[telefonterminalreprezentant1]]" placeholder="Telefon" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f131">Seria i numer dowodu osobistego </label><input id="sqm-f131" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[131]" type="text" value="[[numeriseriadowodureprezentant1]]" placeholder="Seria i numer dowodu osobistego" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f138">Pesel </label><input id="sqm-f138" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[138]" type="text" value="[[peselreprezentant1]]" placeholder="Pesel " /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f181">Data wydania dowodu osobistego (dd-mm-rrr)</label><input id="sqm-f181" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[181]" type="text" value="[[datawydaniadowoduosobistego]]" placeholder="Data wydania dowodu osobistego" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f182">Data ważności dowodu osobistego (dd-mm-rrr)</label><input id="sqm-f182" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[182]" type="text" value="[[datawaznoscidowoduosobistego]]" placeholder="Data ważności dowodu osobistego" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: none; text-align: left;"><label style="width: inherit;" for="sqm-f189">Miejsce urodzenia</label><input id="sqm-f189" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[189]" type="text" value="[[miejscowoscurodzenia]]" placeholder="Miejsce urodzenia" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-f132">Pełny adres zamieszkania (ulica, numer, miasto, kod pocztowy)</label><input id="sqm-f132" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: block; height: 40px;" name="fields[132]" type="text" value="[[pelnyadreszamieszkaniaterminalreprezentant1]]" placeholder="Pełny adres zamieszkania" /></div>
<div class="sqm-form-group" style="margin: 10px 2px; display: block; text-align: left;"><label style="width: inherit;" for="sqm-femail"></label><input id="sqm-femail" class="form-control sqm-textinput" style="background-color: #ffffff; color: #000000; border-color: #3f51b5; width: 100%; display: none; height: 40px;" name="email" type="text" value="[[email]]" placeholder="" /></div>
</div>
<div id="sqm-coregister" style="display: none; text-align: left;">
<h5 id="sqm-coregister-text">Zapisz mnie również na poniższe listy:</h5>
</div>
&nbsp;
<div id="sqm-submit-box" style="width: 100%; text-align: left; float: none;">


<div id="sqm-submit1" class="sqm-form-group form-group" style="margin: 10px 2px; text-align: right; display: block;">
<p style="text-align: right;"><input id="sqm-submit" class="sqm-submit" style="border-style: solid; background: #3f6c19; color: #ffffff; border-color: #f2f2f2; border-width: 0px 0px 4px; border-radius: 3px; padding: 7px 25px; margin: 0px; font-size: 16px;" type="submit" value="Dalej &gt;" /></p>

</div>
</div>

<div style="clear: both; text-align: left;"></div>
</div>
<p style="text-align: left;"><input id="statusdecyzjiklienta" name="fields[115]" type="hidden" value="92% Uzyskano-Reprezentant 1 firmy" />
<input name="mlid" type="hidden" value="243" /></p>
<input id="nazwalistyadresowej" name="fields[122]" type="hidden" value="REPREZENTACJA 1 FIRMA KROK 2" />
<input name="req" type="hidden" value="181:182:129:130:133:131:138:132:141:email" />
<input name="token" type="hidden" value="da945ba7449d1e092316ba46f044f0b134483b6b" />
<input name="coregister" type="hidden" value="" />

</form><form accept-charset="UTF-8" action="//mail.korneliuszrduch.pl/subscribe.php" method="POST">
<div id="sqm-liveform">

<input id="sqm-femail" class="form-control sqm-textinput" name="email" type="hidden" value="[[email]]" />
<p style="text-align: left;">   <input id="sqm-submit" class="sqm-submit" style="border-style: solid; background: #3f6c19; color: #ffffff; border-color: #f2f2f2; border-width: 0px 0px 4px; border-radius: 3px; padding: 7px 25px; margin: 0px; font-size: 16px;" type="submit" value="Wstecz " />
<input name="mlid" type="hidden" value="246" />
<input name="req" type="hidden" value="email" />
<input name="token" type="hidden" value="da945ba7449d1e092316ba46f044f0b134483b6b" />
<input name="coregister" type="hidden" value="" /></p>

</div>
</form>