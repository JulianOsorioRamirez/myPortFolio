import styled from "styled-components";

function Formulario() {
  return (
    <FormContainter>
      <div>
        {" "}
        <h1>Contactame !</h1>{" "}
        <form className="cf">
          {" "}
          <div className="half left cf">
            {" "}
            <input type="text" placeholder="Nombre" name="user_name" />{" "}
            <input type="email" placeholder="Email" name="user_email" />{" "}
          </div>{" "}
          <div className="half right cf">
            {" "}
            <textarea name="message" type="text" placeholder="Mensaje"></textarea>{" "}
          </div>{" "}
          <input type="submit" value="Submit" id="input-submit" />{" "}
        </form>{" "}
      </div>
    </FormContainter>
  );
}

export default Formulario;

const FormContainter = styled.div`
  
  
  h1 {
    text-align: center;
    color: #a8a8a8;
    font-family: "Atkinson";
  }
  form {
    max-width: 600px;
    text-align: center;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    
    
    align-items: center
  }
  input,
  textarea {
    border: 0;
    outline: 0;
    padding: 1em;
    border-radius: 8px;
    display: block;
    width: 100%;
    margin-top: 1em;
    font-family: "Atkinson";
    resize: none;
  }
  #input-submit {
    color: white;
    background: #e74c3c;
    cursor: pointer;
    font-family: "Atkinson";
  }
  #input-submit:hover {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  textarea {
    height: 126px;
  }
  .half {
    float: left;
    width: 48%;
    margin-bottom: 1em;
  }
  .right {
    width: 50%;
  }
  .left {
    margin-right: 2%;
  }
  @media (max-width: 480px) {
    .half {
      width: 100%;
      float: none;
      margin-bottom: 0;
    }
  }
  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }
  .cf:after {
    clear: both;
  }
`;
