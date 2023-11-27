/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactItemBody = ({ name, tag }) => {
    return (
        <div className="contact-item--body">
            <h3 className="contact-item--title">{name}</h3>
            <p className="contact-item--tag">@{tag}</p>
        </div>
    );
};

export default ContactItemBody;
