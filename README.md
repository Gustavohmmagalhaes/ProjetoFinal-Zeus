## ProjetoFinal-Zeus
Projeto final da trilha de front end da Comp Júnior.

## Visão Geral

O sistema a ser desenvolvido será o Zeus, um sistema interno da
Comp Júnior para gestão de membros, penalidades, equipamentos,
projetos e clientes.

## Tecnologias Utilizadas

- Linguagens: Node.js v18, TypeScript v5, JavaScript 
- Frameworks: Spring Boot 2.7(JDK), React(versão 18)(NodeJs 18)
- Banco de Dados: 
- HTML v5
- CSS v3
- Ferramenta de construção Front-End: Vite (versão 4)

## Estrutura de diretório

```plaintext
my-project/
├── backend/                  # Código do servidor Node.js com Express, Spring Boot ou outro framework back-end
│   ├── node-backend/         # Diretório do backend com Node.js
│   │   ├── src/              # Código fonte
│   │   │   ├── controllers/  # Controladores da API
│   │   │   ├── models/       # Modelos de dados e schemas (Mongoose para MongoDB, Sequelize para SQL, etc.)
│   │   │   ├── routes/       # Definições de rotas da API
│   │   │   ├── services/     # Lógica de negócios
│   │   │   ├── utils/        # Funções utilitárias
│   │   │   ├── app.ts        # Arquivo principal de configuração do app
│   │   │   ├── server.ts     # Arquivo para inicialização do servidor
│   │   ├── package.json      # Dependências do Node.js, scripts, etc.
│   │   └── tsconfig.json     # Configuração do TypeScript
│   └── spring-boot-backend/  # Diretório do backend com Spring Boot (se for utilizado)
│       ├── src/
│       │   ├── main/         # Código fonte principal
│       │   │   ├── java/     # Código Java
│       │   │   ├── resources/ # Arquivos de configuração do Spring (application.properties ou application.yml)
│       │   │   ├── controllers/ # Controladores do Spring Boot
│       │   │   ├── models/   # Entidades e classes de modelo
│       │   ├── pom.xml       # Gerenciamento de dependências com Maven (ou build.gradle com Gradle)
│       └── build/            # Arquivos gerados pela compilação
│
├── frontend/                 # Código do front-end com React e Vite
│   ├── src/                  # Código fonte do front-end
│   │   ├── assets/           # Imagens, fontes, ícones, etc.
│   │   ├── components/       # Componentes React reutilizáveis
│   │   ├── pages/            # Páginas ou views do React
│   │   ├── hooks/            # Hooks customizados
│   │   ├── services/         # Funções para fazer chamadas de API
│   │   ├── store/            # Gerenciamento de estado (Redux, Context API, etc.)
│   │   ├── styles/           # Arquivos CSS ou SASS
│   │   ├── App.tsx           # Componente principal da aplicação
│   │   ├── index.tsx         # Arquivo de inicialização
│   │   └── vite.config.ts    # Configuração do Vite
│   ├── public/               # Arquivos públicos (index.html, favicon, etc.)
│   ├── package.json          # Dependências do React, scripts, etc.
│   └── tsconfig.json         # Configuração do TypeScript para o front-end
│
├── database/                 # Arquivos de banco de dados, como scripts SQL ou configuração de ORM
│   ├── migrations/           # Scripts de migração do banco de dados (Sequelize, TypeORM, Flyway, Liquibase, etc.)
│   ├── seeds/                # Scripts para popular o banco de dados com dados iniciais
│   └── db-config.ts          # Arquivo de configuração para a conexão do banco de dados
│
├── .env                      # Arquivo de variáveis de ambiente para configurações sensíveis (ex: credenciais de banco)
├── .gitignore                # Arquivo para listar arquivos ou pastas que devem ser ignorados pelo Git
├── README.md                 # Documentação do projeto
└── docker-compose.yml        # Arquivo de configuração para o Docker
```

