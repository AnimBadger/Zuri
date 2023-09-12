# Simple REST API capable of CRUD operations on a "person" resource
The entire application is within ``index.js`` file.  
This project uses Node, Express Js and MongoDB  

## Requirements
[NodeJS](https://nodejs.com)  
[ExpressJs](https://expressjs.com)  
[MongoDB](https://mongodb.com)  
API testing software eg. ``Postman`` or ``Insomnia`` or ``Thunder Bolt``

## Install
```shell
    $ git clone https://github.com/AnimBadger/Zuri
    $ cd ProjectTwo
    $ npm install
```
## Run
```shell  
    $ npm start
```
## Endpoints
``POST`` <localhost:5000/api>  
``GET`` <localhost:5000/api/:personId>   
``PUT`` <localhost:5000/api/:personId>  
``DELETE`` <localhost:5000/api/:personId>  

``person`` model takes ``name`` only from body.  
## Example
``Create person``  

![Create Person](./src/images/create_person.png)  

``Get Person``  

![Get Person](./src/images/get_person.png)  

``Update Person``  

![Update Person](./src/images/update_person.png)  

``Delete Person``  

![Delete Person](./src/images/delete_person.png)  

## UML Diagram  
``Class Diagram can be found ``[Here](https://share.ue.internxt.com/sh/file/60c3b038f0e50a0eab38/69053cc3fc010c77e802d172813a809cecd3b83729ef0ff0eb212a541a5c9f43)