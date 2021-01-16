# auth-facebook

Adds Facebook OAuth authentication to your [Schnack](https://github.com/schn4ck/schnack) server.

## Usage

Add a `plugins.auth-facebook` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "auth-facebook": {
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
