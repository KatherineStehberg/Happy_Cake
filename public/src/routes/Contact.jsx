import React, { useState } from "react";

export default function Contact() {
    const [data, setData] = useState({
        email: '',
        description: ''
    });
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Cuéntanos, ¿En qué te podemos ayudar?</h1>
            <form onSubmit={handleSubmit} style={{ border: `${!isValid ? "1px solid red" : "1px solid green"}` }}>
                <div className="container-input">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email" value={data.email} required onChange={handleChange} />
                </div>
                <div className="container-input">
                    <label htmlFor="description">Descripción:</label>
                    <textarea name="description" value={data.description} required onChange={handleChange}></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

