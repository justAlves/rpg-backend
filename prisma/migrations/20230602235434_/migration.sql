/*
  Warnings:

  - You are about to drop the column `life` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `sanity` on the `characters` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "maxLife" INTEGER NOT NULL DEFAULT 15,
    "maxSanity" INTEGER NOT NULL DEFAULT 15,
    "currentLife" INTEGER NOT NULL DEFAULT 15,
    "currentSanity" INTEGER NOT NULL DEFAULT 15,
    "strength" INTEGER NOT NULL,
    "fight" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "charm" INTEGER NOT NULL,
    "emotion" INTEGER NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    CONSTRAINT "characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "characters_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_characters" ("agility", "campaign_id", "charm", "created_at", "emotion", "fight", "id", "intelligence", "name", "strength", "updated_at", "user_id") SELECT "agility", "campaign_id", "charm", "created_at", "emotion", "fight", "id", "intelligence", "name", "strength", "updated_at", "user_id" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
