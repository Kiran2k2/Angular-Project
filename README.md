-----Angular E-commerce Application
This project is an Angular-based e-commerce application that allows users to  log in, and log out using JWT-based authentication. The application integrates two separate APIs: a Product API for managing product-related actions and a Cart API for managing the shopping cart.
 
Features
Authentication
 
User registration and login using JWT authentication.

for login    AS AUTHENTICATED BY API------- 

 Username:emilys;
--password:emilyspass

used authgaurd without login by url also cantnot move to the any page by canactive and authguard feauture

and after login it will show the userid and details at username on navbar- username



Secure logout functionality.
 
Product Management
 
Fetch product data from the Product API.
Display products on the UI.
Perform CRUD operations on products.
View detailed information for each product.
 
Cart Management
Add products to the Cart API.
Display products on the UI.
Perform CRUD operations on products.
View detailed information for each product.
 
Technologies Used
Frontend: Angular
Authentication: JWT (JSON Web Token)
APIs: Product API and Cart API
Styling: CSS, bootstrap
 
 
Installation
To run this project locally, follow these steps:
 
Prerequisites
Node.js
Angular CLI
 
 
Steps
Clone the repository:
 
 
https://github.com/Kiran2k2/Angular-Project.git
cd angular-ecommerce-app
Install dependencies:
 
 
npm install
Set up environment variables:
 
Create an environment.ts file inside src/environments/.
Add your Product API and Cart API endpoints along with JWT configuration.
Start the application:
 
 
ng start
Open your browser and navigate to:
 
 
http://localhost:4200/
Usage
User Authentication:
 





 log with  
  username :emilys
  password:emilyspass    can visit- 'https://dummyjson.com/auth/login' for reference
 
JWT is used to secure your session in localstorage.
 
 if you already have an account will take you register page wich i used reactive form for both login and register
 
Products Api:
View the list of products fetched from the Product API. with paginatation
Perform CRUD operations (Create, Read, Update, Delete) on products on home page 
in navbar also have product cetagories where also we can view products 

Click on a product to view detals its give  detailed information. and we can update/edit the value there 
delete button will delete the item 
add product create new product at last 

Perform CRUD operations on items in the Addtocart (e.g., update quantity, remove item).
 
Cart Api:
by Click all-Cartlist present in navbar wil 
View the list of products fetched from the Cart API.
Perform CRUD operations (Create, Read, Update, Delete) on Cart products.
Click on a product to view its detailed information of each cart 

by clicking update product in cartlist we can update value.
Perform CRUD operations on items in the Addtocart (e.g., update quantity, remove item).

Ag Grid:
create a different view with AG-GRID 
Present in Navbar Username dropdown -AG-Grid 
filter pagination delete edit add

 
Project Structure
src/app/: Contains all Angular components, services, and modules.
components/: Login, Signup, Product List, Product Details, Cart, etc.
services/: Auth service, Product service, Cart service, etc.
models/: Interfaces for user, product, and cart items.
 
Dependencies
Angular: Framework for building the front-end.
Angular Router: To navigate between different pages.
HTTP Client: For API requests.
 
 
Contact
If you have any questions,please feel free to reach out:
Email:kiranjena214@gmail.com








<!-- # AngularEcomm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page. -->
