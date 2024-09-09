import { db } from "../config/knexConnection";

export const findUserByEmail = async (email: string) => {
  const result = await db("users").where({ email }).first();
  return result;
};

export const createUser = async (
  uuid: string | undefined,
  email: string,
  password: string,
  name: string
) => {
  const result = await db("users")
    .insert({
      id: uuid,
      email,
      password,
      name,
      is_subscribe: false,
      permission: 3,
      role: "student",
    })
    .returning("*");
  return result[0];
};

// table.integer("permission");
// });
export const deleteUser = async (userId: string) => {
  await db("users").where({ id: userId }).del().returning("*");
};

export const updateLastSignin = async (uuid: string | undefined) => {
  await db("users").where("id", "=", uuid).update({ last_signin: new Date() });
};
