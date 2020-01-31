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
        
        const slackBody = {
            mkdwn: true,
            test: `Jenkins`,
            color: 'red',
            text: `*Your Pipeline Failed* `,
            
            // attachments: people.map(person => ({
            //     color: 'good',
            //     text: `*${person.firstName} ${person.lastName}* is looking to go for pints. Contact them at ${person.email}`,
            // }))
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