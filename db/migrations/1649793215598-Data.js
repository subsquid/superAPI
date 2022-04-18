module.exports = class Data1649793215598 {
  name = 'Data1649793215598'

  async up(db) {
    await db.query(`CREATE TABLE "reward" ("id" character varying NOT NULL, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "amount" numeric, "round" integer, "validator" text, "total" numeric, "name" text, "chain_id" character varying NOT NULL, "account_id" character varying NOT NULL, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_4832b065968736dc04d37ca5da" ON "reward" ("chain_id") `)
    await db.query(`CREATE INDEX "IDX_4b93a54e522c1bc423507342ec" ON "reward" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_51b4a3885904fbbc1296944ca4" ON "reward" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_4a8843fdb7840bfd00f8e4f7b3" ON "reward" ("account_id") `)
    await db.query(`CREATE TABLE "bond" ("id" character varying NOT NULL, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "amount" numeric, "total" numeric, "success" boolean, "name" text, "in_build_total" numeric, "chain_id" character varying NOT NULL, "account_id" character varying NOT NULL, CONSTRAINT "PK_2a4d050cae7f0326222053ae2b4" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_97664afb3da1e6d50ba2e9d956" ON "bond" ("chain_id") `)
    await db.query(`CREATE INDEX "IDX_b3ec1c99bd71224c6ef11cf5b0" ON "bond" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_838b5fd70c926e7d7c5bcb56ee" ON "bond" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_380e0ca8c041bf10c97b66b184" ON "bond" ("account_id") `)
    await db.query(`CREATE INDEX "IDX_0bd97db4e1e32b00a831351680" ON "bond" ("success") `)
    await db.query(`CREATE TABLE "round" ("id" character varying NOT NULL, "starting_block" integer NOT NULL, "round" integer NOT NULL, "selected_collators_number" integer NOT NULL, "total_balance" numeric NOT NULL, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, CONSTRAINT "PK_34bd959f3f4a90eb86e4ae24d2d" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_2fd59fa7b9b230dfd4b820d5f7" ON "round" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_41b2bc2b3da6a928eac2c5be55" ON "round" ("extrinsic_hash") `)
    await db.query(`ALTER TABLE "account" ADD "total_bond" numeric NOT NULL`)
    await db.query(`ALTER TABLE "account" ADD "total_reward" numeric NOT NULL`)
    await db.query(`ALTER TABLE "account" ADD "staking_info" jsonb`)
    await db.query(`CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" ("block_number") `)
    await db.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_4832b065968736dc04d37ca5daf" FOREIGN KEY ("chain_id") REFERENCES "chain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_4a8843fdb7840bfd00f8e4f7b36" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "bond" ADD CONSTRAINT "FK_97664afb3da1e6d50ba2e9d956a" FOREIGN KEY ("chain_id") REFERENCES "chain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "bond" ADD CONSTRAINT "FK_380e0ca8c041bf10c97b66b184b" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "reward"`)
    await db.query(`DROP INDEX "public"."IDX_4832b065968736dc04d37ca5da"`)
    await db.query(`DROP INDEX "public"."IDX_4b93a54e522c1bc423507342ec"`)
    await db.query(`DROP INDEX "public"."IDX_51b4a3885904fbbc1296944ca4"`)
    await db.query(`DROP INDEX "public"."IDX_4a8843fdb7840bfd00f8e4f7b3"`)
    await db.query(`DROP TABLE "bond"`)
    await db.query(`DROP INDEX "public"."IDX_97664afb3da1e6d50ba2e9d956"`)
    await db.query(`DROP INDEX "public"."IDX_b3ec1c99bd71224c6ef11cf5b0"`)
    await db.query(`DROP INDEX "public"."IDX_838b5fd70c926e7d7c5bcb56ee"`)
    await db.query(`DROP INDEX "public"."IDX_380e0ca8c041bf10c97b66b184"`)
    await db.query(`DROP INDEX "public"."IDX_0bd97db4e1e32b00a831351680"`)
    await db.query(`DROP TABLE "round"`)
    await db.query(`DROP INDEX "public"."IDX_2fd59fa7b9b230dfd4b820d5f7"`)
    await db.query(`DROP INDEX "public"."IDX_41b2bc2b3da6a928eac2c5be55"`)
    await db.query(`ALTER TABLE "account" DROP COLUMN "total_bond"`)
    await db.query(`ALTER TABLE "account" DROP COLUMN "total_reward"`)
    await db.query(`ALTER TABLE "account" DROP COLUMN "staking_info"`)
    await db.query(`DROP INDEX "public"."IDX_d6624eacc30144ea97915fe846"`)
    await db.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_4832b065968736dc04d37ca5daf"`)
    await db.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_4a8843fdb7840bfd00f8e4f7b36"`)
    await db.query(`ALTER TABLE "bond" DROP CONSTRAINT "FK_97664afb3da1e6d50ba2e9d956a"`)
    await db.query(`ALTER TABLE "bond" DROP CONSTRAINT "FK_380e0ca8c041bf10c97b66b184b"`)
  }
}
