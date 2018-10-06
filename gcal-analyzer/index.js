const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';
const calendarEvents = [];
let eventList = [];

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
  var endDate = getEndDate(4, 10, 2018);

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

 return days + ':' + hours + ':' + minutes + ':' + seconds;
}

function calculateDuration(start, end) {
  const startDateTime = new Date(start);
  const endDateTime = new Date(end);
  return msToTime(Math.abs(endDateTime - startDateTime));
}

function getEvents(currentCal, calendar) {
  const dates = getDates();
  const startDate = dates[0]
  const endDate = dates[1]

  return new Promise(function(resolve,reject){
    calendar.events.list({
      calendarId: currentCal.id,
      timeMin: (startDate.toISOString()),
      timeMax: (endDate.toISOString()),
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, res) => {
      if (err) {
        return console.log('The API returned an error: ' + err);
      } else {
        if(currentCal.summary !== "Water") {
            if(res.data.items.length > 0) {
              const events = res.data.items;
              resolve(events)
            }
        }
      }
    });
  });
}


function getCalendarIds(calendarClient) {
  return new Promise(function(resolve,reject){
    calendarClient.calendarList.list({}, (err, resp) => {
      const listOfCalendars = resp.data.items;
      resolve(listOfCalendars);
    });
  });
}

function listEvents(auth) {
  const calendarClient = google.calendar({version: 'v3', auth});
  getCalendarIds(calendarClient).then(function(listOfCalendars){
    addCalendars(listOfCalendars).then(function() {
      console.log(events)
    }).catch(function(err) {
      console.log(err);
    });
  }).catch(function(err){
    console.log(err)
  });
  console.log(calendars)
}
