const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const PORT = process.env.PORT || 5000
const cors = require("cors")

const schema = require("./schema.js")

const app = express();
app.use(cors())

app.get("/", (req, res) => {
    return res.redirect("/graphql")
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });