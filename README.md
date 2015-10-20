# namegen

A name generator based on a method described in _Chris Crawford on Game Design_. Names are generated based on the probablility that characters in a [source text](https://github.com/dariusk/corpora/) appear next to one another. I also added some heuristics to pick out the "good ones":

* Names should be between 3 and 12 characters long (inclusive)
* At least 40% of the letters in the name should be vowels
* Non-alphabet characters are ignored

## To generate names

Clone, install node modules, and then run `npm run test`. Try different combinations of source materials (animals+monsters, animals+flowers) to change the flavor of the names generated.

## Sample output

### Cryptozoological Subjects (Animals + Monsters)

```
tiodimotyde dilancami rellaunk hink relveizaushi
ugowina vemaana ydcot ceax logecke beesil
zellella heamporinkea hinkel fapoat jacratenun
elemo pydimin fauchirachi jaucooa lara eichiganan
caceicr horaza irazerox corarr balarty yposhat
erynzearpa kelr feelealf baurogun oarkuat
quramaloco tealfe ellat veropulel pare
igapamongot uatar umprebe qurak araso
eiskrorynkoc binee usotew worpor cerarar veoure
```

### Alien Lifeforms = Animals + Flowers

```
vinadeanila allal keatelfo mochery areonele
erosoc peminson roseeacogl vera lollamolu
boorakeh wepoog tyboor palem yngooxgr reagon
ringeresqupe cont nasank verill nerr eens nery
ufer roth luldconia fouse querossllie laze eowam
ishe holliselogo focave kerofot nincamun
hotlluamun nakero qupos kearoppot besaheavam
kussterane pack gosox pernaposyp ramratar gatil
```

### Exoplanets = Metals + Stones + 2xFlowers

```
vert gitliute verarm kitedite oluesad rose
zarzod foro sinilaglym hositumam niuflele
oblearhium kerste penitondise xiumauone fope
veainiute remoritrde wetbontosus veprmacire
xishe ianzaver lind beonnda orane janeseo
zafonerde iteratium betrge kentum hosziuse
ponadumebe tinela ysyse niumadsium zerc
ialumofle umiste kiumalim mord focum rambelfle
```
