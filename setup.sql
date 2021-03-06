#not for Heroku
CREATE DATABASE insulindb WITH TEMPLATE TEMPLATE(0);
CREATE ROLE dbmanager;
#not for Heroku

CREATE OR REPLACE FUNCTION update_modifieddt()	
RETURNS TRIGGER AS $$
BEGIN
    NEW.modifieddt = now();
    RETURN NEW;	
END;
$$ language 'plpgsql';

CREATE TABLE patients(id SERIAL PRIMARY KEY,name TEXT,uhid TEXT,dob TIMESTAMP(0),bednum TEXT,profile JSONB,savedBy JSONB,modifieddt TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP); 
	CREATE INDEX uhid ON patients(uhid);
	CREATE INDEX uhidpart ON patients(regexp_replace(uhid,'MM0*',''));
	CREATE TRIGGER patients BEFORE UPDATE ON patients FOR EACH ROW EXECUTE PROCEDURE update_modifieddt();

CREATE TABLE users(id SERIAL PRIMARY KEY,email TEXT,name TEXT,role TEXT,info JSONB,token TEXT,modifieddt TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP);
	CREATE TRIGGER users BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_modifieddt();
	CREATE INDEX email ON users(email);
CREATE TABLE forms(id BIGSERIAL PRIMARY KEY,type TEXT,dt TIMESTAMP(0),savedBy JSONB,patientId INT,data JSONB,modifieddt TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP);
	CREATE TRIGGER forms BEFORE UPDATE ON forms FOR EACH ROW EXECUTE PROCEDURE update_modifieddt();
CREATE TABLE protocols(id SERIAL PRIMARY KEY,type TEXT,data JSONB,savedBy JSONB,modifieddt TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP);
	CREATE TRIGGER protocols BEFORE UPDATE ON protocols FOR EACH ROW EXECUTE PROCEDURE update_modifieddt();

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to dbmanager; GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to dbmanager;




