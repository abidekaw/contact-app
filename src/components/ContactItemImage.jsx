/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactItemImage = ({ imageUrl }) => {
    // console.log(imageUrl);
    return (
        <div className="contact-item--image">
            <img src={imageUrl} alt="avatar" />
        </div>
    );
};

export default ContactItemImage;
