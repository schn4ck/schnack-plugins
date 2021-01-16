# notify-mailgun

If you configure the plugin `notify-mailgun` *schnack* will use [mailgun](https://www.mailgun.com/) to send an email to you every time a comment is awaiting your approval.

## Usage

Add a `plugins.notify-sendmail` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "notify-mailgun": {
            "api_key": "xxxxx",
            "domain": "example.com",
            "to": "your-email@example.com",
            "from": "schnack@blog.example.com"
        }
    }
}
```

Then run

```
npm init schnack
```

## Credits

This integration was contributed by [@leviwheatcroft](https://github.com/leviwheatcroft)