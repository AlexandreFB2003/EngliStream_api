import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("meetings", (table) => {
    table.increments("id").primary();
    table.integer("class_id").unsigned().references("id").inTable("classes");
    table.text("meeting_url").notNullable();
    table.timestamp("start_time");
    table.timestamp("end_time");
    table.timestamp("expired_at");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("meetings");
}
