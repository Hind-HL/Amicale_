-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Client: 127.0.0.1
-- Généré le : Lun 11 Août 2014 à 12:40
-- Version du serveur: 5.5.20
-- Version de PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `omran`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE IF NOT EXISTS `actualite` (
  `IDact` int(11) NOT NULL AUTO_INCREMENT,
  `CIN` char(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `titre` text COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `image` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `contenue` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`IDact`),
  KEY `CIN_index` (`CIN`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Contenu de la table `actualite`
--

INSERT INTO `actualite` (`IDact`, `CIN`, `titre`, `date`, `image`, `contenue`) VALUES
(3, 'D740174', 'test test', '2014-07-09', 'img_act/ligne-de-fabrication.jpg', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(4, 'D740174', 'test test', '2014-07-09', '', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(5, 'D740174', 'test 2 test 2', '2014-07-10', 'img_act/ligne-de-fabrication.jpg', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(6, 'D740174', 'test 3 test 3', '2014-07-11', '', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(7, 'D740174', 'test 4 test 4', '2014-07-10', 'img_act/ligne-de-fabrication.jpg', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(8, 'D740174', 'test 3 test 3', '2014-07-11', '', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn'),
(9, 'D740174', 'Yassine El ghazouani', '2014-07-14', 'img_act/ligne-de-fabrication.jpg', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.'),
(10, 'D740174', 'Yassine El Ghazouani', '2014-07-14', '', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.'),
(11, 'D740174', 'El Ghazouani', '2014-07-14', 'img_act/ligne-de-fabrication.jpg', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.'),
(12, 'D740174', 'Yassine El Ghazouani', '2014-02-01', '', 'tenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.\r\ntenue zfdfksdjhlkdh lkjbljhvhbm ljhbljnlmn khjbljnmùkln hjmùklnljk bkhvmlj bhjv.\r\nkhjvjbk vbkhb:jkb vkghvljkbhj vmjkbh b:knmjn.');

-- --------------------------------------------------------

--
-- Structure de la table `commenter`
--

CREATE TABLE IF NOT EXISTS `commenter` (
  `CIN` char(9) COLLATE utf8_unicode_ci NOT NULL,
  `IDEvent` int(10) NOT NULL,
  `commentaire` text COLLATE utf8_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CIN`,`IDEvent`,`date`),
  KEY `IDEvent` (`IDEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `commenter`
--

INSERT INTO `commenter` (`CIN`, `IDEvent`, `commentaire`, `date`) VALUES
('D723654', 1, 'salam ca va', '2014-08-11 10:02:12'),
('D740174', 1, 'salut comment allez vous ?', '2014-08-11 10:01:51'),
('D740174', 1, 'ach tat3awdouuu', '2014-08-11 10:02:21'),
('D740174', 11, 'test', '2014-08-11 10:05:45'),
('D740174', 11, 'wach mchitou kolkom al3yanin ?', '2014-08-11 10:08:18');

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

CREATE TABLE IF NOT EXISTS `compte` (
  `CIN` char(9) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `statue` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `nom` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` char(150) COLLATE utf8_unicode_ci NOT NULL,
  `telephone` char(15) COLLATE utf8_unicode_ci NOT NULL,
  `fonction` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `login` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `etat` char(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`CIN`),
  KEY `CIN_dex` (`CIN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `compte`
--

INSERT INTO `compte` (`CIN`, `statue`, `nom`, `prenom`, `email`, `telephone`, `fonction`, `login`, `password`, `etat`) VALUES
('AC125741', 'membre', 'kacimi', 'hicham', 'hichamisto-kac@gmail.com', '06 33 22 11 44', 'ingénieur', 'hicham-kac', 'hicham2014', 'actif'),
('D723654', 'membre', 'Touzani', 'Mehdi', 't.mahdi.zani@hotmail.fr', '06 33 22 11 44', 'hhhh bla mangol', 'midi.touzani', 'mehdi2014', 'actif'),
('D740174', 'admin', 'El Ghazouani', 'Yassine', 'yassine-elgh@hotmail.fr', '06 75 07 47 25', 'stagiaire', 'yassi-elgh', 'elgh2007/', 'actif'),
('D740175', 'adhérent', 'El ghazouani', 'Yassine', 'yassi-elgh@hotmail.fr', '06 33 22 11 44', 'tbib', 'elgh-yassi', 'elgh2007/', 'actif'),
('D822541', 'membre', 'Dahbi', 'Hajar', 'hajourixa-dode@hotmail.fr', '06 20 20 46 76', 'tbiba', 'hajourixa-dode', 'hajar2014', 'actif');

-- --------------------------------------------------------

--
-- Structure de la table `deroulement`
--

CREATE TABLE IF NOT EXISTS `deroulement` (
  `IDDeroul` int(11) NOT NULL AUTO_INCREMENT,
  `IDEvent` int(10) NOT NULL,
  `galerie` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`IDDeroul`),
  KEY `IDEvent` (`IDEvent`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Contenu de la table `deroulement`
--

INSERT INTO `deroulement` (`IDDeroul`, `IDEvent`, `galerie`, `description`) VALUES
(1, 1, 'img_deroul/fabrication.jpg*img_deroul/ligne-de-fabrication.jpg', 'Amicale de solidarité organise le Lundi 7 juillet 2014 un ftour jama3i'),
(2, 2, 'img_deroul/fabrication.jpg*img_deroul/ligne-de-fabrication.jpg', 'Amicale de solidarité organise le Lundi 20 juillet 2014 un s7our jama3i.<br />\r\nalmarjou al9odoum bi katafa wa kadalik 3adam i7dar atfalikom nadaran ila anahom mitla chaatin makayzgawch lard wa chokran'),
(5, 5, 'img_deroul/fabrication.jpg*img_deroul/ligne-de-fabrication.jpg', 'Amicale de solidarité organise le Lundi 7 juillet 2014 un ftour jama3i'),
(6, 6, 'img_deroul/fabrication.jpg*img_deroul/ligne-de-fabrication.jpg', 'sdfghjkl zertyuiomp zertyilom sdfhyjuklm sdfhjl'),
(7, 7, '', 'hhhh gha kand7ek asa7bi malk kati9'),
(8, 11, 'img_deroul/fabrication.jpg*img_deroul/ligne-de-fabrication.jpg', 'wa chb3aaaaa msarya siri ama3ali lwazira layrdi 3lik hhhhh n3awdouha nchalah fsa3t lkhir.\r\nah olmra jaya nchalah andirouha l 7ed kort, HH NN STP');

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE IF NOT EXISTS `evenement` (
  `IDEvent` int(10) NOT NULL AUTO_INCREMENT,
  `CIN` char(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `intitule` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `categorie` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `budget` double NOT NULL,
  `date` date NOT NULL,
  `lieux` text COLLATE utf8_unicode_ci NOT NULL,
  `detail` text COLLATE utf8_unicode_ci NOT NULL,
  `etat` char(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`IDEvent`),
  KEY `even_cin_fk` (`CIN`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Contenu de la table `evenement`
--

INSERT INTO `evenement` (`IDEvent`, `CIN`, `intitule`, `categorie`, `budget`, `date`, `lieux`, `detail`, `etat`) VALUES
(1, 'D740174', 'Omrane FROUT', 'divertissement', 5000, '2014-07-23', 'fi chamal ifri9ya', 'Amicale de solidarité organise le Lundi 7 juillet 2014 un ftour jama3i', 'realise'),
(2, 'D740174', 'Omrane S7OUR :p', 'divertissement', 5000, '2014-07-25', 'fi chamal ifri9ya', 'Amicale de solidarité organise le Lundi 7 juillet 2014 un s7our jama3i', 'realise'),
(3, 'D740174', 'match de foot', 'sport', 5000, '2014-07-17', 'stade m.smail', 'Amicale de solidarité organise le Lundi 17 juillet 2014 un match de foot', 'annule'),
(5, 'D740174', 'match de bascket', 'sport', 5000, '2014-07-26', 'stade m.smail', 'Amicale de solidarité organise le Lundi 17 juillet 2014 un match de bascket', 'annule'),
(6, 'D740174', 'ri7la jama3ya', 'voyage', 5000, '2014-07-12', 'stade m.smail', 'Amicale de solidarité organise le Lundi 17 juillet 2014 un match de bascket', 'realise'),
(7, 'D740174', 'ri7la jama3ya 2', 'voyage', 5000, '2014-06-12', 'stade m.smail', 'Amicale de solidarité organise le Lundi 17 juillet 2014 un match de bascket', 'realise'),
(8, 'D740174', 'match de foot 2', 'sport', 5000, '2014-07-17', 'stade m.smail', 'Amicale de solidarité organise le Lundi 17 juillet 2014 un match de foot', 'annule'),
(10, 'D740174', 'walimato ghada2', 'divertissement', 5000, '2014-08-12', 'manzil si lghazouani', 'si yassine el ghazouani kay3rad 3lina pour le 14/08/2014 incha2 lah wa bi 7awlih', 'approuve'),
(11, 'D740174', 'excurtion', 'divertissement', 5000, '2014-08-07', 'marakech', 'ma3ali lwazira lala zineb guali gatlikou ghadi nsafrou ncha3lah lmrakch ntb7rou tmak onmchiw flkar', 'realise');

-- --------------------------------------------------------

--
-- Structure de la table `finance`
--

CREATE TABLE IF NOT EXISTS `finance` (
  `IDEvent` int(11) NOT NULL,
  `IDTresorerie` int(11) NOT NULL,
  PRIMARY KEY (`IDEvent`,`IDTresorerie`),
  KEY `IDTresorerie` (`IDTresorerie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messagerie`
--

CREATE TABLE IF NOT EXISTS `messagerie` (
  `CINemt` char(9) COLLATE utf8_unicode_ci NOT NULL,
  `CINrecep` char(9) COLLATE utf8_unicode_ci NOT NULL,
  `Message` text COLLATE utf8_unicode_ci NOT NULL,
  `objet` char(150) COLLATE utf8_unicode_ci NOT NULL,
  `etat` int(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CINemt`,`CINrecep`),
  KEY `CINrecep` (`CINrecep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sondage`
--

CREATE TABLE IF NOT EXISTS `sondage` (
  `ID` int(4) NOT NULL,
  `CIN` char(9) COLLATE utf8_unicode_ci NOT NULL,
  `IDEvent` int(10) NOT NULL,
  `choix` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `motive` text COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`ID`,`CIN`,`IDEvent`),
  KEY `IDEvent` (`IDEvent`),
  KEY `CIN` (`CIN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tresorerie`
--

CREATE TABLE IF NOT EXISTS `tresorerie` (
  `IDTresorerie` int(11) NOT NULL,
  `solde` float NOT NULL,
  PRIMARY KEY (`IDTresorerie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD CONSTRAINT `actualite_ibfk_2` FOREIGN KEY (`CIN`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `commenter`
--
ALTER TABLE `commenter`
  ADD CONSTRAINT `commenter_ibfk_2` FOREIGN KEY (`CIN`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE,
  ADD CONSTRAINT `commenter_ibfk_3` FOREIGN KEY (`IDEvent`) REFERENCES `evenement` (`IDEvent`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `deroulement`
--
ALTER TABLE `deroulement`
  ADD CONSTRAINT `deroulement_ibfk_1` FOREIGN KEY (`IDEvent`) REFERENCES `evenement` (`IDEvent`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_2` FOREIGN KEY (`CIN`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE,
  ADD CONSTRAINT `evenement_ibfk_3` FOREIGN KEY (`CIN`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `finance`
--
ALTER TABLE `finance`
  ADD CONSTRAINT `finance_ibfk_1` FOREIGN KEY (`IDEvent`) REFERENCES `evenement` (`IDEvent`) ON UPDATE CASCADE,
  ADD CONSTRAINT `finance_ibfk_2` FOREIGN KEY (`IDTresorerie`) REFERENCES `tresorerie` (`IDTresorerie`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `messagerie`
--
ALTER TABLE `messagerie`
  ADD CONSTRAINT `messagerie_ibfk_2` FOREIGN KEY (`CINemt`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE,
  ADD CONSTRAINT `messagerie_ibfk_4` FOREIGN KEY (`CINrecep`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `sondage`
--
ALTER TABLE `sondage`
  ADD CONSTRAINT `sondage_ibfk_3` FOREIGN KEY (`IDEvent`) REFERENCES `evenement` (`IDEvent`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sondage_ibfk_4` FOREIGN KEY (`CIN`) REFERENCES `compte` (`CIN`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
