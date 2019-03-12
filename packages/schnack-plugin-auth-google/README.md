# schnack-plugin-auth-google

Adds Google OAuth authentication to your Schnack server.

## Usage

Add a `plugins.plugins-google` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "auth-google": {
            "client_id": "XXX",
            "client_secret": "XXX"
        }
    }
}
```

Then run

```
npm init schnack
```
