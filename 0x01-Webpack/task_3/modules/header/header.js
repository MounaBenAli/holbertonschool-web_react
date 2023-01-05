import $ from "jquery";
import "./header.css";


$(function() {
    $('header').append(
        $('<div>').attr('id', 'logo'),
        $('<h1>').text('Holberton Dashboard'),
      
)});

console.log ('Init header');
