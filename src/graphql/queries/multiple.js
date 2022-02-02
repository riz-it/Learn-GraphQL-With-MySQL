import { GraphQLList } from "graphql";
import { UserType } from "../types/user";

import { knex } from "../../database/config";

export default {
  type: new GraphQLList(UserType),
  resolve(root, params) {
    const users = knex("users").select();
    if (!users) {
      throw new Error("Error fetching data");
    }
    return users;
  },
};
