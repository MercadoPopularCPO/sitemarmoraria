# Como trocar as fotos

- Primeiro faça o upload das fotos no [Imgur](https://imgur.com/)
- Ainda no imgur, clique na foto que fez o upload, e copie o "link direto"

- Agora aqui no github, entre na pasta "src" e depois em "pages"
- Depois entre na pasta correspondente da tela em que deseja colocar as fotos
sendo elas:
"Home" = tela inicial
"Catalogo" = paginas internas, onde "balcoes" é a pagina de balcoes, etc.

- entrando no arquivo em que deseja adicionar ou trocar a foto, procure "const cards"
- nele, terá varias informações rodeadas por  { }
- cada { } dessa é um campo naquela pagina.

- nessas { }, vai ter "title", que é onde vc colocará o nome do que você estará colocando. Ex: title: 'marmore ouro brasil' (para uma foto do marmore ouro brasil)

- também nas { } tem um campo chamado 'img'. Nesse campo você colará o link direto que copiou do Imgur.

- Ainda nas { } tem o campo 'imageTitle'. Esse campo é opcional, mas no geral, você escreve a mesma coisa que escreveu no title.