import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  department: varchar({ length: 255 }).notNull(),
  designation: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 50 }).notNull().default("active"),
});
