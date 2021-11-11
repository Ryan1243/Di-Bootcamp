-- SELECT first_name AS "First Name", last_Name AS "Last Name" FROM employees
-- SELECT DISTINCT department_id FROM employees
-- SELECT * FROM employees ORDER BY first_name DESC
-- SELECT first_name,last_name,(.15*salary)AS PF FROM employees 
-- SELECT employee_id,first_name,last_name,salary FROM employees ORDER BY salary
-- SELECT SUM(salary) FROM employees
-- SELECT MAX(salary), MIN(salary) FROM employees
-- SELECT AVG(salary) FROM employees
-- SELECT COUNT(1) FROM employees
-- SELECT UPPER(first_name) from employees
-- SELECT SUBSTRING(first_name,1,3) from employees
-- SELECT first_name, last_name FROM employees
-- SELECT first_name || ' ' || last_name FROM employees
-- SELECT first_name,last_name,LENGTH(first_name || last_name) FROM employees
-- SELECT first_name FROM employees WHERE first_name ~'d';
-- SELECT * FROM employees LIMIT 10



-- SELECT first_name,last_name,salary FROM employees WHERE salary BETWEEN 10000 AND 15000
-- SELECT first_name,last_name,hire_date FROM employees WHERE hire_date BETWEEN '01-01-1987' AND '30-12-1987'
-- SELECT first_name FROM employees WHERE (first_name LIKE '%c%' OR first_name LIKE '%C%') AND (first_name LIKE '%e%' OR first_name LIKE '%E%') 
-- SELECT last_name,job_title,salary FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id WHERE job_title NOT IN('Programmer','Shipping Clerk') AND salary NOT IN (4500,10000,15000)
-- SELECT last_name FROM employees WHERE LENGTH(last_name) = 6
-- SELECT last_name FROM employees WHERE SUBSTRING(last_name,3,1) = 'e'
-- SELECT DISTINCT job_title FROM jobs j INNER JOIN employees e ON j.job_id = e.job_id
-- SELECT * FROM employees WHERE last_name IN ('jones','Blake','Scott','King','Ford')
-- SELECT * FROM employees



