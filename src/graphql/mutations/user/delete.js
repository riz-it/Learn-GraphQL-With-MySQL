import { GraphQLNonNull, GraphQLID } from "graphql";
import { UserType } from "../../types/user";
import { knex } from "../../../database/config";

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
    const deleteData = knex("users").where("id", id).del().returning("*");
    if (!deleteData) {
      throw new Error("Error deleting data");
    }
    return deleteData;
  },
};
