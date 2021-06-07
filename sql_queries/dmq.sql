-- -- Inserting objects
INSERT INTO `Customers` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("Jesse", "Narkmanee", "Cprogrammer@gmail.com", "Sittiphat");

INSERT INTO `Customers` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("Jesse2", "Narkmanee2", "Cprogrammer2@gmail.com", "Sittiphat2");

INSERT INTO `Cashiers` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("James", "Moseley", "Javaprogrammer@gmail.com", "Jamynair");

INSERT INTO `Cashiers` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("James2", "Moseley2", "Javaprogrammer2@gmail.com", "Jamynair2");

INSERT INTO `Cooks` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("Cyrus", "Wu", "logistics.Marendo@gmail.com", "Cyroman");

INSERT INTO `Cooks` (`firstName`, 
`lastName`, `email`, `username`)
VALUES ("Cyrus2", "Wu2", "logistics.Marendo2@gmail.com", "Cyroman2");

INSERT INTO `Items` (`name`, 
`quantity`, `unitPrice`, `itemCategory`)
VALUES ("burger", 5, 5.00, "entree");

INSERT INTO `Items` (`name`, 
`quantity`, `unitPrice`, `itemCategory`)
VALUES ("coke", 1, 1.25, "drink");

-- -- -- Orders Table
INSERT INTO `Orders` (`orderID`, 
`customerID`, `cookID`, `cashierID`, `itemID`, `date`, 
`orderLocation`, `orderType`, `totalPrice`)
VALUES (1, 1, 1, 1, 1, "2017-06-15", "online", "delivery", 10.25);

INSERT INTO `Orders` (`orderID`, 
`customerID`, `cookID`, `cashierID`, `itemID`, `date`, 
`orderLocation`, `orderType`, `totalPrice`)
VALUES (2, 2, 2, 2, 2, "2020-06-15", "in-store", "pickup", 8.25);

-- -- 

-- SELECT ORDER TABLE
-- SELECT `orderID`, `customerID`, 
-- `cookID`, `itemID`, `date`, 
-- `orderLocation`, `orderType`, `totalPrice`
-- FROM `Orders`;

-- 

-- -- SELECT objects
-- SELECT *
-- FROM `Customers`
-- WHERE `customerID` = 1;

-- SELECT *
-- FROM `Cashiers`
-- WHERE `cashierID` = 1;

-- SELECT *
-- FROM `Cooks`
-- WHERE `cookID` = 1;

-- SELECT *
-- FROM `Items`
-- WHERE `itemID` = 1;

-- SELECT *
-- FROM `Orders`
-- WHERE `orderID` = 1;

-- -- 

-- SELECT *
-- FROM `Customers`
-- WHERE `customerID` = 2;

-- SELECT *
-- FROM `Cashiers`
-- WHERE `cashierID` = 2;

-- SELECT *
-- FROM `Cooks`
-- WHERE `cookID` = 2;

-- SELECT *
-- FROM `Items`
-- WHERE `itemID` = 2;

-- SELECT *
-- FROM `Orders`
-- WHERE `orderID` = 2;

-- -- 

-- UPDATE object
-- UPDATE `Cashiers`
-- SET `firstName` = 'Tom', `lastName` = 'Brady',
-- WHERE `cashierID` = 1;

-- UPDATE `Cooks`
-- SET firstName = "Phil", lastName = "Mickelson",
-- WHERE `cookID` = 1;

-- UPDATE `Orders`
-- SET itemID = 2, orderLocation = "Tom", orderType = "Brady", totalPrice = 100.69
-- WHERE `orderID` = 1;
-- 




-- -- DELETE object
-- DELETE FROM `Orders` 
-- WHERE `orderID` = 1;

-- DELETE FROM `Orders` 
-- WHERE `orderID` = 2;

-- DELETE FROM `Customers` 
-- WHERE `customerID` = 1;
-- -- 



