const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema.js');

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('servidor rodando na porta 4000');
});
