/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ContactList from "./components/ContactList";
import { getData } from "./utils/data";
import ContactInput from "./components/ContactInput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };
        this.onDeleteHandle = this.onDeleteHandle.bind(this);
        this.onAddContactHandle = this.onAddContactHandle.bind(this);
    }

    onAddContactHandle({ name, tag }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: "/images/default.jpg",
                    },
                ],
            };
        });
    }

    onDeleteHandle(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        console.log(contacts);
        this.setState({ contacts });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Tambah Kontak</h1>
                <ContactInput addContact={this.onAddContactHandle} />
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandle} />
            </div>
        );
    }
}

// const contacts = getData();

// const App = () => {
//     return (
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts} />
//         </div>
//     );
// };

export default App;
