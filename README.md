# 🍔 DevBurguer - Menu Interativo de Hamburgueria

![JavaScript](assets/img/javascript.png)
![CSS3](assets/img/css.png)
![HTML5](assets/img/html.png)


Um menu interativo de hamburgueria desenvolvido para consolidar fundamentos de **lógica de programação**, **manipulação do DOM** e aplicação prática de **métodos de array** no JavaScript Vanilla.

## 🚀 Funcionalidades e Métodos Utilizados

- **Listagem Dinâmica (`forEach`)**: Percorre o objeto de dados estruturado para renderizar a interface do cardápio de forma limpa, manipulando elementos HTML dinamicamente com `innerHTML`.
- **Mapeamento de Dados (`map`)**: Aplicação de regras de negócio para calcular 10% de desconto em tempo real, estruturando um novo *array* de objetos com o Spread Operator (`...`) sem alterar a base de dados original.
- **Agregação de Valores (`reduce`)**: Acumulador matemático que calcula o valor total bruto de todos os produtos do menu.
- **Filtragem Estruturada (`filter`)**: Filtragem condicional booleana para segmentar e exibir apenas produtos pertencentes à categoria *vegan*.
- **Busca em Tempo Real (*Search Input*)**: Captura de eventos de digitação (`input`), tratamento de strings (`toLowerCase`) e validação de substrings (`includes`) para realizar a busca preditiva de produtos.

## 🎨 Interface e Arquitetura CSS

- **CSS Grid Layout**: Grid responsivo configurado com `grid-template-columns` para um alinhamento fluído e harmônico dos cards de produtos.
- **Grid Column Spanning**: Uso estratégico de `grid-column: 1 / -1` para quebra de layout e destaque centralizado na linha de totalização do método `reduce`.
- **UX/UI Interativa**: Efeitos de transição suave (`transition`), animações de escala suave (`transform: scale`) e flutuação (*Hover effects*) ao interagir com cards e botões.
- **Estilização Avançada de Input**: Injeção de ícone decorativo (*Search Icon*) de lupa via propriedade `background-image` e controle de espaçamento interno com `padding-left`.

## 🛠️ Tecnologias e Conceitos-Chave

- **Palavras-chave**: *Front-end, JavaScript Vanilla, ES6+, Métodos de Array, Manipulação do DOM, innerHTML, Event Listeners, Arrow Functions, Spread Operator, CSS Grid, Flexbox, Design Responsivo, Clean Code, Desenvolvimento Web, Git, GitHub.*

## 🔧 Como Executar

1. Clone o repositório ou faça o download dos arquivos.
2. Execute o arquivo `index.html` utilizando a extensão **Live Server** (Porta 5500).

---
Projeto desenvolvido focado em engenharia de software front-end e boas práticas de desenvolvimento web.
