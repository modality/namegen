# namegen

A name generator based on a method described in _Chris Crawford on Game Design_. Names are generated based on the probablility that characters in a [source text](https://github.com/dariusk/corpora/) appear next to one another. I also added some heuristics to pick out the "good ones":

* Names should be between 3 and 12 characters long (inclusive)
* At least 40% of the letters in the name should be vowels
* Non-alphabet characters are ignored

## To generate names

Clone, install node modules, and then run `npm run test`. Try different combinations of source materials (animals+monsters, animals+flowers) to change the flavor of the names generated.
