-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pos
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('HYa36jHD97k0Iut2g07Flm4jvn_HtdyF',1629666420,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2021-08-22T20:15:27.108Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"successMailChecker\":[\"Successfully Loged Out\"]},\"loggedin\":true,\"username\":\"Sohidul Islam\",\"email\":\"sishufol.sim@gmail.com\"}'),('JupmSEkeEO3GXXxpKLh5Ea_m4XJ8Fnk6',1629658571,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2021-08-22T18:01:15.551Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"successMailChecker\":[\"Successfully Loged Out\"]},\"loggedin\":true,\"username\":\"Sohidul Islam\",\"email\":\"sishufol.sim@gmail.com\"}'),('Kwlz1VhGEXY3a3-BgjhggH15TlVl3HCi',1629405526,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2021-08-19T20:10:40.082Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"successMailChecker\":[\"Successfully Loged Out\"]},\"loggedin\":true,\"username\":\"Sohidul Islam\",\"email\":\"sishufol.sim@gmail.com\"}'),('tmVCcUgbV4fUGiQrU67aun72KA-Lklsa',1629662722,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2021-08-22T19:05:30.886Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"successMailChecker\":[\"Successfully Loged Out\"]},\"loggedin\":true,\"username\":\"Sohidul Islam\",\"email\":\"sishufol.sim@gmail.com\"}'),('zQL5xj-IdHoeutt92UH89SyMPz8oA2VL',1629668299,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2021-08-22T21:22:32.448Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"successMailChecker\":[\"Successfully Loged Out\"]},\"loggedin\":true,\"username\":\"Sohidul Islam\",\"email\":\"sishufol.sim@gmail.com\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-23  2:39:59
