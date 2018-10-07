const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';
const calendarEvents = [];
let eventLog = [];
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
  var endDate = getEndDate(6, 10, 2018);

  return [startDate, endDate];
}

function listEvents(auth) {
  const dates = getDates();
  const startDate = dates[0]
  const endDate = dates[1]
  const calendarClient = google.calendar({version: 'v3', auth});
  calendarClient.calendarList.list({}, (err, resp) => {
    const calendars = []
    resp.data.items.map(item => {
      if(item.id !== '#contacts@group.v.calendar.google.com' && item.id !=='en.usa#holiday@group.v.calendar.google.com') {
        calendars.push(item)
      }
    });
    const client = [{"id": '7aa9binu4ibje6gt2p1ktc2aq4@group.calendar.google.com'}, {"id": '7aa9binu4ibje6gt2p1ktc2aq4@group.calendar.google.com'}]
    save(calendarClient, calendars).then(function(){
       console.log('success');
    }).catch(function(err){
      console.log("ERROR ERROR")
       console.log('error');
       console.log(err)
    }).then(function() {
      console.log("HELLO")
      console.log(eventLog)
    })
  });
}

function calendarPromise(id, calendarClient) {
  const dates = getDates();
  const startDate = dates[0]
  const endDate = dates[1]

  console.log("INSIDE CALENDAR PROMISE FUNC")
  return new Promise(function(resolve, reject) {
    calendarClient.events.list({
      calendarId: id,
      timeMin: (startDate.toISOString()),
      timeMax: (endDate.toISOString()),
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, res) => {
      if (err) {
        console.log("ERROR ERROR")
        reject(err);
      } else {
        res.data.items.map(item => eventLog.push(item.summary))
        resolve(res);
      }})
  })
}

function save(calendarClient, clients ){
    var promises = [];
    clients.map(client => promises.push(calendarPromise(client.id, calendarClient)));
    return Promise.all(promises);
}
