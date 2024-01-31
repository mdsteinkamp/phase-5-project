# Pantron 5000

The primary objective of Pantron was to enable a user to track all food related items in their kitchen, while facilitating recipe ingredient requirements and a database of recipes. The app leverages the PostgreSQL database to deploy to Render, with a React JS front end client and Ruby on Rails back end. Users can register, log on/off and add Ingredients to their Pantry home page. From the Pantry page the User can navigate to a list of Recipes, each of which can be selected and the User's Pantry queried for sufficient Recipe Ingredients. If insufficient, the necessary Ingredient and amount missing from the Pantry will be rendered to the User. There is also a link on the main Pantry page to query the database of Recipes and return a list of Recipes that the User's Pantry can accomodate. If a User makes a Recipe the application will update their Pantry with their new Ingredient amounts. 

## Getting Started

To get the project up and running in a Development environment, first clone to your local machine then install dependences. You'll need npm for the React JS related libraries. 

Install npm packages

`$ npm install`

Install Ruby version 3.2.2

`$ rvm install 3.2.2 --default`

Install Ruby bundler, Ruby on Rails and Gems

```
$ gem install bundler
$ gem install rails
$ bundle install
```

Install PostgreSQL to use the database adapter and start the database
If on WSL
```
$ sudo apt install postgresql postgresql-contrib libpq-dev
$ sudo service postgresql start
```

If on macOS
```
$ brew install postgresql
$ brew services start postgresql
```

### Installing

The app employs a Ruby on Rails ActionMailer to notify a User on account creation. The account and password for my implementation are hidden in ENV variables. If you wish you use this you will need to set up your own email account and set up necessary permissions. See /config/environments/development.rb and /config/environment/production.rb for their respective ActionMailer settings. 


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js v20.10.0](https://nodejs.org/en)
* [npm v10.2.3](https://www.npmjs.com/) - Javascript Dependency Management
* [React v18.2.0](https://react.dev/) - Front End Framework
* [Ruby v3.2.2](https://www.ruby-lang.org/en/)
* [Bundler v2.4.22](https://bundler.io/) - Ruby Dependency Management
* [Rails v7.1.2](https://rubyonrails.org/) - Back End Framework
* [PostgreSQL v12.16](https://www.postgresql.org/) - Database System

## Acknowledgments

* Many thanks go out my great cohort at the Flatiron School and the instructors who provided inspiration and (patient!) assistance throughout my studies!
