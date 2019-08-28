# LocalFileServer
> Creates a read only file server to be used for sharing files locally

[![Build Status](https://travis-ci.org/ShawonAshraf/LocalFileServer.svg?branch=master)](https://travis-ci.org/ShawonAshraf/LocalFileServer)

## Screenshot

![Imgur](https://i.imgur.com/yEr9dNd.png)

## Usage

- Clone and `cd` into the directory.
- Create a directory named `files` in the root of the directory.
- Put the files you want to serve in the `files` directory.

```bash
# install dependencies
yarn install

# start
yarn start

# watch for file changes using nodemon
yarn run start-watch
```
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000)


## File Listing
Everytime a user hits the endpoint "/", the server will fetch the list of files from `files` directory and list them in the `index` view.

File listing is done using [utils/file-listing.js](utils/file-listing.js)

## Logging
Server logs every request using `morgan` in `combined` format. More information can be found [here](https://github.com/expressjs/morgan#combined)

## License
MIT

