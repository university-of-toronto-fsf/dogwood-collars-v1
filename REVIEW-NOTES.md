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
- Change the `npm run start:dev` command to reflect that your server is (apparantly) running off port 5433, not 3001

```json
    "start:dev": "concurrently \"npm run server:dev\"
    \"wait-on tcp:5433 && npm run client:dev\"",
```

This will allow you to run `npm run start:dev` cleanly to launch the application each time without having to start manually in the client folder and then start in the server folder. it also will streamline the settings applied in the render dashboard for starting the application (you would have to update and repeat applying the settings there)

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

- Can navigate to schema file and create initial database with `schema.sql` file
- I believe it ran correctly, but make sure the server folder's package.json has `"seed": "node src/seeds/index.js"` as its value.

## repo review

- Make sure your .env file is removed from the repository! it's a security risk. (We have already resolved that issue in-class)

## Client Side

- When selecting an item to add to cart, there should be a modal , pop-up, small message balloon or other indicator (like a shopping cart item with a total quantity value) to indicate that the product has been added to cart. (edit: this has been fixed since the time of writing).
- When launching the application locally, it is recommended to lock the port number to a standard port like 3000. Nothing wrong with Vite auto-incrementing port numbers when others are used, but it reduces the risk of Vite choosing a port that is again used or having a random developer unknowningly add the port number to the url. It may also conflict with deployment to the live hosting provider such as Render (for example github pages utilizes the root directory or the docs folder). This is done in the vite.config file, with one line of settings added (`port: 3000`).

```json
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    /* client will be served on this port http://localhost:3000 */
    proxy: {
      "/api": {
        target: "http://localhost:5433",
      },
    },
  },
});

```

- The images are a little slow to load (probably using the original source images instead of optimizing them) - low lying fruit type of issue but does impact performance.

## Functionality Review

- Make sure you check off all the requirements needed for the project. There are "read" operations to display items, but I was looking for the C (Create), U (Update) and D (Delete) operations, for example in the management of the items in your store's catalog of products.

```text
As a user, I should be able create (insert), read (select), update
(update), and delete (delete) items from a product catalog as part of
managing the e-commerce store. These operations should be performed
using routes with PUT, GET, UPDATE and DELETE REST operations.

```

It was great working with you and good luck!
