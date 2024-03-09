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