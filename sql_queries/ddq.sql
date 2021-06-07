CREATE TABLE `Customers` (
    `customerID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `email` varchar(50),
    `username` varchar(50),
    PRIMARY KEY(`customerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Items` (
    `itemID` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `quantity` varchar(50) NOT NULL,
    `unitPrice` decimal(3, 2),
    `itemCategory` varchar(50),
    PRIMARY KEY(`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Cashiers` (
    `cashierID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `username` varchar(50),
    `email` varchar(50),
    PRIMARY KEY(`cashierID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Cooks` (
    `cookID` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `username` varchar(50),
    `email` varchar(50),
    PRIMARY KEY(`cookID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Orders` (
    `orderID` int(11) NOT NULL AUTO_INCREMENT,
    `customerID` int(11) NOT NULL,
    `cookID` int(11) NOT NULL,
    `cashierID` int(11) NOT NULL,
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