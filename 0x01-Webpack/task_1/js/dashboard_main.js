import $ from "jquery";
import _ from 'lodash';


let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

$(function() {
    $('body').append(
        $('<p>').text('Holberton Dashboard'),
        $('<p>').text('Dashboard data for the students'),
        $('<button>').text('Click here to get started'),
        $('<p>').attr('id', 'count'),
        $('<p>').text('Copyright - Holberton School'),
);

const debounced = _.debounce(() => {
    updateCounter();
});
$('button').on('click', debounced);
});