# notify-pushover

[PushOver](https://pushover.net/) is a service to send notifications to your devices. You can use it to receive *schnack* notifications. In order to configure it you should first register for an account and download a [client](https://pushover.net/clients). Then you can create an app and copy the token and the key to `notify.pushover.app_token` and `notify.pushover.user_key` in `schnack.json`.

## Usage

Add a `plugins.notify-pushover` section to your Schnack config file `schnack.json`:

```json
{
    "plugins": {
        "notify-pushover": {
            "app_token": "xxxxx",
            "user_key": "xxxxx"
        }
    }
}
```

Then run

```
npm init schnack
```