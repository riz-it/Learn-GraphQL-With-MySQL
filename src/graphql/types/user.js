import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

import GraphQLDate from "graphql-date";

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "User type",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLDate,
    },
    updatedAt: {
      type: GraphQLDate,
    },
  }),
});

export const UserInputType = new GraphQLInputObjectType({
  name: "UserInput",
  description: "User input type",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
});
