# testTask
requirements:
- Build the system of managing toDo lists.
- Build ability to create/view/delete lists
- Build ability to add/view/edit/delete list points.
- For storing lists data use database manage system
- Make possible to create several lists.

## How to run it

### Install dependencies

```bash
npm install
```

### Set Environment variables

All Environment variables contain in `.env.example`. To set your Environment variables you should `.env.example` rename to `.env` and fill in all variables inside

Before starting a project, you need to create a database with name which you fil in `.env` file in fild DB_NAME=`<your database name>`

```
CREATE DATABASE `<your database name>`;
```
### Run migrations

```bash
knex migrate:latest
```
### Run app

```bash
npm run dev
```

by default app running on http://localhost:3000/

## Technology Stack
- Experss Js
- MySQL
- EJS
- Knex
