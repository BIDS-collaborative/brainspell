-- MySQL dump 10.13  Distrib 5.7.11, for Linux (x86_64)
--
-- Host: localhost    Database: brainspell
-- ------------------------------------------------------
-- Server version	5.7.11
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=',POSTGRESQL' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table "Log"
--

DROP TABLE IF EXISTS "Log";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Log" (
  "UniqueID" integer NOT NULL,
  "TIMESTAMP" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  -- Probably this should be a foreign key into the User table
  "UserName" text NOT NULL,
  "Experiment" integer NOT NULL,
  "PMID" varchar(64) NOT NULL,
  "Type" text NOT NULL,
  "Data" text NOT NULL,
  PRIMARY KEY ("UniqueID")
);
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-05 17:55:04
