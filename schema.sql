CREATE TABLE "todo" (
"id"  SERIAL ,
"title" VARCHAR ,
"note" VARCHAR ,
"complete" BOOLEAN ,
PRIMARY KEY ("id")
);

CREATE TABLE "list" (
"id"  SERIAL ,
"name" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "todo_list" (
"id"  SERIAL ,
"todo_id" INTEGER ,
"list_id" INTEGER ,
PRIMARY KEY ("id")
);

CREATE TABLE "user_list" (
"user_id" INTEGER ,
"todo_list_id" INTEGER
);

CREATE TABLE "user" (
"id"  SERIAL ,
"name" VARCHAR ,
PRIMARY KEY ("id")
);

ALTER TABLE "todo_list" ADD FOREIGN KEY ("todo_id") REFERENCES "todo" ("id");
ALTER TABLE "todo_list" ADD FOREIGN KEY ("list_id") REFERENCES "list" ("id");
ALTER TABLE "user_list" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
ALTER TABLE "user_list" ADD FOREIGN KEY ("todo_list_id") REFERENCES "todo_list" ("id");
