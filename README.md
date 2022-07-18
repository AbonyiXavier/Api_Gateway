# Api_Gateway
The API Gateway is a reverse proxy acting as entry point for the microservices architecture.

Some responsabilities of API gateways are:

- routing requests
- combine multiple APIs
- expose customized APIs

# Getting Started

To obtain a copy of this app download or clone the repository at this [url](https://github.com/AbonyiXavier/Api_Gateway)

# Prerequisites

You must have

- NodeJs Installed
- A browser Installed
- An Internet connection to download the dependencies.

## Installing locally

- (If the repository wasn't cloned)Extract the contents of the downloaded zip file into any suitable location on the computer
- In the command prompt, cd to the root of the directory you extracted the app into
- Run 'npm install' to install all dependencies
- Run 'npm run start' to start the application
- In a browser address bar navigate to 'http://localhost:8080'
- Clone the user_service and the comment_service
- Make sure to start the server for both services 
- In a browser address bar navigate to 'http://localhost:8080/user' and 'http://localhost:8080/comment'


## Microservice Architecture Image
![microservice-architecture drawio](https://user-images.githubusercontent.com/49367987/179437458-29e9d1e2-49aa-45a2-b440-daa06653c0d1.png)

## Built With

- NodeJs
- Express
- Heroku for hosting [url](api-gateway-proxy.herokuapp.com)


## Author

- AbonyiXavier