const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is RangaVittala');
fs.appendFileSync('notes.txt', '\nLearn Nodejs with love');