import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("uuid").primary(); // UUID primary key, manually inserted
    table.string("email", 100).unique().notNullable();
    table.string("name", 255).unique().notNullable();
    table.string("password", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("last_signin");
    table.boolean("is_subscribe");
    table.timestamp("subscribe_date");
    table
      .enu("role", ["student", "teacher"], {
        useNative: true,
        enumName: "user_role",
      })
      .defaultTo("student");
    table.integer("permission");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
