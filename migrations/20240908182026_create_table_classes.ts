import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.integer("teacher_id").unsigned().references("id").inTable("teachers");
    table.integer("user_id").unsigned().references("id").inTable("users");
    table.timestamp("scheduled_time").notNullable();
    table.integer("duration").notNullable();
    table
      .enu("status", ["scheduled", "completed", "cancelled"], {
        useNative: true,
        enumName: "class_status",
      })
      .defaultTo("scheduled");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("classes");
}
