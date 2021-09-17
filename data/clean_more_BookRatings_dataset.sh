#!/usr/bin/env bash
# cleans BookRatings dataset to only valid ISBN numbers
# for best results, replace all 0 ratings with non-digit character before running script

FILE=BookRatings2.sql
if [[ -f "$FILE" ]]; then
    rm BookRatings2.sql
fi
head -n 24 BookRatings.sql > BookRatings2.sql
grep -E ",'[[:digit:]]{10}',[1-9]);" BX-Book-Ratings.sql >> BookRatings2.sql
grep -E ",'[[:digit:]]{10}',10);" BX-Book-Ratings.sql >> BookRatings2.sql
grep -E ",'978[[:digit:]]{10}',[1-9]);" BX-Book-Ratings.sql >> BookRatings2.sql
grep -E ",'978[[:digit:]]{10}',10);" BX-Book-Ratings.sql >> BookRatings2.sql
grep -E ",'979[[:digit:]]{10}',[1-9]);" BX-Book-Ratings.sql >> BookRatings2.sql
grep -E ",'979[[:digit:]]{10}',10);" BX-Book-Ratings.sql >> BookRatings2.sql

FILE=BookRatings3.sql
if [[ -f "$FILE" ]]; then
    rm BookRatings3.sql
fi
head -n 24 BookRatings.sql > BookRatings3.sql
# grep -E "VALUES \(175510," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(81731," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(30461," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(121941," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(225951," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(38679," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(28056," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(47194," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(98422," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(86683," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(209394," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(136104," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(209265," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(188280," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(11179," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(82080," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(30022," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(91047," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(18412," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(276560," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(214042," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(203058," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(5741," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(5609," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(202706," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(77114," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(148191," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(262780," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(200009," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(23631," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(152438," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(144516," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(113531," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(248540," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(37310," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(233445," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(97833," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(31226," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(70999," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(45340," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(65228," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(262391," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(228311," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(278202," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(38589," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(68491," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(26057," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(76350," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(231891," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(147752," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(179256," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(33517," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(168036," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(165073," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(51100," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(100984," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(252510," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(136735," BookRatings2.sql >> BookRatings3.sql
grep -E "VALUES \(2358," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(208788," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(154730," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(205426," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(213066," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(65877," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(136255," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(248572," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(92398," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(49582," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(182101," BookRatings2.sql >> BookRatings3.sql
# grep -E "VALUES \(211057," BookRatings2.sql >> BookRatings3.sql
