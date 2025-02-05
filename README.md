# Node.JS REST API Starter Kit
## Getting started

This project provides a skeleton for any further RESTful API development. It implements the **3 Layer Architecture**, which are Controller, Service Layer and Data Access Layer.

<p align="center"> <img src="https://i.imgur.com/Qc1evoH.png" width="400" height="450" align="center"> </p>

**Controller** will handle all stuffs related to requests and responses that are routed by *Router*. It will then call **Service Layer** methods which storing all business logic. The **Data Access Layer** will perform some operations on the database.

## Features

- **Swagger** integrated using `swagger-ui-express` and `swagger-jsdoc`
- **Authentication and Authorization:** Bearer JWT Token
- **No-SQL Database:** [MongoDB](https://www.mongodb.com/) (can be installed locally or using a cloud version of [*MongoDB Atlas*](https://www.mongodb.com/atlas))
- **Validation:** [Ajv](https://ajv.js.org/) JSON schema validator
- **Loging:** [Morgan](https://www.npmjs.com/package/morgan)
- **Testing:** Unit Testing with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- **CORS** configuration.
- **Light-weight**
- **CI/CD:** Github Action
- **Linting:**  [Eslint](https://eslint.org/).
- **Error Handling:** centralized error handling mechanism
- **Code Quality:** [Codacy](https://www.codacy.com/)

## Environment Requirements

- Node.js **8+**
- MongoDB **5.0**

## How to install

### Using Git (recommended)

1. Clone the project

```bash
git clone https://github.com/lquyet/rest-api.git ./myproject
```

### Using manual download ZIP

1. Download repository
2. Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1. You will find a file named `.env.example` on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just `.env`

    ```bash
    cp .env.example .env
    ```

3. Set the appropriate value for your environment variables.

4. Go to `swagger.js` in the root folder for configuration

5. Visit the `routes` folder for the `JsDoc` sample.

## Project structure

```text
rest-api
├─ .eslintrc.json
├─ .github
│  └─ workflows
│     ├─ codeql.yml
│     └─ node.js.yml
├─ .gitignore
├─ app.js
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   └─ v1
      ├─ authentication
      │  ├─ checkAuth.js
      │  └─ jwt.js
      ├─ controllers
      │  ├─ productController.js
      │  ├─ userController.js
      │  └─ validators
      │     ├─ productValidator.js
      │     └─ userValidator.js
      ├─ database
      │  ├─ models
      │  │  ├─ productModel.js
      │  │  └─ userModel.js
      │  ├─ product.js
      │  └─ user.js
      ├─ routes
      │  ├─ productRoutes.js
      │  └─ userRoutes.js
      ├─ services
      │  ├─ productService.js
      │  └─ userService.js
      └─ test
         ├─ authTest.js
         ├─ config.js
         ├─ productTest.js
         └─ utilityTest.js
```

## How to run

### Running API server locally

```bash
npm start
```

## Tests

### Running Test Cases

```bash
npm test
```

## ESLint

### Running Eslint

```bash
npm run lint
```

### Automatically Fix Eslint error(s)

```bash
npm run fix-lint
```

Custom rules for eslint can be found at `.eslintrc.json`.

## Bugs or improvements

Feel free to report any bugs or improvements by setting a new Issue or Pull request.

## License

This project is open-sourced software licensed under the MIT License.
