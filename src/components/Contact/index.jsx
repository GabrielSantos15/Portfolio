import { useState } from "react";
import "./Contact.estilos.css";
import emailjs from "@emailjs/browser";
import {
  FaCheck,
  FaCopy,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("preencha todas as informações");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      about: about,
      category: category,
      message: message,
    };

    emailjs
      .send(
        "service_0fzacxn",
        "template_cvczgah",
        templateParams,
        "Abb-QfaGMjtmCjbwB"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setAbout("");
          setMessage("");
        },
        (err) => {
          console.log("erro: ", err);
        }
      );
  }

  const [copied, setCopied] = useState(false);
  const emailDev = ["gabriel.contato", "@", "email.com"].join("");

  const handleCopy = () => {
    navigator.clipboard.writeText(emailDev);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contactSection">
      <header className="section-header">
        <h2>Contato</h2>
        <p>Se você busca alguém que entrega resultado, vamos conversar</p>
      </header>
      <article>
        <h3>Vamos Trabalhar Juntos</h3>
        <p>
          Estou aberto a oportunidades profissionais e projetos freelance. Se
          você tem uma vaga ou precisa tirar uma ideia do papel, este é o canal
          certo.
        </p>
        <div className="contato-container">
          <span>
            <a
              href={`https://wa.me/${"15996767578"}?text=${encodeURIComponent(
                "Olá Gabriel, vi seu portfólio e gostaria de conversar!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              <span>Chamar no WhatsApp</span>
            </a>
          </span>
          <div className="email-container">
            <a href={"mailto:" + emailDev} className="email-text">
              {emailDev}
            </a>

            <button
              className={`copy-btn ${copied ? "success" : ""}`}
              onClick={handleCopy}
              aria-label="Copiar e-mail"
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </button>
          </div>
          <div className="redesSociais">
            <a href="https://github.com/GabrielSantos15" target="_blank">
              <FaGithub className="fa-brands fa-github"></FaGithub>
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-santos-9217112a2"
              target="_blank"
            >
              <FaLinkedin className="fa-brands fa-linkedin"></FaLinkedin>
            </a>

            <a href="https://www.instagram.com/gabrieldos5689" target="_blank">
              <FaInstagram className="fa-brands fa-instagram"></FaInstagram>
            </a>
          </div>
        </div>
      </article>
      <article className="forms-container">
        <form onSubmit={sendEmail}>
          <h3>Entre em contato</h3>
          <fieldset className="sender-info">
            <span>
              <label htmlFor="nameInput">Nome</label>
              <input
                id="nameInput"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </span>
            <span>
              <label htmlFor="emailInput">Email</label>
              <input
                id="emailInput"
                type="email"
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </span>
          </fieldset>
          <fieldset className="message-container">
            <span>
              <label htmlFor="categorySelect">Categoria</label>
              <select
                id="categorySelect"
                name="categorySelect"
                className="select-input"
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="recruitment">Recrutamento / Vaga</option>
                <option value="freelance">Projeto Freelance</option>
                <option value="networking">Networking</option>
                <option value="other">Outro</option>
              </select>
            </span>
            <span>
              <label htmlFor="assuntoInput">Assunto</label>
              <input
                id="assuntoInput"
                type="text"
                placeholder="Qual o assunto"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                value={about}
                required
              />
            </span>
            <span>
              <label htmlFor="messageInput">Mensagem</label>
              <textarea
                id="messageInput"
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              ></textarea>
            </span>
          </fieldset>
          <small class="form-hint">Campos obrigatórios marcados com *</small>
          <input className="silver-reflection-bg" type="submit" />
        </form>
      </article>
    </section>
  );
}
