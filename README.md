# Image Processing API

Build an API which processes images, change size, save to new directories and display on end points. 

### The Project uses many modules such as : 

- Sharp-Module to do image processing
- Supertest module to do endpoint testing
- Typescript for more advanced and explicit programming
- fs module to read/save files
- eslint and prettier for best code quality
- jasmine for unit testing
    - End Point testing to return proper status
    - Function Testing to make sure the API works properly such as correct format and resize

 
### how to use the API
- by vising the endpoint images and providing the filename you can access the default size-image
- you could also add width and height queries/properities to the URL to modify the image and resize

example : 
- http://localhost:3000/image?name=fjord&width=700&height=700
    - this will open Fjord image, convert it to 700x700 then show it
- http://localhost:3000/image?name=fjord
    - this will show the default size Fjord image
   
## Scripts 
- npm run build : to build project
- npm run lint : to lint code
- npm run prettier-ts : to run prettier on TS files
- npm run prettier-js : to run prettier on JS files
- npm run test : to build project and run jasmine/unit testing
- npm run start : to start/run project
