# Hospital Exemplar

Este projeto tem como finalidade trabalhar com o banco de dados de um hospital, a documentação foi feita em um arquivo JSON e o software de banco de dados utilizado foi o MongoDB.

### Estrutura do Projeto

- 1° Consultas:

```
    "data": ISODate(),
    "medico_id": ,
    "paciente_id": ,
    "valor": ,
    "conveniada": ,
    "especialidade_buscada": "",
    "descricao": "",
    "receita": {
        "medicamentos": [
            {
                "nome": "",
                "quantidade": ,
                "instrucoes": ""
            }
        ],
        "tratamento"
```

- 2° Convênio:

```
    "_id": ObjectId(""),
    "nome": "",
    "cnpj": "",
    "carencia":
```

- 3° Enfermeiros:

```
    "nome": "",
    "data_nascimento": ISODate(""),
    "CPF": "",
    "Registro_CRE": ""
```

- 4° Especialidades:

```
    "_id": ObjectId(""),
    "nome_especialidade": ""
```

- 5° Internações:

```
    "paciente_id": ObjectId(""),
    "medico_responsavel_id": ObjectId(""),
    "data_entrada": ISODate(""),
    "data_prevista_alta": ISODate(""),
    "data_efetiva_alta": ISODate(""),
    "procedimentos": [
         ""
        ],
        "quarto_id": ObjectId(""),
        "enfermeiros_responsaveis": [ObjectId("")
        ]
```

- 6° Médicos:

```
    "nome": "",
    "data_nascimento": ISODate(""),
    "especialidades": [
        {
            "nome": "",
            "id": ObjectId("")
        }
    ],
    "tipo": [
        {
            "nome": "",
            "id": ObjectId("")
        }
    ],
    "contato": {
        "telefone": "",
        "email": ""
    },
    "documentos": {
        "CPF": "",
        "CRM": ""
    },
    "status": 
```

- 7° Pacientes:

```
    "nome": "",
    "data_nascimento": ISODate(""),
    "endereco": {
        "logradouro": "",
        "numero": "",
        "bairro": "",
        "cidade": "",
        "estado": "",
        "CEP": ""
    },
    "contato": {
        "telefone": "",
        "email": ""
    },
    "convenio": [
        {
            "nome_convenio": "",
            "validade": ISODate(""),
            "id": ObjectId(""),
            "carencia":
        }
    ],
    "documentos": {
        "CPF": "",
         RG": ""
    }
```

- 8° Quartos:

```
    "_id": ObjectId(""),
    "tipo_quarto": "",
    "valor": ""
```

- 9° Tipos:

```
    "_id": ObjectId(""),
    "tipo": ""
```

### Diagrama de Entidade-Relacionamento

<img src = "Hospital Exemplar/hospital exemplar.drawio (1).png">

### Consultas realizadas:

- 1° Todos os dados e o valor médio das consultas do ano de 2020 e das que foram feitas sob convênio.

```
db.consultas.aggregate([
    {
        $match: {
            $or: [
                {"data": {$gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31")}},
                {"conveniada": true}
            ]
        }
    },
    {
        $group: {
            "_id": null,
            "media": {$avg: "$valor"},
            "consultas": {$push: "$$ROOT"}
        }
    }
])

R: _id: null,
media: 194.66666666666666,
consultas: ([...])
```

- 2° Todos os dados das internações que tiveram data de alta maior que a data prevista para a alta.

```
db.internacoes.aggregate([
    {
        $match: {
            $expr: {
                $gt: ["$data_efetiva_alta", "$data_prevista_alta"]
            }
        }
    }
])

R:{
    _id: ObjectId('6715af759e2eee0e54317c75'),
    paciente_id: ObjectId('6715710595406d30bd656e0b'),
    medico_responsavel_id: ObjectId('67156fbe7f99ae25cd33f547'),
    data_entrada: 2017-03-10T00:00:00.000Z,
    data_prevista_alta: 2017-03-16T00:00:00.000Z,
    data_efetiva_alta: 2017-03-22T00:00:00.000Z,
    procedimentos: [
      'Ataque cardíaco',
      'Infecção nasal'
    ],
    quarto_id: ObjectId('60d5e4b74c83b9291d872bd4'),
    enfermeiros_responsaveis: [
      ObjectId('6715a7e024522499f3a1374a')
    ]
  }([...])
```

