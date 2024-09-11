import { db } from "../config/knexConnection";

export const create = async (userId: string | undefined) => {
  const result = await db("teachers")
    .insert({
      user_id: userId,
      availability: "{}",
    })
    .returning("*");
  return result[0];
};

export const remove = async (userId: string) => {
  return await db("teachers").where({ user_id: userId }).del().returning("*");
};

export const getAll = async () => {
  return await db("teachers").select("*");
};

export const getById = async (userId: string) => {
  return await db("teachers").where({ user_id: userId }).first();
};

export const update = async (id: string, { availability }) => {
  const result = await db("teachers")
    .where({ id })
    .update({ availability })
    .returning("*");
  return result[0];
};
