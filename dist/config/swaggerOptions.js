"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Filmes',
            version: '1.0.0',
            description: 'Documentação da API de Autenticação, Utilizadores e Filmes',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 5000}`,
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Movie: {
                    type: 'object',
                    required: ['title', 'releaseDate', 'trailerLink', 'poster', 'genres'],
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'ID único do filme (gerado automaticamente pelo MongoDB)',
                        },
                        title: {
                            type: 'string',
                            description: 'Título do filme',
                        },
                        releaseDate: {
                            type: 'string',
                            format: 'date',
                            description: 'Data de lançamento do filme',
                        },
                        trailerLink: {
                            type: 'string',
                            description: 'URL do trailer do filme',
                        },
                        poster: {
                            type: 'string',
                            description: 'Nome do arquivo do pôster do filme',
                        },
                        genres: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                            description: 'Lista de gêneros do filme',
                        },
                    },
                    example: {
                        title: "Inception",
                        releaseDate: "2010-07-16",
                        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
                        poster: "inception.jpg",
                        genres: ["Action", "Sci-Fi", "Thriller"],
                    },
                },
                User: {
                    type: 'object',
                    required: ['name', 'email', 'password'], // Campos obrigatórios
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'ID único do utilizador (gerado automaticamente pelo MongoDB)',
                        },
                        name: {
                            type: 'string',
                            description: 'Nome do utilizador',
                            example: "John Doe",
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'Email do utilizador',
                            example: "john.doe@example.com",
                        },
                        password: {
                            type: 'string',
                            description: 'Palavra-passe do utilizador',
                            example: "123456",
                        },
                        role: {
                            type: 'string',
                            description: 'Função do utilizador',
                            example: "user",
                        },
                    },
                    example: {
                        name: "John Doe",
                        email: "john.doe@example.com",
                        password: "123456",
                        role: "user",
                    },
                },
                RegistrationResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: "Utilizador registado com sucesso",
                        },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: "Nome, email e senha são obrigatórios!",
                        },
                    },
                },
            },
        },
    },
    apis: ['./dist/routes/*.js'], // Caminho para suas rotas
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerDocs;
//# sourceMappingURL=swaggerOptions.js.map