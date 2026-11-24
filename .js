/*
  CHISHOLM SWIMMING DATA  (the website reads this file automatically; no buttons)

  HOW TO ADD A MEET: copy one block in "meets", change the details, add result rows.
    result row = [ event, swimmers, time, points ]       (points may be null)
    relays: put all swimmers in one string, separated by commas
    division: "Boys" or "Girls"        course: "SCY", "SCM" or "LCM"
    optional: splits as a 5th item in a result row, e.g. "25.1, 27.4"

  HOW TO ADD A SWIMMER: add a row to "athletes".
    [ name, graduationYear (0 = unknown), firstSeason, lastSeason, division, feederOrigin, note ]

  Times came from photos of printouts: verify against the paper (see transcription-notes.md).
*/
window.SWIM_DATA = {
  athletes: [
    ['Kilen Klimek', 2021, '2014-15', '2018-19', 'Boys', '', ''],
    ['Zack Quirk', 2021, '2014-15', '2018-19', 'Boys', '', ''],
    ['Erick Aldrich', 2020, '2014-15', '2018-19', 'Boys', '', 'Printed "Erik" on one sheet'],
    ['Jonah Gierman', 2020, '2014-15', '2018-19', 'Boys', '', ''],
    ['Jesse Covel', 2021, '2014-15', '2018-19', 'Boys', '', ''],
    ['Bay Yukich', 2021, '2014-15', '2018-19', 'Boys', '', ''],
    ['Jake Fena', 2020, '2014-15', '2014-15', 'Boys', '', 'Grade inferred from a 7th-grade event'],
    ['Jordan Perkovich', 2020, '2014-15', '2014-15', 'Boys', '', 'Grade inferred from a 7th-grade event'],
    ['Hunter Berletich', 2020, '2014-15', '2014-15', 'Boys', '', 'Grade inferred from a 7th-grade event'],
    ['Matt Temple', 2020, '2014-15', '2014-15', 'Boys', '', 'Grade inferred from a 7th-grade event'],
    ['Ian Gornik', 2020, '2014-15', '2014-15', 'Boys', '', 'On the roster sheet, no results read'],
    ['Andrew Aldrich', 2020, '2014-15', '2014-15', 'Boys', '', '2015 swimmer; may be a different person than the 2023 grad'],
    ['Jade Yukich', 2019, '2014-15', '2014-15', 'Boys', '', 'Grade inferred from an 8th-grade event'],
    ['Alex Kovisto', 2019, '2014-15', '2018-19', 'Boys', '', ''],
    ['Jack Bryan', 2019, '2014-15', '2018-19', 'Boys', '', ''],
    ['Nick Jordan', 2019, '2014-15', '2018-19', 'Boys', '', ''],
    ['Cody Oman', 2019, '2014-15', '2018-19', 'Boys', '', 'Diver in 2019'],
    ['Cade Klimek', 2019, '2014-15', '2018-19', 'Boys', '', ''],
    ['Patrick Hake', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Anthony Briski', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Eric VanLoo', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Zack Skurla', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Aaron Fena', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Skylar Appleman', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Jake Gierman', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Ean Pulford', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Caleb Ruper', 0, '2014-15', '2014-15', 'Boys', '', 'Grad year not on results'],
    ['Mason Chuk', 2024, '2018-19', '2018-19', 'Boys', '', 'Grade 7 in 2019'],
    ['Calvin Wangensteen', 0, '2018-19', '2018-19', 'Boys', '', 'Grade unknown'],
    ['Andrew Aldrich', 2023, '2018-19', '2018-19', 'Boys', '', 'Grade 8 in 2019; may be a different person than the 2015 swimmer']
  ],

  // Feeder programs: { season, name, type: "Direct" | "Foundational", classification, incoming }
  feeders: [],

  meets: [
    {
      date: '2015-01-06', meet: 'Eveleth-Gilbert vs Chisholm Dual', course: 'SCY', division: 'Boys',
      results: [
        ['160 Medley Relay', 'Kilen Klimek, Jack Bryan, Alex Kovisto, Erick Aldrich', '1:59.30', 6],
        ['160 Medley Relay', 'Bay Yukich, Zack Quirk, Cody Oman, Jonah Gierman', '2:11.65', 3],
        ['160 Medley Relay', 'Cade Klimek, Anthony Briski, Patrick Hake, Eric VanLoo', '1:28.88', 6],
        ['160 Medley Relay', 'Zack Skurla, Jake Gierman, Aaron Fena, Ean Pulford', '1:38.09', 1],
        ['200 Free', 'Zack Quirk', '3:16.86', 3], ['200 Free', 'Matt Temple', '3:24.76', 1],
        ['200 Free', 'Nick Jordan', '2:08.91', 4], ['200 Free', 'Skylar Appleman', '2:12.38', 1],
        ['80 IM', 'Alex Kovisto', '59.72', 4], ['80 IM', 'Jake Fena', '1:18.34', 1],
        ['160 IM', 'Zack Skurla', '2:01.14', 3], ['160 IM', 'Aaron Fena', '2:09.13', 1],
        ['60 Free', 'Jade Yukich', '37.80', 4], ['60 Free', 'Zack Quirk', '43.81', 1],
        ['60 Free', 'Patrick Hake', '29.29', 4], ['60 Free', 'Anthony Briski', '31.95', 1],
        ['60 Fly', 'Cody Oman', '42.62', 4], ['60 Fly', 'Matt Temple', '1:11.97', 1],
        ['100 Fly', 'Nick Jordan', '1:11.55', 3], ['100 Fly', 'Aaron Fena', '1:17.51', 1],
        ['100 Free', 'Ean Pulford', '58.94', 4], ['100 Free', 'Jade Yukich', '1:10.82', 3],
        ['100 Free', 'Patrick Hake', '52.62', 4], ['100 Free', 'Skylar Appleman', '59.31', null],
        ['300 Free', 'Bay Yukich', '5:11.43', 3], ['300 Free', 'Kilen Klimek', '5:15.91', 1],
        ['500 Free', 'Cade Klimek', '6:12.02', 3], ['500 Free', 'Jack Bryan', '7:10.71', null],
        ['160 Free Relay', 'Alex Kovisto, Erick Aldrich, Jake Fena, Cody Oman', '1:44.10', 6],
        ['160 Free Relay', 'Jonah Gierman, Caleb Ruper, Bay Yukich, Kilen Klimek', '2:06.37', 1]
      ]
    },
    {
      date: '2015-02-21', meet: 'Ice Box Invitational (International Falls)', course: 'SCY', division: 'Boys',
      results: [
        ['200 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Jake Gierman', '1:56.90', 28],
        ['200 Free Relay', 'Jake Gierman, Nick Jordan, Cade Klimek, (4th swimmer unreadable)', '1:43.20', 22],
        ['400 Free Relay', 'Alex Kovisto, Cody Oman, Jade Yukich, Ean Pulford', '4:11.48', 20],
        ['200 Free', 'Erick Aldrich', '2:58.80', 8], ['200 Free', 'Jonah Gierman', '3:22.03', 6], ['200 Free', 'Jade Yukich', '2:15.40', 11],
        ['100 IM', 'Kilen Klimek', '1:26.86', 10], ['100 IM', 'Alex Kovisto', '1:09.08', 14],
        ['50 Free', 'Jack Bryan', '27.72', 9], ['50 Free', 'Jesse Covel', '42.56', 1],
        ['50 Fly', 'Nick Jordan', '28.75', 14], ['50 Fly', 'Cody Oman', '33.05', 6], ['50 Fly', 'Zack Quirk', '45.80', 9], ['50 Fly', 'Matt Temple', '53.58', 8],
        ['100 Free', 'Jake Gierman', '57.14', 11], ['100 Free', 'Ean Pulford', '1:00.66', 4],
        ['300 Free', 'Nick Jordan', '3:15.95', 14], ['300 Free', 'Cade Klimek', '3:27.75', 11], ['300 Free', 'Jade Yukich', '3:34.37', 10], ['300 Free', 'Jake Fena', '5:08.31', 8],
        ['100 Back', 'Cade Klimek', '1:06.93', 14], ['100 Back', 'Alex Kovisto', '1:12.65', 10], ['100 Back', 'Kilen Klimek', '1:29.26', 11],
        ['100 Back', 'Jordan Perkovich', '2:15.58', 2], ['100 Back', 'Hunter Berletich', '2:22.87', 1],
        ['100 Breast', 'Jake Fena', '1:43.82', 14], ['100 Breast', 'Erick Aldrich', '1:44.41', 11], ['100 Breast', 'Jesse Covel', '1:59.70', 9], ['100 Breast', 'Jack Bryan', '1:16.66', 14]
      ]
    },
    {
      date: '2019-01-08', meet: 'Chisholm vs Grand Rapids', course: 'SCY', division: 'Boys',
      results: [
        ['160 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:22.35', 6],
        ['200 Free', 'Cade Klimek', '1:58.00', 4],
        ['160 IM', 'Jack Bryan', '1:47.03', 4], ['160 IM', 'Zack Quirk', '1:52.91', 3],
        ['60 Free', 'Alex Kovisto', '28.97', 4],
        ['500 Free', 'Andrew Aldrich', '5:36.10', 4], ['500 Free', 'Cade Klimek', '6:00.00', null],
        ['100 Back', 'Nick Jordan', '59.61', 4], ['100 Back', 'Kilen Klimek', '1:10.13', 1],
        ['100 Breast', 'Jack Bryan', '1:09.02', 3], ['100 Breast', 'Zack Quirk', '1:13.41', 1],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:34.75', 6]
      ]
    },
    {
      date: '2019-01-10', meet: 'Chisholm at Mesabi East', course: 'SCY', division: 'Boys',
      results: [
        ['200 Medley Relay', 'Jack Bryan, Jesse Covel, Cade Klimek, Kilen Klimek', '2:00.34', 4],
        ['200 Medley Relay', 'Zack Quirk, Nick Jordan, Bay Yukich, Alex Kovisto', '2:01.37', 2],
        ['200 Free', 'Bay Yukich', '2:15.54', 3], ['200 Free', 'Kilen Klimek', '2:25.55', 1],
        ['200 IM', 'Jesse Covel', '2:43.37', 3],
        ['JV event (name cut off on printout)', 'Jesse Covel', '1:22.48', null],
        ['50 Free', 'Mason Chuk', '31.36', 4], ['50 Free', 'Nick Jordan', '24.00', 6], ['50 Free', 'Jack Bryan', '24.50', 4], ['50 Free', 'Andrew Aldrich', '26.88', 1],
        ['1m Diving', 'Cody Oman', '207.20', 6],
        ['100 Fly', 'Nick Jordan', '1:01.56', 6], ['100 Fly', 'Zack Quirk', '1:04.76', 2],
        ['100 Free', 'Mason Chuk', '1:11.64', 6], ['100 Free', 'Alex Kovisto', '53.34', 6], ['100 Free', 'Cade Klimek', '54.27', 4],
        ['500 Free', 'Bay Yukich', '6:09.23', 4], ['500 Free', 'Andrew Aldrich', '6:50.23', 1],
        ['200 Free Relay', 'Alex Kovisto, Kilen Klimek, Cade Klimek, Bay Yukich', '1:40.35', 8],
        ['100 Back', 'Jack Bryan', '1:08.93', 4], ['100 Back', 'Zack Quirk', '1:16.41', 3],
        ['100 Breast', 'Cade Klimek', '1:15.11', 4], ['100 Breast', 'Kilen Klimek', '1:20.14', 1],
        ['400 Free Relay', 'Alex Kovisto, Jack Bryan, Zack Quirk, Nick Jordan', '3:39.06', 8]
      ]
    },
    {
      date: '2019-01-12', meet: "Virginia Boys' Invitational", course: 'SCY', division: 'Boys',
      results: [
        ['200 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:47.31', 40],
        ['200 Medley Relay', 'Kilen Klimek, Jonah Gierman, Zack Quirk, Bay Yukich', '1:57.10', 28],
        ['200 Free', 'Cade Klimek', '2:00.44', 20], ['200 Free', 'Bay Yukich', '2:07.61', 7], ['200 Free', 'Andrew Aldrich', '2:28.34', 1],
        ['200 IM', 'Jack Bryan', '2:23.52', 13], ['200 IM', 'Zack Quirk', '2:25.27', 11], ['200 IM', 'Kilen Klimek', '2:36.80', 5],
        ['50 Free', 'Alex Kovisto', '23.49', 20],
        ['100 Fly', 'Nick Jordan', '59.83', 17],
        ['500 Free', 'Cade Klimek', '5:38.88', 17],
        ['200 Free Relay', 'Alex Kovisto, Zack Quirk, Jack Bryan, Bay Yukich', '1:35.76', 40],
        ['100 Back', 'Nick Jordan', '59.50', 20],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:33.21', 40],
        ['400 Free Relay', 'Erick Aldrich, Andrew Aldrich, Mason Chuk, Jesse Covel', '4:21.24', 12]
      ]
    },
    {
      date: '2019-01-19', meet: 'Section 6A True Team (IRC Swim Meet)', course: 'SCY', division: 'Boys',
      results: [
        ['200 Free Relay', 'Alex Kovisto, Zack Quirk, Jack Bryan, Bay Yukich', '1:35.61', 70],
        ['200 Free Relay', 'Kilen Klimek, Erick Aldrich, Jesse Covel, Jonah Gierman', '1:49.35', 50],
        ['50 Free', 'Alex Kovisto', '23.64', 33], ['50 Free', 'Bay Yukich', '24.50', 28], ['50 Free', 'Erick Aldrich', '29.29', 9],
        ['1m Diving', 'Cody Oman', '310.80', 32],
        ['100 Fly', 'Nick Jordan', '1:01.42', 34], ['100 Fly', 'Zack Quirk', '1:05.17', 28], ['100 Fly', 'Jesse Covel', '1:23.65', 10],
        ['100 Free', 'Mason Chuk', '1:09.99', 8],
        ['500 Free', 'Cade Klimek', '5:33.00', 35], ['500 Free', 'Andrew Aldrich', '6:37.58', 14],
        ['100 Back', 'Nick Jordan', '58.81', 36],
        ['200 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:46.53', 70],
        ['200 Medley Relay', 'Kilen Klimek, Jonah Gierman, Zack Quirk, Bay Yukich', '1:56.56', 58],
        ['100 Back', 'Kilen Klimek', '1:10.69', 27],
        ['100 Breast', 'Jack Bryan', '1:08.52', 32], ['100 Breast', 'Jonah Gierman', '1:18.30', 20],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:31.24', 72],
        ['200 Free', 'Cade Klimek', '1:56.39', 36], ['200 Free', 'Andrew Aldrich', '2:28.71', 11], ['200 Free', 'Mason Chuk', '2:38.66', 7],
        ['200 IM', 'Zack Quirk', '2:25.75', 29], ['200 IM', 'Kilen Klimek', '2:39.93', 21], ['200 IM', 'Jesse Covel', '2:48.51', 14],
        ['50 Free', 'Jack Bryan', '24.61', 26]
      ]
    },
    {
      date: '2019-01-22', meet: 'Chisholm vs Hibbing', course: 'SCY', division: 'Boys',
      results: [
        ['160 Medley Relay', 'Andrew Aldrich, Erick Aldrich, Jesse Covel, Mason Chuk', '1:49.98', 6],
        ['160 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:21.00', 6],
        ['160 Medley Relay', 'Kilen Klimek, Jonah Gierman, Zack Quirk, Bay Yukich', '1:30.12', 1],
        ['200 Free', 'Cade Klimek', '1:58.02', 3], ['200 Free', 'Andrew Aldrich', '2:26.28', null],
        ['160 IM', 'Jack Bryan', '1:48.79', 3], ['160 IM', 'Zack Quirk', '1:50.53', 1],
        ['60 Free', 'Erick Aldrich', '34.99', 4], ['60 Free', 'Mason Chuk', '37.53', 1],
        ['60 Free', 'Alex Kovisto', '28.66', 4], ['60 Free', 'Kilen Klimek', '31.80', null],
        ['100 Fly', 'Jesse Covel', '1:15.61', 4], ['100 Fly', 'Nick Jordan', '58.63', 1], ['100 Fly', 'Zack Quirk', '1:02.88', null],
        ['100 Free', 'Mason Chuk', '1:08.41', 4], ['100 Free', 'Bay Yukich', '53.89', 3], ['100 Free', 'Jonah Gierman', '1:00.27', null],
        ['500 Free', 'Cade Klimek', '5:32.63', 4], ['500 Free', 'Andrew Aldrich', '6:13.51', null],
        ['160 Free Relay', 'Alex Kovisto, Jack Bryan, Zack Quirk, Bay Yukich', '1:13.90', 6],
        ['160 Free Relay', 'Kilen Klimek, Erick Aldrich, Jonah Gierman, Jesse Covel', '1:25.78', null],
        ['100 Back', 'Nick Jordan', '57.80', 4], ['100 Back', 'Kilen Klimek', '1:09.34', 1],
        ['100 Breast', 'Jack Bryan', '1:05.33', 4], ['100 Breast', 'Jonah Gierman', '1:19.80', null],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:30.48', 6],
        ['400 Free Relay', 'Erick Aldrich, Andrew Aldrich, Jesse Covel, Mason Chuk', '4:33.25', null]
      ]
    },
    {
      date: '2019-01-24', meet: 'Chisholm vs Eveleth-Gilbert', course: 'SCY', division: 'Boys',
      results: [
        ['200 Medley Relay', 'Cade Klimek, Jack Bryan, Zack Quirk, Alex Kovisto', '1:23.75', 6],
        ['200 Medley Relay', 'Bay Yukich, Jonah Gierman, Kilen Klimek, Erick Aldrich', '1:34.69', 1],
        ['200 Free', 'Mason Chuk', '2:29.95', 3],
        ['200 Free', 'Cade Klimek', '1:59.48', 3], ['200 Free', 'Andrew Aldrich', '2:26.35', null],
        ['160 IM', 'Nick Jordan', '1:43.98', 4], ['160 IM', 'Bay Yukich', '1:50.48', 3],
        ['60 Free', 'Calvin Wangensteen', '1:19.31', 3],
        ['60 Free', 'Alex Kovisto', '28.45', 4], ['60 Free', 'Jonah Gierman', '32.62', 1],
        ['100 Fly', 'Zack Quirk', '1:01.43', 4],
        ['100 Free', 'Nick Jordan', '51.76', 4], ['100 Free', 'Erick Aldrich', '1:02.87', null],
        ['500 Free', 'Cade Klimek', '5:28.83', 4], ['500 Free', 'Andrew Aldrich', '6:32.12', null],
        ['160 Free Relay', 'Jonah Gierman, Erick Aldrich, Andrew Aldrich, Kilen Klimek', '1:25.90', 6],
        ['100 Back', 'Kilen Klimek', '1:07.97', 1], ['100 Back', 'Zack Quirk', '1:10.52', null],
        ['100 Breast', 'Jack Bryan', '1:06.10', 4], ['100 Breast', 'Jonah Gierman', '1:17.08', 1],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Jack Bryan, Nick Jordan', '3:38.89', 6],
        ['400 Free Relay', 'Kilen Klimek, Erick Aldrich, Zack Quirk, Bay Yukich', '3:55.98', 1],
        ['1m Diving', 'Cody Oman', '190.90', 4]
      ]
    },
    {
      date: '2019-02-08', meet: 'Chisholm vs Princeton', course: 'SCY', division: 'Boys',
      results: [
        ['160 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:20.07', 6],
        ['160 Medley Relay', 'Bay Yukich, Jonah Gierman, Kilen Klimek', '1:31.08', 1],
        ['200 Free', 'Cade Klimek', '1:57.66', 4], ['200 Free', 'Andrew Aldrich', '2:22.65', null],
        ['160 IM', 'Jesse Covel', '2:04.58', 4],
        ['160 IM', 'Jack Bryan', '1:46.27', 1], ['160 IM', 'Zack Quirk', '1:51.06', null],
        ['60 Free', 'Mason Chuk', '36.57', 1], ['60 Free', 'Calvin Wangensteen', '1:01.00', null],
        ['60 Free', 'Alex Kovisto', '28.37', 4], ['60 Free', 'Bay Yukich', '30.16', 3],
        ['100 Fly', 'Zack Quirk', '1:04.33', 1], ['100 Fly', 'Jesse Covel', '1:20.78', null],
        ['100 Free', 'Mason Chuk', '1:07.10', 1], ['100 Free', 'Calvin Wangensteen', '1:55.68', null],
        ['100 Free', 'Nick Jordan', '50.79', 4], ['100 Free', 'Kilen Klimek', '57.01', null],
        ['500 Free', 'Cade Klimek', '5:19.63', 4], ['500 Free', 'Andrew Aldrich', '6:26.95', null],
        ['160 Free Relay', 'Alex Kovisto, Zack Quirk, Kilen Klimek, Bay Yukich', '1:16.39', 6],
        ['160 Free Relay', 'Jonah Gierman, Jesse Covel, Mason Chuk, Andrew Aldrich', '1:31.91', null],
        ['100 Back', 'Nick Jordan', '58.96', 3], ['100 Back', 'Kilen Klimek', '1:10.15', null],
        ['100 Breast', 'Jack Bryan', '1:03.98', 4], ['100 Breast', 'Jonah Gierman', '1:17.52', 1],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:30.43', 6]
      ]
    },
    {
      date: '2019-02-14', meet: 'Chisholm vs Mesabi East', course: 'SCY', division: 'Boys',
      results: [
        ['160 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:19.75', 6],
        ['160 Medley Relay', 'Kilen Klimek, Jonah Gierman, Zack Quirk, Bay Yukich', '1:28.54', 1],
        ['200 Free', 'Cade Klimek', '1:56.44', 4], ['200 Free', 'Andrew Aldrich', '2:24.94', null],
        ['160 IM', 'Jack Bryan', '1:44.22', 3], ['160 IM', 'Kilen Klimek', '1:55.43', null],
        ['60 Free', 'Mason Chuk', '36.90', 1], ['60 Free', 'Calvin Wangensteen', '58.41', null],
        ['60 Free', 'Alex Kovisto', '28.03', 4], ['60 Free', 'Zack Quirk', '31.05', 1],
        ['100 Fly', 'Zack Quirk', '1:00.59', 4], ['100 Fly', 'Jesse Covel', '1:10.34', null],
        ['100 Free', 'Mason Chuk', '1:08.86', 3],
        ['100 Free', 'Nick Jordan', '52.83', 4], ['100 Free', 'Bay Yukich', '53.94', 3],
        ['300 Free', 'Andrew Aldrich', '3:42.53', 3],
        ['500 Free', 'Cade Klimek', '5:16.16', 4], ['500 Free', 'Jesse Covel', '7:01.38', null],
        ['160 Free Relay', 'Alex Kovisto, Jack Bryan, Zack Quirk, Bay Yukich', '1:13.06', 6],
        ['100 Back', 'Nick Jordan', '56.09', 4], ['100 Back', 'Kilen Klimek', '1:08.81', 1],
        ['100 Breast', 'Jack Bryan', '1:02.92', 4], ['100 Breast', 'Jonah Gierman', '1:16.94', null]
      ]
    },
    {
      date: '2018-12-18', meet: 'Superior vs Proctor vs Chisholm', course: 'SCY', division: 'Boys',
      results: [
        ['1m Diving', 'Cody Oman', '192.75', null],
        ['200 Medley Relay', 'Cade Klimek, Jack Bryan, Nick Jordan, Alex Kovisto', '1:50.02', null],
        ['200 Medley Relay', 'Kilen Klimek, Jonah Gierman, Zack Quirk, Erick Aldrich', '2:05.88', null],
        ['200 Free', 'Andrew Aldrich', '2:36.29', null], ['200 Free', 'Mason Chuk', '2:45.82', null],
        ['200 Free', 'Cade Klimek', '2:04.40', null], ['200 Free', 'Kilen Klimek', '2:25.67', null],
        ['200 IM', 'Alex Kovisto', '2:30.76', null], ['200 IM', 'Zack Quirk', '2:36.78', null],
        ['50 Free', 'Mason Chuk', '32.13', null], ['50 Free', 'Jack Bryan', '24.86', null], ['50 Free', 'Bay Yukich', '25.23', null],
        ['100 Fly', 'Nick Jordan', '1:00.49', null], ['100 Fly', 'Zack Quirk', '1:08.91', null],
        ['100 Free', 'Andrew Aldrich', '1:12.10', null], ['100 Free', 'Bay Yukich', '55.79', null],
        ['500 Free', 'Cade Klimek', '5:50.01', null],
        ['200 Free Relay', 'Alex Kovisto, Jack Bryan, Nick Jordan, Bay Yukich', '1:39.07', null],
        ['200 Free Relay', 'Zack Quirk, Andrew Aldrich, Kilen Klimek, Jonah Gierman', '2:00.55', null],
        ['100 Back', 'Kilen Klimek', '1:16.25', null],
        ['100 Breast', 'Jack Bryan', '1:09.74', null], ['100 Breast', 'Jonah Gierman', '1:23.23', null],
        ['400 Free Relay', 'Alex Kovisto, Cade Klimek, Bay Yukich, Nick Jordan', '3:46.49', null]
      ]
    }
  ]
};
