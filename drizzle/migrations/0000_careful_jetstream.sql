CREATE TABLE `characters` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`experience` text,
	`ai` text,
	`gambling` integer NOT NULL,
	`battle` integer,
	`chess` integer
);
--> statement-breakpoint
CREATE TABLE `duels` (
	`id` integer PRIMARY KEY NOT NULL,
	`character1_id` integer NOT NULL,
	`character2_id` integer NOT NULL,
	`result` text,
	FOREIGN KEY (`character1_id`) REFERENCES `characters`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`character2_id`) REFERENCES `characters`(`id`) ON UPDATE no action ON DELETE no action
);
