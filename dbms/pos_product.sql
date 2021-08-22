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
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `prodid` (`prodid`),
  KEY `brandid` (`brandid`),
  KEY `vendorid` (`vendorid`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`prodid`) REFERENCES `prodtype` (`prodid`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`brandid`) REFERENCES `brand` (`brandid`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`vendorid`) REFERENCES `vendors` (`vendorid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'HP 22fw Monitor',4,1,14,13000,16500,1,'Model: HP 22fw\r\nResolution: 1920 x 1080 @ 60Hz\r\nResponse Time: 5ms\r\nViewing Angle:178° (V)/178°(H)\r\nBrightness:300 cd/m²\r\n            \r\n                    ','product-HP22fwMonitor-1629658949017.jpg'),(3,'Samsung Galaxy S21 5G',8,3,17,110000,115000,1,'Released 2021, January 29\r\n200g (Sub6), 202g (mmWave), 7.8mm thickness\r\nAndroid 11, One UI 3.1\r\n128GB/256GB storage, no card slot','product-SamsungGalaxyS215G-1629658899524.jpg'),(4,'A4TECH Bloody J95S 2 Fire High Precise RGB Gaming Mouse',2,5,11,1800,2150,1,'Model: Bloody J95S 2 Fire\r\nBC3332-S Gaming Engine\r\n6 Sniper Modes\r\nAdjustable 8000 CPI\r\n2000 Hz Report Rate','product-A4TECHBloodyJ95S2FireHighPreciseRGBGamingMouse-1629658773075.jpg'),(5,'HP 15s-eq1170au Ryzen 3 3250U 15.6 FHD Laptop',10,1,22,40000,44500,1,'                                            AMD Ryzen 3 3250U (2.6 GHz up to 3.5 GHz, 4 MB L3 cache, 2 cores)\r\n4GB DDR4 SDRAM\r\n512GB PCIe NVMe TLC M.2 SSD\r\n15.6\" FHD (1920 x 1080) Display\r\n           ','product-HP15s-eq1170auRyzen33250U15.6FHDLaptop-1629658725578.jpg'),(6,'HP 15s-eq1170au Ryzen 3 3250U 15.6 FHD Laptop',10,1,18,40000,44500,1,'','product-HP15s-eq1170auRyzen33250U15.6FHDLaptop-1629658696501.jpg'),(7,'JBL Xtreme 3 Portable Bluetooth Speaker',1,11,15,25000,27500,1,'MPN: JBLXTREME3BLKAM\r\nModel: Xtreme 3\r\nFrequency response: 53.5Hz – 20kHz\r\nIP67 waterproof and dustproof\r\n15 Hours of Playtime\r\nBuilt-in power bank\r\n                    \r\n                    ','product-JBLXtreme3PortableBluetoothSpeaker-1629657418819.jpg'),(8,'JBL Original Tune T500BT Bluetooth Headphone',11,11,12,5000,5800,1,'Model: JBL TUNE 500BT\r\nType Wireless Bluetooth Version 4.1\r\nDynamic Frequency 20 Hz - 20 kHz\r\nBulit-in Microphone Yes','product-JBLOriginalTuneT500BTBluetoothHeadphone-1629657284588.jpg'),(9,'Dell Inspiron 15 3501 Core i3 11th Gen',10,2,18,48000,48000,1,'MPN: BULLN315TGL21051021POPP\r\nModel: Dell Inspiron 15 3501\r\nIntel Core i3-1115G4 Processor (6M Cache, 3.00 GHz up to 4.10 GHz)\r\n4GB DDR4 3200MHz RAM\r\n1TB HDD\r\n15.6\" FHD(1920x1080) Display     \r\n      ','product-DellInspiron153501Corei311thGen-1629657212290.jpg'),(15,'ZenBook 14 UX433',10,4,17,90000,95500,1,'                      Model: Asus UX433FA\r\nIntel® Core™ i7-8565U 1.8GHz (Turbo up to 4.6GHz)\r\n512GB PCIE G3x2 NVME SSD\r\n8GB RAM,\r\nWindows 10 (64bit)\r\n                    \r\n                    \r\n      ','product-ZenBook14UX433-1629663786758.jpeg');
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

-- Dump completed on 2021-08-23  2:39:59
