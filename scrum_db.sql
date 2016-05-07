-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.15-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para scrum
CREATE DATABASE IF NOT EXISTS `scrum` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `scrum`;


-- Volcando estructura para tabla scrum.develop
CREATE TABLE IF NOT EXISTS `develop` (
  `id_tm` int(11) DEFAULT NULL,
  `id_sprint` int(11) DEFAULT NULL,
  `id_us` int(11) DEFAULT NULL,
  KEY `FK_develop_team_member` (`id_tm`),
  KEY `FK_develop_sprint` (`id_sprint`),
  KEY `FK_develop_user_story` (`id_us`),
  CONSTRAINT `FK_develop_sprint` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sp`),
  CONSTRAINT `FK_develop_team_member` FOREIGN KEY (`id_tm`) REFERENCES `team_member` (`id_tm`),
  CONSTRAINT `FK_develop_user_story` FOREIGN KEY (`id_us`) REFERENCES `user_story` (`id_us`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla scrum.sprint
CREATE TABLE IF NOT EXISTS `sprint` (
  `id_sp` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha inicio` date NOT NULL,
  `Fecha fin` date NOT NULL,
  `Nombre` text NOT NULL,
  `Status` text NOT NULL,
  `Review` text NOT NULL,
  PRIMARY KEY (`id_sp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla scrum.store
CREATE TABLE IF NOT EXISTS `store` (
  `id_story` int(11) DEFAULT NULL,
  `id_store` int(11) DEFAULT NULL,
  KEY `FK_store_user_story` (`id_story`),
  KEY `FK_store_stored_user_story` (`id_store`),
  CONSTRAINT `FK_store_stored_user_story` FOREIGN KEY (`id_store`) REFERENCES `stored_user_story` (`id_es_us`),
  CONSTRAINT `FK_store_user_story` FOREIGN KEY (`id_story`) REFERENCES `user_story` (`id_us`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla scrum.stored_user_story
CREATE TABLE IF NOT EXISTS `stored_user_story` (
  `id_es_us` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` text,
  `Prioridad` text,
  `Dificultad` text,
  `Comentarios` text,
  `Horas Acumuladas` text,
  `status` text,
  `As a` text,
  `I want` text,
  `So that` text,
  `Developer` int(11) DEFAULT NULL,
  `Sprint` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_es_us`),
  KEY `FK_stored_user_story_team_member` (`Developer`),
  KEY `FK_stored_user_story_sprint` (`Sprint`),
  CONSTRAINT `FK_stored_user_story_sprint` FOREIGN KEY (`Sprint`) REFERENCES `sprint` (`id_sp`),
  CONSTRAINT `FK_stored_user_story_team_member` FOREIGN KEY (`Developer`) REFERENCES `team_member` (`id_tm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla scrum.team_member
CREATE TABLE IF NOT EXISTS `team_member` (
  `id_tm` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` text,
  `Rol` text,
  `Nick` text,
  `password` text,
  `e-mail` text,
  PRIMARY KEY (`id_tm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla scrum.user_story
CREATE TABLE IF NOT EXISTS `user_story` (
  `id_us` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` text NOT NULL,
  `Prioridad` text NOT NULL,
  `Dificultad` text NOT NULL,
  `Comentarios` text NOT NULL,
  `Horas acumuladas` int(11) NOT NULL,
  `Status` text NOT NULL,
  `As a` text NOT NULL,
  `I want` text NOT NULL,
  `So that` text NOT NULL,
  PRIMARY KEY (`id_us`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
