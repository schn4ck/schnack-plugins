# schnack-plugin-auth-mastodon

Adds Mastodon OAuth authentication to your Schnack server.

## Usage

Add a `plugins.auth-mastodon` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "auth-mastodon": {
            "app_name": "XXX",
            "app_website": "XXX"
        }
    }
}
```

Then run

```
npm init schnack
```
