# Back-end I - Desenvolvimento Web

Este repositório contém os exercícios e projetos desenvolvidos durante a disciplina **Back-end I**, com foco em **desenvolvimento web** utilizando **TypeScript**. A matéria abrange conceitos fundamentais de programação para o desenvolvimento de aplicações back-end, como manipulação de dados, validação de permissões, controle de fluxo e aplicação de regras de negócios.

## Conteúdo Abrangido:
- **Validação de permissões por cargo**: Utilização de enums para representar cargos e validação de acesso com base no cargo de um usuário.
- **Gestão de pedidos**: Manipulação de status de pedidos com enums e validação de condições para o processamento de pedidos.
- **Desconto de produtos**: Cálculo de descontos aplicáveis a produtos, utilizando enums para categorizar produtos como perecíveis ou não perecíveis.
- **Cálculo de preços de cursos**: Cálculo dinâmico de preços de cursos, com base em descontos e diferentes níveis de complexidade (Básico, Intermediário, Avançado).

## Tecnologias Utilizadas:
- **TypeScript**: Para garantir tipagem forte e segurança no código.
- **Enums**: Para definir categorias e estados de forma clara e reutilizável.
- **Funções de manipulação de dados e lógica de negócios**: Para aplicar regras e realizar cálculos.

## Objetivo da Disciplina:
O objetivo desta disciplina é fornecer uma base sólida para o desenvolvimento de sistemas back-end robustos, aplicando boas práticas de programação e estruturando o código de forma eficiente e reutilizável.

## Estrutura do Repositório:
- **Exercícios**: Scripts de TypeScript abordando temas como enums, tipos, funções, e manipulação de dados.
- **Projetos**: Implementações práticas de sistemas simples que validam permissões, processam pedidos, e calculam preços de produtos e serviços.

## Exemplos de Implementação:

### Validação de Permissões por Cargo

```typescript
enum Cargo {
    GERENTE = "GERENTE",
    FUNCIONARIO = "FUNCIONARIO",
    ESTAGIARIO = "ESTAGIARIO"
}

type Pessoa = {
    nome: string;
    cargo: Cargo;
};

function verificarGerencia(pessoa: Pessoa): boolean {
    return pessoa.cargo === Cargo.GERENTE;
}
