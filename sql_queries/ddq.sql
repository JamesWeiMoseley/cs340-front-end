DROP TABLE IF EXISTS `Customers`;
CREATE TABLE `Customers` (
    `customerID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `email` varchar(50),
    `username` varchar(50),
    PRIMARY KEY(`customerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `Items`;
CREATE TABLE `Items` (
    `itemID` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `quantity` varchar(50) NOT NULL,
    `unitPrice` decimal(3, 2),
    `itemCategory` varchar(50),
    PRIMARY KEY(`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `Cashiers`;
CREATE TABLE `Cashiers` (
    `cashierID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `username` varchar(50),
    `email` varchar(50),
    PRIMARY KEY(`cashierID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `Cooks`;
CREATE TABLE `Cooks` (
    `cookID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `username` varchar(50),
    `email` varchar(50),
    PRIMARY KEY(`cookID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `Orders`;
CREATE TABLE `Orders` (
    `orderID` int(11) NOT NULL AUTO_INCREMENT,
    `customerID` int(11) NOT NULL,
    `cookID` int(11) NOT NULL,
    `cashierID` int(11) NULL,
    `itemID` int(11) NOT NULL,
    `date` DATE NOT NULL,
    `orderLocation` varchar(50) NOT NULL,
    `orderType` varchar(50) NOT NULL,
    `totalPrice` decimal(3, 2) NOT NULL,
    PRIMARY KEY(`orderID`),
    FOREIGN KEY(`customerID`) REFERENCES `Customers` (`customerID`), 
    FOREIGN KEY(`cookID`) REFERENCES `Cooks` (`cookID`),
    FOREIGN KEY(`cashierID`) REFERENCES `Cashiers` (`cashierID`),
    FOREIGN KEY(`itemID`) REFERENCES `Items` (`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Inserting objects
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
VALUES ("burger", 5, 4.00, "entree");

INSERT INTO `Items` (`name`, 
`quantity`, `unitPrice`, `itemCategory`)
VALUES ("coke", 1, 1.25, "drink");

-- Orders Table
INSERT INTO `Orders` (`orderID`, 
`customerID`, `cookID`, `cashierID`, `itemID`, `date`, 
`orderLocation`, `orderType`, `totalPrice`)
VALUES (1, 1, 1, 1, 1, "2017-06-15", "online", "delivery", 8.25);

INSERT INTO `Orders` (`orderID`, 
`customerID`, `cookID`, `cashierID`, `itemID`, `date`, 
`orderLocation`, `orderType`, `totalPrice`)
VALUES (2, 2, 2, 2, 2, "2020-06-15", "in-store", "pickup", 8.25);
-- 