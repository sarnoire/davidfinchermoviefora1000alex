# Social Network API

Module 18: NoSQL 
Challenge: Social Network API

This API allows users to share their thoughts, react to others' thoughts, and create friend lists.

## API Endpoints

### `GET /thoughts`

Retrieves all thoughts.

### `POST /thoughts`

Creates a new thought.

### `GET /thoughts/{id}`

Retrieves a single thought by ID.

### `PUT /thoughts/{id}`

Updates a single thought by ID.

### `DELETE /thoughts/{id}`

Deletes a single thought by ID.

## Data Models

### Thought

```json
{
  "id": "string",
  "thoughtText": "string",
  "createdAt": "string",
  "username": "string",
  "reactions": [
    {
      "reactionBody": "string",
      "username": "string",
      "createdAt": "string"
    }
  ]
}
```

### Reaction

```json
{
  "reactionBody": "string",
  "username": "string",
  "createdAt": "string"
}
```

## Getting Started

### Prerequisites

- Node.js v14 or higher
- MongoDB database

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/social-network-api.git
   ```
2. Install dependencies
   ```
   cd social-network-api
   npm install
   ```
3. Set up environment variables
   Copy the `.env.example` file to `.env` and update the values to match your configuration.
4. Start the server
   ```
   npm start
   ```
   The server should now be running at http://localhost:3001.


## Resources
### Documentation Links:
- [RESTful API Design](https://restfulapi.net/)
- [OpenAPI (formerly Swagger) Specification](https://swagger.io/specification/)
- [JSON Schema](https://json-schema.org/)
- [Express.js (Node.js web framework)](https://expressjs.com/)
- [Insomnia (API development and testing tool)](https://insomnia.rest/)
- [Request-Response The Full-Stack Blog: Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

### Project Links:
- [davidfinchermoviefor1000alex Repository](https://github.com/sarnoire/davidfinchermoviefora1000alex)
- [Demonstration Video](https://drive.google.com/file/d/1Kayb4TfbYf-N6tjg_KM8UFFH7lBoj9YP/view)