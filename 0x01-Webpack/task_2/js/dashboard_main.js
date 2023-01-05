import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

$(function() {
    $('body').append(
        $('<div>').attr('id', 'logo'),
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