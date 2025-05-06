CREATE DATABASE songs;

\c songs;


CREATE TABLE artistas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    pais VARCHAR(100) NOT NULL
);


CREATE TABLE albuns (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    artista_id INTEGER REFERENCES artistas(id)
);


INSERT INTO artistas (nome, photo, pais) VALUES
('Luan Santana', 'https://agenciaamapa.com.br/midias/2024/grandes/up_ag_24060_ea0cfc30-e6e1-aafd-7e3d-402faf8bfc60.jpg', 'Brasil'),
('Ana Castela', 'https://www.oktoberfestsantacruz.com.br/wp-content/uploads/2023/10/Ana-Castela_Divulgacao.jpg', 'Brasil'),
('OLivia Rodrigo', 'https://f.i.uol.com.br/fotografia/2024/02/24/170882374865da94c473228_1708823748_3x2_md.jpg', 'Estados Unidos'),
('Justin Bieber', 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg', 'Canadá');


INSERT INTO albuns (nome, photo, artista_id) VALUES
('Ao vivo na Lua', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdq79ElhAmbHgk_XzNSRGiV7vArMH7FWyh3g&s', 1),
('Boiadeira Internacional', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmod_XBTk48XSBhO0JodijqXE_EqpvDOJDWg&s', 2),
('Sour', 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/71/Sour_-_Olivia_Rodrigo.png/250px-Sour_-_Olivia_Rodrigo.png', 3),
('Justice', 'https://m.media-amazon.com/images/I/71CB3nPpneL._UF1000,1000_QL80_.jpg', 4);