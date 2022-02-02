import express from "express";
import schema from "./src/graphql";
import { graphqlHTTP } from "express-graphql";

const app = express();

const PORT = 5000;

app.route("/").get((req, res) => {
  res.send("Rest Server GraphQL with MYSQL is running");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
