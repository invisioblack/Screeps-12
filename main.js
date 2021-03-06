//The real stuff starts here.
module.exports.loop = function () {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

//-----SETTINGS-----

//Note, dynamic spawning will not work properly in a new room.  You will need to manually update the creep body parts below
//This will be fixed in a later version

//Set username
    var userName = "Zim";

//Show summary on tick?  If so, which room?  ('all' or 'nomads' are a valid sumRoom)
    var showSum = 0;
    var sumRoom = 'all';

//Room 1 population caps
    var hCap1 = 2;  //harvester
    var hbCap1 = 2;  //harvester source 2
    var bCap1 = 0;  //builder
    var rCap1 = 1;  //repairer
    var uCap1 = 6;  //upgrader
    var eCap1 = 0;  //explorer
    var cCap1 = 0;  //claimer
    var aCap1 = 0;  //attacker
    var mCap1 = 0;  //miner

//Room 2 population caps
    var hCap2 = 2;  //harvester
    var hbCap2 = 2;  //harvester source 2
    var bCap2 = 0;  //builder
    var rCap2 = 1;  //repairer
    var uCap2 = 5;  //upgrader
    var eCap2 = 0;  //explorer
    var cCap2 = 0;  //claimer
    var aCap2 = 0;  //attacker
    var mCap2 = 0;  //miner

//Room 3 population cap
    var hCap3 = 2;  //harvester
    var hbCap3 = 2;  //harvester source 2
    var bCap3 = 0;  //builder
    var rCap3 = 1;  //repairer
    var uCap3 = 7;  //upgrader
    var eCap3 = 0;  //explorer
    var cCap3 = 0;  //claimer
    var aCap3 = 0;  //attacker
    var mCap3 = 0;  //miner
    
//Room 4 population cap
    var hCap4 = 2;  //harvester
    var hbCap4 = 2;  //harvester source 2
    var bCap4 = 0;  //builder
    var rCap4 = 1;  //repairer
    var uCap4 = 4;  //upgrader
    var eCap4 = 0;  //explorer
    var cCap4 = 0;  //claimer
    var aCap4 = 0;  //attacker
    var mCap4 = 0;  //miner

//Room 5 population cap
    var hCap5 = 2;  //harvester
    var hbCap5 = 2;  //harvester source 2
    var bCap5 = 0;  //builder
    var rCap5 = 1;  //repairer
    var uCap5 = 4;  //upgrader
    var eCap5 = 0;  //explorer
    var cCap5 = 0;  //claimer
    var aCap5 = 0;  //attacker
    var mCap5 = 0;  //miner

//Room 6 population cap
    var hCap6 = 2;  //harvester
    var hbCap6 = 2;  //harvester source 2
    var bCap6 = 0;  //builder
    var rCap6 = 1;  //repairer
    var uCap6 = 3;  //upgrader
    var eCap6 = 0;  //explorer
    var cCap6 = 0;  //claimer
    var aCap6 = 0;  //attacker
    var mCap6 = 0;  //miner
    
//Room 7 population cap
    var hCap7 = 2;  //harvester
    var hbCap7 = 2;  //harvester source 2
    var bCap7 = 0;  //builder
    var rCap7 = 1;  //repairer
    var uCap7 = 3;  //upgrader
    var eCap7 = 0;  //explorer
    var cCap7 = 0;  //claimer
    var aCap7 = 3;  //attacker
    var mCap7 = 0;  //miner

//Room 8 population cap
    var hCap8 = 2;  //harvester
    var hbCap8 = 2;  //harvester source 2
    var bCap8 = 0;  //builder
    var rCap8 = 1;  //repairer
    var uCap8 = 5;  //upgrader
    var eCap8 = 0;  //explorer
    var cCap8 = 0;  //claimer
    var aCap8 = 0;  //attacker
    var mCap8 = 0;  //miner
    
//Room 9 population cap
    var hCap9 = 0;  //harvester
    var hbCap9 = 0;  //harvester source 2
    var bCap9 = 0;  //builder
    var rCap9 = 1;  //repairer
    var uCap9 = 0;  //upgrader
    var eCap9 = 0;  //explorer
    var cCap9 = 0;  //claimer
    var aCap9 = 0;  //attacker
    var mCap9 = 0;  //miner    

//Nomad population caps
    var nhCap = 1;  //harvester
    var nbCap = 0;  //builder
    var nuCap = 5;  //upgrader
    var nrCap = 0;  //repairer

//Turn on tower wall healing?
    var tower1Heal = 1;
    var tower1HealTo = 4000000;
    var tower2Heal = 1;
    var tower2HealTo = 1000000;
    var tower3Heal = 1;
    var tower3HealTo = 15000000;
    var tower4Heal = 1;
    var tower4HealTo = 650000;
    var tower5Heal = 1;
    var tower5HealTo = 250000;
    var tower6Heal = 1;
    var tower6HealTo = 1000000;
    var tower7Heal = 1;
    var tower7HealTo = 50000;
    var tower8Heal = 1;
    var tower8HealTo = 40000;
    var tower9Heal = 1;
    var tower9HealTo = 5000;    

//Towers will only heal if storage is higher than this amount of energy
    var tower1HealStores = 400000;
    var tower2HealStores = 20000;
    var tower3HealStores = 20000;
    var tower4HealStores = 20000;
    var tower5HealStores = 20000;
    var tower6HealStores = 20000;
    var tower7HealStores = 20000;
    var tower8HealStores = 0;

//Name of rooms
    var room1Name = "[room W17N1]";
    var room2Name = "[room W19N2]";
    var room3Name = "[room W16N1]";
    var room4Name = "[room W16N2]";
    var room5Name = "[room W17N4]";
    var room6Name = "[room W16N3]";
    var room7Name = "[room W19N6]";
    var room8Name = "[room W18N5]";
    var room9Name = "[room W19N5]";

//Deposit Links and TransferTo Links
//    var senderLink1;
//    var senderLink2;
//    var senderLink3;
//    var senderLink1 = Game.getObjectById('57a67f8222bb9fd753d28d39');
//    var receiverLink1 = Game.getObjectById('579ce693eebe391d28db5ad3');
    var senderLink2 = Game.getObjectById('598f732b97db96232baaa58d');
    var receiverLink2 = Game.getObjectById('598f7ef39fce6d230cb17f17');
    var senderLink3 = Game.getObjectById('599288f783c9214daf69d3fe');
    var receiverLink3 = Game.getObjectById('59929c733d420e443d7e38f2');
    var senderLink4 = Game.getObjectById('5992fe3e1fd01d0d77376667');
    var receiverLink4 = Game.getObjectById('5992fbf64d5ab30d8a2d5441');
    var senderLink5 = Game.getObjectById('5995f11315daa73be1b75db4');
    var receiverLink5 = Game.getObjectById('59960f3634698d4fb73ffa8d');
    var senderLink6 = Game.getObjectById('59a25fababd7335ef4b0ae3c');
    var receiverLink6 = Game.getObjectById('59a1c36b8f6d5272c9d36063');
    var senderLink7 = Game.getObjectById('59a284ce2d2e5b22ea06893f');
    var receiverLink7 = Game.getObjectById('59a26ec3c9549e74e57a70cb');    
    var senderLink8 = Game.getObjectById('59a32fc1ccfe0a4d43ff0d4e');
    var receiverLink8 = Game.getObjectById('59a30ea188e45701dbb46d42');       

//How many spawn rooms do you have?
    var spawnrooms = 9;

//Alliance Members
    var allianceMembers = ['GMan', 'Nam'];



//-----SETTINGS-----



    

//Inject some memory for starting rooms
    if (Memory.firstRun == null) {
        Memory.cNum = 1;
        Memory.cNum2 = 1;
        Memory.cNum3 = 1;
        Memory.cNum4 = 1;
        Memory.cNum5 = 1;
        Memory.cNum6 = 1;
        Memory.cNum7 = 1;
        Memory.cNum8 = 1;
        Memory.cNum9 = 1;
        Memory.failSafe1 = 250;
        Memory.failSafe2 = 250;
        Memory.failSafe3 = 250;
        Memory.failSafe4 = 250;
        Memory.failSafe5 = 250;
        Memory.failSafe6 = 250;
        Memory.failSafe7 = 250;
        Memory.failSafe8 = 250;
        Memory.failSafe9 = 250;
        Memory.firstRun = 1;
        Memory.spawnrooms = 1;
    }
    if (Memory.room1Name == null){
        Memory.room1Name = room1Name;
    }
    if (room2Name !== null) {
        Memory.room2Name = room2Name;
    }
    if (room3Name !== null) {
        Memory.room3Name = room3Name;
    }
    if (room4Name !== null) {
        Memory.room4Name = room4Name;
    }
    if (room5Name !== null) {
        Memory.room5Name = room5Name;
    }
    if (room6Name !== null) {
        Memory.room6Name = room6Name;
    }
    if (room7Name !== null) {
        Memory.room7Name = room7Name;
    }
    if (Memory.spawnrooms != spawnrooms) {
        Memory.spawnrooms = spawnrooms;
    }







//This area is supposed to help with the number of rooms but it needs to be recoded.  It currently serves no purpose.
    var Room1=Game.spawns.Spawn1.room;
    var Room2=Game.spawns.Spawn2.room;
    var Room3=Game.spawns.Spawn3.room;
    var Room4=Game.spawns.Spawn4.room;
    var Room5=Game.spawns.Spawn5.room;
    var Room6=Game.spawns.Spawn6.room;
    var Room7=Game.spawns.Spawn7.room;
    var Room8=Game.spawns.Spawn8.room;
    var Room9=Game.spawns.Spawn9.room;
    

//This is the part that doesnt work anymore
//    if (spawnrooms == 3) {
//        var Room2=Game.spawns.Spawn2.room;
//        var Room3=Game.spawns.Spawn3.room;
//        var Room3=Game.spawns.Spawn3.room;
//        console.log(Room2)
//        var Room3="[room E41S14]";
//    }
    var roleHarvester = require('role.harvester');
    var roleUpgrader = require('role.upgrader');
    var roleBuilder = require('role.builder');
    var roleRepairer = require('role.repairer');
    var roleExplorer = require('role.explorer');
    var roleClaimer = require('role.claimer');
    var roleAttacker = require('role.attacker');
    var roleMiner = require('role.miner');

//Population monitoring for room1
    var harvesters1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '1' && creep.memory.source !== '2');
    var harvesters1b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '1' && creep.memory.source == '2');
    var builders1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '1');
    var upgraders1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '1');
    var repairers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '1');
    var explorers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '1');
    var claimers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '1');
    var attackers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '1');
    var miners1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '1');
    var population1 = harvesters1.length + repairers1.length + builders1.length + upgraders1.length + explorers1.length + claimers1.length + attackers1.length;

