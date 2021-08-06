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
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customerid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`customerid`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Sohidul Islam','Feni','sishufol.sim@gmail.com'),(2,'Nazrul Islam','Dhaka Bangladesh','sishufol.sim@gmail.com'),(3,'Shahadat Hossain','Feni','sishufol.sim@gmail.com'),(4,'Nazrul Islam','Dhaka','sishufol.sim@gmail.com'),(5,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(6,'Sagor Das','Chattogram','sishufol.sim@gmail.com'),(7,'Fahim','Chattogram','sishufol.sim@gmail.com'),(8,'Forid Hossain','Dhaka','sishufol.sim@gmail.com'),(9,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(10,'Nusrat Jahan','Chattogram','sishufol.sim@gmail.com'),(11,'Naim Ahmed','Barishal','sishufol.sim@gmail.com'),(12,'Rofiqullah','Chattogram','sishufol.sim@gmail.com'),(13,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(14,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(15,'Esrath Jahan','Dhaka','sishufol.sim@gmail.com'),(16,'Sohidul Islam','Feni','sishufol.sim@gmail.com'),(17,'Esrath Jahan','Chattogram','sishufol.sim@gmail.com'),(18,'Nazrul Islam','Dhaka','sishufol.sim@gmail.com'),(19,'Sohidul Islam','Feni','sishufol.sim@gmail.com'),(20,'Kaium Uddin','Feni',NULL),(21,'Kaium Uddin','Feni',NULL),(22,'Nazrul Islam','Feni',NULL),(23,'Esrath Jahan','Dhaka','sishufol.sim@gmail.com'),(24,'Sagor Das','Chattogram','sagordas713@gmail.cm'),(25,'Esrath Jahan','Chattogram','esrathjahan00075@gmail.com'),(26,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(27,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(28,'Sagor Das','Chattogram','sagordas713@gmail.cm'),(29,'Esrath Jahan','Chattogram','esrathjahan00075@gmail.com'),(30,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(31,'Owahidul Hoque','Chattogram','sishufol.sim@gmail.com'),(32,'Nazrul Islam','Chattogram','sishufol.sim@gmail.com'),(33,'Nusrat Jahan','Barishal','nusratjahanwoni@gmail.com'),(34,'Sohidul Islam','Feni','sishufol.sim@gmail.com'),(35,'Nazrul Islam','Chattogram','sishufol.sim@gmail.com'),(36,'Kaium Uddin','Chattogram','Kaium.uddin2909@gmail.com'),(37,'Kaium Uddin','Chattogram','Kaium.uddin2909@gmail.com'),(38,'Nazrul Islam','Feni','sishufol.sim@gmail.com'),(39,'Esrath Jahan','Chattogram','sishufol.sim@gmail.com'),(40,'Sohidul Islam','North Shatara , Chhagalnaiya, Feni','sishufol.sim@gmail.com'),(41,'Jahid Jewel','Chhagalnaiya','jahidjewel222@gmail.com'),(42,'zaheer zohad','Chhagalnaiya','zaheerzohad600@gmail.com'),(43,'Abdul Alim Parvez','Chhagalnaiya','abdulalimp201033@gmail.com'),(44,'Maharuj Mahadi','Chhagalnaiya, Feni','maharujmahadi308@gmail.com'),(45,'Riajul Alam','Chhagalnaiya','riajulalam5@gmail.com'),(46,'Ahsanul Hoque','Chhagalnaiya','ahsanpabel293@gmail.com'),(47,'Maharuj Mahadi','Chhagalnaiya','maharujmahadi308@gmail.com'),(48,'Sohidul Islam','Chhagalnaiya','sishufol.sim@gmail.com'),(49,'Jahid Jewel','Chattogram','sishufol.sim@gmail.com'),(50,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(51,'Nobel','Dhaka','k.m.m.hnobel@gmail.com'),(52,'Esrath Jahan','Chattogram','sishufol.sim@gmail.com'),(53,'Kaium Uddin','North Shatara , Chhagalnaiya, Feni','sishufol.sim@gmail.com'),(54,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(55,'Abdul Alim Parvez','Chhagalnaiya','sishufol.sim@gmail.com'),(56,'Sohidul Islam','Feni','sishufol.sim@gmail.com'),(57,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(58,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(59,'Kaium Uddin','Dhaka','sishufol.sim@gmail.com'),(60,'Kaium Uddin','Dhaka','sishufol.sim@gmail.com'),(61,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(62,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(63,'Kaium Uddin','Dhaka','sishufol.sim@gmail.com'),(64,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(65,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(72,'Nazrul Islam','Chattogram','sishufol.sim@gmail.com'),(73,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(99,'Kaium Uddin','Chattogram','sishufol.sim@gmail.com'),(100,'Nusrat Jahan','Dhaka','sishufol.sim@gmail.com'),(105,'Sohidul Islam','Chattogram','sishufol.sim@gmail.com'),(106,'Kaium Uddin','Dhaka','sishufol.sim@gmail.com'),(107,'Shahadat Hossain','Dhaka','sishufol.sim@gmail.com'),(108,'Nazrul Islam','Dhaka','nusratjahanwoni@gmail.com'),(109,'Esrath Jahan','Dhaka','sishufol.sim@gmail.com'),(110,'Esrath Jahan','Dhaka Bangladesh','sishufol.sim@gmail.com'),(111,'Naim Ahmed','Dhaka','sishufol.sim@gmail.com'),(112,'Sohidul Islam','Dhaka Bangladesh','remane3371@sumwan.com'),(113,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(114,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(115,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(116,'Nazrul Islam','Dhaka','sishufol.sim@gmail.com'),(117,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(118,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(119,'Sohidul Islam','Dhaka','sishufol.sim@gmail.com'),(120,'Karium Ullah','Dhaka','sishufol.sim@gmail.com'),(121,'Kaium Uddin','Dhaka','sishufol.sim@gmail.com');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-03 22:36:27
