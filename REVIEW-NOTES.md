# Review Notes - Project 02

Edward Apostol
2025-02-10 12:30pm EST

## General Notes

- Having all the files in `develop` folder is not needed, should be moved to root folder.
- Having files in `develop` folder makes is slightly more complicated to reference files
- It may break some deployment steps that require files to be placed in the root directory in the future.

## package.json review

### root package.json file

- `npm run install` correctly installs client folder, server folder and root folder npm packages
- `npm run build` modified to build react front-end only (was informed no typescript support to build back-end required)
- change the `npm run start:dev` command to reflect that your server is (apparantly) running off port 5433, not 3001

```json
    "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:5433 && npm run client:dev\"",
```

This will allow you to run `npm run start:dev` cleanly to launch the application

### ./server package.json file

- the "exec" block should be corrected to reference the /src directory as typescript is not building the content

from

```json
    "exec": "node dist/server.js"
```

to

```json
    "exec": "node src/server.js"
```

- correct

## database setup review

- can navigate to schema file and create initial database with `schema.sql` file

## repo review

- Make sure your .env file is removed from the repository! it's a security risk.

## Client Side

- When selecting an item to add to cart, there should be a modal , pop-up, small message balloon or other indicator (like a shopping cart item with a total quantity value) to indicate that the product has been added to cart.
- When launching the application locally, it is recommended to lock the port number to a standard port like 3000. Nothing wrong with Vite auto-incrementing port numbers when others are used, but it reduces the risk of Vite choosing a port that is again used or having a random developer unknowningly add the port number to the url. It may also conflict with deployment to the live hosting provider such as Render. This is done in the vite.config file.