//Population monitoring for room2
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '2' && creep.memory.source !== '2');
    var harvesters2b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '2' && creep.memory.source == '2');
    var builders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '2');
    var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '2');
    var repairers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '2');
    var explorers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '2');
    var claimers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '2');
    var attackers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '2');
    var miners2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '2');
    var population2 = harvesters2.length + repairers2.length + builders2.length + upgraders2.length + explorers2.length + claimers2.length + attackers2.length;

//Population monitoring for room3
    var harvesters3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '3' && creep.memory.source !== '2');
    var harvesters3b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '3' && creep.memory.source == '2');
    var builders3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '3');
    var upgraders3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '3');
    var repairers3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '3');
    var explorers3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '3');
    var claimers3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '3');
    var attackers3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '3');
    var miners3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '3');
    var population3 = harvesters3.length + repairers3.length + builders3.length + upgraders3.length + explorers3.length + claimers3.length + attackers3.length;
    
//Population monitoring for room4
    var harvesters4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '4' && creep.memory.source !== '2');
    var harvesters4b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '4' && creep.memory.source == '2');
    var builders4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '4');
    var upgraders4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '4');
    var repairers4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '4');
    var explorers4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '4');
    var claimers4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '4');
    var attackers4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '4');
    var miners4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '4');
    var population4 = harvesters4.length + repairers4.length + builders4.length + upgraders4.length + explorers4.length + claimers4.length + attackers4.length;

//Population monitoring for room5
    var harvesters5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '5' && creep.memory.source !== '2');
    var harvesters5b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '5' && creep.memory.source == '2');
    var builders5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '5');
    var upgraders5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '5');
    var repairers5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '5');
    var explorers5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '5');
    var claimers5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '5');
    var attackers5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '5');
    var miners5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '5');
    var population5 = harvesters5.length + repairers5.length + builders5.length + upgraders5.length + explorers5.length + claimers5.length + attackers5.length;

//Population monitoring for room6
    var harvesters6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '6' && creep.memory.source !== '2');
    var harvesters6b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '6' && creep.memory.source == '2');
    var builders6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '6');
    var upgraders6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '6');
    var repairers6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '6');
    var explorers6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '6');
    var claimers6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '6');
    var attackers6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '6');
    var miners6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '6');
    var population6 = harvesters6.length + repairers6.length + builders6.length + upgraders6.length + explorers6.length + claimers6.length + attackers6.length;

//Population monitoring for room7
    var harvesters7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '7' && creep.memory.source !== '2');
    var harvesters7b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '7' && creep.memory.source == '2');
    var builders7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '7');
    var upgraders7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '7');
    var repairers7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '7');
    var explorers7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '7');
    var claimers7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '7');
    var attackers7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '7');
    var miners7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '7');
    var population7 = harvesters7.length + repairers7.length + builders7.length + upgraders7.length + explorers7.length + claimers7.length + attackers7.length;

