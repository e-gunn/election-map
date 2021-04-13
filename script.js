var createPolitician = function(name, partyColor) {

var politician = {};

politician.name = name;
politician.electionResults = null;
politician.totalResults = 0;
politician.partyColor = partyColor;

politician.tallyUpTotalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

return politician;

};

var shalane = createPolitician("Shalane Flanagan", [80, 191, 191]);
var desiree = createPolitician("Desiree Linden", [174, 217, 82]);

shalane.electionResults = [
  5, 1, 7, 2, 33, 6, 4, 2, 1, 14,
  8, 3, 1, 11, 11, 0, 5, 3, 3, 3,
  7, 4, 8, 9, 3, 7, 2, 2, 4, 2,
  8, 3, 15, 15, 2, 12, 0, 4, 13, 1,
  3, 2, 8, 21, 3, 2, 11, 1, 3, 10, 3
];

desiree.electionResults = [
  4, 2, 4, 4, 22, 3, 3, 1, 2, 15,
  8, 1, 3, 9, 0, 6, 1, 5, 5, 1,
  3, 7, 8, 1, 3, 3, 1, 3, 2, 2,
  6, 2, 14, 0, 1, 6, 7, 3, 7, 3,
  6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1
];

shalane.electionResults[9] = 1;
desiree.electionResults[9] = 28;

shalane.electionResults[4] = 17;
desiree.electionResults[4] = 38;

shalane.electionResults[43] = 11;
desiree.electionResults[43] = 27;

console.log(shalane.electionResults);
console.log(desiree.electionResults);

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (shalane.electionResults[state] > desiree.electionResults[state]) {
    theStates[state].winner = shalane;
  } else if (shalane.electionResults[state] < desiree.electionResults[state]) {
    theStates[state].winner = desiree;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [107, 58, 140];
  }

shalane.tallyUpTotalVotes();
desiree.tallyUpTotalVotes();

console.log(shalane.totalVotes);
console.log(desiree.totalVotes);

var winner = null;

  if (shalane.totalVotes > desiree.totalVotes) {
     winner = shalane.name;
  } else if (shalane.totalVotes < desiree.totalVotes) {
     winner = desiree.name;
  } else {
     winner = "DRAW";
  }

console.log("And the winner is... " + winner +"!");

console.log("Shalane's color is: " + shalane.partyColor);
console.log("Desiree's color is: " + desiree.partyColor);

var countryInfoTable = document.querySelector("#countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = shalane.name;
row.children[1].innerText = shalane.totalVotes;
row.children[2].innerText = desiree.name;
row.children[3].innerText = desiree.totalVotes;
row.children[5].innerText = winner;

var stateInfoTable = document.querySelector("#stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidate1Name.innerText = shalane.name;
candidate2Name.innerText = desiree.name;

candidate1Results.innerText = shalane.electionResults[state];
candidate2Results.innerText = desiree.electionResults[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

};
