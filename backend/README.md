# Portfolio Backend

This is a tiny Express backend that provides a single `POST /contact` endpoint. It stores messages in MongoDB and (optionally) sends an email notification via SMTP.

Quick start

1. Copy `.env.example` to `.env` and fill in `MONGODB_URI` and SMTP settings (optional).

2. Install dependencies and run:

```bash
cd backend
npm install
npm run start
```

3. Send a POST request to `http://localhost:4000/contact` with JSON body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello!"
}
```

Responses

- `201` — created, body `{ id: "<mongo id>" }`
- `400` — validation error
- `500` — internal server error

Files

- `index.js` — main server
- `.env.example` — environment variables
