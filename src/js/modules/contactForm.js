import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const submitForm = async (values) => {
  console.log(values);
  const { email, names, surnames, phone, certificate, organisation } = values;
  const newParticipantRef = doc(collection(db, 'consultasRecibidas'));
  const data = {
    "surnames": surnames.toUpperCase(),
    "names": names.toUpperCase(),
    "email": email.toUpperCase(),
    "phone": phone,
    "organisation": organisation,
    "certificate": certificate,
    "date": serverTimestamp()
  };
  console.log('data firebase');
  console.log(data);
  await setDoc(newParticipantRef, data);
}

const initContactForm = (contactFormId = 'contactForm') => {
  const contactForm = document.getElementById(contactFormId);
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const values = [ ...event.target ].reduce((prev, curr) => {
      if (curr.name === "certificate") {
        return { ...prev, [curr.name]: curr.checked };
      }
      else {
        return { ...prev, [curr.name]: curr.value };
      }
    }, {});
    console.log(values);
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    const successMessage = document.createElement('div');
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
    successMessage.innerHTML += `<div class="success-message__message">Felicidades ${values.names.toUpperCase()}, se ha realizado tu pre-inscripción, pronto nos pondremos en contacto contigo</div>`;
    successMessage.classList.add('success-message');
    const parent = contactForm.parentNode;
    parent.replaceChild(spinner, contactForm);
    try {
      await submitForm(values);
      parent.replaceChild(successMessage, spinner);
    } catch(err) {
      alert('Error al enviar el formulario');
      console.log({ err })
      parent.replaceChild(contactForm, spinner);
    }
  });
}

export default initContactForm;
