 EXERCICIO 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) VARCHAR --> Indica uma Sequência de caracteres de tamanho variável de acordo com o que colocamos dentro dos parenteses. Nesse caso da questão ate 255 caractéres. 

B) 
SHOW DATABASES --> retorna os banco de dados e schemas
SHOW TABLES --> retorna as tabelas criadas

C) DESCRIBE Actor --> retorna os itens criados na tabela Actor.

================
EXERCICIO 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos",400000, "1948-08-25", "male");

A) INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES("002", "Glória Pires",1200000, "1963-08-23", "female");

B) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	-  Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
A PRIMARY KEY é uma chave unica e não pode ser duplicada.

C) Error Code: 1136. Column count doesn't match value count at row - A contagem de coluna não corresponde a contagem de linha.
correção: inserido as informações "male" e "gender" para corresponder com a informações dos valores
INSERT INTO Actor (id, nome, salary, "birth_date", gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female")

E) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' - Valor de data incorreto : '1950' para a coluna 'birth_date'
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES("005", "Juliana Paes", "719333.33", "1979-03-26", "female");

Erro causado devido a ausencia de aspas em "719333.33" e "1979-03-26".

=================
Exercicio 3

A) SELECT id, nome from Actor WHERE gender = "female";
b) SELECT salary from Actor WHERE nome = "Tony Ramos";
c) SELECT * FROM Actor WHERE gender = "invalid"; --> Retornou valores com null;
d) SELECT id, nome, salary FROM Actor WHERE salary <= "500000"

==============

Exercicio 4

A) Busca atores que tenham nomes que começam com as letras "A" e "J" e tenham salario acima de 30000
B) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
C) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
D) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

===============

Exercicio 5 
CREATE TABLE Filmes (
id VARCHAR(120) PRIMARY KEY,
título VARCHAR(220) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_de_lancamento DATE NOT NULL,
avaliação INT NOT NULL
);
 
 
 A) O TEXT - permite criar uma string com quantidade quase infinita de caracteres.

 B) INSERT INTO Filmes (id, título, sinopse, data_de_lancamento,avaliação)
VALUES("001","Os trapalhoes ", "Os 4 trapalhoes se juntam para uma aventura especial",
"1982-02-23");


