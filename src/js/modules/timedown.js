/*const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        if (t.remainDays == 1) {
            el.innerHTML = `Faltan ${t.remainDays} Dia : ${t.remainHours} Horas : ${t.remainMinutes} Min. : ${t.remainSeconds} Seg.`;
        } else {
            el.innerHTML = `Faltan ${t.remainDays} Dias : ${t.remainHours} Horas : ${t.remainMinutes} Min. : ${t.remainSeconds} Seg.`;
        }

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

const time = () => { countdown('Dec 3 2021 15:26:40 UTC-5', 'clock', '<a href="#inscripcion">El evento ya empezó, Inscribete!</a>'); }
export default time*/
import 'simplycountdown.js/dev/simplyCountdown'

simplyCountdown('#cuenta', {
    year: 2022, // required
    month: 1, // required
    day: 15, // required
    hours: 9, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'día', plural: 'días' },
        hours: { singular: 'hora', plural: 'horas' },
        minutes: { singular: 'minuto', plural: 'minutos' },
        seconds: { singular: 'segundo', plural: 'segundos' }
    },
    plural: true, //use plurals
    onEnd: function() {
        // your code
        document.getElementById("elimina1").remove();
        document.getElementById("elimina2").remove();
        document.getElementById("btn_1").remove();
        document.getElementById("btn_2").remove();
        let btnRegistrar = document.getElementById("btn_3");
        btnRegistrar.setAttribute('disabled', 'disabled');
        btnRegistrar.className += " button--disabled";
        btnRegistrar.innerHTML="Las inscripciones han finalizado."
        document.getElementById("icon_prefix_surnames").setAttribute('disabled', 'disabled');
        document.getElementById("icon_prefix_names").setAttribute('disabled', 'disabled');
        document.getElementById("icon_prefix_email").setAttribute('disabled', 'disabled');
        document.getElementById("icon_prefix_tel").setAttribute('disabled', 'disabled');
        document.getElementById("icon_prefix_category").setAttribute('disabled', 'disabled');
        document.getElementById("icon_prefix_org").setAttribute('disabled', 'disabled');
        
        const div = document.getElementById('cuenta');
        div.innerHTML = '<strong> <h1  class="presentation__message">¡El VII FULL DAY DE GESTIÓN DE TI ha dado inicio!</h1></strong>'; // Interpreta el HTML
        div.innerHTML;
        div.textContent;
        return;
    },
    //countUp: true,
});
const time = () => { simplyCountdown }
export default time