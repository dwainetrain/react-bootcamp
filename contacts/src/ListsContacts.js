import React from "react";

class ListContacts extends React.Component {
  render() {
    return (
      <ol className="ContactList">
        {this.props.contacts.map(contact => (
          <li key={contact.email} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL}`
              }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button
              onClick={() => this.props.onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
