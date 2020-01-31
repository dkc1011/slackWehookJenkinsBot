const request = require('request-promise');

const hook = 'TTB5LAL8M/BT2KMENQZ/epiLd86cg9CIGNKvJO54CdaJ';

const getData = async function()
{
    const json = await request( { 
        url: 'https://next.json-generator.com/api/json/get/Eys6SRn-_',
        json: true
    });
    return json.map(person => ({
        age: person.age,
        email: person.email,
        firstName: person.name.first,
        lastName: person.name.last

    }))
};

(async function () {
    try{
        const people = await getData();
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

        console.log(res);

    } catch(e)
    {
        console.log('error', e);
    }

    debugger;
})();