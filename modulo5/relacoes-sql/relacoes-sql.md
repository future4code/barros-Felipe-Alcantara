### Exercicio ### 
1)
a)  é o campo que estabelece o relacionamento entre duas tabelas

b) CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)

c)
INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "001",
    "Muito bom!",
    7,
        "004"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "002",
    "Excelente!",
    9,
        "001"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "003",
    "Excelente!",
    10,
        "003"
);



c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movies (id)) -- Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira 

d) ALTER TABLE  Movies DROP COLUMN  rating;

e ) Code: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha

####exercicio 2#####
a) a tabela possui relação 

c) c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movies (id)) -- Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira 

d) DELETE FROM Actor WHERE id = "001";


## exercicio 3### 
a) combina coluna de uma ou mais tabelas no banco de dados
b) SELECT Movies.id, Movies.título, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;