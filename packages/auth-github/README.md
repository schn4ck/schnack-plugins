# auth-github

Adds GitHub OAuth authentication to your [Schnack](https://github.com/schn4ck/schnack) server.

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

## Preparation

- Create a new GitHub [OAuth App](https://github.com/settings/applications/new)
    - *Application name*: the name of your blog
    - *Homepage URL*: the URL of your *schnack* instance (e.g. https://schnack.example.com)
    - *Application description*: the description of your blog
    - *Authorization callack URL*: the URL of your *schnack* instance followed by `/auth/github/callback` (e.g. https://schnack.example.com/auth/github/callback)
