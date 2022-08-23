import React, { useState } from "react";
import "./Sign.css";
import ImageBook from "../../Assets/Login/hp1.png";

const Sign = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const ValueCreate = [
    { name: "Mateus", pass: "1234" },
    { name: "teste", pass: "1234" },
  ];
  const hadleValue = () => {
    ValueCreate.map(() => {
      if (name == "Mateus" && pass == "1234") {
        const refUrl = window.location.href;
        
      }
    });
  };
  return (
    <div className="box-sign">
      <div className="form">
        <h1>BIBLIOTECA ONLINE</h1>
        <input
          type="text"
          placeholder="E-mail"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button onClick={hadleValue} className="btn-primary">
          Sign
        </button>
      </div>
      <div className="image-book">
        {/* <h1>Recomendação da Semana</h1> */}
        <img style={{ width: 400 }} src={ImageBook} />
      </div>
    </div>
  );
};

export default Sign;
