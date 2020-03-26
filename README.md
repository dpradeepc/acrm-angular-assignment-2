# JackSparrow Assignment

You are consulted to write a program to help Jack sparrow. There are 2 web pages - Control room and Submarines.

One web page - Jack Sparrow's Control Room
- Understand Pubnub. You can register for free. Basically, its a communication platform where clients can listen on a channel and other clients can send or receive updates.
- Write client code which listens for submarines to register. You can use pubnub to listen on a channel and sniff for join and leave events.
- Check if the name is already taken while a submarine registers in the backbone list. The client should be sent an error to reregister with a proper name. Otherwise, it should be added to the list (backbone)
- For each submarine registered, it should show hide button which when clicked will send a message to submarine to hide
- If a submarine hides itself, it should be disabled from the list.

Second Web page for submarines
- Submarines (new web pages) can register with Jack Sparrow. Web page should take name of the ship (as alphanumeric input with proper validation) and register option. If the name is already registered with Jack Sparrow, Jack Sparrow sends an invalid signal. You should show an error.
- Show status of the submarine (default is shown). When it receives a command from the server, it hides itself by updating the status.
- Submarine can also hide itself while it is undergoing maintenance. A button to hide should be shown. It will then remove from the Jack sparrow's list.

If you cannot complete it fully, it's ok. Send what you could. Sometimes, the approach should make more sense.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
