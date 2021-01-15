# schnack-plugin-auth-github

Adds GitHub OAuth authentication to your Schnack server.

## Usage

Add a `plugins.auth-github` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "auth-github": {
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
