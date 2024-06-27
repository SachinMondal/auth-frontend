# Authentication

it is a simple authentication website where user have the functionality of Register, Login and after that successful login he/she will be redirected to his particular page i.e. Profile page.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Routes](#routes)
5. [Contributing](#contributing)
7. [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SachinMondal/suth-frontend.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add necessary environment variables. See `.env.example` for reference.

## Usage

To start the server, run:

```bash
npm start
```

The server will start at `http://localhost:3000` by default (or specify your preferred port in `.env`).

## Configuration

- **Environment Variables:**
  - `PORT`: Port number for the server (default: 3000)
  - Other variables specific to your project (e.g., database URI, API keys)


## Routes

Describe the available API routes and endpoints of your application.

### Example:

- `POST /api/v1/register`: Page for registering new User.
- `POST /api/v1/login`: Page for Login for the existing User.
- `GET /api/v1/user`: Profile page for the logged in User.

## Contributing

Feel free to fork this repository, submit pull requests, and report issues.

## License

This project is licensed under the [License Name] License - see the [LICENSE](LICENSE) file for details.

