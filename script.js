/* global $ */

$(document).ready(function () {

  var testUsers = ['freecodecamp', 'gjsmith3rd', 'ogamingsc2', 'brunofin', 'comster404', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff'];
  var testUserData = [];

  $.ajaxSetup({

    headers: {
      'Accept': 'application/vnd.twitchtv.v3+json'
    }
  });

  testUsers.forEach(function (element, index, array) {

    $.getJSON('https://api.twitch.tv/kraken/streams/' + testUsers[element], function (data) {
      console.log('https://api.twitch.tv/kraken/streams/' + element);
      console.log(data);
      testUserData.push(data);

    });

  });

  console.log(testUserData);

});
