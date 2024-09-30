# Atividade Momento

#### 1. Quantos funcionarios da empresa Momento trabalham no departamento de vendas?
```js
db.funcionarios.countDocuments({cargo: /vendas/i})
10
```

#### 2. Inclua suas próprias informações no departamento de Tecnologia da empresa.
```js
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
```

#### 3. Agora diga, quantos funcionários temos ao total na empresa?
```js
db.funcionarios.countDocuments()
24
```

#### 4. E quanto ao Departamento de Tecnologia?
```js
db.funcionarios.countDocuments({departamento: ObjectId('85992103f9b3e0b3b3c1fe74')})
5
```

#### 5. Qual a média salarial do departamento de tecnologia?
```js
db.funcionarios.aggregate([{$match:{departamento: ObjectId("85992103f9b3e0b3b3c1fe74")}},{$grou{_id:null, avg_val:{$avg:"$salario" }}}])
_id: null,
avg_val: 4560
```

#### 6. Quanto o departamento de Vendas gasta em salários?
```js
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
```

#### 7. Um novo departamento foi criado. O departamento de Inovações. Ele será locado no Brasil. Por favor, adicione-o no banco de dados da empresa colocando quaisquer informações que você achar relevantes.
```js
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
```

#### 8. O departamento de Inovações está sem funcionários. Inclua alguns colegas de turma nesse departamento.
```js
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
```

#### 9. Quantos funcionarios a empresa Momento tem agora?
```js
db.funcionarios.countDocuments()
28
```

#### 10. Quantos funcionários da empresa Momento possuem conjuges?
```js
db.funcionarios.countDocuments({"dependentes.conjuge": {$exists: true}})
7
```

#### 11. Qual a média salarial dos funcionários da empresa Momento, excluindo-se o CEO?
```js
db.funcionarios.aggregate([{ $match:{ cargo: { $not: { $regex: /CEO/i } }}}, { $group:{ _id: null, avg_val:{ $avg:"$salario" }}}])
_id: null,
avg_val: 8430.74074074074
```

#### 12. Qual a média salarial do departamento de tecnologia?
```js
db.funcionarios.aggregate([{ $match: { departamento: ObjectId("85992103f9b3e0b3b3c1fe74")}},{ $group:{ _id: null, avg_val:{ $avg: "$salario" }}}
]);
_id: null,
avg_val: 4560
```

#### 13. Qual o departamento com a maior média salarial?
```js
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


    avg_val: 71000,
    departamento: {
      nome: 'Executivo'
    }
```

#### 14. Qual o departamento com o menor número de funcionários?
```js
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
```

#### 15. Pensando na relação quantidade e valor unitario, qual o produto mais valioso da empresa?
```js
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
$não consegui resolver.
```

#### 16. Qual o produto mais vendido da empresa?
```js
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
```

#### 17. Qual o produto menos vendido da empresa?
```js
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
```
