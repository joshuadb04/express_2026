-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: Sep 12, 2026 at 12:03 PM
-- Server version: 10.6.27-MariaDB
-- PHP Version: 8.5.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `joshuadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `wsk_cats`
--

CREATE TABLE `wsk_cats` (
  `cat_id` int(11) NOT NULL,
  `cat_name` text NOT NULL,
  `weight` float NOT NULL,
  `owner` int(11) NOT NULL,
  `filename` text NOT NULL,
  `birthdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `wsk_cats`
--

INSERT INTO `wsk_cats` (`cat_id`, `cat_name`, `weight`, `owner`, `filename`, `birthdate`) VALUES
(41, 'Siiri', 4, 37, 'some_filename', '2010-03-05'),
(45, 'Mimi', 4, 37, '446ed250c447150059755d8e8f254173', '2023-10-08'),
(47, 'Kingpin', 5, 1, '63af5d5c798eeef1fb0d1bf755b5fb9c', '2023-10-08'),
(48, 'Purrkchop', 6, 45, '0e45095499ec579cabefdfd623582613', '2022-10-09');

-- --------------------------------------------------------

--
-- Table structure for table `wsk_users`
--

CREATE TABLE `wsk_users` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `wsk_users`
--

INSERT INTO `wsk_users` (`user_id`, `name`, `username`, `email`, `password`, `role`) VALUES
(1, 'Administrator', 'admin', 'admin@metropolia.fi', '$2a$10$5RzpyimIeuzNqW7G8seBiOzBiWBvrSWroDomxMa0HzU6K2ddSgixS', 'admin'),
(37, 'Test User', 'john', 'john@metropolia.fi', '$2a$10$5RzpyimIeuzNqW7G8seBiOzBiWBvrSWroDomxMa0HzU6K2ddSgixS', 'user'),
(43, 'User with password', 'johnporky', 'jp@metropolia.fi', 'passingtheword', 'staff'),
(45, 'John Pork', 'johnpork', 'jp@metropolia.fi', '$2b$10$Cg1Y40ZCz4c2X0MzZLlz9OyX/gCdHK2lgtknhWxfg1aNttWv.IEh2', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wsk_cats`
--
ALTER TABLE `wsk_cats`
  ADD PRIMARY KEY (`cat_id`),
  ADD KEY `owner` (`owner`);

--
-- Indexes for table `wsk_users`
--
ALTER TABLE `wsk_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wsk_cats`
--
ALTER TABLE `wsk_cats`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `wsk_users`
--
ALTER TABLE `wsk_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `wsk_cats`
--
ALTER TABLE `wsk_cats`
  ADD CONSTRAINT `fk_owner_user_id` FOREIGN KEY (`owner`) REFERENCES `wsk_users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
