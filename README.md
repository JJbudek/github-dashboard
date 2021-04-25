# Github Dashboard

A simple react.js project created for a task assaigned by allegro team as a part of recrutation for Summer e-Xperience 2021.
![alt text](https://assets.allegrostatic.com/opbox/allegro.pl/praca/SummerEXperience2017/6NLsgapwsVFBO80mFbO3cx-w1920-h360.png "summer experience logo")
## Instalation

Simply clone this repo or download a zipped version.
Navigate to application root foler (folder by default should be called `github-dashboard-main`) using terminal of your choice and then run
`npm install`
once the installastion is over, simply start the web server by typing:
`npm start`
By now the server should be running and you can access it by navigation to
[http://localhost:3000](http://localhost:3000)

## App structure
![alt text](https://i.ibb.co/FqfB6Td/diagram.png "Application structure diagram")

##### App.js
App.js serves as a main wrapper for thr whole application. It also holds its "main" state. This component communicates with `Api` and `Helpers` classes and uses functions specified there.

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

