## Authentication

Users can register and log in using their username and password.

Passwords are hashed using bcrypt.

## Authorization

- Users must be authenticated to update or delete cats.
- Users can only update their own cats.
- Users can only delete their own cats.
- Users can only update their own information when logged in.
- Users can only delete themselves (eg. their own profile) when logged in.

### Authentication

- `POST /api/v1/auth/login` - Log in a user
- `GET /api/v1/auth/me` - Get the currently authenticated user
- These are currently in "tester.http"
