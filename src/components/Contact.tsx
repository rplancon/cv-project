import React from "react";

import "./Contact.css";

interface ContactProps {
  contact: {
    id: number;
    phone: string;
    mail: string;
    linkedin: string;
    github: string;
  }
};

const Contact:React.FC<ContactProps> = props => {
  const contact = props.contact;
  return <div className="contact__container">
    <h2 className="contact__section_title">Coordonnées</h2>
    <h4 className="contact__phone">Téléphone: <a href={"tel:"+contact.phone}>{contact.phone}</a></h4>
    <h4 className="contact__mail">E-mail: <a href={"mailto:"+contact.mail}>{contact.mail}</a></h4>
    <h4 className="contact__mail">LinkedIn: <a href={contact.linkedin} target="_blank" rel='noreferrer'>Robin Plançon</a></h4>
    <h4 className="contact__mail">Github: <a href={contact.github} target="_blank" rel='noreferrer'>rplancon</a></h4>
  </div>
}

export default Contact;