//Population monitoring for room8
    var harvesters8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '8' && creep.memory.source !== '2');
    var harvesters8b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '8' && creep.memory.source == '2');
    var builders8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '8');
    var upgraders8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '8');
    var repairers8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '8');
    var explorers8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '8');
    var claimers8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '8');
    var attackers8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '8');
    var miners8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '8');
    var population8 = harvesters8.length + repairers8.length + builders8.length + upgraders8.length + explorers8.length + claimers8.length + attackers8.length;    

//Population monitoring for room9
    var harvesters9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '9' && creep.memory.source !== '2');
    var harvesters9b = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == '9' && creep.memory.source == '2');
    var builders9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == '9');
    var upgraders9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == '9');
    var repairers9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == '9');
    var explorers9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.bornIn == '9');
    var claimers9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.bornIn == '9');
    var attackers9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker' && creep.memory.bornIn == '9');
    var miners9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.bornIn == '9');
    var population9 = harvesters9.length + repairers9.length + builders9.length + upgraders9.length + explorers9.length + claimers9.length + attackers9.length;    

//Population monitoring for nomads
    var nomadsH = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.bornIn == 'nomad');
    var nomadsB = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.bornIn == 'nomad');
    var nomadsU = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.bornIn == 'nomad');
    var nomadsR = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.bornIn == 'nomad');
    var populationN = nomadsH.length + nomadsB.length + nomadsU.length;

//How much energy is available?  Thanks for the code, Dan
    var energystores = _.filter(Game.structures, (structure) => structure.structureType == STRUCTURE_EXTENSION ||
    structure.structureType == STRUCTURE_SPAWN ||
    structure.structureType == STRUCTURE_CONTAINER);
    TotalEnergy = 0;
    for (var i in energystores)
    {
        TotalEnergy += energystores[i].energy;
    }


//Population summary.  Not currently in use, needs updating for multiple rooms
    if (showSum == true) {
        console.log('-------------------------')
        if (sumRoom == 1){
            console.log('[Room 1]Pop:' + population1 + ' - H:' + harvesters1.length + '/' + hCap1 + ' - R:' + repairers1.length + '/' + rCap1 + ' - B:' + builders1.length + '/' + bCap1 + ' - U:' + upgraders1.length + '/' + uCap1 + ' - M:' + explorers1.length + '/' + eCap1 + ' - A:' + attackers1.length + '/' + aCap1 + ' ......... Enrgy:' + TotalEnergy);
        }
        else if (sumRoom ==2) {
            console.log('[Room 2]Pop:' + population2 + ' - H:' + harvesters2.length + '/' + hCap2 + ' - R:' + repairers2.length + '/' + rCap2 + ' - B:' + builders2.length + '/' + bCap2 + ' - U:' + upgraders2.length + '/' + uCap2 + ' - M:' + explorers2.length + '/' + eCap2 + ' - A:' + attackers2.length + '/' + aCap2 + ' ......... Enrgy:' + TotalEnergy);
        }
        else if (sumRoom =="all"){
            console.log('[Room 1]Pop:' + population1 + ' - H:' + harvesters1.length + '/' + hCap1 + ' - R:' + repairers1.length + '/' + rCap1 + ' - B:' + builders1.length + '/' + bCap1 + ' - U:' + upgraders1.length + '/' + uCap1 + ' - M:' + explorers1.length + '/' + eCap1 + ' - A:' + attackers1.length + '/' + aCap1 + ' ......... Enrgy:' + TotalEnergy);
            console.log('[Room 2]Pop:' + population2 + ' - H:' + harvesters2.length + '/' + hCap2 + ' - R:' + repairers2.length + '/' + rCap2 + ' - B:' + builders2.length + '/' + bCap2 + ' - U:' + upgraders2.length + '/' + uCap2 + ' - M:' + explorers2.length + '/' + eCap2 + ' - A:' + attackers2.length + '/' + aCap2 + ' ......... Enrgy:' + TotalEnergy);
            console.log('[Nomads]Pop:' + populationN + ' - NH:' + nomadsH.length + '/' + nhCap + ' - NB:' + nomadsB.length + '/' + nbCap);
        }
        else if (sumRoom =="nomads"){
            console.log('[Nomads]Pop:' + populationN + ' - NH:' + nomadsH.length + '/' + nhCap + ' - NB:' + nomadsB.length + '/' + nbCap);
        }

    }


//If spawn is in Room1, then spawn things like this....
    if (harvesters1.length < hCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum, {role: 'harvester', bornIn: '1'});
        console.log('[Room1]Spawning new harvester: ' + newName);
        Memory.cNum++;
        Memory.failSafe1--;
        console.log('[Room1]Defcon countdown: ' + Memory.failSafe1);
        if (Memory.failSafe1 < 1) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum, {role: 'harvester', bornIn: '1'});
            console.log('[Room1]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
        }
    }
    else if (harvesters1b.length < hbCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum1, {
            role: 'harvester',
            bornIn: '1',
            source: '2'
        });
        console.log('[Room1]Spawning new harvester b: ' + newName);
        Memory.cNum1++;
    }
    else if (builders1.length < bCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY], 'B' + Memory.cNum, {role: 'builder', bornIn: '1'});
        console.log('[Room1]Spawning new builder: ' + newName);
        Memory.cNum++;
    }
    else if (repairers1.length < rCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum, {role: 'repairer', bornIn: '1'});
        console.log('[Room1]Spawning new repairer: ' + newName);
        Memory.cNum++;
    }
    else if (upgraders1.length < uCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY], 'U' + Memory.cNum, {role: 'upgrader', bornIn: '1'});
        console.log('[Room1]Spawning new upgrader: ' + newName);
        Memory.cNum++;
    }
    else if (explorers1.length < eCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum, {role: 'explorer', bornIn: '1'});
        console.log('[Room1]Spawning new explorer: ' + newName);
        Memory.cNum++;
    }

    else if (claimers1.length < cCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([CLAIM, MOVE, MOVE], 'C' + Memory.cNum, {role: 'claimer', bornIn: '1'});
        console.log('[Room1]Spawning new claimer: ' + newName);
        Memory.cNum++;
    }

    else if (attackers1.length < aCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum, {role: 'attacker', bornIn: '1', goFlag: '1'});
        console.log('[Room1]Spawning new attacker: ' + newName);
        Memory.cNum++;
    }
    else if (miners1.length < mCap1) {
        var newName = Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '1'});
        console.log('[Room1]Spawning new miner: ' + newName);
        Memory.cNum++;
    }
    else if (harvesters1.length == hCap1 & Memory.failSafe1 != 250) {
        Memory.failSafe1 = 250;
        console.log('[Room1]Defcon countdown reset to: ' + Memory.failSafe1);
    }


