# auth-google

Adds Google OAuth authentication to your [Schnack](https://github.com/schn4ck/schnack) server.

## Usage

Add a `plugins.auth-google` section to your Schnack config file `schnack.json`:

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

## How to get `client_id` and `client_secret`

### Google

- Head to [console.developers.google.com](https://console.developers.google.com)
- create project
    - `My Project` (top left) > `new project`
    - *Project Name*: the name of your blog
    - *Location*: Optional (`No organisation` is ok)
    - create
- switch to new project
- library (on the left)
    - search for `google+ api`
    - enable
- credentials (on the left)
- OAuth Consent Screen tab
    - *Application Name*: the name of your blog
    - *Support Email*
    - *Authorized domains*: add your primary domain (`https://example.com` not `https://schnack.example.com`)
    - *Application Homepage link*: your front page
    - other fields appear to be optional
- create credentials > OAuth Client ID
    - *Application Type*: Web application
    - *Name*: the name of your blog
    - *Authorized JavaScript Origins*: primary domain
    - other fields appear to be optional
- note warning:

> OAuth is limited to 100 sensitive scope logins until the OAuth consent screen is published. This may require a verification process that can take several days.

