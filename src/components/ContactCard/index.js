import React from 'react';
import './styles';
import EditIcon from '../Icons/Edit';
import CheckMarkIcon from '../Icons/CheckMark';
import getUsers from '../../services/users';

const ContactCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
  picture,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [state, setState] = React.useState({
    name: `${firstName} ${lastName}`,
    email,
    phoneNumber,
    location: `${location.city}, ${location.state}`,
    picture,
  });

  const handleOnEditClick = () => {
    setIsEditing(!isEditing);
    getUsers({ limit: 40 }).then((response) => console.log(response));
  };

  const Icon = isEditing ? CheckMarkIcon : EditIcon;

  return (
    <div className="contact-card">
      <div className="contact-card--header">
        <div className="header--wrapper">
          <Icon className="contact-card--icon" onClick={handleOnEditClick} />
          <input
            className="contact-card--fullname"
            value={`${state.name}`}
            disabled={!isEditing}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <img className="contact-card--picture" src={picture.large} />
      </div>
      <div className="contact-card--body">
        <input
          className="contact-card--info"
          value={state.email}
          disabled={!isEditing}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <input
          className="contact-card--info"
          value={state.phoneNumber}
          disabled={!isEditing}
          onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
        />
        <input
          className="contact-card--info"
          value={`${state.location}`}
          disabled={!isEditing}
          onChange={(e) => setState({ ...state, location: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ContactCard;
