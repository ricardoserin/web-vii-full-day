import { collection, doc, serverTimestamp, setDoc, query, getDocs, where } from "firebase/firestore";
import { db } from "./firebase";

const submitForm = async (values) => {
  console.log(values);
  const { email, names, surnames, phone, category, certificate, organisation } = values;
  const newParticipantRef = doc(collection(db, 'consultasRecibidas'));
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
  console.log('data firebase');
  console.log(data);
  await setDoc(newParticipantRef, data);
}

const emailValidate = async (email) => {
  const q = query(collection(db, "consultasRecibidas"), where("email", "==", email.toUpperCase()));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
  });
  if(querySnapshot.size > 0) return true;
  else return false;  
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
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    const successMessage = document.createElement('div');
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i>';
    successMessage.innerHTML += `<div class="success-message__message">Felicidades ${values.names.toUpperCase()}, se ha realizado tu inscripción, en breve recibirás un correo de confirmación.</div>`;
    successMessage.classList.add('success-message');

    const existsEmailMessage = document.createElement('div');
    existsEmailMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    existsEmailMessage.innerHTML += `<div class="success-message__message">${values.names.toUpperCase()}, lo sentimos, ya se ha realizado una inscripción con el email "${values.email}". Si cree que se trata de un error contáctenos a través de las redes sociales."</div>`;
    existsEmailMessage.classList.add('success-message');
    const parent = contactForm.parentNode;
    if(values.category === "") {
      M.toast({html: 'Debe seleccionar una categoría de participante.' , classes: 'rounded'})
    }
    else {
      parent.replaceChild(spinner, contactForm);
      try {
        const existsEmail = await emailValidate(values.email);
        if(!existsEmail) {
          await submitForm(values);
          parent.replaceChild(successMessage, spinner);
        } else {
          parent.replaceChild(existsEmailMessage, spinner);
        }
        
      } catch(err) {
        alert('Error al enviar el formulario');
        console.log({ err })
        parent.replaceChild(contactForm, spinner);
      }
    }
  });
}

export default initContactForm;
