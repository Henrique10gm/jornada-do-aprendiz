function Home() {
  return (
    <div>
      <header>
        <h1>Em breve!</h1>
      </header>
      <main>
        <p>
          Estamos neste exato momento construindo um novo local na internet para
          fundadores de startups, Venture Capitalists ou quem almeja entrar
          nesse mundo e precisa consumir conteúdos com valor concreto. Somos
          pessoas brutalmente exatas e empáticas, simultaneamente, onde o
          termômetro para entender se isso está sendo aplicado é simples: as
          pessoas estão se afastando ou se aproximando?
        </p>
        <form id="emailForm" onSubmit={handleEmailSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail aqui"
            required
          />
          <button type="submit">Notifique-me!</button>
        </form>
      </main>
    </div>
  );
}

function handleEmailSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  alert(
    "Obrigado por se inscrever! Você receberá novidades em breve no e-mail: " +
      email,
  );
}

export default Home;
