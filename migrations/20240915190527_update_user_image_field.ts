import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", (table) => {
    table.string("image_url", 255);
  });
  await knex.schema.alterTable("posts", (table) => {
    table.string("image_url", 255);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("image_url");
  });
  await knex.schema.alterTable("posts", (table) => {
    table.dropColumn("image_url");
  });
}
