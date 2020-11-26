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

var liz = createPolitician("Elizabeth Warren", [132, 17, 11]);
var katie = createPolitician("Katie Porter", [245, 141, 136]);

liz.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 10, 3];

katie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

liz.electionResults[9] = 1;
katie.electionResults[9] = 28;

liz.electionResults[4] = 17;
katie.electionResults[4] = 38;

liz.electionResults[43] = 11;
katie.electionResults[43] = 27;

console.log(liz.electionResults);
console.log(katie.electionResults);

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (liz.electionResults[state] > katie.electionResults[state]) {
    theStates[state].winner = liz;
  } else if (liz.electionResults[state] < katie.electionResults[state]) {
    theStates[state].winner = katie;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

liz.tallyUpTotalVotes();
katie.tallyUpTotalVotes();

console.log(liz.totalVotes);
console.log(katie.totalVotes);

var winner = null;

  if (liz.totalVotes > katie.totalVotes) {
     winner = liz.name;
  } else if (liz.totalVotes < katie.totalVotes) {
     winner = katie.name;
  } else {
     winner = "DRAW";
  }

console.log("And the winner is... " + winner +"!");

console.log("Elizabeth's color is: " + liz.partyColor);
console.log("Katie's color is: " + katie.partyColor);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = liz.name;
row.children[1].innerText = liz.totalVotes;
row.children[2].innerText = katie.name;
row.children[3].innerText = katie.totalVotes;
row.children[5].innerText = winner;

var stateInfoTable = document.getElementById("stateResults");
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

candidate1Name.innerText = liz.name;
candidate2Name.innerText = katie.name;

candidate1Results.innerText = liz.electionResults[state];
candidate2Results.innerText = katie.electionResults[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

};
