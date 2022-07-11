
# SunTzuAPI

An API that provides you with Sun Tzu quotes
## Acknowledgements
  
  - [sun-tzu-quotes](https://www.npmjs.com/package/sun-tzu-quotes) - The main library used in making of this API
## API Reference

#### Get All Quotes

```http
  GET /quotes
```
Returns an array of all the quotes


#### Get Quote By Id

```http
  GET /quote/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of quote to fetch |

Returns 200 and the quote of that ID if the ID is valid 
<br/>
Returns 404 if the ID is invalid
#### Get Random Quote
```http
  GET /quote
```
Returns a random quote


Also, dont forget to checkout the [Swagger Documentation](https://suntzuapi.herokuapp.com/api-docs/)
## Authors

- [@OneByte](https://www.github.com/OneByteGH)


## Run Locally

Clone the project

```bash
  git clone https://github.com/OneByteGH/SunTzuAPI
```

Go to the project directory

```bash
  cd SunTzuAPI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

