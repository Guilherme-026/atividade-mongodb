db.pacientes.insertMany([
    {
        "nome": "Roberto Santorio",
        "data_nascimento": ISODate("1980-06-25"),
        "endereco": {
            "logradouro": "Rua Abestado",
            "numero": "25",
            "bairro": "Campanes",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "98523147"
        },
        "contato": {
            "telefone": "02154663",
            "email": "roberto@gmail.com"
        },
        "convenio": [
            {
            "nome_convenio": "MaisVocê",
            "validade": ISODate("2027-08-08"),
            "id": ObjectId("60d5e23f4a1ac129e4dcd5f2"),
            "carencia": 30
        }],
        "documentos": {
            "CPF": "22199833547",
            "RG": "RJ203549982"
        }
    },
    {
        "nome": "Guilherme Friccs",
        "data_nascimento": ISODate("2005-09-28"),
        "endereco": {
            "logradouro": "Rua Don Quixote",
            "numero": "024",
            "bairro": "Kemel",
            "cidade": "Poá",
            "estado": "São Paulo",
            "CEP": "021436789"
        },
        "contato": {
            "telefone": "225789410",
            "email": "guigui@gmail.com"
        },
        "convenio": [
            {
            "nome_convenio": "ParaTudo",
            "validade": ISODate("2024-10-21"),
            "id": ObjectId("507f1f77bcf86cd799439014"),
            "carencia": 90
        }],
        "documentos": {
            "CPF": "87954432607",
            "RG": "SP217896657"
        }
    },
    {
        "nome": "Tabatia Sarnal",
        "data_nascimento": ISODate("1989-04-15"),
        "endereco": {
            "logradouro": "Rua São Vincente",
            "numero": "69",
            "bairro": "Baixa Lá",
            "cidade": "Tiradentes",
            "estado": "São Paulo",
            "CEP": "32156879"
        },
        "contato": {
            "telefone": "987635412",
            "email": "sarnal@gmail.com"
        },
        "convenio": [
            {
            "nome": "PlusPlus",
            "validade": ISODate("2025-01-09"),
            "id": ObjectId("60d5e4a74c83b9291d872bd3"),
            "carencia": 30
        }],
        "documentos": {
            "CPF": "21547833690",
            "RG": "SP023548965"
        }
    },
    {
        "nome": "Laura Silva",
        "data_nascimento": ISODate("1999-09-09"),
        "endereco": {
            "logradouro": "Rua Pindamonhangaba",
            "numero": "86",
            "bairro": "Bela Vista",
            "cidade": "São Vicente",
            "estado": "São Paulo",
            "CEP": "65423987"
        },
        "contato": {
            "telefone": "598732106",
            "email": "silvinha@gmail.com"
        },
        "convenio": [
            {
            "nome_convenio": "MaisVocê",
            "validade": ISODate("2024-06-01"),
            "id": ObjectId("60d5e23f4a1ac129e4dcd5f2"),
            "carencia": 30
        }],
        "documentos": {
            "CPF": "548325699821",
            "RG": "SP354994420"
        }
    },
    {
        "nome": "Roginilda Oliveira",
        "data_nascimento": ISODate("1967-02-25"),
        "endereco": {
            "logradouro": "Rua Sempetina Miranda",
            "numero": "45",
            "bairro": "Moema",
            "cidade": "São Matheus",
            "estado": "São Paulo",
            "CEP": "65478945"
        },
        "contato": {
            "telefone": "9875230647",
            "email": "roOliveira@gmail.com"
        },
        "convenio": [
            {
            "nome_convenio": "PlusPlus",
            "validade": ISODate("2038-07-23"),
            "id": ObjectId("60d5e4a74c83b9291d872bd3"),
            "carencia": 30
        }],
        "documento": {
            "CPF": "654782301455",
            "RG": "SP542011668"
        },
    },
    {
        "nome": "Cristiane Perez",
        "data_nascimento": ISODate("2006-05-27"),
        "endereco": {
            "logradouro": "Rua Espidão Cortez",
            "numero": "256",
            "bairro": "Pinheiros",
            "cidade": "Itaquaquecetuba",
            "estado": "São Paulo",
            "CEP": "86524922"
        },
        "contato": {
            "telefone": "965403211",
            "email": "perezC@gmail.com"
        },
        "convenio": [
            {
            "nome_convenio": "SaúdeParaVocê",
            "validade": ISODate("2028-12-02"),
            "id": ObjectId("507f191e810c19729de860ed"),
            "carencia": 45
        }],
        "documento": {
            "CPF": "6521400369874",
            "RG": "SP654123802"
        }
    },
    {
        "nome": "Francisco Da Silva Pereira",
        "data_nascimento": ISODate("1950-09-23"),
        "endereco": {
            "logradouro": "Rua Dos Alpineiros",
            "numero": "563",
            "bairro": "Sobrado do Amanhecer",
            "cidade": "Mogi das Cruzes",
            "estado": "São Paulo",
            "cep": "52387120"
        },
        "contato": {
            "telefone": "986420013",
            "email": "franciscoSP@gmail.com"
        },
        "convenio": [
            {
                "nome_convenio": "SaúdeParaVocê",
                "validade": ISODate("2022-10-14"),
                "id": ObjectId("507f191e810c19729de860ed"),
                "carencia": 45
        }],
        "documento": {
            "cpf": "52689923547",
            "rg": "SP789520031"
        }
    },
    {
        "nome": "Allison Almeida",
        "data_nascimento": ISODate("2005-09-12"),
        "endereco": {
                "logradouro": "Rua Pinheiros Zildo",
                "numero": "21",
                "bairro": "Quintadinha",
                "cidade": "Perus",
                "estado": "São Paulo",
                "cep": "54136789"
            },
        "contato": {
            "telefone": "986532104",
            "email": "ghwa@gmail.com"
        },
        "convenio": [
            {
                "nome_convenio": "PlusPlus",
                "validade": ISODate("2028-05-28"),
                "id": ObjectId("60d5e4a74c83b9291d872bd3"),
                "carencia": 30
        }],
        "documento": {
            "cpf": "85452013659",
            "rg": "SP640646903"
        }
    },
    {
        "nome": "Jefersson Rodrigues",
        "data_nascimento": ISODate("2001-06-04"),
        "endereco": {
            "logradouro": "Avenida Franchesco",
            "numero": "541",
            "bairro": "Haschi",
            "cidade": "Pindamonhaguaba",
            "estado": "São Paulo",
            "cep": "5214563"
        },
        "contato": {
            "telefone": "952301457",
            "email": "hghs@gmail.com"
        },
        "convenio": [
            {
                "nome_convenio": "MaisVocê",
                "validade": ISODate("2024-12-01"),
                "id": ObjectId("60d5e23f4a1ac129e4dcd5f2"),
                "carencia": 30
        }],
        "documento": {
            "cpf": "65420156345",
            "rg": "12665183"
        }
    },{
        "nome": "Margaret Dopura",
        "data_nascimento": ISODate("1987-08-15"),
        "endereco": {
            "logradouro": "Rua Hasquite Saliente",
            "numero": "069",
            "bairro": "Analtico",
            "cidade": "Rio de Janeiro",
            "estado": "Rio de Janeiro",
            "cep": "02678654"
        },
        "contato": {
            "telefone": "965247702",
            "email": "tirote@gmail.com"
        },
        "convenio": [
            {
                "nome_convenio": "SaúdeParaVocê",
                "validade": ISODate("2021-10-19"),
                "id": ObjectId("507f191e810c19729de860ed"),
                "carencia": 45
        }],
        "documento": {
            "cpf": "365047899532",
            "rg": "850014369"
        }
    },
    {
        "nome": "Bruna Ferreira",
        "data_nascimento": ISODate("1990-04-05"),
        "endereco": {
            "logradouro": "Avenida das Flores",
            "numero": "456",
            "bairro": "Jardim Primavera",
            "cidade": "Osasco",
            "estado": "São Paulo",
            "cep": "06233210"
        },
        "contato": {
            "telefone": "981234567",
            "email": "bruna.ferreira@example.com"
        },
        "convenio": [
            {
                "nome_convenio": "SaúdeParaVocê",
                "validade": ISODate("2018-12-02"),
                "id": ObjectId("507f191e810c19729de860ed"),
                "carencia": 45
            }
        ],
        "documento": {
            "cpf": "12345678901",
            "rg": "SP12345678"
        }
    },
    {
        "nome": "Carlos Andrade",
        "data_nascimento": ISODate("1985-09-12"),
        "endereco": {
            "logradouro": "Rua dos Pioneiros",
            "numero": "234",
            "bairro": "Vila Nova",
            "cidade": "Guarulhos",
            "estado": "São Paulo",
            "cep": "07175895"
        },
        "contato": {
            "telefone": "982145678",
            "email": "carlos.andrade@example.com"
        },
        "convenio": [
            {
                "nome": "PlusPlus",
                "validade": ISODate("2022-05-10"),
                "id": ObjectId("60d5e4a74c83b9291d872bd3"),
                "carencia": 30
            }
        ],
        "documento": {
            "cpf": "23456789012",
            "rg": "SP23456789"
        }
    },
    {
        "nome": "Denise Souza",
        "data_nascimento": ISODate("1998-12-30"),
        "endereco": {
            "logradouro": "Rua das Palmeiras",
            "numero": "789",
            "bairro": "Centro",
            "cidade": "Santo André",
            "estado": "São Paulo",
            "cep": "09035600"
        },
        "contato": {
            "telefone": "983456789",
            "email": "denise.souza@example.com"
        },
        "convenio": [
            {
                "nome_convenio": "MaisVocê",
                "validade": ISODate("2028-08-08"),
                "id": ObjectId("60d5e23f4a1ac129e4dcd5f2"),
                "carencia": 30
            }
        ],
        "documento": {
            "cpf": "34567890123",
            "rg": "SP34567890"
        }
    },
    {
        "nome": "Eduardo Lima",
        "data_nascimento": ISODate("1978-03-22"),
        "endereco": {
            "logradouro": "Rua da Esperança",
            "numero": "123",
            "bairro": "Parque das Nações",
            "cidade": "Mogi das Cruzes",
            "estado": "São Paulo",
            "cep": "08780800"
        },
        "contato": {
            "telefone": "984567890",
            "email": "eduardo.lima@example.com"
        },
        "convenio": [
            {
                "nome_convenio": "SaúdeParaVocê",
                "validade": ISODate("2020-03-18"),
                "id": ObjectId("507f191e810c19729de860ed"),
                "carencia": 45
            }
        ],
        "documento": {
            "cpf": "45678901234",
            "rg": "SP45678901"
        }
    },
    {
        "nome": "Fernanda Oliveira",
        "data_nascimento": ISODate("2000-07-15"),
        "endereco": {
            "logradouro": "Avenida Central",
            "numero": "987",
            "bairro": "Nova Era",
            "cidade": "Barueri",
            "estado": "São Paulo",
            "cep": "06436120"
        },
        "contato": {
            "telefone": "985678901",
            "email": "fernanda.oliveira@example.com"
        },
        "convenio": [
            {
                "nome_convenio": "ParaTudo",
                "validade": ISODate("2034-05-21"),
                "id": ObjectId("507f1f77bcf86cd799439014"),
                "carencia": 90
            }
        ],
        "documento": {
            "cpf": "56789012345",
            "rg": "SP56789012"
        }
    },
])