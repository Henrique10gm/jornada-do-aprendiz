document
  .getElementById("suggestionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const suggestions = document.getElementById("suggestions").value;
    alert(
      "Obrigado, " +
        name +
        "! Suas sugestões foram recebidas. Você receberá novidades em breve no e-mail: " +
        email,
    );
  });
