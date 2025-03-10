// Definindo o enum Cargo
enum Cargo {
    GERENTE = "GERENTE",
    FUNCIONARIO = "FUNCIONARIO",
    ESTAGIARIO = "ESTAGIARIO"
}

// Tipo Pessoa
type Pessoa = {
    nome: string;
    cargo: Cargo;
};

// Função para verificar se a pessoa é GERENTE
function verificarGerencia(pessoa: Pessoa): boolean {
    return pessoa.cargo === Cargo.GERENTE;
}

// Testando a função
const pessoa1: Pessoa = {
    nome: "Thiago",
    cargo: Cargo.GERENTE
};

const pessoa2: Pessoa = {
    nome: "João",
    cargo: Cargo.FUNCIONARIO
};

console.log(verificarGerencia(pessoa1)); // true
console.log(verificarGerencia(pessoa2)); // false


// Definindo o enum StatusPedido
enum StatusPedido {
    PENDENTE = "PENDENTE",
    PAGO = "PAGO",
    CANCELADO = "CANCELADO"
}

// Tipo Pedido
type Pedido = {
    id: number;
    valor: number;
    status: StatusPedido;
};

// Função para validar o status do pedido
function validarPedido(pedido: Pedido): string {
    if (pedido.status === StatusPedido.PENDENTE || pedido.status === StatusPedido.PAGO) {
        return "Pedido válido";
    } else if (pedido.status === StatusPedido.CANCELADO) {
        return "Não é possível processar pedidos cancelados";
    }
    return "Status desconhecido";
}

// Testando a função
const pedido1: Pedido = { id: 1, valor: 100, status: StatusPedido.PENDENTE };
const pedido2: Pedido = { id: 2, valor: 200, status: StatusPedido.CANCELADO };

console.log(validarPedido(pedido1)); // Pedido válido
console.log(validarPedido(pedido2)); // Não é possível processar pedidos cancelados


// Definindo o enum Categoria
enum Categoria {
    PERECIVEL = "PERECIVEL",
    NAO_PERECIVEL = "NAO_PERECIVEL"
}

// Definindo o tipo Produto
type Produto = {
    nome: string;
    preco: number;
    categoria: Categoria;
};

// Função para verificar desconto
function verificarDesconto(produto: Produto): number {
    if (produto.categoria === Categoria.PERECIVEL) {
        return 10; // Desconto de 10% para produtos perecíveis
    }
    return 0; // Sem desconto para produtos não perecíveis
}

// Testando a função
const produto1: Produto = { nome: "Leite", preco: 5, categoria: Categoria.PERECIVEL };
const produto2: Produto = { nome: "Livro", preco: 50, categoria: Categoria.NAO_PERECIVEL };

console.log(verificarDesconto(produto1)); // 10
console.log(verificarDesconto(produto2)); // 0


// Definindo o enum Nivel
enum Nivel {
    BASICO = "BASICO",
    INTERMEDIARIO = "INTERMEDIARIO",
    AVANCADO = "AVANCADO"
}

// Tipo Curso
type Curso = {
    nome: string;
    duracaoHoras: number;
    nivel: Nivel;
};

// Tipo CursoComDesconto (interseção de Curso com desconto opcional)
type CursoComDesconto = Curso & {
    desconto?: number; // Desconto opcional
};

// Função para calcular o preço do curso
function calcularPreco(curso: CursoComDesconto): number {
    let preco = curso.duracaoHoras * 10; // Preço base de R$10 por hora

    // Aplicando o desconto, se houver
    if (curso.desconto) {
        preco -= (preco * curso.desconto) / 100;
    }

    // Adicionando incremento para cursos avançados
    if (curso.nivel === Nivel.AVANCADO) {
        preco += (preco * 10) / 100; // 10% a mais para cursos avançados
    }

    return preco;
}

// Testando a função
const curso1: CursoComDesconto = { nome: "Curso de TypeScript", duracaoHoras: 20, nivel: Nivel.INTERMEDIARIO, desconto: 20 };
const curso2: CursoComDesconto = { nome: "Curso de Node.js", duracaoHoras: 30, nivel: Nivel.AVANCADO };

console.log(calcularPreco(curso1)); // Preço com 20% de desconto
console.log(calcularPreco(curso2)); // Preço com 10% de incremento para curso avançado