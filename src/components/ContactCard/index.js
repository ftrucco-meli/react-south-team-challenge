import React from 'react';
import './styles';

const ContactCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
  picture,
}) => {
  const [state, setState] = React.useState({
    firstName,
    lastName,
    email,
    phoneNumber,
    city: location.city,
    state: location.state,
    picture,
  });

  return (
    <div className="contact-card">
      <div className="contact-card--header">
        <p className="contact-card--fullname">{`${state.firstName} ${state.lastName}`}</p>
        <img className="contact-card--picture" src={picture.large} />
      </div>
      <div className="contact-card--body">
        <p className="contact-card--info">{state.email}</p>
        <p className="contact-card--info">{state.phoneNumber}</p>
        <p className="contact-card--info">{`${state.city} ${state.state}`}</p>
      </div>
    </div>
  );
};

export default ContactCard;
