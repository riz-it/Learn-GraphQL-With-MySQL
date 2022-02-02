import { GraphQLNonNull, GraphQLID } from "graphql";
import { UserType } from "../types/user";
import { knex } from "../../database/config";

export default {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    const { id } = params;
    return knex("users").where("id", id).first();
  },
};
