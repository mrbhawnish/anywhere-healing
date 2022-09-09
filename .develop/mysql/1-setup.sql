CREATE DATABASE IF NOT EXISTS `anywhere-healing-app`;

CREATE USER 'reader'@'%' IDENTIFIED BY '';
GRANT SELECT ON `anywhere-healing-app`.* TO 'reader'@'%';

CREATE USER 'writer'@'%' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON `anywhere-healing-app`.* TO 'writer'@'%';