import phoneIcon from '../images/phone-icon.png';
import mailIcon from '../images/mail-icon.png';
import './Contact.css';

const Contact = ({ img, name, phone, email }) => {
  
  return (
    <>
      <article className="contact-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone icon" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail icon" />
          <p>{email}</p>
        </div>
      </article>
    </>
  );
};

export default Contact;
