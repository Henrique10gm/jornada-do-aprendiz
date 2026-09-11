import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const suggestionsRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert(
      "Obrigado, " +
        name +
        "! Suas sugestões foram recebidas. Você receberá novidades em breve no e-mail: " +
        email,
    );
  }

  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="vg5m804hrgf6bz6d8xlevqoo7gswzf"
        />
        <title>Em Construção</title>
      </Head>
      <header>
        <h1>Em breve!</h1>
      </header>
      <main>
        <p>
          Estamos neste exato momento construindo um novo local na internet
          para fundadores de startups, Venture Capitalists ou quem almeja
          entrar nesse mundo e precisa consumir conteúdos com valor concreto.
          Somos pessoas brutalmente exatas e empáticas, simultaneamente, onde
          o termômetro para entender se isso está sendo aplicado é simples:
          as pessoas estão se afastando ou se aproximando?
        </p>
        <form id="suggestionForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome completo"
            ref={nameRef}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail aqui"
            ref={emailRef}
            required
          />
          <textarea
            id="suggestions"
            name="suggestions"
            placeholder="Suas sugestões para nossa plataforma..."
            ref={suggestionsRef}
            required
          ></textarea>
          <button type="submit">Enviar Sugestões</button>
        </form>
      </main>
    </>
  );
}
