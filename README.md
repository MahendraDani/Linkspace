# LINKSAPCE

The platform to manage, organize and access your links!

# Setting up the project

## Prerequisites

1. Download and install [Git](https://git-scm.com/Git) on your machine.
2. Downlaod and install [Nodejs](https://nodejs.org/en) on your machine.
3. Install yarn on your machine by running `npm install yarn -g` in terminal.
4. Download and install [MongoDB Compass](https://www.mongodb.com/products/compass) on your machine.

## Getting Started

1. Fork this repository.
2. Clone this repo in your machine.
3. Execute `cd Linkspace` in your terminal.

## Setting up the server-side

1. Execute `cd server` in your terminal.
2. Install the dependencies using the command

```
yarn
```

3. Create a `.env` file and create a variable `PORT = 3000` and save the file.
4. Connect to data base by add variable `DATABASE_URI = http://127.0.0.1/linkspace` in .env file. (Please refer to .env.example file)
5. Run the development server `yarn dev`.

## Setting up client-side

1. Execute `../client` in your terminal to go in client directory.
2. Execute the command

```
yarn
```

3. Run client-side using the command

```
yarn dev
```

4. Run the development server on your browser - `http://localhost:5173`
