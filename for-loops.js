/* Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes.
Use console.log() to output the value of the counter variable each time through the loop. S
top execution of the loop if the counter variable's value is greater than 120. */


for (var i = 5; i < 120; i += 10) {
  console.log("Current value is " + i);
}

/* Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2.
Use console.log() to output its value every time. When the counter variable's value is 1, stop execution. */

for (var j = 4096; j >= 1; j /= 2) {
  console.log("Current value is " + j);
}

/* Create an array that contains the names of American Presidents.
Loop over that array with a for loop, and use string concatenation with console.log()
to output the order and name of each President (see example below). */

var presidents = ["George Washington (1789-1797)", "John Adams (1797-1801)", "Thomas Jefferson (1801-1809)", "James Madison (1809-1817)", "James Monroe (1817-1825)", "John Quincy Adams (1825-1829)", "Andrew Jackson (1829-1837)", "Martin Van Buren (1837-1841)", "William Henry Harrison (1841)", "John Tyler (1841-1845)", "James K. Polk (1845-1849)", "Zachary Taylor (1849-1850)", "Millard Fillmore (1850-1853)", "Franklin Pierce (1853-1857)", "James Buchanan (1857-1861)", "Abraham Lincoln (1861-1865)", "Andrew Johnson (1865-1869)", "Ulysses S. Grant (1869-1877)", "Rutherford B. Hayes (1877-1881)", "James A. Garfield (1881)", "Chester Arthur (1881-1885)", "Grover Cleveland (1885-1889)", "Benjamin Harrison (1889-1893)", "Grover Cleveland (1893-1897)", "William McKinley (1897-1901)", "Theodore Roosevelt (1901-1909)", "William Howard Taft (1909-1913)", "Woodrow Wilson (1913-1921)", "Warren G. Harding (1921-1923)", "Calvin Coolidge (1923-1929)", "Herbert Hoover (1929-1933)", "Franklin D. Roosevelt (1933-1945)", "Harry S. Truman (1945-1953)", "Dwight D. Eisenhower (1953-1961)", "John F. Kennedy (1961-1963)", "Lyndon B. Johnson (1963-1969)", "Richard Nixon (1969-1974)", "Gerald Ford (1974-1977)", "Jimmy Carter (1977-1981)", "Ronald Reagan (1981-1989)", "George Bush (1989-1993)", "Bill Clinton (1993-2001)", "George W. Bush (2001-2009)", "Barack Obama (2009-present)"]

for (var i = 0; i < presidents.length; i++) {
  console.log("President numnber " + (i+1) + " was " + presidents[i]);
}

/* You can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log()
to output the names of the keys in the object. */



var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

console.log(Object.keys(antSpecies));











