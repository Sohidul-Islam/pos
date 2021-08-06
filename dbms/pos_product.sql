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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `prod_n` varchar(100) DEFAULT NULL,
  `prodid` int DEFAULT NULL,
  `brandid` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `cost_p` int DEFAULT NULL,
  `selling_p` int DEFAULT NULL,
  `vendorid` int DEFAULT NULL,
  `des` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `prodid` (`prodid`),
  KEY `brandid` (`brandid`),
  KEY `vendorid` (`vendorid`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`prodid`) REFERENCES `prodtype` (`prodid`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`brandid`) REFERENCES `brand` (`brandid`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`vendorid`) REFERENCES `vendors` (`vendorid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'HP 22fw Monitor',4,1,-1,13000,16500,1,'                                            Model: HP 22fw\r\nResolution: 1920 x 1080 @ 60Hz\r\nResponse Time: 5ms\r\nViewing Angle:178° (V)/178°(H)\r\nBrightness:300 cd/m²\r\n                    \r\n            '),(3,'Samsung Galaxy S21 5G',8,3,17,110000,115000,1,'                                            \r\n                    \r\n                    '),(4,'A4TECH Bloody J95S 2 Fire High Precise RGB Gaming Mouse',2,5,11,1800,2150,1,'                                                                                        mouse\r\n                    \r\n                    \r\n                    \r\n                    '),(5,'HP 15s-eq1170au Ryzen 3 3250U 15.6\" FHD Laptop',10,1,22,40000,44500,1,'                      AMD Ryzen 3 3250U (2.6 GHz up to 3.5 GHz, 4 MB L3 cache, 2 cores)\r\n4GB DDR4 SDRAM\r\n512GB PCIe NVMe TLC M.2 SSD\r\n15.6\" FHD (1920 x 1080) Display\r\n                    '),(6,'HP 15s-eq1170au Ryzen 3 3250U 15.6\" FHD Laptop',10,1,19,40000,44500,10,''),(7,'JBL Xtreme 3 Portable Bluetooth Speaker',1,11,7,25000,27500,10,''),(8,'JBL Original Tune T500BT Bluetooth Headphone',11,11,17,5000,5800,1,''),(9,'Dell inspiration',10,2,17,30000,32000,1,'');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
