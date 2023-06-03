SELECT * FROM Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3;
SELECT 10 + 15;
SELECT (5*5) + 5;
SELECT name AS "Nome do Projeto", hours AS "Tempo de Trabalho" FROM Scientists.Projects;
SELECT name FROM Scientists.Scientists ORDER BY name ASC;
SELECT name from Scientists.Projects ORDER BY name DESC;
SELECT CONCAT("O projeto ", name, "precisou de ", hours, "horas para ser concluído.") AS resultado FROM Scientists.Projects;
SELECT name, hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1; 
SELECT name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1;
SELECT name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ',COUNT(name),' cientistas na tabela Scientists') FROM Scientists.Scientists;