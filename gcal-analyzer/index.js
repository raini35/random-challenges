const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';
const calendarEvents = [];
let eventLog = [];
let eventLogTwo = {}
let listOfCalendars = [];
// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function getStartDate(day, month, year) {
  return new Date(year, month - 1, day);
}

function getEndDate(day, month, year) {
  return new Date(year, month - 1, day + 1 );
}

function getDates() {
  var startDate = getStartDate(1, 10, 2018);
  var endDate = getEndDate(7, 10, 2018);

  return [startDate, endDate];
}

// msToTime function came from https://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html
function msToTime(difference_ms) {
 //take out milliseconds
 difference_ms = difference_ms/1000;
 var seconds = Math.floor(difference_ms % 60);
 difference_ms = difference_ms/60;
 var minutes = Math.floor(difference_ms % 60);
 difference_ms = difference_ms/60;
 var hours = Math.floor(difference_ms % 24);
 var days = Math.floor(difference_ms/24);

 return [hours, minutes];
}

function calculateDuration(start, end) {
  const startDateTime = new Date(start);
  const endDateTime = new Date(end);
  return msToTime(Math.abs(endDateTime - startDateTime));
}

function formatEvent(event) {
  const {  kind, id, htmlLink, created, updated, summary, start, end, iCalUID} = event
  const duration = calculateDuration(start.dateTime, end.dateTime);
  return {
    kind,
    id,
    htmlLink,
    created,
    updated,
    summary,
    start,
    end,
    duration,
    iCalUID
  }
}

function calcuTotalTimeSpent(events) {
  var totalHours = 0
  var totalMinutes = 0
  events.map(event => {
    totalHours = totalHours + event.duration[0]
    totalMinutes  = totalMinutes + event.duration[1]
  })
  totalHours = totalHours + totalMinutes/60
  minPart = (totalHours % 1) * 60
  hourPart = totalHours - (totalHours % 1);
  return [totalHours.toFixed(2), hourPart + ":" + minPart.toFixed(0)];
}
function listEvents(auth) {
  const dates = getDates();
  const startDate = dates[0]
  const endDate = dates[1]
  const calendarClient = google.calendar({version: 'v3', auth});
  calendarClient.calendarList.list({}, (err, resp) => {
    const calendars = []
    resp.data.items.map(item => {
      if(item.id !== '#contacts@group.v.calendar.google.com' && item.id !=='en.usa#holiday@group.v.calendar.google.com' && item.summary !== 'Water') {
        calendars.push(item)
      }
    });
    save(calendarClient, calendars).then(function(){
      console.log(Object.keys(eventLogTwo));
      for(key in eventLogTwo) {
        const timeSpent = calcuTotalTimeSpent(eventLogTwo[key])
        console.log(key +"," + timeSpent[0] +","+timeSpent[1])
      }
    }).catch(function(err){
       console.log(err)
    });
  });
}

function calendarPromise(client, calendarClient) {
  const dates = getDates();
  const startDate = dates[0]
  const endDate = dates[1]
  return new Promise(function(resolve, reject) {
    calendarClient.events.list({
      calendarId: client.id,
      timeMin: (startDate.toISOString()),
      timeMax: (endDate.toISOString()),
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if(!(client.summary in eventLog)) {
          eventLogTwo[client.summary] = []
        }
        res.data.items.map(item => {
          eventLogTwo[client.summary].push(formatEvent(item))
        })
        resolve(res);
      }})
  })
}

// https://stackoverflow.com/questions/35381423/how-to-save-multiple-mongodb-collections-using-promise?rq=1
function save(calendarClient, clients ){
    var promises = [];
    clients.map(client => {
      promises.push(calendarPromise(client, calendarClient));
    });
    return Promise.all(promises);
}
