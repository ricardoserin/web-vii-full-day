import { collection, doc, serverTimestamp, setDoc, query, getDocs, where } from "firebase/firestore";
import { db } from "./firebase";

const collectionInscripciones = 'consultasRecibidas';

const submitForm = async (values) => {
  const { email, names, surnames, phone, category, certificate, organisation } = values;
  const newParticipantRef = doc(collection(db, collectionInscripciones));
  const data = {
    "surnames": surnames.toUpperCase(),
    "names": names.toUpperCase(),
    "email": email.toUpperCase(),
    "phone": phone,
    "organisation": organisation?.toUpperCase() || null,
    "certificate": certificate,
    "category": category,
    "date": serverTimestamp(),
    "registeredBy": "WEB"
  };
  await setDoc(newParticipantRef, data);
}

const emailValidate = async (email) => {
  const q = query(collection(db, collectionInscripciones), where("email", "==", email.toUpperCase()));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
}

const initContactForm = (contactFormId = 'contactForm') => {
  const contactForm = document.getElementById(contactFormId);
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const now = new Date();
    const values = [ ...event.target ].reduce((prev, curr) => {
      if (curr.name === "certificate") {
        return { ...prev, [curr.name]: curr.checked };
      }
      else {
        return { ...prev, [curr.name]: curr.value };
      }
    }, {});
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    const successMessage = document.createElement('div');
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
    successMessage.innerHTML += `<div class="success-message__message">Felicidades ${values.names.toUpperCase()}, se ha realizado tu inscripción, en breve recibirás un correo con el enlace para acceder al evento. <br/> ¡Te esperamos!</div>`;
    if(values.certificate === true) {
      successMessage.innerHTML += `<div class="price__button-container price__button-margin"><a class="waves-effect waves-light price__button btn modal-trigger" href="#modal1">Conoce los métodos de pago</a></div>`
    }
    successMessage.classList.add('success-message');

    const existsEmailMessage = document.createElement('div');
    existsEmailMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    existsEmailMessage.innerHTML += `<div class="success-message__message">${values.names.toUpperCase()}, lo sentimos, ya se ha realizado una inscripción con el email "${values.email}". Si cree que se trata de un error contáctenos a través de las redes sociales."</div>`;
    existsEmailMessage.classList.add('success-message');

    const pillinMessage = document.createElement('div');
    pillinMessage.innerHTML = '<i class="fas fa-eye"></i>';
    pillinMessage.innerHTML += `<div class="success-message__message">${values.names.toUpperCase()}, pillín, lograste habilitar el formulario, si llegas a registrarte te invito una gaseosa ;).</div>`;
    pillinMessage.classList.add('success-message');

    const parent = contactForm.parentNode;
    if(values.category === "") {
      M.toast({html: 'Debe seleccionar una categoría de participante.' , classes: 'rounded'})
    }
    else {
      parent.replaceChild(spinner, contactForm);
      try {
        const existsEmail = await emailValidate(values.email);
        console.log(now.getHours());
        console.log(now.getMinutes());
        if(now.getHours() >= 9 && now.getMinutes() >= 0) {
          parent.replaceChild(pillinMessage, spinner);
        } else {
          if(!existsEmail) {
            await submitForm(values);
            parent.replaceChild(successMessage, spinner);
          } else {
            parent.replaceChild(existsEmailMessage, spinner);
          }
        }
        
      } catch(err) {
        alert('Error en el formulario.');
        console.log({ err })
        parent.replaceChild(contactForm, spinner);
      }
    }
  });
}

export default initContactForm;
