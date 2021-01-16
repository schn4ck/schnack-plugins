const mailgun = require('mailgun-js');

module.exports = ({ config, host, app, events }) => {
    return {
        notify({ page_url }) {
            const client = mailgun({
                apiKey: config.api_key,
                domain: config.domain
            });

            events.on('new-comment', event => {
                const postUrl = config.get('page_url').replace('%SLUG%', event.slug);
                const user = event.user.display_name || event.user.name;
                const from = `${user} <${config.from}>`;
                const to = `Schnack Admin <${config.to}>`;
                const subject = `New comment: ${postUrl}`;
                const text = `
      New comment on your post ${postUrl}
      Author: ${user}
      ${event.comment}
      You can see all comments on this post here:
      ${postUrl}#comments
      Permalink: ${postUrl}#comment-${event.id}
      `
                    .split(/\n/)
                    .join('\r\n')
                    .trim();
                client.messages().send({ from, to, subject, text }, function(err, body) {
                    console.error(err);
                });
            });
        }
    };
};
