// var d1 = new Date(2013, 0, 1);
// var d2 = new Date(2013, 0, 30);
// console.log(d1);
// console.log(d2);
// console.log(d1 <  d2); // true
// console.log(d1 <= d2); // true
// console.log(d1 >  d2); // false
// console.log(d1 >= d2); // false


//The following is the function that updates the next date attribute of an entry
// Input: entry being updated (entry)
// Output: true or false
function updateNextDate(entry) {
  console.log("Updating next date attribute...")
  entry.nextDate = new Date(entry.startDate)
  entry.nextDate.setDate(entry.nextDate.getDate() + entry.ir)
  console.log(entry.nextDate)
  return true
}

//The following function calculates the new easiness factor (EF)
// Input: previous easiness factor (prevEF) and quality score (qS)
// Output: new easiness factor (newEF)
function getEF(entry) {
  console.log("Getting EF...")
  console.log("prevEF: " + entry.prevEF)
  let newEF = entry.prevEF - 0.8 + (0.28 * entry.currentQR) - (0.02 * entry.currentQR * entry.currentQR)

  if (newEF <= 1.3) {
    newEF = 1.3
  }

  entry.prevEF = newEF;
  console.log("new prevEF: " + entry.prevEF);
  return newEF;
}

function getIrInterval(entry) {
  console.log("Updating inter-repeition interval...")
  if (entry.n == 2) {
    entry.ir = 6
  } else {
    console.log("N is larger than 2...")
    entry.ir =  Math.floor((entry.n - 1) * getEF(entry))
    console.log(entry.ir)
  }
}

function updateN(entry) {
  console.log("Updating entry...")
  if(entry.currentQR < 3) {
    entry.intervalStartDate = new Date();
    entry.n = 1
    entry.ir = 1
  } else {
    entry.n = entry.n + 1
  }
}

function addQRScore(entry) {
  qualityScore = 5
  entry.currentQR = qualityScore
  entry.qrScores.push({
    qr: qualityScore,
    dateAdded: new Date()
  })
  return true
}

function addAnEntry(entry, taskName) {
  entry.subject = taskName;
  entry.dateCreated = new Date();
  entry.n = 4;
  entry.ir = 8;
  entry.startDate = new Date(entry.dateCreated);
  entry.nextDate = new Date(entry.startDate);
  entry.nextDate.setDate(entry.nextDate.getDate() + entry.ir);
  entry.prevEF = 2.7;
  entry.qrScores = [];
}

entry = {}
addAnEntry(entry, "Asymptotic Analysis")
addQRScore(entry)
updateN(entry)
getIrInterval(entry)
