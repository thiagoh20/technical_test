# technical_test


## MERN

- **M** = [MongoDB](https://www.mongodb.com)
- **E** = [Express.js](https://expressjs.com)
- **R** = [React.js](https://reactjs.org)
- **N** = [Node.js](https://nodejs.org)
  <br />

# How to use

### STEP 1:

Then open your terminal and clone your repository:

> cd ~/Desktop <br />
> git clone https://github.com/thiagoh20/technical_test.git

<br />

### STEP 2:

Go to the root of your repository's folder, and install all dependecies:

> cd ~/Desktop/technical_test<br />
> npm install

<br />

### STEP 3:

Prepare your MongoDB database ([atlas](https://www.mongodb.com/cloud/atlas),
[community](<https://github.com/benelferink/MERN-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)).<br />
Then configure your database within `api/constants/index.js`, by configuring the `MONGO_URI` variable.


#### OR

Open terminal #1 (backend)

> cd ./api<br />
> npm start

Open terminal #2 (frontend)<br />

- Development:<br />

  > cd ./app<br />
  > npm run dev<br />

# Algoritmos
the algorithms are located in the `app/src/utils/Algoritmos.js folder.`

# (backend) End Points
URL: `http://localhost:8080/platforms`<br />
GET:`http://localhost:8080/platforms/allPlatforms`
POST:`http://localhost:8080/platforms/newPlatform`<br />
### Body Post
>{
  "objectApp":"Netflix",
  "categoryApp":"Mensajeria"
}

DELETE:`http://localhost:8080/platforms/deletePlatform/NamePlatform`<br />