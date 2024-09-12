import { db } from "../config/knexConnection";

export const create = async ({
  teacher_id,
  user_id,
  scheduled_time,
  status,
  duration,
}) => {
  const result = await db("classes")
    .insert({
      teacher_id,
      user_id,
      scheduled_time,
      duration,
      status,
    })
    .returning("*");
  return result[0];
};

export const remove = async (id: string) => {
  return await db("classes").where({ id }).del().returning("*");
};

export const getAll = async () => {
  return await db("classes").select("*");
};

export const getById = async (id: string) => {
  return await db("classes").where({ id }).first();
};

export const update = async (
  id: string,
  {
    teacher_id,
    user_id,
    scheduled_time,
    status,
    duration,
    created_at,
    updated_at,
  }
) => {
  const result = await db("classes")
    .where({ id })
    .update({
      teacher_id,
      user_id,
      scheduled_time,
      status,
      duration,
      created_at,
      updated_at,
    })
    .returning("*");
  return result[0];
};
