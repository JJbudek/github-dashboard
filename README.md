# Github Dashboard

A simple react.js project created for a task assigned by allegro team as a part of Summer e-Xperience 2021 program.
![alt text](https://assets.allegrostatic.com/opbox/allegro.pl/praca/SummerEXperience2017/6NLsgapwsVFBO80mFbO3cx-w1920-h360.png "summer experience logo")
## Instalation

Simply clone this repo or download a zipped version.
Navigate to application root folder (folder by default should be called `github-dashboard-main`) using terminal of your choice and<br/>then run<br/>
`npm install`<br/>
once the installation is over, simply start the web server by typing:<br/>
`npm start`<br/>
By now the server should be running and you can access it by navigation to<br/>
[http://localhost:3000](http://localhost:3000)

## App structure
![alt text](https://i.ibb.co/qYSHK3B/diagram-1.png "Application structure diagram")

##### App.js
App.js serves as a main wrapper for the whole application. It also holds its "main" state. This component communicates with `Api` and `Helpers` classes and uses functions specified there.

##### Header
A component designed to present specified user data.

##### Navbar
A component which main role is to get desired person username and later pass it to `App.js` and finally `API` in order of getting specified user data.

##### Repositories
Repositories component serves as a wrapper for `singleRepo` components as well as `pagination`.

##### SingleRepo
SingleRepo displays single repository data. 

##### Pagination
Pagination is a component which serves as a simple navigation for `Repositories` wrapper. 


## Design
For the design part of application i decided to stick to something simple yet modern.

![alt text](https://i.ibb.co/bJHQ4f7/Web-1920-1.png "Application structure diagram")

## Conclusion

I've had a really good time working on this project. The task was simple yet gave me opportunities to work with various methods and programming patterns. </br>

The main requirements specified by allegro team was that the application consists of two components: </br>
1. `Form` which would allow users to enter specified github user username.
2. `List` which would display specified user public repositories sorted by stars count</br>

I've decided to add a 3rd main component which in my case is `Header`. `Header` as you can see on the design mockup is the left panel which displays basic user data. For simplicity `Header` wont show on mobile devices.