//If spawn is in room2, then spawn things like this...
    if (Memory.spawnrooms >= 2){
        if (harvesters2.length < hCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum2, {role: 'harvester', bornIn: '2'});
            console.log('[Room2]Spawning new harvester: ' + newName);
            Memory.cNum2++;
            Memory.failSafe2--;
            console.log('[Room2]Defcon countdown: ' + Memory.failSafe2);
            if (Memory.failSafe2 < 1) {
                var newName = Game.spawns['Spawn2'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum2, {role: 'harvester', bornIn: '2'});
                console.log('[Room2]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters2b.length < hbCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum2, {
                role: 'harvester',
                bornIn: '2',
                source: '2'
            });
            console.log('[Room2]Spawning new harvester b: ' + newName);
            Memory.cNum2++;
        }
        else if (builders2.length < bCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum2, {role: 'builder', bornIn: '2'});
            console.log('[Room2]Spawning new builder: ' + newName);
            Memory.cNum2++;
        }
        else if (repairers2.length < rCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum2, {role: 'repairer', bornIn: '2'});
            console.log('[Room2]Spawning new repairer: ' + newName);
            Memory.cNum2++;
        }
        else if (upgraders2.length < uCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum2, {role: 'upgrader', bornIn: '2'});
            console.log('[Room2]Spawning new upgrader: ' + newName);
            Memory.cNum2++;
        }
        else if (explorers2.length < eCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum2, {role: 'explorer', bornIn: '2'});
            console.log('[Room2]Spawning new explorer: ' + newName);
            Memory.cNum2++;
        }

        else if (claimers2.length < cCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum2, {role: 'claimer', bornIn: '2'});
            console.log('[Room2]Spawning new claimer: ' + newName);
            Memory.cNum2++;
        }

        else if (attackers2.length < aCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum2, {role: 'attacker', bornIn: '2', goFlag: '1'});
            console.log('[Room2]Spawning new attacker: ' + newName);
            Memory.cNum2++;
        }
        else if (miners2.length < mCap2) {
            var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '2'});
            console.log('[Room2]Spawning new miner: ' + newName);
            Memory.cNum2++;
        }

        else if (harvesters2.length == hCap2 & Memory.failSafe2 != 250) {
            Memory.failSafe2 = 250;
            console.log('[Room2]Defcon countdown reset to: ' + Memory.failSafe2);
        }
    }





//If spawn is in room3, then spawn things like this...
    if (Memory.spawnrooms >= 3){
        if (harvesters3.length < hCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum3, {role: 'harvester', bornIn: '3'});
            console.log('[Room3]Spawning new harvester: ' + newName);
            Memory.cNum3++;
            Memory.failSafe3--;
            console.log('[Room3]Defcon countdown: ' + Memory.failSafe3);
            if (Memory.failSafe3 < 1) {
                var newName = Game.spawns['Spawn3'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum3, {role: 'harvester', bornIn: '3'});
                console.log('[Room3]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters3b.length < hbCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum3, {
                role: 'harvester',
                bornIn: '3',
                source: '2'
            });
            console.log('[Room3]Spawning new harvester b: ' + newName);
            Memory.cNum3++;
        }
        else if (builders3.length < bCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'B' + Memory.cNum3, {role: 'builder', bornIn: '3'});
            console.log('[Room3]Spawning new builder: ' + newName);
            Memory.cNum3++;
        }
        else if (repairers3.length < rCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'R' + Memory.cNum3, {role: 'repairer', bornIn: '3'});
            console.log('[Room3]Spawning new repairer: ' + newName);
            Memory.cNum3++;
        }
        else if (upgraders3.length < uCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY], 'U' + Memory.cNum3, {role: 'upgrader', bornIn: '3'});
            console.log('[Room3]Spawning new upgrader: ' + newName);
            Memory.cNum3++;
        }
        else if (explorers3.length < eCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum3, {role: 'explorer', bornIn: '3'});
            console.log('[Room3]Spawning new explorer: ' + newName);
            Memory.cNum3++;
        }
        else if (claimers3.length < cCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum3, {role: 'claimer', bornIn: '3'});
            console.log('[Room3]Spawning new claimer: ' + newName);
            Memory.cNum3++;
        }
        else if (attackers3.length < aCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum3, {role: 'attacker', bornIn: '3', goFlag: '1'});
            console.log('[Room3]Spawning new attacker: ' + newName);
            Memory.cNum3++;
        }
        else if (miners3.length < mCap3) {
            var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '3'});
            console.log('[Room3]Spawning new miner: ' + newName);
            Memory.cNum3++;
        }
        else if (harvesters3.length == hCap3 & Memory.failSafe3 != 250) {
            Memory.failSafe3 = 250;
            console.log('[Room3]Defcon countdown reset to: ' + Memory.failSafe3);
        }
    }



//If spawn is in room4, then spawn things like this...
    if (Memory.spawnrooms >= 4){
        if (harvesters4.length < hCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum4, {role: 'harvester', bornIn: '4'});
            console.log('[Room4]Spawning new harvester: ' + newName);
            Memory.cNum4++;
            Memory.failSafe4--;
            console.log('[Room4]Defcon countdown: ' + Memory.failSafe4);
            if (Memory.failSafe4 < 1) {
                var newName = Game.spawns['Spawn4'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum4, {role: 'harvester', bornIn: '4'});
                console.log('[Room4]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters4b.length < hbCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum4, {
                role: 'harvester',
                bornIn: '4',
                source: '2'
            });
            console.log('[Room4]Spawning new harvester b: ' + newName);
            Memory.cNum4++;
        }
        else if (builders4.length < bCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum4, {role: 'builder', bornIn: '4'});
            console.log('[Room4]Spawning new builder: ' + newName);
            Memory.cNum4++;
        }
        else if (repairers4.length < rCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum4, {role: 'repairer', bornIn: '4'});
            console.log('[Room4]Spawning new repairer: ' + newName);
            Memory.cNum4++;
        }
        else if (upgraders4.length < uCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum4, {role: 'upgrader', bornIn: '4'});
            console.log('[Room4]Spawning new upgrader: ' + newName);
            Memory.cNum4++;
        }
        else if (explorers4.length < eCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum4, {role: 'explorer', bornIn: '4'});
            console.log('[Room4]Spawning new explorer: ' + newName);
            Memory.cNum4++;
        }

        else if (claimers4.length < cCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum4, {role: 'claimer', bornIn: '4'});
            console.log('[Room4]Spawning new claimer: ' + newName);
            Memory.cNum4++;
        }

        else if (attackers4.length < aCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum4, {role: 'attacker', bornIn: '4', goFlag: '1'});
            console.log('[Room4]Spawning new attacker: ' + newName);
            Memory.cNum4++;
        }
        else if (miners4.length < mCap4) {
            var newName = Game.spawns['Spawn4'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '4'});
            console.log('[Room4]Spawning new miner: ' + newName);
            Memory.cNum4++;
        }

        else if (harvesters4.length == hCap4 & Memory.failSafe4 != 250) {
            Memory.failSafe4 = 250;
            console.log('[Room4]Defcon countdown reset to: ' + Memory.failSafe4);
        }
    }



