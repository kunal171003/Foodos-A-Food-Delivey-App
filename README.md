# Foodos Monorepo

A food delivery app with three packages:
- `backend`: Express + MongoDB API
- `frontend`: Vite + React client
- `admin1`: Vite + React admin panel

## Safe Setup

Do NOT commit real secrets. Use `.env` only locally; `.env` is ignored by Git.

### Backend env
See `backend/.env.example`. Copy it to `backend/.env` and fill values:
- `PORT=4000`
- `MONGO_URI=<your-mongodb-connection-uri>`
- `JWT_SECRET=<your-jwt-secret>`
- `STRIPE_SECRET_KEY=<your-stripe-secret-key>`

### Frontend env (optional)
See `frontend/.env.example`. Copy to `frontend/.env` and set:
- `VITE_API_URL=http://localhost:4000`

## Run Locally

From `backend`:
```bash
npm install
npm run start
```

From `frontend` and `admin1`:
```bash
npm install
npm run dev
```

## Notes
- Database URI is read from `MONGO_URI` (see `backend/config/db.js`).
- Uploaded assets folder `uploads/` is ignored by Git.
- Example env files are committed; real `.env` files are not.
