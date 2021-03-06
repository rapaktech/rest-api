# This is a simple REST (Representational State Transfer) API that runs all CRUD operations to a database of fictional users.

# I built it using NodeJS, Express and MongoDB.

Functionality is still minimum, but the idea is to create a minimum viable product, and then build on it.

# **Here's a brief on and how it works.**

Three types of data can be added for each user: Their name, email address, and country of origin.


To READ all user, send a raw JSON GET request to locahost:3000 or https://stormy-fjord-86866.herokuapp.com/


To CREATE a new user, send a raw JSON POST request to locahost:3000/users or https://stormy-fjord-86866.herokuapp.com/users containing your user info in a JSON object like this:

{
    "name": "Name",
    "email": "Email Address",
    "country": "Country"
}


To READ a single user, send a raw JSON GET request to locahost:3000/users or https://stormy-fjord-86866.herokuapp.com/users containing your user name in a JSON object like this:

{
    "email": "Email Address"
}


To UPDATE a single user, send a raw JSON PUT request to locahost:3000/users or https://stormy-fjord-86866.herokuapp.com/users containing your user info in a JSON object like this:

{
    "name": "Name",
    "email": "Email Address",
    "country": "Country"
}


To DELETE a single user, send a raw JSON DELETE request to locahost:3000/users or https://stormy-fjord-86866.herokuapp.com/users containing your user name in a JSON object like this:

{
    "email": "Email Address"
}