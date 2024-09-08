import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("teachers", (table) => {
    table.increments("id").primary();
    table.uuid("user_id").unsigned().references("id").inTable("users");
    table.jsonb("availability").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("teachers");
}
