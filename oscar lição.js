//1- Quantas vezes Natalie Portman foi indicada ao Oscar?
db.registros.find({"nome_do_indicado": /Natalie Portman/})

3


//2- Quantos Oscars Natalie Portman ganhou?
db.registros.find({"nome_do_indicado": /Natalie Portman/, "vencedor": "true"})

1


//- Amy Adams já ganhou algum Oscar?
db.registros.find({"nome_do_indicado": "Amy Adams", "vencedor": "true"})

0


//4- A série de filmes Toy Story ganhou um Oscar em quais anos?
db.registros.distinct("ano_cerimonia", {nome_do_filme: /Toy Story/, vencedor: 1})

[ 2011, 2020 ]


//5- A partir de que ano que a categoria "Actress" deixa de existir?
db.registros.find({categoria: "ACTRESS"}).sort({ano_cerimonia: -1}).limit(1)

_id: ObjectId('66f16bc8ddc5a36ecd0609d1'),
  id_registro: 5309,
  ano_filmagem: 1975,
  ano_cerimonia: 1976,
  cerimonia: 48,
  categoria: 'ACTRESS',
  nome_do_indicado: 'Isabelle Adjani',
  nome_do_filme: 'The Story of Adele H.',
  vencedor: 0

a partir do ano de 1977 a categoria "Actress" deixou de existir


//6- O primeiro Oscar para melhor Atriz foi para quem? Em que ano?
db.registros.find({categoria: "ACTRESS", vencedor: "true"}).sort({ano_cerimonia: 1})

_id: ObjectId('66f16bc7ddc5a36ecd05f518'),
id_registro: 4,
ano_filmagem: 1927,
ano_cerimonia: 1928,
cerimonia: 1,
categoria: 'ACTRESS',
nome_do_indicado: 'Janet Gaynor',
nome_do_filme: '7th Heaven',
vencedor: 1


//7- Na campo "Vencedor", altere todos os valores com "Sim" para 1 e todos os valores "Não" para 0.
R:
db.registros.updateMany({vencedor: 1}, {$set: {vencedor: "true"}})

acknowledged: true,
insertedId: null,
matchedCount: 2464,
modifiedCount: 2464,
upsertedCount: 0

db.registros.updateMany({vencedor: 0}, {$set: {vencedor: "false"}})

acknowledged: true,
  insertedId: null,
  matchedCount: 8423,
  modifiedCount: 8423,
  upsertedCount: 0


//8- Em qual edição do Oscar "Crash" concorreu ao Oscar?
db.registros.distinct('cerimonia', {nome_do_filme: /Crash/i })

[ 78 ]


//9- Bom... dê um Oscar para um filme que merece muito, mas não ganhou.
R:
db.registros.updateOne({nome_do_filme: "The Wolf of Wall Street"},{ $set: {vencedor: 1}})

acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0


//10- O filme Central do Brasil aparece no Oscar?
db.registros.countDocuments({nome_do_filme: 'Central Station'})

2


//11- Inclua no banco 3 filmes que nunca foram nem nomeados ao Oscar, mas que merecem ser.
db.registros.insertMany([{
  id_registro: 002524,
  ano_filmagem: 2023,
  ano_cerimonia: 2024,
  cerimonia: 96,
  categoria: 'ACTRESS IN A LEADING ROLE',
  nome_do_indicado: 'Cailee Spaeny',
  nome_do_filme: 'Priscilla',
  vencedor: 0
},
{
    id_registro: 002525,
    ano_filmagem: 2023,
    ano_cerimonia: 2024,
    cerimonia: 96,
    categoria: 'ACTOR',
    nome_do_indicado: 'Adam Driver',
    nome_do_filme: 'Ferrari',
    vencedor: 0
},{
    id_registro: 002526,
    ano_filmagem: 2023,
    ano_cerimonia: 2024,
    cerimonia: 96,
    categoria: 'ACTOR',
    nome_do_indicado: 'Barry Keoghan',
    nome_do_filme: 'Saltburn',
    vencedor: 0
}])

acknowledged: true,
insertedIds: {
  '0': ObjectId('66f88bc48c6efec93ae45d8b'),
  '1': ObjectId('66f88bc48c6efec93ae45d8c'),
  '2': ObjectId('66f88bc48c6efec93ae45d8d')

//12 - Pensando no ano em que você nasceu: Qual foi o Oscar de melhor filme, Melhor Atriz e Melhor Diretor?
db.registros.find({ano_cerimonia: 2005, vencedor: 1, categoria: { "$in": [/LEADING ROLE/, /PICTURE/]}}, {categoria: 1, nome_do_indicado: 1, nome_do_filme: 1, _id: 0})

{
    categoria: 'ACTOR IN A LEADING ROLE',
    nome_do_indicado: 'Jamie Foxx',
    nome_do_filme: 'Ray'
}

{
    categoria: 'ACTRESS IN A LEADING ROLE',
    nome_do_indicado: 'Hilary Swank',
    nome_do_filme: 'Million Dollar Baby'
}

{
    categoria: 'BEST PICTURE',
    nome_do_indicado: 'Clint Eastwood, Albert S. Ruddy and Tom Rosenberg, Producers',
    nome_do_filme: 'Million Dollar Baby'
}