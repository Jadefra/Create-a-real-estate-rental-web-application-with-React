# Website

https://github.com/Jadefra/Create-a-real-estate-rental-web-application-with-React/assets/91191428/a062ecdd-b4c7-444a-8b73-4f9e6cee1fee

### Context ###
The Kasa website was coded more than 10 years ago in ASP.NET with significant legacy code. The CTO therefore launched a total overhaul to move to a full stack in JavaScript with NodeJS on the back-end side, and React on the front end side. Kasa also took the opportunity to order new models from its usual designer, who is freelancing.

### Objective ###
Start the React project and develop the whole application, React components, React Router routes, following Figma models (responsive!). And this with a quality code!

### Back-end / data ###
Extraction of the last 20 housing announcements from the JSON file to build the corresponding Front.

### Figma mockups ###

![image](https://github.com/Jadefra/Create-a-real-estate-rental-web-application-with-React/assets/91191428/5840ac6b-00eb-41cd-93e5-30d188de2b40)
![image](https://github.com/Jadefra/Create-a-real-estate-rental-web-application-with-React/assets/91191428/82064dc3-e8ee-48c0-b1c7-c19ef502e838)
![image](https://github.com/Jadefra/Create-a-real-estate-rental-web-application-with-React/assets/91191428/29b6ac28-4387-4fb4-9b21-1adec0c0274c)

### Functional constraints ###
● For scrolling photos in the gallery (Gallery component):
  - If the user is at the first image and clicks on "Previous image", the gallery displays the last image.
  - Conversely, when the image displayed is the last in the gallery, if the user clicks on "Next image", the gallery 
    displays the first image.
  - If there is only one image, the "Next" and "Previous" buttons do not appear.
 
● Collapse: By default, Collapses are closed on page initialization.
  - If the Collapse is open, the user's click closes it.
  - Conversely, if the Collapse is closed, a click opens it.

# Standard tools

● Create React App
● React Router
● Styling: The use of Sass is optional. CSS is for use by default.
● No external React library

### Technical constraints ###

### React: ###

It is imperative to use elements of React for quality code:
● Cutting into modular and reusable components;
● One component per file;
● Logical structure of the different files;
● Using props between components;
● Use of state in components when necessary;
● Event management;
● Lists: React allows you to do really interesting things with lists, by iterating over them, for example with map.

### React Router: ###
● Route parameters are managed by React Router in the URL to retrieve information for each accommodation.
● There is one page per route.
● The 404 page is returned for each route that does not exist, or if a value present in the URL is not part of the data informed.
● Router logic is combined in a single file.

# Steps

### Step 1: Initialize the project ###
● The React application installed and the GitHub repo initialized.
● Added the JSON file which contains the data.
● The demo application that launches in the browser when I type `npm start` in the terminal.

### Step 2: Add React Router ###
● I should have React Router and its dependencies installed on my application.

### Step 3: Create the router and the various pages of the application ###
● I should have the routing of my functional application.
- Create the different pages of the application
- Create components by integrating the router component.
- The application layout for the main layout. We had different options (CSS, SASS, CSS modules).
==> Create a separate component for the router.

### Step 4: Create the homepage ###
● I should have the banner and card components created, and a list of available properties.
● Analyze the different components well and see if they are reused in the app. Evaluate which interface elements require a
component of their own.
● Be careful that the creation of cards does not generate a warning in console.

### Step 5: Create the About Page ###
● I must avoid the Collapse component created.
● The Collapse must have two different states: it can be open or closed.
● Use component properties to pass the desired data.
● The component can take different forms depending on depending on its use.

### Step 6: Make the error page ###
● I should have the functional error page.
- Follow the mockup design.
- Ensure that any non-existent route leads to the error page

### Step 7: Create the housing page carousel ###
● I must have :
 - Functional routing logic.
 - The click on the functional Home page property cards.

● I should have :
 - The Slideshow component created.
 - Added arrows and bullet points so dynamic. If a property has only one image, you should see neither arrow nor bullet point.
 - Added event listeners so that on click the change picture is done correctly.
● Be careful not to have any errors when you are at the ends of the carousel: click on the left arrow at the first slide should lead to the last frame, and vice versa.

### Step 8: Finalize the housing page ###
● I should have the functional property page.
● Reuse the Collapse component created before.

### Step 9: Handle the property id error ###
● I should have a redirect to the error page in case of incorrect id.
● Handle redirection with the Navigate component or the useNavigate hook.

### SKILLS ####
● Initialize an app with Create React App
● Configure app page navigation with React Router
● Develop website interface elements using React components

### General  ###
● The code does not produce any error or warning in the console.
