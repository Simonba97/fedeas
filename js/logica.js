jQuery(document).ready(function() {
    addEvents();
});

var _allSendMailAllEmployees = false;
var _password = "adminFedeas";
var _ma = "fedeas@e-deas.com.co";
var _ps = "fondofedeas";

function addEvents() {
    $('.logoEdeas').click(function() {
        window.location.href = 'index.html';
    });

    $('#checkSendMailAllEmployees').change(function() {
        _allSendMailAllEmployees = !_allSendMailAllEmployees;
        if (_allSendMailAllEmployees) $('#empleadosList').hide();
        else $('#empleadosList').show();
    });
}

function validateCredentials() {
    return _password === window.prompt('CREDENCIALES');
}

function showBadCredentials() {
    Swal.fire(
        `Credenciales incorrectas`,
        `Las credenciales que ingresó son inconrrectas`,
        `error`
    );
}

function generate(action) {
    if (validateCredentials()) {

        var baseMailFactura = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f2f2f2; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f2f2f2; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://i.imgur.com/z141PXF.png" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Hola {{nameEmployee}}.</span> <br> <br> {{introduction}} <br> </p> <p style="padding:5px; color:#222; font-weight: bold">{{detalleDeuda}} <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">({{total}})</span>: </p> <ul> {{listMouths}} </ul> {{messageAfter}} <span style="font-size:12px; line-height:16px; font-style: italic;">Si esto es un error o si necesitas ayuda con los valores señalados puedes responder este correo o acércate a mi estación de trabajo.</span> <br> {{sectionQR}} <p style="padding:5px; font-weight: bold; font-style: italic; color: #222"> Gracias. <br> <span style="font-size: 13px;">Simón Bustamante Alzate (Administrador F-EDEAS).</span> </p> </div> </div>';
        var baseMailConstancia = '<div><div class="_1WprirXmwrr1tPFDyFcLIW _3T_0izEBoQ4deL5A42nKOm allowTextSelection"><div><div class="rps_808c"><style type="text/css"><!-- .rps_808c .x_prehdr{ font-size: 4px; line-height: 6px!important; font-family: Arial,sans-serif; margin-top: 0px; }.rps_808c .x_bodycopy{ font-size: 14px; line-height: 20px!important; font-family: Arial,sans-serif; margin-top: 0px; }.rps_808c .x_bodycopy2{ font-size: 16px; line-height: 22px!important; font-family: Arial,sans-serif; margin-top: 0px; }.rps_808c .x_bodycopy3{ font-size: 18px; line-height: 24px!important; font-family: Arial,sans-serif; margin-top: 0px; }.rps_808c .x_customerinfo{ font-size: 13px; line-height: 16px!important; font-family: Arial,sans-serif; }.rps_808c .x_footer{ font-size: 12px; line-height: 18px!important; font-family: Arial,sans-serif; margin-top: 0px; }.rps_808c .x_h1asterisk{ font-size: 18px!important; line-height: 0px!important; vertical-align: 21px!important; }.rps_808c .x_h2asterisk{ font-size: 14px!important; line-height: 0px!important; vertical-align: 14px!important; }.rps_808c .x_h3asterisk{ font-size: 10px!important; line-height: 0px!important; vertical-align: 10px!important; }.rps_808c .x_mobile{ border-spacing: 0; display: none!important; height: 0; max-height: 0; overflow: hidden; visibility: hidden; width: 0; }.rps_808c #x_MessageViewBody .x_video-wrapper{ display: block!important; }.rps_808c #x_MessageViewBody .x_video-fallback{ display: none!important; } --></style><div><div style="margin-top:0!important; margin-bottom:0!important; margin-right:0!important; margin-left:0!important; padding-top:0; padding-bottom:0; padding-right:0; padding-left:0; background-color:#ffffff"><img data-imagetype="External" src="/actions/ei?u=http%3A%2F%2Fimg.secureserver.net%2Fbbimage.aspx%3Fpl%3D1%26isc%3Dgdbb3863a%26e%3Dsimonba97%2540hotmail.com%26tid%3D3863%26eid%3D1403628347%26mid%3Dde98de70-b127-446e-b67e-90763876fe2f&amp;d=2018-12-03T13%3A40%3A48.255Z" originalsrc="http://img.secureserver.net/bbimage.aspx?pl=1&amp;isc=gdbb3863a&amp;e=simonba97%40hotmail.com&amp;tid=3863&amp;eid=1403628347&amp;mid=de98de70-b127-446e-b67e-90763876fe2f" data-connectorsauthtoken="1" data-imageproxyendpoint="/actions/ei" data-imageproxyid="" width="1" height="1" style="margin:0!important; padding:0!important; border:0!important; height:1px!important; width:1px!important; display:none!important; visibility:hidden!important"><img data-imagetype="External" src="/actions/ei?u=http%3A%2F%2F50analytics.secureserver.net%2Fea%2FC5HKnqoXEQ%2F%3Fe%3Dde98de70-b127-446e-b67e-90763876fe2f%26c%3Dgdbb3863a%26LocId%3Des-CO&amp;d=2018-12-03T13%3A40%3A48.256Z" originalsrc="http://50analytics.secureserver.net/ea/C5HKnqoXEQ/?e=de98de70-b127-446e-b67e-90763876fe2f&amp;c=gdbb3863a&amp;LocId=es-CO" data-connectorsauthtoken="1" data-imageproxyendpoint="/actions/ei" data-imageproxyid="" id="x__two50_img" width="1" height="1" style="margin:0!important; padding:0!important; border:0!important; height:1px!important; width:1px!important; display:none!important; visibility:hidden!important"> <center style="width:100%; table-layout:fixed"><table width="100%" cellpadding="0" cellspacing="0" bgcolor="#333333"><tbody><tr><td><table width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff"><tbody><tr><td><div style="max-width:100%; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:0px; padding-right:0px"><table align="center" bgcolor="#333333" style="border-spacing:0; font-family:sans-serif; color:#333333; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td bgcolor="#333333" style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" bgcolor="#333333" style="border-spacing:0; font-family:sans-serif; color:#333333"><tbody><tr><td style="padding-bottom:0px; padding-top:0px; padding-left:20px; padding-right:20px; background-color:#333333; width:100%; font-size:10px; text-align:center; display:none!important; visibility:hidden!important; color:#333333"><p class="x_prehdr" style="text-align:center; line-height:16px; margin-top:0px; margin-bottom:0px">Simon, abre este correo electrónico para revisar lo que se ha cambiado en tu cuenta. Comunícate con nuestro equipo de asistencia técnica si consideras que los productos fueron eliminados por error.</p></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" bgcolor="#333333"><tbody><tr><td style="padding-bottom:20px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table align="center" bgcolor="#333333" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td bgcolor="#333333" style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="73%" bgcolor="#333333" style="border-spacing:0; font-family:sans-serif; color:#FFFFFF"><tbody><tr><td align="left" style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0px"><img src="https://ci5.googleusercontent.com/proxy/ScxnH6NbRSL6NLvWtRakET8R9XHcIa6eUphaiFiDm6DTybe9_1W7keXEBFDZHjfHCiE=s0-d-e1-ft#https://i.imgur.com/0JZh8Et.png" width="120" height="45" border="0" alt="E-DEAS" style="display:block;font-family:Arial,sans-serif;font-size:12px" class="CToWUd"></td></tr></tbody></table></td><td width="100%" bgcolor="#333333" style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" bgcolor="#333333" style="border-spacing:0; font-family:sans-serif; color:#FFFFFF"><tbody><tr><td style="padding-top:10px; padding-bottom:0px; padding-left:10px; padding-right:0px; background-color:#333333; width:100%; text-align:right; color:#FFFFFF"><p class="x_customerinfo" style="margin-top:0px; margin-bottom:0px; font-size:13px; line-height:16px"><strong>F-EDEAS (Fondo de empleados E-DEAS)</strong></p></td></tr><tr><td style="padding-top:0px; padding-bottom:0px; padding-left:10px; padding-right:0px; background-color:#333333; width:100%; text-align:right; color:#FFFFFF"><p class="x_customerinfo" style="margin-top:5px; margin-bottom:0px; font-size:13px; line-height:16px">Simón Bustamante — <nobr>Administrador F-EDEAS</nobr></p></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#97bc0e"><tbody><tr><td bgcolor="#97bc0e" style="padding-top:30px; padding-bottom:0px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#ffffff" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:25px; padding-bottom:0px; padding-left:40px; padding-right:40px; background-color:#ffffff; width:100%; text-align:left; font-size:32px; line-height:38px; font-weight:bold; font-family:Arial,sans-serif"><span>¡Constancia de pago!</span> </td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#97bc0e"><tbody><tr><td bgcolor="#97bc0e" style="padding-top:0px; padding-bottom:0px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#ffffff" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:25px; padding-bottom:0px; padding-left:40px; padding-right:40px; background-color:#ffffff; width:100%; text-align:left"><p class="x_bodycopy" style="margin-top:0px; line-height:20px; margin-bottom:0px">{{employeeName}} ha pagado satisfactoriamente los siguientes meses:</p></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#97bc0e"><tbody><tr><td bgcolor="#97bc0e" style="padding-top:0px; padding-bottom:0px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#ffffff" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:25px; padding-bottom:0px; padding-left:0px; padding-right:0px; background-color:#ffffff; width:100%; text-align:left"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"><tbody><tr><td align="center" valign="top"><table width="600" border="0" cellpadding="0" cellspacing="0" class="x_mobemailfullwidth" align="center"><tbody><tr><td style="padding-top:10px; padding-bottom:0px; padding-left:20px; padding-right:20px"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="left" valign="middle" bgcolor="#ffffff" style="padding-left:40px; padding-right:40px; padding-top:10px; padding-bottom:10px">        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#005291"><tbody><tr><td bgcolor="#005291" style="padding-top:0px; padding-bottom:0px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#005291" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:30px; padding-left:40px; padding-right:40px; padding-bottom:0px; width:100%; text-align:left; font-size:21px; line-height:27px; font-weight:bold; font-family:Arial,sans-serif">{{detalle}}</td></tr><tr><td style="padding-bottom:20px; padding-left:40px; padding-right:20px; width:100%; font-size:14px; text-align:left"></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#97bc0e"><tbody><tr><td bgcolor="#97bc0e" style="padding-top:0px; padding-bottom:0px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#ffffff" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:25px; padding-bottom:0px; padding-left:40px; padding-right:40px; background-color:#ffffff; width:100%; text-align:left"><p class="x_bodycopy" style="margin-top:0px; line-height:20px; margin-bottom:0px">Si esto fue un error o si necesitas ayuda con alguna otra cosa, puedes responder este correo o arrimarte directamente a mi estación de trabajo.   <br><br><i>Este correo es únicamente informativo  y simula como un recibo de pago.</i></p></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#97bc0e"><tbody><tr><td bgcolor="#97bc0e" style="padding-top:0px; padding-bottom:30px"><div style="max-width:600px; margin-top:0; margin-bottom:0; margin-right:auto; margin-left:auto; padding-left:20px; padding-right:20px"><table bgcolor="#ffffff" align="center" style="border-spacing:0; font-family:sans-serif; color:#111111; margin:0 auto; width:100%; max-width:600px"><tbody><tr><td style="padding-top:0; padding-bottom:0; padding-right:0; padding-left:0"><table width="100%" style="border-spacing:0; font-family:sans-serif; color:#111111"><tbody><tr><td style="padding-top:25px; padding-bottom:0px; padding-left:40px; padding-right:40px; background-color:#ffffff; width:100%; text-align:left"><p style="margin-top:0px; line-height:0px; margin-bottom:0px">&nbsp;</p></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table>';

        var sectionQR = '<p style="padding:5px">Recuerda que puedes realizar el pago de tus aportes mensuales. Realizando una transferencia a la cuenta de ahorros: <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">00849443011</span> de Bancolombia o utilizando el <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">código QR</span> que se anexa justo debajo. </p> <p style="padding:5px"> <img data-imagetype="External" src="https://i.imgur.com/SWAyZcz.png" alt="Código QR" style="width: 98%;"> </p>'

        var introductionMessage_Deudor = 'Actualmente tienes una deuda pendiente con el fondo de empleados de E-DEAS de <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black; font-weight: bold">{{numMounths}} mese(s)</span> sin ser cancelados.'
        var messageAfter_Deudor = '<p style="padding:5px">Es muy importante que te pongas al día con tu deuda, ya que con este dinero se financian actividades de interés común como las celebraciones de los cumpleaños, la finca anual y demás actividades.</p>'

        var introductionMessage_Cumplido = 'Te recordamos que ya puedes pagar la cuota del mes que acaba de pasar para así seguir estando al día con F-DEAS, gracias a ti y a tu compromiso es posible realizar todas las actividades que nos proponemos.'
        var messageAfter_Cumplido = '';

        var detalleBase = '<li><span>{{mounthName}}</span></li>';
        var listMouths = '';

        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const today = new Date();
        var infoEmployeeSelected = $('#empleadosList').val().split(';;');
        var mailEmployee = infoEmployeeSelected[0];
        var nameEmployee = infoEmployeeSelected[1];

        var mounthsSelected = $('.contmounths input:checked');

        if (mounthsSelected.length > 0) {

            $.each(mounthsSelected, function(i, mounth) {
                listMouths += detalleBase.replace('{{mounthName}}', mounth.value);
            });

            var bodyMail = null;
            var subject = null;

            var introductionMessage;
            var messageAfter;
            var total = '$' + (mounthsSelected.length * 15000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

            if (mounthsSelected.length == 1) {
                introductionMessage = introductionMessage_Cumplido;
                messageAfter = messageAfter_Cumplido;

            } else {
                introductionMessage = introductionMessage_Deudor.replace('{{numMounths}}', mounthsSelected.length);
                messageAfter = messageAfter_Deudor;
            }

            if (action == 'factura') {
                bodyMail = baseMailFactura
                    .replace('{{total}}', total)
                    .replace('{{nameEmployee}}', nameEmployee)
                    .replace('{{introduction}}', introductionMessage)
                    .replace('{{detalleDeuda}}', 'Detalle de la deuda actual')
                    .replace('{{listMouths}}', listMouths)
                    .replace('{{messageAfter}}', messageAfter)
                    .replace('{{sectionQR}}', sectionQR);

                subject = `<F-EDEAS> Cuota F-DEAS (${monthNames[today.getMonth()]})`;

            } else {

                introductionMessage = `Hemos registrado satisfactoriamente el pago de la cuenta que tenías pendiente con F-DEAS la fecha ${[today.getDate(),today.getMonth()+1,today.getFullYear()].join('/')}`;

                bodyMail = baseMailFactura
                    .replace('{{total}}', total)
                    .replace('{{nameEmployee}}', nameEmployee)
                    .replace('{{introduction}}', introductionMessage)
                    .replace('{{detalleDeuda}}', 'Detalle del pago')
                    .replace('{{listMouths}}', listMouths)
                    .replace('{{messageAfter}}', '')
                    .replace('{{sectionQR}}', '');

                subject = `<F-DEAS> Constancia de pago F-EDEAS (${[today.getDate(),today.getMonth()+1,today.getFullYear()].join('/')})`;

            }

            copyToClipboard(bodyMail);

            Email.send({
                Host: "smtp.gmail.com",
                Username: _ma,
                Password: _ps,
                To: mailEmployee,
                From: _ma,
                Subject: subject,
                Body: bodyMail
            }).then(function(message) {
                if (message == 'OK') {
                    Swal.fire(
                        `Se envió correctamente la ${action} de ${nameEmployee}`,
                        `La ${action} se envió correctamente al correo: ${mailEmployee}`,
                        `success`
                    )
                    // copyToClipboard(bodyMail);
                    clearInfo();

                } else {
                    copyToClipboard(bodyMail);
                    clearInfo();
                    Swal.fire(
                        `No se logró enviar la ${action} a ${nameEmployee}`,
                        `La ${action} generada no se pudo enviar por correo a ${nameEmployee} (${mailEmployee}),\nSin embargo se copió en el clipboard para su envio manual`,
                        `error`
                    )
                }
            });

        } else {
            Swal.fire(
                `Error`,
                `Debes seleccionar los meses que debe ${nameEmployee}`,
                `error`
            )
        }
    } else {
        showBadCredentials();
    }    
}

function sendMail() {
    if (validateCredentials()) {
        var baseMail = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f2f2f2; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f2f2f2; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://i.imgur.com/z141PXF.png" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Hola {{nameEmployee}}.</span> <br> <br> {{introduction}} <br> </p> <p style="padding:5px; font-weight: bold; font-style: italic; color: #222"> Gracias. <br> <span style="font-size: 13px;">Simón Bustamante Alzate (Administrador F-EDEAS).</span> </p> </div> </div>';

        var infoEmployeeSelected;
        var mailEmployee = [];
        var nameEmployee;
        var subject = `<F-EDEAS> ${$('#subjectMail').val()}`;
        var body = $('#bodyMail').val().replace(/\n/gi,'<br />');

        if (_allSendMailAllEmployees) {
            $.each($('#empleadosList > option'), function(i, option) {
                mailEmployee.push(option.value.split(';;')[0]);
            });
            nameEmployee = "todos";
        } else {
            mailEmployee = $('#empleadosList').val().split(';;')[0];
            nameEmployee = $('#empleadosList').val().split(';;')[1];
        }

        bodyMail = baseMail
                    .replace('{{nameEmployee}}', nameEmployee)
                    .replace('{{introduction}}', body);

        Email.send({
                Host: "smtp.gmail.com",
                Username: _ma,
                Password: _ps,
                To: mailEmployee,
                From: _ma,
                Subject: subject,
                Body: bodyMail
            }).then(function(message) {
                if (message == 'OK') {
                    Swal.fire(
                        `¡Listo!`,
                        `Se envió el correo correctamente`,
                        `success`
                    )
                    // copyToClipboard(bodyMail);
                    clearInfo();

                } else {
                    copyToClipboard(bodyMail);
                    clearInfo();
                    Swal.fire(
                        `No se logró enviar el correo`,
                        `La notificacion generada no se pudo enviar por correo.\nSin embargo se copió en el clipboard para su envio manual`,
                        `error`
                    )
                }
            });

    } else {
        showBadCredentials();
    }    
}

function copyToClipboard(bodyMail) {

    // Create a dummy input to copy the string array inside it
    var dummy = document.createElement("input");

    // Add it to the document
    document.body.appendChild(dummy);

    // Set its ID
    dummy.setAttribute("id", "dummy_id");

    // Output the array into it
    document.getElementById("dummy_id").value = bodyMail;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand("copy");

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
}

function clearInfo() {
    listMouths = "";
    subject = "";
    bodyMail = "";
}