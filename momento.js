//Quantos funcionarios da empresa Momento trabalham no departamento de vendas?
db.funcionarios.countDocuments({cargo: /vendas/i})
10
//Inclua suas próprias informações no departamento de Tecnologia da empresa.
db.funcionarios.insertOne({
    "nome": 'Guilherme Oliveira',
    "telefone": '(11)954782103',
    "email": 'guilherminho@gmail.com',
    "dataAdmissao": ISODate("2025-03-15"),
    "cargo": 'Desenvolvedor Mobile',
    "salario": 2300,
    "departamento": ObjectId('5f8b3f3f9b3e0b3b3c1e3e3e')
})

acknowledged: true,
insertedId: ObjectId('66f72a7b141a71735590eece')

//Agora diga, quantos funcionários temos ao total na empresa?
db.funcionarios.countDocuments()
24

//E quanto ao Departamento de Tecnologia?
db.funcionarios.countDocuments({departamento: ObjectId('85992103f9b3e0b3b3c1fe74')})
5
//Qual a média salarial do departamento de tecnologia?
db.funcionarios.aggregate([{$match:{departamento: ObjectId("85992103f9b3e0b3b3c1fe74")}},{$grou{_id:null, avg_val:{$avg:"$salario" }}}])

  _id: null,
  avg_val: 4560

  //Quanto o departamento de Vendas gasta em salários?
  db.funcionarios.aggregate([
    {
    $match: { departamento: ObjectId("85992103f9b3e0b3b3c1fe71")}
    }, 
    {
    $group: {
        _id: null,
        sum_val:{ $sum:"$salario" }
    }
    }
  ])

  _id: null,
  sum_val: 95100

  //Um novo departamento foi criado. O departamento de Inovações. Ele será locado no Brasil. Por favor, adicione-o no banco de dados da empresa colocando quaisquer informações que você achar relevantes.
  db.escritorios.insertOne({
    "nome": "Vinland LTDA",
    "endereco": "Av. Hélio - Vila Olímpa, São Paulo - SP, 02486-245",
    "telefone": "11 983201467",
    "pais": "BR",
    "suprimentos": [
        {
            "produto": " Saponáceos",
            "quantidade": "854",
            "precoUnitario": 7.75
        },
        {
            "produto": "Esponja",
            "quantidade": "1250",
            "precoUnitario": 2.45
        },
    ]
})

acknowledged: true,
  insertedId: ObjectId('66f72b1366e53af219fab553')

db.departamentos.insertOne({
    "nome": "Inovações",
    "escritorio": ObjectId("66f6bccc46431542b3f06f3e"),
})

acknowledged: true,
  insertedId: ObjectId('66f72bc4a74d1d808ab36bcf')

