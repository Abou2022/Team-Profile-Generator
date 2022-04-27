
  # https://github.com/Abou2022 /undefined / Team Profile Generator 

  # Description: 
  GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
  to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles
  # Installation: 
  The app will run inside the terminal
  # Usage : 
  run node index.js in the terminal and the app will ask you couple questions about Engineer, Intern and Manager
  # Contibution : 
  N/A
  # Test:
  the application use Jest for running the unit tests and Inquirer for collecting input from the user. The application will be invoked by using the following command:
  node index.js

  # Question:
   For any question contact me
  # For any question, you can eamil at :syllabakary2002@gmail.com
  
  ![](./Develop/Asssets/image/Screenshot%202022-04-26%20224322.png)
  