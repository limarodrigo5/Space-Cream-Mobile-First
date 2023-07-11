const mediaQuery = window.matchMedia("(min-width: 1024px)");
const textoParagrafo = document.getElementById("texto-paragrafo");

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    textoParagrafo.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem. ";
  } else {
    textoParagrafo.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, ";
  }
}

handleMediaQueryChange(mediaQuery); // Executa a função uma vez no carregamento da página
mediaQuery.addEventListener("change", handleMediaQueryChange); // Adiciona um ouvinte de evento para a mudança na media query e chama a função handleMediaQueryChange quando a mudança ocorrer
