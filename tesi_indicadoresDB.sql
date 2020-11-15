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
  `Email` varchar(45) NOT NULL,
  `Foto` text,
  `Materia` varchar(45) NOT NULL,
  `Matricula` varchar(45) NOT NULL,
  `Turno` varchar(45) DEFAULT NULL,
  `Grupo` varchar(45) NOT NULL,
  `Carrera` varchar(45) NOT NULL,
  `Rol` varchar(45) NOT NULL,
  `Año Inicio` varchar(45) NOT NULL,
  `Año Finalizacion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `id_alumnos_UNIQUE` (`id_alumno`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
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
  `Email` varchar(45) NOT NULL,
  `Carrera` varchar(45) NOT NULL,
  `Rol` varchar(45) NOT NULL,
  `Foto` text,
  `Matricula` varchar(45) NOT NULL,
  `Turno` varchar(45) NOT NULL,
  PRIMARY KEY (`id_maestro`),
  UNIQUE KEY `idmaestros_UNIQUE` (`id_maestro`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
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
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Mario Alberto','Rodriguez Roldan','mario@tesi.org','administrador','123456',NULL,'Ingenieria En Sistemas Computacionales','2020-11-13 13:36:52','2020-11-13 13:36:52'),(2,'sdasdasd','asdasdasd','asdasdasd','adasasdas','asdasdasd','asdasdas','asdadasdasd','2020-11-13 13:36:52','2020-11-13 13:36:52'),(3,'sdasdasd','asdasdasd','uriedasjkasjdas','adasasdas','asdasdasd','asdasdas','asdadasdasd','2020-11-13 13:36:52','2020-11-13 13:36:52'),(6,'James Alfredo','Rodriguez Bautista','james@tesi.org','Administador','$2b$10$S1iA55R72e.cUflBosSHz.xZ9OxYAMB6gI9EjOHX.TWAF9jD09m7u','null','Ingenieria En Sistemas Computacionales','2020-11-14 22:01:50','2020-11-14 22:01:50');
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

-- Dump completed on 2020-11-15 12:18:50
