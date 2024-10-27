db.medicos.insertMany([
    {
        "nome": "Dr. Cesar Augusto",
        "data_nascimento": ISODate("1970-08-21"),
        "especialidades": [
        {
            "nome": "Psiquiatria",
            "id": ObjectId("60c72b2f9f1b2c001c8e4b67")
        }
    ],
        "tipo": [
            {
                "nome": "Generalista",
                "id": ObjectId("507f191e810c19729de860eb")
            }
        ],
        "contato": {
            "telefone": "995536783",
            "email": "drcesarA@gmail.com"
        },
        "documentos": {
            "CPF": "26535648714",
            "CRM": "SP254873"
        },
        "status": 1
    }, {
        "nome": "Dra. Catarina Ramos",
        "data_nascimento": ISODate("1982-01-15"),
        "especialidades": [
        {
            "nome": "Pediatria",
            "id": ObjectId("507f1f77bcf86cd799439011")
        },
        { 
            "nome": "Clínica Geral",
            "id": ObjectId("60c72b2f9f1b2c001c8e4a56")
        }
    ],
        "tipo": [
            {
                "nome": "Generalista",
                "id": ObjectId("507f191e810c19729de860eb")
            }
        ],
        "contato": {
            "telefone": "987545211",
            "email": "catarinaR@gmail.com"
        },
        "documentos": {
            "CPF": "68824945201",
            "CRM": "SP873541"
        },
        "status": 0
    }, {
        "nome": "Dr. Geraldo Fiorentino",
        "data_nascimento": ISODate("1964-04-27"),
        "especialidades": [
            {
                "nome": "Clínica Geral",
                "id": ObjectId("60c72b2f9f1b2c001c8e4a56")
            }
        ],
        "tipo": [
            {
                "nome": "Especialista",
                "id": ObjectId("60c72b2f9f1b2c001c8e4b66")
            }
        ],
        "contato": {
            "telefone": "658743248",
            "email": "fiorentino90@gmail.com"
        },
        "documentos": {
            "CPF": "54783214694",
            "CRM": "RJ457821"
        },
        "status": 1
    },  {
        "nome": "Dra. Maria Cunha Ribeiro",
        "data_nascimento": ISODate("1996-08-21"),
        "especialidades": [
            {
                "nome": "Traumologia",
                "id": ObjectId("507f191e810c19729de860ec")
            }
        ],
        "tipo": [
            {
               "nome": "Residente",
               "id": ObjectId("507f1f77bcf86cd799439013")
            }
        ],
        "contato": {
            "telefone": "987543012",
            "email": "maria@gmail.com"
        },
        "documentos": {
            "CPF": "657524998017",
            "CRM": "MG645982"
        },
        "status": 0
    },  {
        "nome": "Dr. Roberto Leal",
        "data_nascimento": ISODate("1959-03-27"),
        "especialidades": [
            {
                "nome": "Pediatria",
                "id": ObjectId("507f1f77bcf86cd799439011")
            },
            {
                "nome": "Dermatologia",
                "id": ObjectId("60d5e22f7cbd9a5d4cfbfa36")
            },
            {
                "nome": "Gastrenterologia",
                "id": ObjectId("507f191e810c19729de860ea")
            }
        ],
        "tipo": [
            {
                "nome": "Especialista",
                "id": ObjectId("60c72b2f9f1b2c001c8e4b66")
            }
        ],
        "contato": {
            "telefone": "954876284",
            "email": "leal@gmail.com"
        },
        "documento": {
            "CPF": "25478963154",
            "CRM": "SP566782"
        },
        "status": 0
    },  {
        "nome": "Dra. Fernanda Henrique Coelho",
        "data_nascimento": ISODate("1989-05-26"),
        "especialidades": [
            {
                "nome": "Cardiologia",
                "id": ObjectId("507f1f77bcf86cd799439012")
            }
        ],
        "tipo": [
            {
                "nome": "Residente",
                "id": ObjectId("507f1f77bcf86cd799439013")
            }
        ],
        "contato": {
            "telefone": "865479242",
            "email": "coellho@gmail.com"
        },
        "documentos": {
            "CPF": "58732469870",
            "CRM": "MG4531070"
        },
        "status": 1
    },  {
        "nome": "Dra. Filó Freecss",
        "data_nascimento": ISODate("1999-11-20"),
        "especialidades": [
            {
                "nome": "Ortopedia",
                "id": ObjectId("60d5e23b4a1ac129e4dcd4f1")
            }
        ],
        "tipo": [
            {
                "nome": "Residente",
                "id": ObjectId("507f1f77bcf86cd799439013")

        }
    ],
        "contato": {
            "telefone": "954879356",
            "email": "freecss@gmail.com"
        },
        "documentos": {
            "CPF": "54511645632",
            "CRM": "SP545471"
        },
        "status": 1
    }, {
        "nome": "Dr. Valdimar Clario",
        "data_nascimento": ISODate("1968-09-05"),
        "especialidades": [
            {
                "nome": "Oftalmologia",
                "id": ObjectId("60d5e3e7f3562f2194b8453a")
            }
        ],
        "tipo": [
            {
                "nome": "Especialista",
                "id": ObjectId("60c72b2f9f1b2c001c8e4b66")
        }
    ],
        "contato": {
            "telefone": "724369712",
            "email": "valdimirClario@gmail.com"
        },
        "documentos": {
            "CPF": "32469870124",
            "CRM": "AM548001"
        },
        "status": 1
    }, {
        "nome": "Dra. Fabiana Consenção",
        "data_nascimento": ISODate("1971-02-07"),
        "especialidades": [
            {
                "nome": "Traumologia",
                "id": ObjectId("507f191e810c19729de860ec")
            },
            {
                "nome": "Radiologia",
                "id": ObjectId("60d5e4a74c83b9291d872bd2")
            }
        ],
        "tipo": [
            {
                "nome": "Especialista",
                "id": ObjectId("60c72b2f9f1b2c001c8e4b66")
        }
    ],
        "contato": {
            "telefone": "524689200",
            "email": "drafabiana@gmail.com"
        },
        "documentos": {
            "CPF": "85773200145",
            "CRM": "RS452021"
        },
        "status": 0
    }, {
        "nome": "Dra. Deolane Bezerra",
        "data_nascimento": ISODate("1987-11-01"),
        "especialidades": [
            {
                 "nome": "Gastrenterologia",
                 "id": ObjectId("507f191e810c19729de860ea")
            }
        ],
        "tipo": [
            {
                "nome": "Generalista",
                "id": ObjectId("507f191e810c19729de860eb")
        }
    ],
        "contato": {
            "telefone": "854712351",
            "email": "bezerradeolane@gmail.com"
        },
        "documentos": {
            "CPF": "54782001468",
            "CRM": "SP522201"
        },
        "status": 1
    }

])