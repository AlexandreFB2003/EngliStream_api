import { db } from "../config/knexConnection";

export const create = async ({ title, body, user_id, video_url }) => {
  const result = await db("posts")
    .insert({
      title,
      body,
      user_id,
      status: "available",
      video_url,
    })
    .returning("*");
  return result[0];
};

export const remove = async (id: string) => {
  return await db("posts").where({ id }).del().returning("*");
};

export const getAll = async () => {
  return await db("posts").select("*");
};

export const getById = async (id: string) => {
  return await db("posts").where({ id }).first();
};

export const update = async (
  id: string,
  { title, body, status, video_url }
) => {
  const result = await db("posts")
    .where({ id })
    .update({ title, body, status, video_url })
    .returning("*");
  return result[0];
};
