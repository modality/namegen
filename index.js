var colors = require('colors');
var _ = require('underscore');
var corpora = require('corpora-project');

var ngods = _.reduce(corpora.getFile('mythology', 'norse_gods')['norse_deities'], function(memo, val) {
  return memo.concat(val);
}, []);
var ggods = corpora.getFile('mythology', 'greek_gods')['greek_gods'];
var monsters = corpora.getFile('mythology', 'greek_monsters')['greek_monsters'];
var titans = corpora.getFile('mythology', 'greek_titans')['greek_titans'];
var animals = corpora.getFile('animals', 'common')['animals'];
var dinos = corpora.getFile('animals', 'dinosaurs')['dinosaurs'];
var flowers = corpora.getFile('plants', 'flowers')['flowers'];
var stones = corpora.getFile('materials', 'decorative-stones')['decorative stones'];
var metals = corpora.getFile('materials', 'metals')['metals'];

//var all = animals.concat(monsters);
//var all = metals.concat(stones).concat(flowers).concat(flowers);
//var all = animals.concat(flowers);

var all = ngods.concat(stones);

var alpha = 'abcdefghijklmnopqrstuvwxyz';
var vowels = 'aeiouy';
var consonants = 'bcdfghjklmnpqrstvwxyz';

var tuples = {};
var maxlen = 0;
var words = [];

function isAlpha(x) {
  return alpha.indexOf(x) >= 0
}

function incTuple(a, b) {
  if(!tuples[a]) tuples[a] = {};
  if(!tuples[a][b]) tuples[a][b] = 0;
  tuples[a][b]++;
}

function countVowels(str) {
  return _.filter(str, function(x) {
    return _.contains(vowels, x);
  }).length;
}

function longestConsonantRun(str) {
}

_.each(all, function(val) {
  maxlen = Math.max(maxlen, val.length);
  var char1, char2;
  for(var i=1; i<val.length; i++) {
    char1 = val[i-1].toLowerCase(), char2 = val[i].toLowerCase();
    if(isAlpha(char1) && isAlpha(char2)) incTuple(char1, char2);
  }
  if(isAlpha(char2)) {
    incTuple(char2, ' ');
  }
});

_.each(tuples, function(val, key) {
  tuples[key] = _.reduce(val, function(memo, val, key) {
    _.times(val, function() { memo.push(key); });
    return memo;
  }, []);
});

delete tuples[' '];

_.times(50, function() {
  var build = _.sample(_.keys(tuples));
  var tries = 0;
  while(tries < maxlen && build.length < maxlen && build[build.length-1] != ' ') {
    var lastchar = build[build.length-1];
    var nextchar = _.sample(tuples[lastchar]);
    if(build.length < 4 && nextchar == ' ') {
    } else if(build.length < 2) {
      if(vowels.indexOf(lastchar) >= 0 || vowels.indexOf(nextchar) >= 0) {
        build += nextchar;
      }
    } else if(build.length > 2 && lastchar == nextchar && build[build.length-2] == nextchar) {
    } else {
      build += nextchar;
    }
    if(Math.random() > (1 - (build.length/maxlen))) {
      tries += 2;
    }
    tries++;
  }
  words.push(build);
});

_.each(words, function(word) {
  if((countVowels(word)+1) / word.length >= 0.4 &&
      word.length > 2 &&
      word.length <= 12) {
    console.log(word.green);
  } else {
    console.log(word.red);
  }
});
