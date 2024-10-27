db.consultas.insertMany([
{
    "data": ISODate("2015-01-01"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f548"),
    "paciente_id": ObjectId("6715710595406d30bd656e07"),
    "valor": 187,
    "conveniada": true,
    "especialidade_buscada": "Cardiologia",
    "descricao": "Paciente com dores no coração",
    "receita": {
        "medicamentos": [
            {
                "nome": "clopidogrel",
                "quantidade": 14,
                "instrucoes": "Tomar um comprimido por dia por uma semana"
            }
        ],
        "tratamento": [
            {
                "nome": "Repouso",
                "frequencia": "2 vezes no dia"
            }
        ]
    }
},{
    "data": ISODate("2018-12-08"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f54a"),
    "paciente_id": ObjectId("6715710595406d30bd656e0e"),
    "valor": 50,
    "conveniada": true,
    "especialidade_buscada": "Oftalmologista",
    "descricao": "Sentindo dores de cabeça e visão cansada",
    "receita": {
        "medicamentos": [
            {
                "nome": "Dipirona",
                "quantidade": 5,
                "instrucoes": "Tomar 1 comprimido toda vez que sentir dor de cabeça"
            }
        ],
        "tratamento": [
            {
                "nome": "Repouso",
                "frequencia": "Evitar ficar muito tempo olhando para aparelhos eletrônicos"
            }
        ]
    }
},{
    "data": ISODate("2020-09-21"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f54c"),
    "paciente_id": ObjectId("6715710595406d30bd656e10"),
    "valor": 80,
    "conveniada": true,
    "especialidade_buscada": "Gastrenterologia",
    "descricao": "Paciente com azía",
    "receita": {
        "medicamentos": [
            {
                "nome": "Estomazil",
                "quantidade": 6,
                "instrucoes": "Tomar três vezes ao dia por dois dias"
            }
        ],
        "tratamento": [
            {
                "nome": "Evita comer coisas gordurosas",
                "frequencia": "Sempre que possível"
            }
        ]
    }
},{
    "data": ISODate("2017-03-12"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f544"),
    "paciente_id": ObjectId("6715710595406d30bd656e15"),
    "valor": 200,
    "conveniada": true,
    "especialidade_buscada": "Clínica Geral",
    "descricao": "Paciente caiu da escada enquanto limpava o guarda roupa",
    "receita": {
        "medicamentos": [
            {
                "nome": "Analgésico",
                "quantidade": 10,
                "instrucoes": "Tomar 1 comprimido a cada 10 horas"
            }
        ],
        "tratamento": [
            {
                "nome": "Compressa quente",
                "frequencia": "Fazer toda vez que acordar e antes de dormir"
            }
        ]
    }
},{
    "data": ISODate("2016-10-10"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f54b"),
    "paciente_id": ObjectId("6715710595406d30bd656e14"),
    "valor": 278,
    "conveniada": true,
    "especialidade_buscada": "Traumologia",
    "descricao": "Perna trincada",
    "receita": {
        "medicamentos": [
            {
                "nome": "Analgésico",
                "quantidade": 4,
                "instrucoes": "Tomar um comprimido a cada 8 horas"
            }
        ],
        "tratamento": [
            {
                "nome": "Repouso",
                "frequencia": "Até a próxima consulta"
            }
        ]
    }
},{
    "data": ISODate("2015-03-18"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f544"),
    "paciente_id": ObjectId("6715710595406d30bd656e0e"),
    "valor": 230,
    "conveniada": true,
    "especialidade_buscada": "Pediatria",
    "descricao": "Nariz entupido",
    "receita": {
        "medicamentos": [
            {
                "nome": "Soluções salinas",
                "quantidade": 1,
                "instrucoes": "Pingar 3 gotas em cada narina 4 vezes ao dia"
            }
        ],
        "tratamento": [
            {
                "nome": "Soluções salinas",
                "frequencia": "Até sentir que a o nariz esta desentupido"
            }
        ]
    }
},{
    "data": ISODate("2017-02-20"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f543"),
    "paciente_id": ObjectId("6715710595406d30bd656e0b"),
    "valor": 25,
    "conveniada": true,
    "especialidade_buscada": "Psiquiatria",
    "descricao": "Paciente está em uma crise existencial",
    "receita": {
        "medicamentos": [
            {
                "nome": "",
                "quantidade": "",
                "instrucoes": ""
            }
        ],
        "tratamento": [
            {
                "nome": "Pensar sobre todo resultado que produziu na sua vida e seus momentos mais felizes",
                "frequencia": "Sempre que ficar triste"
            }
        ]
    }
},{
    "data": ISODate("2019-08-14"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f547"),
    "paciente_id": ObjectId("6715710595406d30bd656e08"),
    "valor": 100,
    "conveniada": true,
    "especialidade_buscada": "Dermatologia",
    "descricao": "Coceira no pescoço",
    "receita": {
        "medicamentos": [
            {
                "nome": "Furoato de Mometasona",
                "quantidade": 1,
                "instrucoes": "Passar a pomada depois do banho"
            }
        ],
        "tratamento": [
            {
                "nome": "Passar pomada no pescoço",
                "frequencia": "Por duas semanas"
            }
        ]
    }
},{
    "data": ISODate("2018-04-29"),
    "medico_id": ObjectId("67156fbe7f99ae25cd33f549"),
    "paciente_id": ObjectId("6715710595406d30bd656e09"),
    "valor": 300,
    "conveniada": true,
    "especialidade_buscada": "Ortopedia",
    "descricao": "Caiu em cima do braço na cama elástica",
    "receita": {
        "medicamentos": [
            {
                "nome": "Anti-inflamatório",
                "quantidade": 3,
                "instrucoes": "Tomar um por dia"
            }
        ],
        "tratamento": [
            {
                "nome": "Compressa quente",
                "frequencia": "Fazer a compressa por uma semana junto com os remédios"
            }
        ]
    }
},{
    "data": ISODate("2017-10-10"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f548"),
        "paciente_id": ObjectId("6715710595406d30bd656e0a"),
        "valor": 250,
        "conveniada": true,
        "especialidade_buscada": "Cardiologia",
        "descricao": "Consulta de rotina para avaliar pressão arterial.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Atenolol",
                    "quantidade": "30 comprimidos",
                    "instrucoes": "Tomar 1 comprimido pela manhã"
                }
            ],
            "tratamento": [
                {
                    "nome": "Dieta controlada",
                    "frequencia": "Manter alimentação saudável"
                }
            ]
        }
    },
    {
        "data": ISODate("2019-09-15"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f547"),
        "paciente_id": ObjectId("6715710595406d30bd656e0b"),
        "valor": 180,
        "conveniada": false,
        "especialidade_buscada": "Dermatologia",
        "descricao": "Consulta para avaliação de alergia na pele.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Cremes tópicos",
                    "quantidade": "2 frascos",
                    "instrucoes": "Aplicar 2 vezes ao dia"
                }
            ],
            "tratamento": [
                {
                    "nome": "Evitar produtos irritantes",
                    "frequencia": "Continuamente"
                }
            ]
        }
    },
    {
        "data": ISODate("2016-08-20"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f54a"),
        "paciente_id": ObjectId("6715710595406d30bd656e0c"),
        "valor": 300,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Avaliação de dores de cabeça frequentes.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Paracetamol",
                    "quantidade": "20 comprimidos",
                    "instrucoes": "Tomar 1 a cada 8 horas"
                }
            ],
            "tratamento": [
                {
                    "nome": "Reduzir telas digitais",
                    "frequencia": "Diariamente"
                }
            ]
        }
    },
    {
        "data": ISODate("2018-07-01"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f549"),
        "paciente_id": ObjectId("6715710595406d30bd656e0b"),
        "valor": 220,
        "conveniada": false,
        "especialidade_buscada": "Ortopedia",
        "descricao": "Consulta para avaliar dor no joelho.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Ibuprofeno",
                    "quantidade": "15 comprimidos",
                    "instrucoes": "Tomar 1 após as refeições"
                }
            ],
            "tratamento": [
                {
                    "nome": "Fisioterapia",
                    "frequencia": "2 vezes por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2016-05-25"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f54a"),
        "paciente_id": ObjectId("6715710595406d30bd656e0d"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Consulta para avaliação da visão.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio",
                    "quantidade": "1 frasco",
                    "instrucoes": "Aplicar 2 gotas ao dia"
                }
            ],
            "tratamento": [
                {
                    "nome": "Uso de óculos",
                    "frequencia": "Diariamente"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-04-10"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f547"),
        "paciente_id": ObjectId("6715710595406d30bd656e0"),
        "valor": 190,
        "conveniada": true,
        "especialidade_buscada": "Pediatria",
        "descricao": "Consulta de rotina para criança",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Multivitamínico",
                    "quantidade": "1 frasco",
                    "instrucoes": "Tomar 1 colher por dia"
                }
            ],
            "tratamento": [
                {
                    "nome": "Exercícios físicos leves",
                    "frequencia": "Diariamente"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-03-18"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f54b"),
        "paciente_id": ObjectId("6715710595406d30bd656e0e"),
        "valor": 170,
        "conveniada": false,
        "especialidade_buscada": "Radiologia",
        "descricao": "Suspeita de dedo quebrado",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Paracetamol",
                    "quantidade": 5,
                    "instrucoes": "Tomar 1 por dia"
                }
            ],
            "tratamento": [
                {
                    "nome": "Exame de raio-X",
                    "frequencia": "Voltar depois de uma semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2022-02-12"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f543"),
        "paciente_id": ObjectId("6715710595406d30bd656e13"),
        "valor": 230,
        "conveniada": true,
        "especialidade_buscada": "Psiquiatria",
        "descricao": "Consulta para tratamento de ansiedade.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Ansiolítico",
                    "quantidade": "10 comprimidos",
                    "instrucoes": "Tomar 1 comprimido à noite"
                }
            ],
            "tratamento": [
                {
                    "nome": "Terapia cognitivo-comportamental",
                    "frequencia": "1 vez por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-01-05"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f547"),
        "paciente_id": ObjectId("6715710595406d30bd656e0b"),
        "valor": 240,
        "conveniada": false,
        "especialidade_buscada": "Gastrenterologia",
        "descricao": "Consulta para avaliação de níveis de acidiz no estômago",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Omeprazol",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 em jejum"
                }
            ],
            "tratamento": [
                {
                    "nome": "Fazer refeições mais saudável",
                    "frequencia": "Sempre que possível"
                }
            ]
        }
    },
    {
        "data": ISODate("2022-12-10"),
        "medico_id": ObjectId("67156fbe7f99ae25cd33f545"),
        "paciente_id": ObjectId("6715710595406d30bd656e0c"),
        "valor": 300,
        "conveniada": true,
        "especialidade_buscada": "Clínica Geral",
        "descricao": "Consulta para avaliação de problemas urinários.",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antibiótico",
                    "quantidade": "20 comprimidos",
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamento": [
                {
                    "nome": "Exame de urina",
                    "frequencia": "Após 1 semana"
                }
            ]
        }
    }
])