### Acesse em : 
https://pokedex-puce-zeta.vercel.app/

### Como rodar:

Clona repositório:
```sh
git clone https://github.com/wendell-priebe/Pokedex.git
```
Acessa a pasta:
```sh
cd pokedex
```
Instala as dependencias:
```sh 
npm install
```
Roda como desenvolvedor:
```sh 
npm run dev
```

### Futuras correções e melhorias:
- Infelismente eu não sabia como funcionava a exportação default do styled-components e acabei criando varios componentes e exportando-os do arquivo de style.tsx.
Terei que refazer o CSS 😥 no arquivo de estilo com um componentes exportando default.

- A API em graphql utilizada não tinha algumas informações como a descrição e evolução dos pokemons, fazer essas pesquisas utilizando outra API.

- Fazer sidebar na imagem de engrenagem da tela de login.

- Fazer modo dark mode e melhorar o estilo do botão.