//O departamento de Inovações está sem funcionários. Inclua alguns colegas de turma nesse departamento.
db.funcionarios.insertMany([{
    "nome": 'Robertinho',
    "telefone": '(11)923454782',
    "email": 'roberto@gmail.com',
    "dataAdmissao": ISODate("2017-08-20"),
    "cargo": 'Desenvolvedor Mobile - Junior',
    "salario": 2450,
    "departamento": ObjectId('66f6bd507e83cadbfe65381a')
},{
    "nome": 'Amenda Rocha',
    "telefone": '(11)975411606',
    "email": 'amendaR@gmail.com',
    "dataAdmissao": ISODate("2020-01-16"),
    "cargo": 'Desenvolvedor Mobile - Estagiário',
    "salario": 1800,
    "departamento": ObjectId('66f6bd507e83cadbfe65381a')
},{
    "nome": 'Mayaria Pereira',
    "telefone": '(11)925478100',
    "email": 'pereira@gmail.com',
    "dataAdmissao": ISODate("2022-05-22"),
    "cargo": 'Desenvolvedor Mobile - Estagiário',
    "salario": 1800,
    "departamento": ObjectId('66f6bd507e83cadbfe65381a')
},{
    "nome": 'Gabriel Luiz',
    "telefone": '(11)933254781',
    "email": 'gluiz@gmail.com',
    "dataAdmissao": ISODate("2023-04-25"),
    "cargo": 'Desenvolvedor Mobile - Pleno',
    "salario": 4600,
    "departamento": ObjectId('66f6bd507e83cadbfe65381a')
}])
acknowledged: true,
  insertedIds: {
    '0': ObjectId('66f72c7957243bb6737b76f9'),
    '1': ObjectId('66f72c7957243bb6737b76fa'),
    '2': ObjectId('66f72c7957243bb6737b76fb'),
    '3': ObjectId('66f72c7957243bb6737b76fc')
//Quantos funcionarios a empresa Momento tem agora?
db.funcionarios.countDocuments()
28

//Quantos funcionários da empresa Momento possuem conjuges?
db.funcionarios.countDocuments({"dependentes.conjuge": {$exists: true}})
7

//Qual a média salarial dos funcionários da empresa Momento, excluindo-se o CEO?
db.funcionarios.aggregate([{ $match:{ cargo: { $not: { $regex: /CEO/i } }}}, { $group:{ _id: null, avg_val:{ $avg:"$salario" }}}])

_id: null,
avg_val: 8430.74074074074

//Qual a média salarial do departamento de tecnologia?
db.funcionarios.aggregate([{$match:{departamento: ObjectId("85992103f9b3e0b3b3c1fe74")}},{$grou{_id:null, avg_val:{$avg:"$salario" }}}])

//Qual o departamento com a maior média salarial?
db.funcionarios.aggregate([
    {
        "$group": {
            "_id": "$departamento",
            "avg_val": {"$avg": "$salario"}
        }
    },
{
    "$lookup": {
        "from": "departamentos",
        "localField": "_id",
        "foreignField": "_id",
        "as": "departamento_info"
    }
},
{
    "$unwind": "$departamento_info"
},
{
    "$sort": {"avg_val": -1}
},
{
    "$limit": 1
},
{
    "$project": {
        "_id": 0,
        "avg_val": 1,
        "departamento.nome": "$departamento_info.nome"
    }
}])

{
    avg_val: 71000,
    departamento: {
      nome: 'Executivo'
    }
  }

//Qual o departamento com o menor número de funcionários?
db.funcionarios.aggregate([
    {
        "$group": {
            "_id": "$departamento",
            "countFun": {"$sum": 1}
        }
    },
{
    "$lookup": {
        "from": "departamentos",
        "localField": "_id",
        "foreignField": "_id",
        "as": "departamento_info"
    }
},
{
    "$unwind": "$departamento_info"
},
{
    "$sort": {"countFun": 1}
},
{
    "$limit": 1
},
{
    "$project": {
        "_id": 0,
        "countFun": 1,
        "departamento": "$departamento_info.nome"
    }
}])

countFun: 1,
  departamento: 'Executivo'

  //Pensando na relação quantidade e valor unitario, qual o produto mais valioso da empresa?
  db.escritorios.aggregate([
    {
        "$unwind": "$suprimentos"
  },
  {
    "$lookup": {
        "from": "departamentos",
        "localField": "_id",
        "foreignField": "escritorio",
        "as": "departamento_info"
    }
  },
  {
    "$unwind": "$departamento_info"
  },
  {
    "$project": {
        "_id": 0,
        "produto": "$suprimentos.produto",
        "departamento": "departamento_info.nome",
        "total": {
            "$multiply": ["$suprimentos.quantidade", "$suprimetos.precoUnitario"]
        }
    }
  },
  {
    "$sort": {"total": -1}
  },
  {
    "$limit": 1
  }
])

PlanExecutor error during aggregation

//Qual o produto mais vendido da empresa?
db.vendas.aggregate([
    {
        "$group": {
            "_id": "$produto",
            "count": {"$sum": "$quantidade"} 
        }
    },
    {
        "$sort": {"count": -1} 
    },
    {
        "$limit": 1
    }
])

_id: 'Laço da Verdade',
  count: 12

//Qual o produto menos vendido da empresa?
db.vendas.aggregate([
    {
        "$group": {
            "_id": "$produto",
            "count": {"$sum": "$quantidade"} 
        }
    },
    {
        "$sort": {"count": 1} 
    },
    {
        "$limit": 1
    }
])

_id: 'Fake Batarang',
  count: 2