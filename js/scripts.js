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
var fullNews = `
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
var paragraphs = fullNews.split('\n\n');

// Obtener el elemento contenedor para el contenido de la noticia
var newsContentContainer = document.getElementById("01");

// Insertar cada párrafo en el contenedor
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = paragraphs[i];
    newsContentContainer.appendChild(paragraph);
}



// Texto completo de la noticia
var fullNews = `
Fecha: 8 de Agosto de 2023

Las multas de tránsito son sanciones impuestas a los infractores de las normas de circulación. Es importante tener en cuenta que estas multas tienen un plazo de prescripción, es decir, un límite de tiempo en el cual la autoridad de tránsito puede cobrarlas coactivamente. Además, la prescripción puede interrumpirse mediante la notificación del mandamiento de pago. En este blog, exploraremos en detalle el término de prescripción de las multas de tránsito, la interrupción del plazo de prescripción y la relevancia de la notificación del mandamiento de pago en el proceso de cobro administrativo.

Término de Prescripción de las Multas de Tránsito:
Según el artículo 159 de la Ley 769 de 2002, las multas o comparendos de tránsito prescriben en tres (3) años contados a partir de la ocurrencia del hecho que dio lugar a la infracción. Esto significa que la autoridad de tránsito tiene un plazo de tres años desde la fecha en que se impuso la multa para realizar el cobro coactivo.

Interrupción del Término de Prescripción:
El artículo 159 también establece que el término de prescripción se interrumpe con la notificación del mandamiento de pago. Es decir, si antes de que haya transcurrido el plazo de tres años, la autoridad de tránsito notifica al infractor sobre el mandamiento de pago, los tres años de prescripción vuelven a iniciarse desde cero.

Ejemplo Práctico:
Supongamos que un comparendo fue expedido el 15 de enero de 2020. Si no se hace efectivo el cobro coactivo, la acción de cobro prescribe el 15 de enero de 2023. Sin embargo, si el mandamiento de pago se notifica el 20 de julio de 2022, los tres años de prescripción comenzarán a correr nuevamente desde el 21 de julio de 2022, y el cobro del comparendo prescribirá el 21 de julio de 2025.

Notificación del Mandamiento de Pago:
La notificación del mandamiento de pago es un paso crucial en el proceso de cobro administrativo de las multas de tránsito. De acuerdo con el artículo 826 del Estatuto Tributario, la notificación debe hacerse personalmente al deudor, previa citación para que comparezca en un término de diez (10) días. En caso de que el deudor no se presente o no pueda ser contactado, la notificación se realizará por correo.

Si tienes multas de tránsito pendientes y crees que pueden prescribir pronto, estoy aquí para ayudarte.

Si tienes multas de tránsito pendientes y crees que pueden prescribir pronto, no dudes en contactarme, juntos podemos hacer efectivos tus derechos.
`;



// Dividir el texto completo en párrafos
var paragraphs = fullNews.split('\n\n');

// Obtener el elemento contenedor para el contenido de la noticia
var newsContentContainer = document.getElementById("02");

// Insertar cada párrafo en el contenedor
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = paragraphs[i];
    newsContentContainer.appendChild(paragraph);
}



// Texto completo de la noticia
var fullNews = `
Fecha: 8 de Agosto de 2023

En el sistema de seguridad social, es común que tanto trabajadores independientes como empleadores puedan enfrentar dificultades en el pago oportuno de los aportes a la EPS. Sin embargo, ¿qué sucede cuando una EPS niega el reconocimiento de licencias o incapacidades debido a la mora en los pagos? Afortunadamente, existe una figura legal conocida como "Allanamiento a la Mora" que puede proteger los derechos del afiliado en estas situaciones.

El allanamiento a la mora es un concepto legal que se aplica cuando un empleador o trabajador independiente realiza el pago de sus aportes a la EPS de forma tardía o incompleta, y la EPS no toma medidas para requerir el pago o rechazarlo en el momento oportuno. En estos casos, la EPS se considera que aceptó tácitamente la situación de mora y, por ende, se encuentra obligada a reconocer el pago de licencias o incapacidades a las que el afiliado tenga derecho.

La Corte Constitucional de Colombia ha sido clara en su posición al respecto. En Sentencia T-963 del 15 de diciembre del 2007, estableció que si una EPS no alega la mora en el pago de aportes por parte del empleador o el trabajador independiente, no puede negar el servicio, ya que se entiende que aceptó la mora por la mera aceptación del dinero.
En otra sentencia, la T-490 de 2015, la Corte reiteró su posición, destacando que las EPS no pueden negar el reconocimiento de incapacidades laborales por enfermedad general bajo el pretexto de la mora en los pagos, si ellas mismas fueron negligentes para reclamar el pago o no tomaron acciones legales oportunas para su cobro.

El allanamiento a la mora protege los derechos fundamentales de los afiliados. Cuando una EPS niega el pago de una incapacidad o licencia debido a la mora en los aportes, se están vulnerando tres situaciones fundamentales:

Vulneración del mínimo vital: La falta de pago oportuno afecta directamente la subsistencia del afiliado, poniendo en riesgo su bienestar y el de su núcleo familiar.

Vulneración de la buena fe: La EPS, al no requerir el pago en el momento oportuno, rompe la confianza con el afiliado y actúa de manera negligente.

Falta de reconocimiento del pago: Si bien el pago puede ser inoportuno, la EPS aceptó el dinero, lo que indica que se allanó a la mora.


