
-- Creando Base de datos.
CREATE TABLE citi_talent;

-- Conectando a Base de datos.
\c citi_talent;

-- Creando tabla libro.
CREATE TABLE libro(
id SERIAL,
libro VARCHAR (50) NOT NULL,
autor VARCHAR (20) NOT NULL,
editorial VARCHAR (20) NOT NULL,
tema VARCHAR (20) NOT NULL,
paginas INT NOT NULL,
PRIMARY KEY(id));