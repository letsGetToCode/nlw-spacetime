// alert("Seja bem vindo! Por favor clique no botão abaixo")

function ola() {
  let idade = prompt(
    "Bem vindo, por favor, os números correspondentes a sua idade"
  )
  if (idade < "18") {
    alert(
      "Alguns artigos que abordam temas impróprios para sua faixa etária ficarão indisponíveis."
    )
  } else {
    alert("Fique a vontade para explorar todo os artigos do nosso site!")
  }
}
