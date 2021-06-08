-- SELECT Tables Query
-- -- 
-- Selecting everything from Orders Tables
SELECT `orderID`, `customerID`, 
`cookID`, `itemID`, `date`, 
`orderLocation`, `orderType`, `totalPrice`
FROM `Orders`; 

-- Selecting the first row of all the tables
SELECT *
FROM `Customers`
WHERE `customerID` = 1;

SELECT *
FROM `Cashiers`
WHERE `cashierID` = 1;

SELECT *
FROM `Cooks`
WHERE `cookID` = 1;

SELECT *
FROM `Items`
WHERE `itemID` = 1;

SELECT *
FROM `Orders`
WHERE `orderID` = 1;
-- -- 

-- Updating Many to Many relationships
UPDATE `Orders`
SET itemID = 2, orderLocation = "Tom", orderType = "Brady", totalPrice = 100.69
WHERE `orderID` = 1;
-- 

-- -- DELETE objects where Orders is a Many to Many relationship
DELETE FROM `Orders` 
WHERE `orderID` = 2;

DELETE FROM `Customers` 
WHERE `customerID` = 2;
-- -- 



