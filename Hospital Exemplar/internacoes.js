db.internacoes.insertMany([
    {
        "paciente_id": ObjectId("6715710595406d30bd656e07"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f543"),
        "data_entrada": ISODate("2015-09-15"),
        "data_prevista_alta": ISODate("2015-09-18"),
        "data_efetiva_alta": ISODate("2015-09-16"),
        "procedimentos": [
          "Suspeita de covid"
        ],
        "quarto_id": ObjectId("60c72b2f9f1b2c001c8e4b68"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a13749")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e0b"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f547"),
        "data_entrada": ISODate("2017-03-10"),
        "data_prevista_alta": ISODate("2017-03-16"),
        "data_efetiva_alta": ISODate("2017-03-22"),
        "procedimentos": [
            "Ataque cardíaco",
            "Infecção nasal"
        ],
        "quarto_id": ObjectId("60d5e4b74c83b9291d872bd4"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374a")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e0c"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f548"),
        "data_entrada": ISODate("2020-01-01"),
        "data_prevista_alta": ISODate("2020-01-10"),
        "data_efetiva_alta": ISODate("2020-01-05"),
        "procedimentos": [
            "Cirurgia"
        ],
        "quarto_id": ObjectId("60c72b2f9f1b2c001c8e4b68"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374b")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e0e"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f54a"),
        "data_entrada": ISODate("2024-04-08"),
        "data_prevista_alta": ISODate("2024-04-10"),
        "data_efetiva_alta": ISODate("2024-04-12"),
        "procedimentos": [
            "Cirurgia no dedão direito do pé esquerdo",
            "Remoção da apêndice"
        ],
        "quarto_id": ObjectId("507f191e810c19729de860ef"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374c")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e10"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f54b"),
        "data_entrada": ISODate("2018-07-16"),
        "data_prevista_alta": ISODate("2018-08-16"),
        "data_efetiva_alta": ISODate("2018-09-03"),
        "procedimentos": [
          "Cirurgia na coluna"
        ],
        "quarto_id": ObjectId("60d5e4b74c83b9291d872bd4"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374d")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e12"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f54c"),
        "data_entrada": ISODate("2016-10-03"),
        "data_prevista_alta": ISODate("2016-10-07"),
        "data_efetiva_alta": ISODate("2016-10-05"),
        "procedimentos": [
            "Observação",
            "Exame de sangue",
            "Exame de urina"
        ],
        "quarto_id": ObjectId("507f191e810c19729de860ef"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374e")
        ]
    },
    {
        "paciente_id": ObjectId("6715710595406d30bd656e15"),
        "medico_responsavel_id": ObjectId("67156fbe7f99ae25cd33f544"),
        "data_entrada": ISODate("2019-12-05"),
        "data_prevista_alta": ISODate("2019-12-28"),
        "data_efetiva_alta": ISODate("2019-12-22"),
        "procedimentos": [
            "Cirurgia no braço",
            "Exame de sangue",
            "Recuperação de pneumonia"
        ],
        "quarto_id": ObjectId("60d5e4b74c83b9291d872bd4"),
        "enfermeiros_responsaveis": [ObjectId("6715a7e024522499f3a1374f")
        ]
    }
])