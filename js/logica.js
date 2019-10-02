jQuery(document).ready(function() {
    addEvents();
});

var _allSendMailAllEmployees = false;
var _allSendMailNoIntegrantes = false;
var _password = "adminFedeas";
var _ma = "fedeas@e-deas.com.co";
var _ps = "fondofedeas";
var _contSumaParejaOtrosValores = 0;
var _contRestaParejaOtrosValores = 0;

function addEvents() {
    $('.logoEdeas').click(function() {
        window.location.href = 'index.html';
    });

    $('#otherField').click(function() {
        $('#otherField').before('<input type="text" class="descriptionOtherField" placeholder="Descripción deuda"> $<input type="number" class="valueOtherField" placeholder="Valor deuda">');
    });

    $('#checkSendMailAllEmployees').change(function() {
        _allSendMailAllEmployees = !_allSendMailAllEmployees;
        if (_allSendMailAllEmployees) {
            $('#empleadosList').hide();
            $('.checkNoEmployees').hide();

        } else {
            $('#empleadosList').show();
            $('.checkNoEmployees').show();
        }

    });

    $('#checkSendMailNoIntegrantesFedeas').change(function() {
        _allSendMailNoIntegrantes = !_allSendMailNoIntegrantes;
        if (_allSendMailNoIntegrantes) {
            // Escondemos check de enviar notificacion a todos
            $('#checkSendMailAllEmployees').hide();
            // Escondemos los integrantes de FEDEAS en la lista
            // Y mostramos los no integrantes de FEDEAS
            $('.integranteFEDEAS').hide();
            $('.noIntegranteFEDEAS').show().first().prop('selected', true);
        } else {
            // Escondemos check de enviar notificacion a todos
            $('#checkSendMailAllEmployees').show();
            // mostramos los integrantes de FEDEAS en la lista
            // Y Escondemos los no integrantes de FEDEAS
            $('.integranteFEDEAS').show().first().prop('selected', true);
            $('.noIntegranteFEDEAS').hide();
        }
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

        var baseMailFactura = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f2f2f2; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f2f2f2; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://i.imgur.com/z141PXF.png" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Hola {{nameEmployee}}.</span> <br> <br> {{introduction}} <br> </p> <p style="padding:5px; color:#222; font-weight: bold">{{detalleDeuda}} <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">({{total}})</span>: </p> <ul> {{listMouths}} </ul> {{detalleConceptosASumar}} {{detalleConceptosARestar}} {{messageAfter}} <span style="font-size:12px; line-height:16px; font-style: italic;">Si esto es un error o si necesitas ayuda con los valores señalados puedes responder este correo o acércate a mi estación de trabajo.</span> <br> {{sectionQR}} <p style="padding:5px; font-weight: bold; font-style: italic; color: #222"> Gracias. <br> <span style="font-size: 13px;">Simón Bustamante Alzate (Administrador F-EDEAS).</span> </p> </div> </div>';

        var sectionQR = '<p style="padding:5px">Recuerda que puedes realizar el pago de tus aportes mensuales. Realizando una transferencia a la cuenta de ahorros: <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">00849443011</span> de Bancolombia o utilizando el <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">código QR</span> que se anexa justo debajo. </p> <p style="padding:5px"> <img data-imagetype="External" src="https://i.imgur.com/SWAyZcz.png" alt="Código QR" style="width: 98%;"> </p>'

        var introductionMessage_Deudor = 'Actualmente tienes una deuda pendiente con el fondo de empleados de E-DEAS de <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black; font-weight: bold">{{numMounths}} mese(s)</span> sin ser cancelados.'
        var messageAfter_Deudor = '<p style="padding:5px">Es muy importante que te pongas al día con tu deuda, ya que con este dinero se financian actividades de interés común como las celebraciones de los cumpleaños, la finca anual y demás actividades.</p>'

        var introductionMessage_Cumplido = 'Te recordamos que ya puedes pagar la cuota del mes que acaba de pasar para así seguir estando al día con F-DEAS, gracias a ti y a tu compromiso es posible realizar todas las actividades que nos proponemos.'
        var messageAfter_Cumplido = '';

        var baseConceptForBody = '<p style="padding:5px; color:#222; font-weight: bold">{{tituloConcepto}} <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">({{total}})</span>: </p> <ul> {{listConceptos}} </ul>';

        var detalleBase = '<li><span>{{mounthName}}</span></li>';
        var detalleBaseOtrosConceptos = '<li><span>{{concepto}}</span></li>';

        var listMouths = '';
        var resultOtherConceptsSumar = '';
        var resultOtherConceptsRestar = '';

        var totalARestar = 0;
        var totalASumar = 0;

        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const today = new Date();
        var infoEmployeeSelected = $('#empleadosList').val().split(';;');
        var mailEmployee = infoEmployeeSelected[0];
        var nameEmployee = infoEmployeeSelected[1];

        var mounthsSelected = $('.contmounths input:checked');

        if (mounthsSelected.length > 0) {

            var sumaValuesDiv = $('div[id^="sumaPareja_"]');
            var restaValuesDiv = $('div[id^="restaPareja_"]');

            var sumaValuesResults = [];
            var restaValuesResults = [];

            if (sumaValuesDiv.length > 0) {
                $.each(sumaValuesDiv, function(i, rowSuma) {
                    var inputsSumaXRow = $(rowSuma).find('input');
                    totalASumar += parseFloat(inputsSumaXRow[1].value);
                    resultOtherConceptsSumar += detalleBaseOtrosConceptos.replace('{{concepto}}', `${inputsSumaXRow[0].value}: ${parseFloat(inputsSumaXRow[1].value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);
                });

                resultOtherConceptsSumar = baseConceptForBody.replace('{{tituloConcepto}}', 'Detalle de valores adicionales')
                    .replace('{{total}}', '$' + totalASumar.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
                    .replace('{{listConceptos}}', resultOtherConceptsSumar);

            }

            if (restaValuesDiv.length > 0) {
                $.each(restaValuesDiv, function(i, rowResta) {
                    var inputsRestarXRow = $(rowResta).find('input');
                    totalARestar += parseFloat(inputsRestarXRow[1].value);
                    resultOtherConceptsRestar += detalleBaseOtrosConceptos.replace('{{concepto}}', `${inputsRestarXRow[0].value}: ${parseFloat(inputsRestarXRow[1].value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);
                });

                resultOtherConceptsRestar = baseConceptForBody.replace('{{tituloConcepto}}', 'Detalle deducción por valores adicionales')
                    .replace('{{total}}', '$' + totalARestar.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
                    .replace('{{listConceptos}}', resultOtherConceptsRestar);

            }

            $.each(mounthsSelected, function(i, mounth) {
                listMouths += detalleBase.replace('{{mounthName}}', mounth.value);
            });

            // var namesOtherFieldsValues = $('.nameOtherField');
            // var valuesOtherFieldsValues = $('.valueOtherField');

            // var otherFieldsResult = [];

            // if (namesOtherFieldsValues) {
            //     otherFieldsResult.push(`<br>OTROS GASTOS`); 
            //     $.each(namesOtherFieldsValues, function(i, val) {
            //         otherFieldsResult.push(`${namesOtherFieldsValues[i].value}: ${valuesOtherFieldsValues[i].value}`);
            //     });     
            //     otherFieldsResult = otherFieldsResult.join('<br>');
            // }

            // console.log(otherFieldsResult);

            var bodyMail = null;
            var subject = null;

            var introductionMessage;
            var messageAfter;
            var total = (mounthsSelected.length * 15000 + totalASumar) - totalARestar;
            total = `$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

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
                    .replace('{{detalleDeuda}}', 'Detalle de los meses adeudados')
                    .replace('{{listMouths}}', listMouths)
                    .replace('{{detalleConceptosASumar}}', resultOtherConceptsSumar ? resultOtherConceptsSumar : '')
                    .replace('{{detalleConceptosARestar}}', resultOtherConceptsRestar ? resultOtherConceptsRestar : '')
                    .replace('{{messageAfter}}', messageAfter)
                    .replace('{{sectionQR}}', sectionQR);

                subject = `<F-EDEAS> Cuota F-DEAS (${monthNames[today.getMonth()]})`;

            } else {

                introductionMessage = `Hemos registrado satisfactoriamente el pago de la cuenta que tenías pendiente con F-DEAS la fecha ${[today.getDate(),today.getMonth()+1,today.getFullYear()].join('/')}`;

                bodyMail = baseMailFactura
                    .replace('{{total}}', '$' + mounthsSelected.length * 15000)
                    .replace('{{nameEmployee}}', nameEmployee)
                    .replace('{{introduction}}', introductionMessage)
                    .replace('{{detalleDeuda}}', 'Detalle de los meses pagados')
                    .replace('{{listMouths}}', listMouths)
                    .replace('{{detalleConceptosASumar}}', resultOtherConceptsSumar ? resultOtherConceptsSumar : '')
                    .replace('{{detalleConceptosARestar}}', resultOtherConceptsRestar ? resultOtherConceptsRestar : '')
                    .replace('{{messageAfter}}', '')
                    .replace('{{sectionQR}}', '');

                subject = `<F-DEAS> Constancia de pago F-EDEAS (${[today.getDate(),today.getMonth()+1,today.getFullYear()].join('/')})`;

            }


            debugger;
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

/**
 * Nos permite enviar una factura a los empleados que no son integrantes de F-EDEAS
 */
function generarFacturaNoIntegrante() {
    if (validateCredentials()) {
        var baseMailFactura = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f2f2f2; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f2f2f2; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://i.imgur.com/z141PXF.png" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Hola {{nameEmployee}}.</span> <br> <br> {{introduction}} <br> </p> <p style="padding:5px; color:#222; font-weight: bold">{{detalleDeuda}} <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">({{total}})</span>: </p> <ul> {{listEvents}} </ul> {{messageAfter}} <span style="font-size:12px; line-height:16px; font-style: italic;">Si esto es un error o si necesitas ayuda con los valores señalados puedes responder este correo o acércate a mi estación de trabajo.</span> <br> {{sectionQR}} <p style="padding:5px; font-weight: bold; font-style: italic; color: #222"> Gracias. <br> <span style="font-size: 13px;">Simón Bustamante Alzate (Administrador F-EDEAS).</span> </p> </div> </div>';
        var sectionQR = '<p style="padding:5px">Recuerda que puedes realizar el pago de tus aportes. Realizando una transferencia a la cuenta de ahorros: <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">00849443011</span> de Bancolombia o utilizando el <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black;">código QR</span> que se anexa justo debajo. </p> <p style="padding:5px"> <img data-imagetype="External" src="https://i.imgur.com/SWAyZcz.png" alt="Código QR" style="width: 98%;"> </p>'

        var introductionMessage_Deudor = 'Actualmente tienes una deuda pendiente con el fondo de empleados de E-DEAS de <span data-markjs="true" class="markrpj0okudo" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style="background-color: rgb(255, 241, 0); color: black; font-weight: bold">{{numEventos}} evento(s)</span> sin ser cancelados.'
        var messageAfter_Deudor = '<p style="padding:5px">Es muy importante que te pongas al día con tu deuda, ya que con este dinero se financian actividades de interés común como las celebraciones de los cumpleaños, la finca anual y demás actividades.</p>'

        var detalleBase = '<li><span>{{events}}</span></li>';
        var listEvents = '';

        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const today = new Date();
        var infoEmployeeSelected = $('#empleadosList').val().split(';;');
        var mailEmployee = infoEmployeeSelected[0];
        var nameEmployee = infoEmployeeSelected[1];

        var descriptionOtherFieldsValues = $('.descriptionOtherField');
        var valuesOtherFieldsValues = $('.valueOtherField');

        var chargeAccount = '';
        var total = 0;

        if (descriptionOtherFieldsValues) {
            $.each(descriptionOtherFieldsValues, function(i, val) {
                chargeAccount += detalleBase.replace('{{events}}', `${descriptionOtherFieldsValues[i].value}: $${parseFloat(valuesOtherFieldsValues[i].value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);
                total += parseFloat(valuesOtherFieldsValues[i].value);
            });
        }

        var bodyMail = null;
        var subject = null;

        var introductionMessage;
        var messageAfter;
        total = `$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

        introductionMessage = introductionMessage_Deudor.replace('{{numEventos}}', descriptionOtherFieldsValues.length);
        messageAfter = messageAfter_Deudor;

        bodyMail = baseMailFactura
            .replace('{{total}}', total)
            .replace('{{nameEmployee}}', nameEmployee)
            .replace('{{introduction}}', introductionMessage)
            .replace('{{detalleDeuda}}', 'Detalle de la deuda actual')
            .replace('{{listEvents}}', chargeAccount)
            .replace('{{messageAfter}}', messageAfter)
            .replace('{{sectionQR}}', sectionQR);

        subject = `<F-EDEAS> Cuota F-DEAS (${monthNames[today.getMonth()]})`;

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
                    `Se envió correctamente la factura de cobro a ${nameEmployee}`,
                    `La factura de cobro se envió correctamente al correo: ${mailEmployee}`,
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
        showBadCredentials();
    }
} // end generarFacturaNoIntegrante

function sendMail() {
    if (validateCredentials()) {
        var baseMail = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f2f2f2; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f2f2f2; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://i.imgur.com/z141PXF.png" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Hola {{nameEmployee}}.</span> <br> <br> {{introduction}} <br> </p> <p style="padding:5px; font-weight: bold; font-style: italic; color: #222"> Gracias. <br> <span style="font-size: 13px;">Simón Bustamante Alzate (Administrador F-EDEAS).</span> </p> </div> </div>';

        var infoEmployeeSelected;
        var mailEmployee = [];
        var nameEmployee;
        var subject = `<F-EDEAS> ${$('#subjectMail').val()}`;
        var body = $('#bodyMail').val().replace(/\n/gi, '<br />');

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

/**
 * Agrega campos para ingresar un concepto
 */
function agregarConcepto(action) {

    if (action == "sumar") {
        _contSumaParejaOtrosValores++;
        var containerSumaValuesFields = $('#sumaValues');
        var auxSuma = 'sumaPareja_' + _contSumaParejaOtrosValores;
        if (containerSumaValuesFields.length > 0) {
            $('#sumaValues').append('<div id="sumaPareja_' + _contSumaParejaOtrosValores + '"><input type="text" class="descriptionOtherField" placeholder="Descripción"> $<input type="number" class="valueOtherField" placeholder="Valor"><i class="far fa-trash-alt deleteRow" onclick="deleteRow(`sumaPareja_' + _contSumaParejaOtrosValores + '`)"></i></div>');
        } else {
            $('.othersValues').show().append('<div id="sumaValues"><span class="resaltar">Cobrar otros conceptos:</span><br></div>');
            $('#sumaValues').append('<div id="sumaPareja_' + _contSumaParejaOtrosValores + '"><input type="text" class="descriptionOtherField" placeholder="Descripción"> $<input type="number" class="valueOtherField" placeholder="Valor"><i class="far fa-trash-alt deleteRow" onclick="deleteRow(`sumaPareja_' + _contSumaParejaOtrosValores + '`)"></i></div>');
        }
    } else {
        _contRestaParejaOtrosValores++;
        var containerRestaValuesFields = $('#restaValues');
        var auxResta = 'restaPareja_' + _contSumaParejaOtrosValores;
        if (containerRestaValuesFields.length > 0) {
            $('#restaValues').append('<div id="restaPareja_' + _contRestaParejaOtrosValores + '"><input type="text" class="descriptionOtherField" placeholder="Descripción"> $<input type="number" class="valueOtherField" placeholder="Valor"><i class="far fa-trash-alt deleteRow" onclick="deleteRow(`restaPareja_' + _contRestaParejaOtrosValores + '`)"></i></div>');
        } else {
            $('.othersValues').show().append('<div id="restaValues"><span class="resaltar">Restar otros conceptos:</span><br></div>');
            $('#restaValues').append('<div id="restaPareja_' + _contRestaParejaOtrosValores + '"><input type="text" class="descriptionOtherField" placeholder="Descripción"> $<input type="number" class="valueOtherField" placeholder="Valor"><i class="far fa-trash-alt deleteRow" onclick="deleteRow(`restaPareja_' + _contRestaParejaOtrosValores + '`)"></i></div>');
        }

    }
} // end agregarConcepto()

function deleteRow(idRow) {
    $('#' + idRow).remove();
}

function clearInfo() {
    listMouths = "";
    subject = "";
    bodyMail = "";
}