Es importante resaltar que la acción de tutela, que es un mecanismo excepcional, procede en casos donde se reclama el reconocimiento y pago de incapacidades laborales. La Corte Constitucional ha establecido que cuando una persona no cuenta con otra fuente de ingresos para satisfacer sus necesidades básicas y las de su familia, o está en situación de vulnerabilidad extrema, la tutela es un recurso procedente para garantizar la protección de sus derechos fundamentales a la salud y al mínimo vital.

¿Te han negado el reconocimiento de licencias o incapacidades por mora en los pagos a la EPS? No te preocupes, estoy aquí para ayudarte. Como profesional en temas legales y seguridad social, puedo asesorarte en este proceso. Juntos podemos hacer efectivos tus derechos.

`;



// Dividir el texto completo en párrafos
var paragraphs = fullNews.split('\n\n');

// Obtener el elemento contenedor para el contenido de la noticia
var newsContentContainer = document.getElementById("03");

// Insertar cada párrafo en el contenedor
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = paragraphs[i];
    newsContentContainer.appendChild(paragraph);
}


// Texto completo de la noticia
var fullNews = `
Fecha: 8 de Agosto de 2023

Las fotomultas o SAST (Sistema Automático de Detección de Infracciones) son una herramienta utilizada por las autoridades de tránsito para detectar y sancionar infracciones viales. Sin embargo, en ocasiones, pueden surgir situaciones en las que el ciudadano considera que la imposición de la fotomulta fue injusta o no cumplió con los procedimientos legales establecidos. En este blog, discutiremos algunos fundamentos de derecho para apelar una fotomulta en casos específicos donde se haya realizado la notificación fuera de los plazos establecidos o cuando la fotomulta no cumpla con los requisitos legales para su funcionamiento.

Notificación fuera de los plazos establecidos

Es importante recordar que la Ley 1843 de 2017, en su artículo 8, establece que la autoridad de tránsito tiene un plazo máximo de 10 días hábiles para validar el comparendo después de la ocurrencia de la infracción. Luego, una vez realizada la validación, la notificación al infractor debe realizarse dentro de los 3 días hábiles siguientes.

Si el ciudadano recibió la notificación de la orden de comparendo después de transcurridos más de 13 días hábiles desde la fecha de la supuesta infracción, la autoridad pública estaría incumpliendo con los plazos establecidos por la Resolución 718 de 2018 del Ministerio de Transporte y la Ley 1843 de 2017. En este caso, se podría solicitar la revocatoria de la orden de comparendo de acuerdo con lo establecido en la Ley 1437 de 2011, artículo 93.1, que permite la revocatoria directa de los actos administrativos cuando sean contrarios a la Constitución o la ley debido a un incumplimiento en los requisitos de notificación.

Prohibición de responsabilidad objetiva

La sentencia C-038 de 2020 de la Corte Constitucional declaró inexequible el parágrafo primero del artículo 8 de la Ley 1843 de 2017, que establecía la responsabilidad solidaria del propietario del vehículo con el conductor que cometiera la infracción. La Corte señaló que la entidad estatal debe demostrar que la infracción le es imputable al propietario del vehículo, ya sea porque era quien conducía o por el incumplimiento de deberes relacionados con el estado fáctico o jurídico del vehículo.

Si la orden de comparendo no identifica claramente al infractor responsable de la infracción y se vincula automáticamente al propietario del vehículo sin pruebas de que él o ella fue quien condujo el vehículo, se estaría aplicando una presunción de responsabilidad objetiva que fue declarada inexequible. En este caso, se podría solicitar la revocatoria de la orden de comparendo basándose en el argumento de que la fotomulta viola el orden constitucional al vulnerar las garantías del debido proceso.

Requisitos legales para el funcionamiento de las fotomultas

Las fotomultas o SAST están sujetas a control metrológico y deben cumplir con ciertos requisitos legales para su funcionamiento. De acuerdo con el Decreto 1074 de 2015, el cual reglamenta el sector comercio, estos dispositivos deben contar con un certificado de conformidad con el reglamento técnico metrológico y mecanismos de calibración y mantenimiento previstos para los instrumentos de medición. Además, aquellos utilizados para la imposición de comparendos por exceso de velocidad deben contar con un Concepto de Desempeño de la tecnología emitido por el Instituto Nacional de Metrología.

Si la fotomulta no cuenta con el certificado de conformidad, mecanismos de calibración y mantenimiento debidamente registrados, o el Concepto de Desempeño de la tecnología requerido, se podría argumentar que el dispositivo no cumple con los requisitos legales para su funcionamiento. En este caso, se podría solicitar la revocatoria de la orden de comparendo, ya que la fotomulta carecería de efectos legales al no cumplir con los requerimientos establecidos por la ley.

Si recibes una fotomulta y consideras que se incumplieron los plazos de notificación establecidos, que no se identificó correctamente al infractor o que la fotomulta no cumplió con los requisitos legales para su funcionamiento, es importante que consideres presentar una apelación. Si necesitas apoyo legal para presentar tu apelación, no dudes en contactarme, juntos podemos hacer efectivos tus derechos.


`;



// Dividir el texto completo en párrafos
var paragraphs = fullNews.split('\n\n');

// Obtener el elemento contenedor para el contenido de la noticia
var newsContentContainer = document.getElementById("04");

// Insertar cada párrafo en el contenedor
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.textContent = paragraphs[i];
    newsContentContainer.appendChild(paragraph);
}
