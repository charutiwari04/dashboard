
#Corporate Dashboard
##About the App 

This application shows three Dashboards: 

1. Geospatial View - Uses CSV file to show Employees at various locations. 
2. Key Metrics View - Uses CSV file to show One Line Chart reflecting number of paying customers and One Bar Chart reflecting number of reported issues over a period of time. 
3. Data View - Uses JSON file to show spreadsheet which is sortable and filterable on description.

##How to Run the app in development environment.
App is built in Gulp. 

1. Download all files on a folder in your system.
2. Locate the folder on the command line.
3. Either follow step 4 to 6 or step 7.
4. Install gulp if you do not have on your system. 
5. Install all the required gulp plugins, for this project required plugins are gulp-sass, gulp-autoprefixer, gulp-eslint, gulp-uglify, gulp-cssmin, browser-sync, gulp-htmlmin, gulp-imagemin, gulp-jsonminify. It can be installed using coming line 
     * npm install --save-dev <plugin-name>
6. Once everything is setup, type 'gulp' on the command line        
     * $<folder-name> gulp

7. Or I have included package.json file, so instead of installing gulp and its plugins, just run command
     * npm install

     In this case there is not need of typing gulp command. 

8. This will automatically open the browser and run the app on your computer. 
9. On command line it will give IP Address if we want to open this from mobile or outside. 
10. Use the IP address mentioned in command line to open the app on mobile.

## How to Run App in Production

1. After following above steps from 1 through 5. Run command gulp serve:dist

##Skills used
HTML, CSS, Bootstrap, jQuery, AngularJS, Google Charts, Highcharts and gulp.

###Note: 
Improvements will be done in future.


  
