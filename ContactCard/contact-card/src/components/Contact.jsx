
import phoneIcon from '../images/phone-icon.png';
import mailIcon from '../images/mail-icon.png';
import './Contact.css';

const Contact = (props) => {
  console.log(props.name)
  return (
    <>
      <article className="contact-card">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone icon" />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail icon" />
          <p>{props.email}</p>
        </div>
      </article>
    </>
  );
};

export default Contact;
