/* global $ */

$(document).ready(function () {

  var userGroup = ['freecodecamp', 'gjsmith3rd', 'ogamingsc2', 'brunofin', 'comster404', 'storbeck', 'terakilobyte', 'habathcx', 'robotcaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff'];

  $.ajaxSetup({

    headers: {
      'Accept': 'application/vnd.twitchtv.v3+json'
    }
  });

  userGroup.sort().forEach(function (element, index, array) {

    $.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + element + '?callback=?',
      dataType: 'json',

      success: function (data) {

        if (data.status !== 422) {

          var alertClass = data.status !== null ? 'alert-success' : 'alert-default';
          var streamContent = data.status !== null ? 'now streaming' : 'stream offline';
          var streamStatus = data.status !== null ? data.status : '';
          var logo = data.logo !== null ? data.logo : 'http://res.cloudinary.com/mobilecreature/image/upload/v1456543488/FreeCodeCamp/Ziplines/Twitch-TV/5Ia41S4.png';

          $('<li class="clearfix list-group-item">' +
            ' ' +
            '<strong>' +
            data.display_name +
            ': ' +
            '</strong>' +
            '<a target="_blank" href="' +
            data.url +
            '">' +
            streamStatus +
            '</a>' +
            '<br>' +
            '<img width="35" height="35" src="' +
            logo +
            '" />' +

            '<span class="badge ' +
            alertClass +
            '">' +
            streamContent +
            '</span>' +
            '</li>')
            .appendTo('#listGroup');

        } else {

          $('<li class="clearfix list-group-item">' +
            ' ' +
            '<strong>' +
            element +
            '</strong>' +
            '<br>' +

            '<img width="35" height="35" src="' +
            'http://res.cloudinary.com/mobilecreature/image/upload/v1456607682/FreeCodeCamp/Ziplines/Twitch-TV/images.jpg' +
            '" />' +
            '<span class="badge alert-danger">' +
            'account invalid' +
            '</span>' +
            '</li>')
            .appendTo('#listGroup');

        }

      },

      error: function (data) {

        console.log('ERROR: ', data);

      }

    });

  });

});