//If spawn is in room5, then spawn things like this...
    if (Memory.spawnrooms >= 5){
        if (harvesters5.length < hCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum5, {role: 'harvester', bornIn: '5'});
            console.log('[Room5]Spawning new harvester: ' + newName);
            Memory.cNum5++;
            Memory.failSafe5--;
            console.log('[Room5]Defcon countdown: ' + Memory.failSafe5);
            if (Memory.failSafe5 < 1) {
                var newName = Game.spawns['Spawn5'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum5, {role: 'harvester', bornIn: '5'});
                console.log('[Room5]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters5b.length < hbCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum5, {
                role: 'harvester',
                bornIn: '5',
                source: '2'
            });
            console.log('[Room5]Spawning new harvester b: ' + newName);
            Memory.cNum5++;
        }
        else if (builders5.length < bCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum5, {role: 'builder', bornIn: '5'});
            console.log('[Room5]Spawning new builder: ' + newName);
            Memory.cNum5++;
        }
        else if (repairers5.length < rCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum5, {role: 'repairer', bornIn: '5'});
            console.log('[Room5]Spawning new repairer: ' + newName);
            Memory.cNum5++;
        }
        else if (upgraders5.length < uCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum5, {role: 'upgrader', bornIn: '5'});
            console.log('[Room5]Spawning new upgrader: ' + newName);
            Memory.cNum5++;
        }
        else if (explorers5.length < eCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum5, {role: 'explorer', bornIn: '5'});
            console.log('[Room5]Spawning new explorer: ' + newName);
            Memory.cNum5++;
        }

        else if (claimers5.length < cCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum5, {role: 'claimer', bornIn: '5'});
            console.log('[Room5]Spawning new claimer: ' + newName);
            Memory.cNum5++;
        }

        else if (attackers5.length < aCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum5, {role: 'attacker', bornIn: '5', goFlag: '1'});
            console.log('[Room5]Spawning new attacker: ' + newName);
            Memory.cNum5++;
        }
        else if (miners5.length < mCap5) {
            var newName = Game.spawns['Spawn5'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '5'});
            console.log('[Room5]Spawning new miner: ' + newName);
            Memory.cNum5++;
        }

        else if (harvesters5.length == hCap5 & Memory.failSafe5 != 250) {
            Memory.failSafe5 = 250;
            console.log('[Room5]Defcon countdown reset to: ' + Memory.failSafe5);
        }
    }



//If spawn is in room6, then spawn things like this...
    if (Memory.spawnrooms >= 6){
        if (harvesters6.length < hCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum6, {role: 'harvester', bornIn: '6'});
            console.log('[Room6]Spawning new harvester: ' + newName);
            Memory.cNum6++;
            Memory.failSafe6--;
            console.log('[Room6]Defcon countdown: ' + Memory.failSafe6);
            if (Memory.failSafe6 < 1) {
                var newName = Game.spawns['Spawn6'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum6, {role: 'harvester', bornIn: '6'});
                console.log('[Room6]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters6b.length < hbCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum6, {
                role: 'harvester',
                bornIn: '6',
                source: '2'
            });
            console.log('[Room6]Spawning new harvester b: ' + newName);
            Memory.cNum6++;
        }
        else if (builders6.length < bCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum6, {role: 'builder', bornIn: '6'});
            console.log('[Room6]Spawning new builder: ' + newName);
            Memory.cNum6++;
        }
        else if (repairers6.length < rCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum6, {role: 'repairer', bornIn: '6'});
            console.log('[Room6]Spawning new repairer: ' + newName);
            Memory.cNum6++;
        }
        else if (upgraders6.length < uCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum6, {role: 'upgrader', bornIn: '6'});
            console.log('[Room6]Spawning new upgrader: ' + newName);
            Memory.cNum6++;
        }
        else if (explorers6.length < eCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum6, {role: 'explorer', bornIn: '6'});
            console.log('[Room6]Spawning new explorer: ' + newName);
            Memory.cNum6++;
        }

        else if (claimers6.length < cCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum6, {role: 'claimer', bornIn: '6'});
            console.log('[Room6]Spawning new claimer: ' + newName);
            Memory.cNum6++;
        }

        else if (attackers6.length < aCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum6, {role: 'attacker', bornIn: '6', goFlag: '1'});
            console.log('[Room6]Spawning new attacker: ' + newName);
            Memory.cNum6++;
        }
        else if (miners6.length < mCap6) {
            var newName = Game.spawns['Spawn6'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '6'});
            console.log('[Room6]Spawning new miner: ' + newName);
            Memory.cNum6++;
        }

        else if (harvesters6.length == hCap6 & Memory.failSafe6 != 260) {
            Memory.failSafe6 = 260;
            console.log('[Room6]Defcon countdown reset to: ' + Memory.failSafe6);
        }
    }



//If spawn is in room7, then spawn things like this...
    if (Memory.spawnrooms >= 7){
        if (harvesters7.length < hCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum7, {role: 'harvester', bornIn: '7'});
            console.log('[Room7]Spawning new harvester: ' + newName);
            Memory.cNum7++;
            Memory.failSafe7--;
            console.log('[Room7]Defcon countdown: ' + Memory.failSafe7);
            if (Memory.failSafe7 < 1) {
                var newName = Game.spawns['Spawn7'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum7, {role: 'harvester', bornIn: '7'});
                console.log('[Room7]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters7b.length < hbCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum7, {
                role: 'harvester',
                bornIn: '7',
                source: '2'
            });
            console.log('[Room7]Spawning new harvester b: ' + newName);
            Memory.cNum7++;
        }
        else if (builders7.length < bCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum7, {role: 'builder', bornIn: '7'});
            console.log('[Room7]Spawning new builder: ' + newName);
            Memory.cNum7++;
        }
        else if (repairers7.length < rCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum7, {role: 'repairer', bornIn: '7'});
            console.log('[Room7]Spawning new repairer: ' + newName);
            Memory.cNum7++;
        }
        else if (upgraders7.length < uCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum7, {role: 'upgrader', bornIn: '7'});
            console.log('[Room7]Spawning new upgrader: ' + newName);
            Memory.cNum7++;
        }
        else if (explorers7.length < eCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum7, {role: 'explorer', bornIn: '7'});
            console.log('[Room7]Spawning new explorer: ' + newName);
            Memory.cNum7++;
        }

        else if (claimers7.length < cCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum7, {role: 'claimer', bornIn: '7'});
            console.log('[Room7]Spawning new claimer: ' + newName);
            Memory.cNum7++;
        }

        else if (attackers7.length < aCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum7, {role: 'attacker', bornIn: '7', goFlag: '1'});
            console.log('[Room7]Spawning new attacker: ' + newName);
            Memory.cNum7++;
        }
        else if (miners7.length < mCap7) {
            var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '7'});
            console.log('[Room7]Spawning new miner: ' + newName);
            Memory.cNum7++;
        }

        else if (harvesters7.length == hCap7 & Memory.failSafe7 != 270) {
            Memory.failSafe7 = 270;
            console.log('[Room7]Defcon countdown reset to: ' + Memory.failSafe7);
        }
    }




