/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});






// Texto completo de la noticia
var fullNewsText = `
Fecha: 31 de julio de 2023

El Ministerio de Transporte ha anunciado nuevas regulaciones relacionadas con el proceso de notificación de comparendos de tránsito en vehículos de servicio público. Según la normativa vigente, la autoridad de tránsito deberá enviar la copia del comparendo y sus soportes al propietario del vehículo y a la empresa a la cual está vinculado, dentro de los tres días hábiles siguientes a la validación del comparendo por parte de la autoridad competente.

Para llevar a cabo la notificación, se utilizará el correo a través de una empresa de correos legalmente constituida y/o por correo electrónico, garantizando así una entrega ágil y eficiente de la documentación.

Sin embargo, en el caso de que no se pueda identificar al propietario en la última dirección registrada en el Registro Único Nacional de Tránsito (RUNT), se implementará el proceso de notificación de la orden de comparendo por aviso. Bajo esta modalidad, la autoridad de tránsito realizará un aviso público para notificar al inculpado sobre la comisión de la infracción.

Si el propietario del vehículo rechaza la comisión de la infracción, deberá comparecer ante el funcionario en una audiencia pública, donde se decretarán las pruebas conducentes que sean solicitadas y las de oficio que se consideren útiles.

Es importante destacar que, en caso de que el contraventor no comparezca sin justa causa comprobada dentro de los 11 días hábiles siguientes a la notificación del comparendo, la autoridad de tránsito procederá con el proceso. Después de 30 días calendario de ocurrida la presunta infracción, se llevará a cabo una audiencia pública donde se fallará el caso y se notificará en estrados. Durante este proceso, los afectados podrán interponer los recursos de ley.

Asimismo, el artículo 10 de la Ley 2161 del 2021 establece medidas antievasión que requieren que los propietarios de vehículos se aseguren de que estos circulen cumpliendo ciertas condiciones. Entre ellas se encuentran: haber adquirido el Seguro Obligatorio de Accidentes de Tránsito (SOAT), realizar la revisión técnico mecánica en los plazos previstos, circular por lugares y en horarios permitidos, no exceder los límites de velocidad y respetar la luz roja del semáforo.

La inobservancia de estas condiciones puede resultar en la imposición de sanciones. No obstante, para aplicar dichas sanciones, será necesario probar la culpa del propietario del vehículo, independientemente de si este es el conductor o no. En este sentido, la jurisprudencia ha resaltado que los propietarios tienen la responsabilidad de "velar" para que sus vehículos cumplan con todas las condiciones previstas.

Estas nuevas regulaciones buscan garantizar un adecuado control y cumplimiento de las normas de tránsito en vehículos de servicio público, con el objetivo de promover la seguridad vial y la responsabilidad de los propietarios en el correcto mantenimiento de sus vehículos.
`;

// Dividir el texto completo en párrafos
var paragraphs = fullNewsText.split('\n\n');

// Obtener el elemento contenedor para el contenido de la noticia
var newsContentContainer = document.getElementById("newsContent");

// Insertar cada párrafo en el contenedor
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = paragraphs[i];
    newsContentContainer.appendChild(paragraph);
}