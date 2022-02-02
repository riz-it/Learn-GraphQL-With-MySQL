import { GraphQLNonNull } from "graphql";
import { UserType, UserInputType } from "../../types/user";
import { knex } from "../../../database/config";
export default {
  type: UserType,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve(root, params) {
    const { name, email, password } = params.data;
    const user = { name, email, password };
    const insertData = knex("users").insert(user);
    if (!insertData) {
      throw new Error("Error inserting data");
    }
    return insertData;
  },
};
