const request = require('request-promise');

const hook = 'TTB5LAL8M/BT2KMENQZ/epiLd86cg9CIGNKvJO54CdaJ';

(async function () {
    try{
        var d = new Date();
        const slackBody = {
            mkdwn: true,
            test: `Jenkins`,
            color: 'danger',
            text: `The submitted *pipeline failed* at ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };

        //slackpost
        const res = await request({
            url: `https://hooks.slack.com/services/${hook}`,
            method: 'POST',
            body: slackBody,
            json : true
        });
    } catch(e)
    {
        console.log('error', e);
    }
})();