import { useState } from "react";

export const ContactForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isChecked, setIsChecked ] = useState(false);

    const consentText = "En remplissant ce formulaire, vous consentez à fournir ces informations à notre établissement. Vous bénéficiez d'un droit d'accès, de modification, de rectification et de suppression de vos données personnelles. Vous bénéficiez du droit de vous inscrire sur la liste d'opposition au démarchage téléphonique. Pour les exercer, merci de nous contacter."
    console.log(isChecked);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            phone,
            message,
        };
        if (isChecked) {
        console.log(formData);
        }
    }
    return (
        <section className="contact">
            <form action="" className="contact__form">
                <label htmlFor="name" className="contact__form-label"></label>
                <input type="text" id="name" className="contact__form-input" placeholder="Nom*" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email" className="contact__form-label"></label>
                <input type="email" id="email" className="contact__form-input" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone" className="contact__form-label"></label>
                <input type="tel" id="phone" className="contact__form-input" placeholder="Téléphone*" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="message" className="contact__form-label"></label>
                <textarea name="message" id="message" cols="30" rows="5" className="contact__form-input" placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className="contact__form-wrapper">
                <input type="checkbox" name="consent" id="consent" onChange={()=> setIsChecked(!isChecked)} />
                <label htmlFor="consent" className="contact__form-label">{consentText}</label>
                </div>
                <button type="submit" className="contact__form-btn" onClick={onSubmit}>Envoyer</button>
            </form>
            
        </section>
    );
};