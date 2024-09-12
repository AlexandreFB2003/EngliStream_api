import { db } from "../config/knexConnection";

export const create = async ({
  class_id,
  meeting_url,
  start_time,
  end_time,
  expired_at,
}) => {
  const result = await db("meetings")
    .insert({
      class_id,
      meeting_url,
      start_time,
      end_time,
      expired_at,
    })
    .returning("*");
  return result[0];
};

export const remove = async (id: string) => {
  return await db("meetings").where({ id }).del().returning("*");
};

export const getAll = async () => {
  return await db("meetings").select("*");
};

export const getById = async (id: string) => {
  return await db("meetings").where({ id }).first();
};

export const update = async (
  id: string,
  { class_id, meeting_url, start_time, end_time, expired_at }
) => {
  const result = await db("meetings")
    .where({ id })
    .update({
      class_id,
      meeting_url,
      start_time,
      end_time,
      expired_at,
    })
    .returning("*");
  return result[0];
};
