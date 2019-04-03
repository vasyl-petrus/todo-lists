# testTask
Before starting a project, you need to create a database tasklist and tables tasks and lists

CREATE DATABASE tasklist;

CREATE TABLE IF NOT EXISTS `lists` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `listId` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