//If spawn is in room8, then spawn things like this...
    if (Memory.spawnrooms >= 8){
        if (harvesters8.length < hCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum8, {role: 'harvester', bornIn: '8'});
            console.log('[Room8]Spawning new harvester: ' + newName);
            Memory.cNum8++;
            Memory.failSafe8--;
            console.log('[Room8]Defcon countdown: ' + Memory.failSafe8);
            if (Memory.failSafe8 < 1) {
                var newName = Game.spawns['Spawn8'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum8, {role: 'harvester', bornIn: '8'});
                console.log('[Room8]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters8b.length < hbCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum8, {
                role: 'harvester',
                bornIn: '8',
                source: '2'
            });
            console.log('[Room8]Spawning new harvester b: ' + newName);
            Memory.cNum8++;
        }
        else if (builders8.length < bCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum8, {role: 'builder', bornIn: '8'});
            console.log('[Room8]Spawning new builder: ' + newName);
            Memory.cNum8++;
        }
        else if (repairers8.length < rCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum8, {role: 'repairer', bornIn: '8'});
            console.log('[Room8]Spawning new repairer: ' + newName);
            Memory.cNum8++;
        }
        else if (upgraders8.length < uCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum8, {role: 'upgrader', bornIn: '8'});
            console.log('[Room8]Spawning new upgrader: ' + newName);
            Memory.cNum8++;
        }
        else if (explorers8.length < eCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum8, {role: 'explorer', bornIn: '8'});
            console.log('[Room8]Spawning new explorer: ' + newName);
            Memory.cNum8++;
        }

        else if (claimers8.length < cCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum8, {role: 'claimer', bornIn: '8'});
            console.log('[Room8]Spawning new claimer: ' + newName);
            Memory.cNum8++;
        }

        else if (attackers8.length < aCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum8, {role: 'attacker', bornIn: '8', goFlag: '1'});
            console.log('[Room8]Spawning new attacker: ' + newName);
            Memory.cNum8++;
        }
        else if (miners8.length < mCap8) {
            var newName = Game.spawns['Spawn8'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '8'});
            console.log('[Room8]Spawning new miner: ' + newName);
            Memory.cNum8++;
        }

        else if (harvesters8.length == hCap8 & Memory.failSafe8 != 280) {
            Memory.failSafe8 = 280;
            console.log('[Room8]Defcon countdown reset to: ' + Memory.failSafe8);
        }
    }
    
    
//If spawn is in room9, then spawn things like this...
    if (Memory.spawnrooms >= 9){
        if (harvesters9.length < hCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'H' + Memory.cNum9, {role: 'harvester', bornIn: '9'});
            console.log('[Room9]Spawning new harvester: ' + newName);
            Memory.cNum9++;
            Memory.failSafe9--;
            console.log('[Room9]Defcon countdown: ' + Memory.failSafe9);
            if (Memory.failSafe9 < 1) {
                var newName = Game.spawns['Spawn9'].createCreep([WORK, CARRY, MOVE], 'H' + Memory.cNum9, {role: 'harvester', bornIn: '9'});
                console.log('[Room9]**SPWANING EMERGENCY HARVESTER: ' + newName + '**');
            }
        }
        else if (harvesters9b.length < hbCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'HB' + Memory.cNum9, {
                role: 'harvester',
                bornIn: '9',
                source: '2'
            });
            console.log('[Room9]Spawning new harvester b: ' + newName);
            Memory.cNum9++;
        }
        else if (builders9.length < bCap9) {
            //var newName = Game.spawns['Spawn9'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], 'B' + Memory.cNum9, {role: 'builder', bornIn: '9'});
            var newName = Game.spawns['Spawn9'].createCreep([WORK, WORK, CARRY, MOVE], 'B' + Memory.cNum9, {role: 'builder', bornIn: '9'});
            console.log('[Room9]Spawning new builder: ' + newName);
            Memory.cNum9++;
        }
        else if (repairers9.length < rCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([WORK, WORK, CARRY, MOVE], 'R' + Memory.cNum9, {role: 'repairer', bornIn: '9'});
            console.log('[Room9]Spawning new repairer: ' + newName);
            Memory.cNum9++;
        }
        else if (upgraders9.length < uCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'U' + Memory.cNum9, {role: 'upgrader', bornIn: '9'});
            console.log('[Room9]Spawning new upgrader: ' + newName);
            Memory.cNum9++;
        }
        else if (explorers9.length < eCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY], 'E' + Memory.cNum9, {role: 'explorer', bornIn: '9'});
            console.log('[Room9]Spawning new explorer: ' + newName);
            Memory.cNum9++;
        }

        else if (claimers9.length < cCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([CLAIM, CLAIM, MOVE, MOVE], 'C' + Memory.cNum9, {role: 'claimer', bornIn: '9'});
            console.log('[Room9]Spawning new claimer: ' + newName);
            Memory.cNum9++;
        }

        else if (attackers9.length < aCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK], 'A' + Memory.cNum9, {role: 'attacker', bornIn: '9', goFlag: '1'});
            console.log('[Room9]Spawning new attacker: ' + newName);
            Memory.cNum9++;
        }
        else if (miners9.length < mCap9) {
            var newName = Game.spawns['Spawn9'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'M' + Memory.cNum, {role: 'miner', bornIn: '9'});
            console.log('[Room9]Spawning new miner: ' + newName);
            Memory.cNum9++;
        }

        else if (harvesters9.length == hCap9 & Memory.failSafe9 != 290) {
            Memory.failSafe9 = 290;
            console.log('[Room9]Defcon countdown reset to: ' + Memory.failSafe9);
        }
    }




//Nomads
    if (nomadsH.length < nhCap) {
        var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'NH' + Memory.cNum2, {
            role: 'harvester',
            bornIn: 'nomad',
            goFlag: '1'
        });
        console.log('[Room7]Spawning new nomad harvester: ' + newName);
        Memory.cNum2++;
    }
    else if (nomadsB.length < nbCap) {
        var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'NB' + Memory.cNum2, {
            role: 'builder',
            bornIn: 'nomad',
            goFlag: '1'
        });
        console.log('[Room7]Spawning new nomad builder: ' + newName);
        Memory.cNum2++;
    }
    else if (nomadsR.length < nrCap) {
        var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY], 'NR' + Memory.cNum2, {
            role: 'repairer',
            bornIn: 'nomad',
            goFlag: '1'
        });
        console.log('[Room7]Spawning new nomad builder: ' + newName);
        Memory.cNum2++;
    }
    else if (nomadsU.length < nuCap) {
        var newName = Game.spawns['Spawn7'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'NU' + Memory.cNum2, {
            role: 'upgrader',
            bornIn: 'nomad',
            goFlag: '1'
        });
        console.log('[Room7]Spawning new nomad upgrader: ' + newName);
        Memory.cNum2++;
    }




