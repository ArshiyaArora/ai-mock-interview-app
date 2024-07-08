import { pgTable,serial, text, varchar} from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition', { length: 256 }).notNull(),
    jobDesc: varchar('jobDesc', { length: 256 }).notNull(),
    jobExperience: varchar('jobExperience', { length: 256 }).notNull(),
    createdBy: varchar('createdBy', { length: 256 }).notNull(),
    createdAt: varchar('createdAt', { length: 256 }),
    mockId: varchar('mockId', { length: 256 }).notNull()
});
