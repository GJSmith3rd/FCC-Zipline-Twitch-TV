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

        console.log(data);

        if (data.status !== 422) {

          var alertClass = data.status !== null ? 'alert-success' : 'alert-default';
          var streamContent = data.status !== null ? 'now streaming' : 'stream offline';
          var streamStatus = data.status !== null ? data.status : '';
          var logo = data.logo !== null ? data.logo : 'http://i.imgur.com/5Ia41S4.png';

          $('<li class="list-group-item">' +
            '<img width="25" height="25" src="' +
            logo +
            '" />' +
            ' ' +
            '<strong>' +
            data.display_name +
            ' : ' +
            '</strong>' +
            '<a href="' +
            data.url +
            '">' +
            streamStatus +
            '</a>' +
            '<span class="badge ' +
            alertClass +
            '">' +
            streamContent +
            '</span>' +
            '</li>')
            .appendTo('#listGroup');

        } else {

          console.log(element);

          $('<li class="list-group-item">' +
            element +
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
