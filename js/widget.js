;
(function () {
    "use strict";

    const xhr = new XMLHttpRequest();

    const spisokRab = document.querySelector('.asfdsdfsd'),
        odinRab = document.querySelector('#li-tmpl').innerHTML;

    let spisokRabHTML="";

    xhr.open('GET', "./data/employees.json");

    xhr.send();

    xhr.onload = function () {
        let ajax = this;
        const data = JSON.parse(ajax.response);

        data.forEach(function (employees) {
            let status;
            if(employees.inoffice==true) {
                status="in";
            }else{
                status="out";
            }

            spisokRabHTML += odinRab
                .replace(/{{inoffice}}/ig, status)
                .replace(/{{name}}/ig, employees.name)
        });

        spisokRab.innerHTML = spisokRabHTML;

    };

})();