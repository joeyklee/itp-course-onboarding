# itpcourses



>

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/itpcourses; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## project specific Setup

### Generate a rest service for the courses
```
$ feathers generate service
? What kind of service is it? Mongoose
? What is the name of the service? courses
? Which path should the service be registered on? /courses
? What is the database connection string? mongodb://localhost:27017/itpcourses
```

### Generate the authentication
```
$ feathers generate authentication
? What authentication providers do you want to use? Other PassportJS strategies not in
 this list can still be configured manually. Username + Password (Local)
? What is the name of the user (entity) service? users
? What kind of service is it? Mongoose
```



## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
