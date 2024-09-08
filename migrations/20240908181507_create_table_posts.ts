import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("posts", (table) => {
    table.integer("id").primary();
    table.string("title");
    table.text("body").comment("Content of the post");
    table.uuid("user_id").unsigned().references("id").inTable("users");
    table.string("status");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("video_url");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("posts");
}