//Telling each creep what to do
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if (creep.memory.role == 'explorer') {
            roleExplorer.run(creep);
        }
        if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if (creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
        if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
    }



// // Link Room 1
//     if (senderLink1 != null){
//         var link1Cooldown = senderLink1.cooldown;
//         if (senderLink1.energy > 0){
//             if (link1Cooldown == "0"){
//                 if (senderLink1.energy < receiverLink1.energyCapacity - receiverLink1.energy){
//                     senderLink1.transferEnergy(receiverLink1, senderLink1.energy)
// //                console.log("Sender 1 attempting to send all it's got")
//                 }
//                 else {
//                     senderLink1.transferEnergy(receiverLink1, receiverLink1.energyCapacity - receiverLink1.energy);
// //                console.log("Sender 1 attempting to cap off")
//                 }
//             }
//         }
//     }


//Link Room 2
    var link2Cooldown = senderLink2.cooldown;
    if (senderLink2.energy > 0){
        if (senderLink2.cooldown == "0"){
            if (senderLink2.energy < receiverLink2.energyCapacity - receiverLink2.energy){
//                console.log("Sender 2 attempting to send all it's got")
                senderLink2.transferEnergy(receiverLink2, senderLink2.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink2.transferEnergy(receiverLink2, receiverLink2.energyCapacity - receiverLink2.energy);
            }
        }
    }


//Link Room 3
    var link3Cooldown = senderLink3.cooldown;
    if (senderLink3.energy > 0){
        if (senderLink3.cooldown == "0"){
            if (senderLink3.energy < receiverLink3.energyCapacity - receiverLink3.energy){
 //                console.log("Sender 2 attempting to send all it's got")
                senderLink3.transferEnergy(receiverLink3, senderLink3.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink3.transferEnergy(receiverLink3, receiverLink3.energyCapacity - receiverLink3.energy);
            }
        }
    }


//Link Room 4
    var link4Cooldown = senderLink4.cooldown;
    if (senderLink4.energy > 0){
        if (senderLink4.cooldown == "0"){
            if (senderLink4.energy < receiverLink4.energyCapacity - receiverLink4.energy){
 //                console.log("Sender 2 attempting to send all it's got")
                senderLink4.transferEnergy(receiverLink4, senderLink4.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink4.transferEnergy(receiverLink4, receiverLink4.energyCapacity - receiverLink4.energy);
            }
        }
    }

//Link Room 5
    var link5Cooldown = senderLink5.cooldown;
    if (senderLink5.energy > 0){
        if (senderLink5.cooldown == "0"){
            if (senderLink5.energy < receiverLink5.energyCapacity - receiverLink5.energy){
                //                console.log("Sender 2 attempting to send all it's got")
                senderLink5.transferEnergy(receiverLink5, senderLink5.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink5.transferEnergy(receiverLink5, receiverLink5.energyCapacity - receiverLink5.energy);
            }
        }
    }



//Link Room 6
    var link6Cooldown = senderLink5.cooldown;
    if (senderLink6.energy > 0){
        if (senderLink6.cooldown == "0"){
            if (senderLink6.energy < receiverLink6.energyCapacity - receiverLink6.energy){
                //                console.log("Sender 2 attempting to send all it's got")
                senderLink6.transferEnergy(receiverLink6, senderLink6.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink6.transferEnergy(receiverLink6, receiverLink6.energyCapacity - receiverLink6.energy);
            }
        }
    }

    
    
//Link Room 7
    var link7Cooldown = senderLink5.cooldown;
    if (senderLink7.energy > 0){
        if (senderLink7.cooldown == "0"){
            if (senderLink7.energy < receiverLink7.energyCapacity - receiverLink7.energy){
                //                console.log("Sender 2 attempting to send all it's got")
                senderLink7.transferEnergy(receiverLink7, senderLink7.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink7.transferEnergy(receiverLink7, receiverLink7.energyCapacity - receiverLink7.energy);
            }
        }
    }    
    
    
//Link Room 8
    var link8Cooldown = senderLink5.cooldown;
    if (senderLink8.energy > 0){
        if (senderLink8.cooldown == "0"){
            if (senderLink8.energy < receiverLink8.energyCapacity - receiverLink8.energy){
                //                console.log("Sender 2 attempting to send all it's got")
                senderLink8.transferEnergy(receiverLink8, senderLink8.energy)
            }
            else {
//                console.log("Sender 2 attempting to cap off")
                senderLink8.transferEnergy(receiverLink8, receiverLink8.energyCapacity - receiverLink8.energy);
            }
        }
    }      



//    for (var allianceMembers){
//        console.log(allianceMembers)
//    }



//Room 1 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage1 = Room1.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower1HealStores)
        }
    });
    if (storage1 == ""){
        tower1HealShutoff = 1
    }
    else {
        tower1HealShutoff = 0
    }
//Tower Defense Room 1
    var towers1 = Room1.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (var tower1 of towers1) {
        var targetTower1 = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower1 != undefined && targetTower1.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower1 != undefined) {
            tower1.attack(targetTower1);
//            Game.notify("Room1 Tower has spotted enemies!");
            console.log("[Room1]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower1Heal == 1 && tower1HealShutoff !== 1) {
            var closestDamagedStructure = tower1.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower1HealTo && structure.hits != structure.hitsMax
            });
            if(closestDamagedStructure && tower1.energy > 700) {
                tower1.repair(closestDamagedStructure);
            }
        }
    }






//Room 2 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage2 = Room2.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower2HealStores)
        }
    });
    if (storage2 == ""){
        tower2HealShutoff = 1
    }
    else {
        tower2HealShutoff = 0
    }

//Tower Defense Room 2
    var towers2 = Room2.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (var tower2 of towers2) {
        var targetTower2 = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower2 != undefined && targetTower2.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower2 != undefined) {
            tower2.attack(targetTower2);
//            Game.notify("Room2 Tower has spotted enemies!");
            console.log("[Room2]ENEMY SIGHTED!")
        }

//Tower Healing
        else if(tower2Heal == 1 && tower2HealShutoff !== 1) {
            var closestDamagedStructure2 = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower2HealTo && structure.hits != structure.hitsMax
            });
            if(closestDamagedStructure2 && tower2.energy > 700) {
                tower2.repair(closestDamagedStructure2);
            }
        }
    }



