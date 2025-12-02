# BookmarkHub Waitlist Server

Backend server for the BookmarkHub waitlist system, built with Express, Prisma 7, and **Prisma Postgres** (cloud database).

## Features

- 📧 Email collection with validation
- 🔔 Instant email notifications via Resend when new users join
- 📊 Automatic waitlist position tracking
- 🛡️ Duplicate email prevention
- 📈 Metadata capture (user agent, referrer, IP)
- ☁️ **Prisma Postgres** cloud database (already configured!)

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables (Optional)

The database is **already configured** with Prisma Postgres!

If you want to add Resend for email notifications, edit `.env`:

```env
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY="re_xxxxxxxxxx"
```

### 3. Generate Prisma Client

```bash
npm run db:generate
```

### 4. Start the Server

```bash
# Development (with hot reload)
npm run dev

# Production
npm run build
npm run start
```

## API Endpoints

### POST /api/waitlist
Add a new email to the waitlist.

**Request:**
```json
{
  "email": "user@example.com",
  "source": "hero"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Successfully joined the waitlist!",
  "position": 248
}
```

**Response (Duplicate - 409):**
```json
{
  "success": false,
  "error": "This email is already on the waitlist!"
}
```

### GET /api/waitlist/count
Get the current waitlist count.

**Response:**
```json
{
  "count": 247
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T12:00:00.000Z"
}
```

## Database Schema

The `waitlist_entries` table stores:

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Primary key |
| email | String | User email (unique) |
| source | String | Signup source (hero, cta, etc.) |
| user_agent | String | Browser info |
| referrer | String | Referring URL |
| ip_address | String | User IP |
| created_at | DateTime | Signup timestamp |

## Resend Email Setup

1. Create an account at [resend.com](https://resend.com)
2. Go to API Keys and create a new key
3. Add the key to your `.env` file as `RESEND_API_KEY`

**Note:** With the free tier, you can only send to your own email for testing.
For production, you'll need to verify a domain.

## Production Deployment

For production, ensure you:

1. Use a managed PostgreSQL service (e.g., Railway, Supabase, Neon)
2. Set `NODE_ENV=production`
3. Update `CORS_ORIGIN` to your production frontend URL
4. Use proper Resend domain verification for sending emails

