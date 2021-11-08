-- SELECT COUNT(*) FROM actors 
-- Answer:
-- 4

-- INSERT INTO actors (first_name, last_name)  
-- VALUES
-- ('fname','lname');


-- Answer:
-- ERROR:  null value in column "date_birth" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (12, fname, lname, null, null).
-- SQL state: 23502