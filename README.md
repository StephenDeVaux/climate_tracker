# Climate change site - General Assembly Project

The project was to create a website on a topic and technology stack of my choice: 

**Topic**: 
Idea was to collect data of climate change from multiple places and display it in one location in a easy to understand interface. 

**Technology used**
1. React
2. Material-ui
3. Chart.js 

link to heroku hosted website(Can take awhile to get going from a cold start...): https://sdv-climate-change.herokuapp.com

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/60765528/111290860-ab2ef900-869a-11eb-999d-84c3d10b4994.png">

### Available Scripts
npm start  <br/>
npm test <br/>
npm run build <br/>
npm run eject <br/>

### Difficulties
- Finding good data sets for relevent information. Was hoping to include endangered species but very limited data on animal numbers
- Finding good design for displaying of data. I wanted it to be graphical but because but was tricky to find exisiting libraries that would fit in with all the data sets which resulted in attempting to keep it simple and using css. However the end result is that it is not particularly polished looking. 
- integrating the data directly into the application - ideally have a seperate backend that fetches latest data and processess it but as the data doesn't update often is not strictly necessary. Currently used a seperate local project to read csv files and process them as required. (seperate repo https://github.com/StephenDeVaux/earth_tracker_data )

### Lessons
- React
- context api - was very useful for passing the variables too all the components. Would have been extremely difficult if only passed from parent to child components

### Further development
- More interesting and relevant data could be included to make it more relevant
- Better design visuals like cards sliding in and out could improve the look of the site
- graphical representation of data could be improved somehow
