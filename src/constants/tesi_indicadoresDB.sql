CREATE DATABASE  IF NOT EXISTS `tesi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `tesi`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: tesi
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Matricula` varchar(45) NOT NULL,
  `Grupo` varchar(45) NOT NULL,
  `Carrera` varchar(45) NOT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `id_alumnos_UNIQUE` (`id_alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maestros`
--

DROP TABLE IF EXISTS `maestros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `maestros` (
  `id_maestro` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Carrera` varchar(45) NOT NULL,
  `Matricula` varchar(45) NOT NULL,
  PRIMARY KEY (`id_maestro`),
  UNIQUE KEY `idmaestros_UNIQUE` (`id_maestro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maestros`
--

LOCK TABLES `maestros` WRITE;
/*!40000 ALTER TABLE `maestros` DISABLE KEYS */;
/*!40000 ALTER TABLE `maestros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `id_usuario` int(255) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Rol` varchar(30) NOT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Foto` text,
  `Carrera` varchar(45) NOT NULL,
  `Fecha_de_Creacion` text NOT NULL,
  `Fecha_de_Actualizacion` text NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `idusuarios_UNIQUE` (`id_usuario`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (132,'James Alfredo','Serrano','james@tesi.org','Administrador','$2b$10$dU6zOv/nrfUoZgWmgYCwBeXwIaS.slMedx9TcXCcUOW3IpLBP3ecC',NULL,'ISC','2020-11-24 20:30:55','2020-11-24 20:30:55'),(133,'Mario Alberto','Rodriguez Roldan','mario@tesi.org','Administrador','$2b$10$iHmdXj1uhOH8rJrqfKAF8eVZUTlFebf5yybiQu1F7ZEVacQV3oGrG',NULL,'ISC','2020-11-24 20:30:55','2020-11-24 20:30:55'),(134,'Angel','Hernandez','angel@tesi.org','Usuario','$2b$10$calCZONgMHayCBjlqFJSqutsiDcdlFfVhsbS8i/cq218piarmAK6S',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(135,'Ebner','Ebner','ebner@tesi.org','Administrador','$2b$10$tZaVz3RXLx6/drUj6D1.DOR/SLJSW7IiADRyIzvvjZJf6wGO18nAe',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(136,'Diana','Casanova','diana@tesi.org','Administrador','$2b$10$/SW8akhG15lUVxjYe4nKU.ZGP2/e4KSwMFVtYX2r/WLMwqdSE6OFq',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(137,'Jose Manuel','Martinez ','josemanuel@tesi.org','Administrador','$2b$10$ZowsmnRoYpyVX/M4215FiekU3Zn1oMIFowblAZFBjN/O6Vvm64sF2',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(138,'Ari Argenis','Rodriguez Bautista','ari@tesi.org','Administrador','$2b$10$trz6hsJU.U.puNYb6rH3nOAAqbSHFMjY1uegnmfbg3CepjPg2dNWW',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(139,'sdasd','asdasdas','asdasd','asdasd','$2b$10$xT5KDsFboRitX3QW9IdbNupJH1pww3d7Gh7qbtLDp2H9xUJfZ17Zi',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(140,'Martha','Morales','martha@tesi.org','Administrador','$2b$10$aCuOZbpZ/OyJfCbfSjOwG.XmjjDRhdfZazq9Epkln96/3IQOmHhOK',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(141,'Carlos','Martinez Juan','carlos@tesi.org','Usuario','$2b$10$qF9QehyMwvRm0vylrg9jeOnDeadcYcfMq4u/dr2.sdGUMPbHMvI4K',NULL,'ISC','2020-11-24 20:30:56','2020-11-24 20:30:56'),(163,'Prueba','Alberto','prueba1@tesi.org','asdasdas','$2b$10$qd.I5kVf97cJgkYU8ciM9eOHJxPszUgqPK1ynEHIt5rO/QxP2CFWy',NULL,'ISC','2020-11-24 20:34:14','2020-11-24 20:34:14');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 19:15:02
