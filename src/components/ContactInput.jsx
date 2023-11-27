/* eslint-disable react/prop-types */
import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tag: "",
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onSubmitHandle(e) {
        e.preventDefault();

        this.props.addContact(this.state);
        this.setState({ name: "", tag: "" });
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitHandle}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={(e) => this.setState({ tag: e.target.value })} />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;
