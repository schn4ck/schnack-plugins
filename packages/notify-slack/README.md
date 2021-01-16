# notify-slack

*schnack* can send a message to a Slack channel when a new comment is awaiting for approval. In order to configure this service just create a slack [webhook](https://api.slack.com/incoming-webhooks) and paste its URL to `notify.slack.webhook_url` in `schnack.json`.

## Usage

Add a `plugins.notify-slack` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "notify-slack": {
            "webhook_url": "https://hooks.slack.com/services/xxxxxx"
        }
    }
}
```

Then run

```
npm init schnack
```