- 3° Receituário completo da primeira consulta registrada com receituário associado.

```
db.consultas.find({}, {
    "data": 1,
    "receita": 1
  })
  .sort({
    "data": 1
  })
  .limit(
    1
  )

R:{
    _id: ObjectId('671595ca68f8b1ebca336e20'),
    data: 2015-01-01T00:00:00.000Z,
    receita: {
      medicamentos: [
        {
          nome: 'clopidogrel',
          quantidade: 14,
          instrucoes: 'Tomar um comprimido por dia por uma semana'
        }
      ],
      tratamento: [
        {
          nome: 'Repouso',
          frequencia: '2 vezes no dia'
        }
      ]
    }
  }
```

- 4° Todos os dados da consulta de maior valor e também da de menor valor (ambas as consultas não foram realizadas sob convênio).

```
db.consultas.find({}, {
    "conveniada": false
  })
  .sort({
    "valor": 1
  })
  .limit(
    1
  )

R: {
    _id: ObjectId('6715965168f8b1ebca336e26'),
    data: 2017-02-20T00:00:00.000Z,
    medico_id: ObjectId('67156fbe7f99ae25cd33f543'),
    paciente_id: ObjectId('6715710595406d30bd656e0b'),
    valor: 25,
    especialidade_buscada: 'Psiquiatria',
    descricao: 'Paciente está em uma crise existencial',
    receita: {
      medicamentos: [
        {
          nome: '',
          quantidade: '',
          instrucoes: ''
        }
      ],
      tratamento: [
        {
          nome: 'Pensar sobre todo resultado que produziu na sua vida e seus momentos mais felizes',
          frequencia: 'Sempre que ficar triste'
        }
      ]
    }
  }
```

- 5° Todos os dados das internações em seus respectivos quartos, calculando o total da internação a partir do valor de diária do quarto e o número de dias entre a entrada e a alta.

```
db.internacoes.aggregate([
    {
        $addFields: {
            "dias_internacao": {
                $ceil: {
                    $divide: [
                        {$subtract: ["$data_efetiva_alta", "$data_entrada"]}, 
                        1000 * 60 * 60 * 24 
                    ]
                }
            }
        }
    },
    {
        $addFields: {
            "total_internacao": {
                $multiply: ["$dias_internacao", "$valor_diario"]
            }
        }
    }
])

R: {
    _id: ObjectId('6715af759e2eee0e54317c74'),
    paciente_id: ObjectId('6715710595406d30bd656e07'),
    medico_responsavel_id: ObjectId('67156fbe7f99ae25cd33f543'),
    data_entrada: 2015-09-15T00:00:00.000Z,
    data_prevista_alta: 2015-09-18T00:00:00.000Z,
    data_efetiva_alta: 2015-09-16T00:00:00.000Z,
    procedimentos: [
      'Suspeita de covid'
    ],
    quarto_id: ObjectId('60c72b2f9f1b2c001c8e4b68'),
    enfermeiros_responsaveis: [
      ObjectId('6715a7e024522499f3a13749')
    ],
    dias_internacao: 1,
    total_internacao: null
  }([...])
```

- 6° Data, procedimento e número de quarto de internações em quartos do tipo “apartamento”.

```
db.internacoes.aggregate([
    {
        $match: {
            "quarto_id": ObjectId("60c72b2f9f1b2c001c8e4b68")
        }
    },
    {
        $project: {
            "_id": 0,
            "data_entrada": 1,
            "procedimentos": 1,
            "quarto_id": 1
        }
    }
])

R: {
    data_entrada: 2015-09-15T00:00:00.000Z,
    procedimentos: [
      'Suspeita de covid'
    ],
    quarto_id: ObjectId('60c72b2f9f1b2c001c8e4b68')
  }([...])
```

- 7° Nome do paciente, data da consulta e especialidade de todas as consultas em que os pacientes eram menores de 18 anos na data da consulta e cuja especialidade não seja “pediatria”, ordenando por data de realização da consulta.

