-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2019 at 04:56 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `balance` text NOT NULL,
  `Currency` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `role` enum('user','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `full_name`, `balance`, `Currency`, `username`, `password`, `role`) VALUES
(2, 'Aymen Nurhussen', '1000', 'Birr', 'Eimen', '1234', 'admin'),
(3, 'Kidus Yosef', '2000', 'Birr', 'Kida', '4321', 'user'),
(7, 'Leul Mekonnen', '1000', 'Birr', 'Lula', '12345', 'user'),
(11, 'Aymen Nurhussen', '1000', 'Birr', 'Aymen', '12345', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `catagory` text NOT NULL,
  `author` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` enum('Book','Handout','Megazine') NOT NULL,
  `price` int(100) NOT NULL,
  `info` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `catagory`, `author`, `title`, `type`, `price`, `info`, `img`) VALUES
(32, 'Fiction', 'Kimmery Martin', 'Queen of hearts', 'Book', 10, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_Image/Book_1.jpg'),
(33, 'Programming', 'Kyle Simpson', 'You Don\'t Know Js', 'Book', 11, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_Image/Book_2.jpg'),
(34, 'Educational', 'Kimmery Martin', 'Queen of Hearts', 'Book', 7, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_Image/Book_1.jpg'),
(35, 'Information System', 'Mahfuz A.', 'Introduction to Internet Programming', 'Handout', 3, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Handout_Image/thumb3.jpg'),
(37, 'Programming', 'Thomas A. Powell', 'Html and Css', 'Book', 9, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/thumb1.jpg'),
(41, 'Educational', 'Kimmey Auther', 'Queen of hearts', 'Book', 10, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(42, 'Educational', 'Kimmey Auther', 'Queen of hearts', 'Book', 10, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(43, 'Programming', 'Kimmey Auther', 'Queen of hearts', 'Book', 8, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(44, 'Fiction', 'Kimmey Auther', 'Queen of hearts', 'Book', 8, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(45, 'Fiction', 'Kimmey Auther', 'Queen of hearts', 'Book', 6, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(46, 'Programming', 'Kimmey Auther', 'Queen of hearts', 'Book', 9, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(47, 'Educational', 'Kimmey Auther', 'Queen of hearts', 'Book', 8, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(48, 'Fiction', 'Kimmey Auther', 'Queen of hearts', 'Book', 3, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(49, 'Programming', 'Kimmey Auther', 'Queen of hearts', 'Book', 2, ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/QueenOfHearts.jpg'),
(51, 'Educational', 'Kimmey Auther', 'Queen of hearts', 'Book', 6, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci debitis sequi consequatur maiores qui deleniti distinctio veniam harum nulla amet, quam eveniet ullam unde laboriosam nostrum odit quo quos minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias magni, consequatur dolores alias veniam reiciendis rem quo, nisi quae saepe ad quidem perspiciatis vitae! Illum voluptate id delectus alias.', 'img/Book_image/js_cover.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
