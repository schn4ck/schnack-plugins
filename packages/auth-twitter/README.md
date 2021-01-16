# auth-twitter

Adds Twitter OAuth authentication to your [Schnack](https://github.com/schn4ck/schnack) server.

## Usage

Add a `plugins.auth-twitter` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "auth-twitter": {
            "consumer_key": "xxxxx",
            "consumer_secret": "xxxxx"
        }
    }
}
```

Then run

```
npm init schnack
```

## Preparation

- Create a new OAuth App on [apps.twitter.com](https://apps.twitter.com/)
    - *Name*: the name of your blog
    - *Description*: the description of your blog
    - *Website*: the URL of your *schnack* instance (e.g. https://schnack.example.com)
    - *Callback URL*: the URL of your *schnack* instance followed by `/auth/twitter/callback` (e.g. https://schnack.example.com/auth/twitter/callback)
    - Check the checkbox "Allow this application to be used to Sign in with Twitter"
- Copy the Consumer Key and the Consumer Secret from "Keys and Access Tokens" to `plugins.auth-twitter.consumer_key` and `plugins.auth-twitter.consumer_secret` in `schnack.json`
