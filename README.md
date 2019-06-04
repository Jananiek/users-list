# Users List

A simple application built to showcase React with Laravel and MySQL.

## Environment
```bash
Php  v7.0.29
Laravel Framework v5.5.45
Node v8.11.1

```

## Installation

Clone this repo to your local machine by using 
```bash
git clone
```

And then to install relevant packages and start the servers


```bash
cd users-list/frontend
npm install
npm start

```
This will start fronted server at http://localhost:3000/
```bash
cd users-list/laraApi
composer install
php artisan serve
```
This will start the backend server at http://localhost:8000/

Create database in MySQL and seed data.  Update  the .env file with your values
```bash
cd users-list/laraApi
php artisan migrate
php artisan db:seed

```
Now can see the frontend at http://localhost:3000/


## Running the tests
To run unit tests for API calls
```python
cd users-list/laraApi
composer test

```

