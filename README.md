# Pokemon-Slider-Imersao-MapaDevWeek
### Desenvolvendo o primeiro projeto em HTML5, JS e CSS.
## Link do site finalizado: https://tgzx.github.io/Pokemon-Slider-Imersao-MapaDevWeek/

<img src="http://img.shields.io/static/v1?label=CODE&message=HTML%205&color=yellow&style=for-the-badge&logo=html5"/> <img src="http://img.shields.io/static/v1?label=CODE&message=CSS&color=blue&style=for-the-badge&logo=css"/> <img src="http://img.shields.io/static/v1?label=Progresso&message=em%20desenvolvimento&color=red&style=for-the-badge"/>

## Aparência
### Apenas HTML5:

![image](https://user-images.githubusercontent.com/82123497/181585295-6aea58da-4b62-45e6-8bd8-71d98470aa53.png)

### Adicionando CSS:

![image](https://user-images.githubusercontent.com/82123497/181782111-47c65b08-ee6d-41ed-9d3a-01d361179ba8.png)


## Código
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio | Tiago Moreira</title>
        <link rel="shortcut icon" href="src/imagens/pokebola.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Saira&display=swap" rel="stylesheet">

        <!-- Importando css para estilos no HTML -->
        <link rel="stylesheet" href="src/css/reset.css">
        <link rel="stylesheet" href="src/css/estilos.css">
        <link rel="stylesheet" href="src/css/responsivo.css">
</head>
<body>
   <header class="cabecalho">
    <img src="src/imagens/pokebola.png" alt="pokébola" class="pokebola">
    <h1 class="titulo">Pokédex</h1>
    <h3 class="by">by Tiago Moreira </h3>
   </header>

   <main class="pokemon-slider">
    <button class="btn-seta btn-voltar">
        <img src="src/imagens/seta.png" alt="seta voltar" class="btn-img">
    </button>

    <ul class="lista-pokemons">
        <li class="cartao selecionado fundo-1">
            <div class="informacoes">
                <h2 class="nome-pokemon">Mewtwo</h2>
                <p class="vida-pokemon">HP 800</p>
            </div>
            <div class="caixa-imagem">
                <img src="src/imagens/mewtwo.png" alt="mewtwo" class="imagem-pokemon">
            </div>
            <div class="descricao">
                <h3 class="d-titulo">Descrição</h3>
                <p align="justify" class="d-texto">Criado por Ken Sugimori, apareceu pela primeira vez nos jogos de vídeogame Pokémon Red e Blue e suas seqüencias.
                </p>
            </div>
        </li>
        <li class="cartao fundo-2">
            <div class="informacoes">
                <h2 class="nome-pokemon">Pikachu</h2>
                <p class="vida-pokemon">HP 300</p>
            </div>
            <div class="caixa-imagem">
                <img src="src/imagens/pikachu.png" alt="pikachu">
            </div>
            <div class="descricao">
                <h3 class="d-titulo">Descrição</h3>
                <p align="justify" class="d-texto">Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red
                                    and Blue, e foi criado por Satoshi Tajiri.

                </p>
            </div>
        </li>
        <li class="cartao fundo-3">
            <div class="informacoes">
                <h2 class="nome-pokemon">Charizzard</h2>
                <p class="vida-pokemon">HP 850</p>
            </div>
            <div class="caixa-imagem">
                <img src="src/imagens/charizard.png" alt="pikachu">
            </div>
            <div class="descricao">
                <h3 class="d-titulo">Descrição</h3>
                <p align="justify" class="d-texto">Criado por Ken Sugimori, Charizard apareceu pela primeira vez nos jogos Pokémon Red e Blue e subsequentes sequelas.

                </p>
            </div>
        </li>
    </ul>
    <button class="btn-seta">
        <img src="src/imagens/seta.png" alt="seta avançar" class="btn-img">
    </button>
</main>
</body>
</html>
~~~

[Topo do repositório](#pokemon-slider-imersao-mapadevweek)

[Topo do código](#código)
