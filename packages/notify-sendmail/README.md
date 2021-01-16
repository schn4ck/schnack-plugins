# notify-sendmail

If you configure the plugin `notify-sendmail` *schnack* will use your web servers `sendmail` program to send an email to you every time a comment is awaiting your approval. Note that you may need to [configure sendmail on your server](https://duckduckgo.com/?q=configure+sendmail&) before this is working.

## Usage

Add a `plugins.notify-sendmail` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "notify-sendmail": {
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