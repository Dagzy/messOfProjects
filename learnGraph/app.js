const express = require('express');
const graphQLHTTP = require('express-graphql')
const app = express();
const schema = require('./schema/schema')
app.use('/graphql', graphQLHTTP({schema:schema, graphiql: true}))

app.listen(3000, () => {
    console.log('app listening on 3000')
})