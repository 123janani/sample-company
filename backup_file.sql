-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: myCompany
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `deparment`
--

DROP TABLE IF EXISTS `deparment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deparment` (
  `departmentName` varchar(20) DEFAULT NULL,
  `departmentId` varchar(35) NOT NULL,
  `departmentHead` varchar(10) DEFAULT NULL,
  `phone` varchar(8) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `noOfEmployees` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deparment`
--

LOCK TABLES `deparment` WRITE;
/*!40000 ALTER TABLE `deparment` DISABLE KEYS */;
INSERT INTO `deparment` VALUES ('IT','dep001','sophie','5472654','dep@it.com',10),('dev','dep002','gerald','5552654','dep@dev.com',50),('admin','dep003','gerald','5992654','dep@admin.com',5),('hr','dep004','max','943876','dep@hr.com',5);
/*!40000 ALTER TABLE `deparment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(35) DEFAULT NULL,
  `userId` varchar(10) NOT NULL,
  `departmentName` varchar(10) DEFAULT NULL,
  `departmentId` varchar(15) NOT NULL,
  `phone` varchar(8) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `address` varchar(25) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('will','turner','admin002','admin','dep003','94034700','will@devdep.my.com','no.235/9,flower street','1988-01-01',44),('harry','watson','admin003','admin','dep003','9403470','harry@my.com','no.321,main lane','1999-12-03',22),('sam','turner','dev002','dev','dep002','94034700','sam@devdep.my.com','no.235/9,flower street','1989-01-01',38),('danyy','tarrgeryan','hr002','hr','dep004','94034700','dany@hrdep.my.com','no.321,park road','1998-12-31',28),('mari','parker','IT001','IT','dep001','2051700','marii@itdep.my.com','no.123/4,main stree','2020-01-01',31),('peter','turner','IT002','IT','dep001','94034700','peter@itdep.my.com','no.235/9,creoos street','1994-01-01',28);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-22 18:18:11
