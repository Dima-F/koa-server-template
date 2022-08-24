/*
	all fields should be in bla_bla case
*/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS test (
	id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	name VARCHAR (255),
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
	id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	email VARCHAR (255) UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

/*
	ALTER TABLE cashes ADD COLUMN IF NOT EXISTS new_field BOOLEAN DEFAULT false;
*/