//Room 3 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage3 = Room3.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower3HealStores)
        }
    });
    if (storage3 == ""){
        tower3HealShutoff = 1
    }
    else {
        tower3HealShutoff = 0
    }
//Tower Defense Room 3
    var towers3 = Room3.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (var tower3 of towers3) {
        var targetTower3 = tower3.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower3 != undefined && targetTower3.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower3 != undefined) {
            tower3.attack(targetTower3);
//            Game.notify("Room3 Tower has spotted enemies!");
            console.log("[Room3]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower3Heal == 1 && tower3HealShutoff !== 1) {
            var closestDamagedStructure = tower3.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower3HealTo && structure.hits != structure.hitsMax
            });
            if(closestDamagedStructure && tower3.energy > 700) {
                tower3.repair(closestDamagedStructure);
            }
        }
    }



//Room 4 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage4 = Room4.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower4HealStores)
        }
    });
    if (storage4 == ""){
        tower4HealShutoff = 1
    }
    else {
        tower4HealShutoff = 0
    }
//Tower Defense Room 4
    var towers4 = Room4.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (var tower4 of towers4) {
        var targetTower4 = tower4.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower4 != undefined && targetTower4.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower4 != undefined) {
            tower4.attack(targetTower4);
//            Game.notify("Room4 Tower has spotted enemies!");
            console.log("[Room4]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower4Heal == 1 && tower4HealShutoff !== 1) {
            var closestDamagedStructure = tower4.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower4HealTo && structure.hits != structure.hitsMax
            });
            if(closestDamagedStructure && tower4.energy > 700) {
                tower4.repair(closestDamagedStructure);
            }
        }
    }




//Room 5 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage5 = Room5.find(FIND_STRUCTURES, {
        filter: (structure) => {
        return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower5HealStores)
}
});
    if (storage5 == ""){
        tower5HealHealShutoff = 1
    }
    else {
        tower5HealHealShutoff = 0
    }
//Tower Defense Room 5
    var towers5 = Room5.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
});
    for (var tower5 of towers5) {
        var targetTower5 = tower5.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower5 != undefined && targetTower5.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower5 != undefined) {
            tower5.attack(targetTower5);
//            Game.notify("Room5 Tower has spotted enemies!");
            console.log("[Room5]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower5Heal == 1 && tower5HealHealShutoff !== 1) {
            var closestDamagedStructure = tower5.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower5HealTo && structure.hits != structure.hitsMax
        });
            if(closestDamagedStructure && tower5.energy > 700) {
                tower5.repair(closestDamagedStructure);
            }
        }
    }



//Room 6 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage6 = Room6.find(FIND_STRUCTURES, {
        filter: (structure) => {
        return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower6HealStores)
}
});
    if (storage6 == ""){
        tower6HealHealShutoff = 1
    }
    else {
        tower6HealHealShutoff = 0
    }
//Tower Defense Room 6
    var towers6 = Room6.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
});
    for (var tower6 of towers6) {
        var targetTower6 = tower6.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower6 != undefined && targetTower6.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower6 != undefined) {
            tower6.attack(targetTower6);
//            Game.notify("Room6 Tower has spotted enemies!");
            console.log("[Room6]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower6Heal == 1 && tower6HealHealShutoff !== 1) {
            var closestDamagedStructure = tower6.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower6HealTo && structure.hits != structure.hitsMax
        });
            if(closestDamagedStructure && tower6.energy > 700) {
                tower6.repair(closestDamagedStructure);
            }
        }
    }



//Room 7 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage7 = Room7.find(FIND_STRUCTURES, {
        filter: (structure) => {
        return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower7HealStores)
}
});
    if (storage7 == ""){
        tower7HealHealShutoff = 1
    }
    else {
        tower7HealHealShutoff = 0
    }
//Tower Defense Room 7
    var towers7 = Room7.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
});
    for (var tower7 of towers7) {
        var targetTower7 = tower7.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        //var targetTower7 = tower7.pos.findInRange(FIND_HOSTILE_CREEPS[0]);
        //var targetTower7 = Game.getObjectById("59a44769f3886b021f2a20ca");

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower7 != undefined && targetTower7.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower7 != undefined) {
            tower7.attack(targetTower7);
//            Game.notify("Room7 Tower has spotted enemies!");
            console.log("[Room7]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower7Heal == 1 && tower7HealHealShutoff !== 1) {
            var closestDamagedStructure = tower7.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower7HealTo && structure.hits != structure.hitsMax
        });
            if(closestDamagedStructure && tower7.energy > 700) {
                tower7.repair(closestDamagedStructure);
            }
        }
    }
    
    
    
    //Room 8 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage8 = Room8.find(FIND_STRUCTURES, {
        filter: (structure) => {
        return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower8HealStores)
}
});
    if (storage8 == ""){
        tower8HealHealShutoff = 0
    }
    else {
        tower8HealHealShutoff = 0
    }
//Tower Defense Room 8
    var towers8 = Room8.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
});
    for (var tower8 of towers8) {
        var targetTower8 = tower8.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower8 != undefined && targetTower8.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower8 != undefined) {
            tower8.attack(targetTower8);
//            Game.notify("Room8 Tower has spotted enemies!");
            console.log("[Room8]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower8Heal == 1 && tower8HealHealShutoff !== 1) {
            var closestDamagedStructure = tower8.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower8HealTo && structure.hits != structure.hitsMax
        });
            if(closestDamagedStructure && tower8.energy > 750) {
                tower8.repair(closestDamagedStructure);
            }
        }
    }
    
    
  
    //Room 9 Tower Stuff
//Shuts off tower healing if energy storage is not enough
    var storage9 = Room9.find(FIND_STRUCTURES, {
        filter: (structure) => {
        return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > tower9HealStores)
}
});
    if (storage9 == ""){
        tower9HealHealShutoff = 0
    }
    else {
        tower9HealHealShutoff = 0
    }
//Tower Defense Room 9
    var towers9 = Room9.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
});
    for (var tower9 of towers9) {
        var targetTower9 = tower9.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

//Code to detect allies
        ally = 0;
        for (i=0; i < allianceMembers.length;i++){
            if (targetTower9 != undefined && targetTower9.owner.username == allianceMembers[i]){
                ally = 1;
            }
        }

        if (targetTower9 != undefined) {
            tower9.attack(targetTower9);
//            Game.notify("Room9 Tower has spotted enemies!");
            console.log("[Room9]ENEMY SIGHTED!")
        }
//Tower Healing
        else if(tower9Heal == 1 && tower9HealHealShutoff !== 1) {
            var closestDamagedStructure = tower9.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < tower9HealTo && structure.hits != structure.hitsMax
        });
            if(closestDamagedStructure && tower9.energy > 750) {
                tower9.repair(closestDamagedStructure);
            }
        }
    }
    




}



