# auth-mastodon

Adds Mastodon OAuth authentication to your [Schnack](https://github.com/schn4ck/schnack) server.

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

## Preparation

- All you have to do is to define `app_name` and `app_website` in the `plugins.auth-mastodon` section of your `schnack.json`. Schnack will then create OAuth applications at Mastodon instances whenever a user tries to sign in (the users are asked to enter a Mastodon domain before signing in).