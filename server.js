const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));

app.listen(3000);
console.log("listening");