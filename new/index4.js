var name, age, city;
var firstName;
// legal variable
var firstName='kamran'
var firstColumn='2'
var firstSection='B'
var firstRoom='3'
var yourClass='12th'
// illegal variable
var 2firstName='kamran'
var #firstColumn='2'
var .firstSection='B'
var 3firstRoom='3'
var @yourClass='12th'

// Display on your browser
        // Create and append heading
        document.write("<h1>Rules for naming JS variables</h1>");

        // Append rules with blanks filled
        document.write("<p>Variable names can only contain <strong>letters</strong>, $<strong>-.</strong>, <strong>$</strong>, and <strong>_</strong>.<br>For example $my_1stVariable</p>");

        document.write("<p>Variables must begin with a <strong>letter</strong>, <strong>$</strong>, or <strong>_</strong>.<br>For example $name, _name, or name</p>");

        document.write("<p>Variable names are case <strong>sensitive</strong>.</p>");

        document.write("<p>Variable names should not be JS <strong>keywords</strong>.</p>");

