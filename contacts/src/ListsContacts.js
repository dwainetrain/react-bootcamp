import React from "react";
import PropTypes from "prop-types";

class ListContacts extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
  };

  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    const showAll = () => {
      this.setState(() => ({
        query: ""
      }));
    };

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {/* The && of this statement is a guard operator */}
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Showing {showingContacts.length} of {contacts.length} possible
              contacts. <button onClick={() => showAll()}>Show all.</button>
            </span>
          </div>
        )}
        <ol className="ContactList">
          {showingContacts.map(contact => (
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
                onClick={() => onDeleteContact(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