```
db.consultas.aggregate([
    {
        $lookup: {
            "from": "pacientes",
            "localField": "paciente_id",
            "foreignField": "_id",
            "as": "pacientes_info"
        }
    },
    {
        $unwind: "$pacientes_info"
    },
    {
        $addFields: {
            "idadePaciente": {
                $dateDiff: {
                    "startDate": "$pacientes_info.data_nascimento",
                    "endDate": "$data",
                    "unit": "year"
                }
            }
        }
    },
    {
        $match: {
            "idadePaciente": {$lt: 18},
            "especialidade_buscada": {$ne: "pediatria"}
        }
    },
    {
        $project: {
            "nomePaciente": "$pacientes_info.nome",
            "dataConsulta": "$data",
            "especialidade": "$especialidade_buscada",
            "idade": "$idadePaciente"
        }
    },
    {
        $sort: {"dataConsulta": 1}
    }
])

R: {
    _id: ObjectId('671596b868f8b1ebca336e2b'),
    nomePaciente: 'Cristiane Perez',
    dataConsulta: 2016-08-20T00:00:00.000Z,
    especialidade: 'Oftalmologia',
    idade: 10
  }([...])
```

- 8° Nome do paciente, nome do médico, data da internação e procedimentos das internações realizadas por médicos da especialidade “gastroenterologia”, que tenham acontecido em “enfermaria”.

```
db.internacoes.aggregate([
    {
        $lookup: {
            "from": "pacientes_id",
            "localField": "pacientes_id",
            "foreignField": "_id",
            "as": "pacientes_info"
        }
    },
    {
        $unwind: "$pacientes_info"
    },
    {
        $lookup: {
            "from": "medico",
            "localField": "medicos_id",
            "foreignField": "_id",
            "as": "medicos_info"
        }
    },
    {
        $unwind: "$medicos_info"
    },
    {
        $project: {
           "_id": 0,
           "nome_paciente": "$pacientes_info.nome",
           "nome_medicos": "$medicos_info.nome",
           "data_internacao": "$data_entrada",
           "procedimentos": "$procedimentos"
        }
    }
])

R: Não consegui... :(
```

- 9° Os nomes dos médicos, seus CRMs e a quantidade de consultas que cada um realizou.

```
db.consultas.aggregate([
    {
        $group: {
            _id: "$medico_id",                      
            totalConsultas: { $sum: 1 }              
        }
    },
    {
        $lookup: {
            from: "medicos",                          
            localField: "_id",                        
            foreignField: "_id",                      
            as: "medico"                             
        }
    },
    {
        $unwind: "$medico"                    
    },
    {
        $project: {
            _id: 0,                                  
            nome: "$medico.nome",                  
            CRM: "$medico.documentos.CRM",           
            totalConsultas: 1                        
        }
    }
])

R: {
    totalConsultas: 2,
    nome: 'Dra. Fernanda Henrique Coelho',
    CRM: 'MG4531070'
  }([...])
```

- 10° Todos os médicos que tenham "Gabriel" no nome. 

```
db.medicos.find({"nome": /Gabriel/i})
R: Nenhum
```

- 11° Os nomes, CORENs e número de internações de enfermeiros que participaram de mais de uma internação.

```
db.internacoes.aggregate([
    {
        $unwind: "$enfermeiro_id"
    },
    {
        $group: {
            "_id": "$enfermeiro_id",
            "totalInternacoes": {$sum: 1}
        }
    },
    {
        $match: {
            "totalInternacoes": {$gte: 2}
        }
    },
    {
        $lookup: {
            "from": "enfermeiros",
            "localField": "_id",
            "foreignField": "_id",
            "as": "enfermeiro"
        }
    },
    {
        $unwind: "$enfermeiro"
    },
    {
        $project: {
            "_id": 0,
            "enfermeiro_nome": "$enfermeiro.nome",
            "enfermeiro_CRE": "$enfermeiro.Registro_CRE",
            "totalInterncoes": 1
        }
    }
])

R: Não consegui :(
```
