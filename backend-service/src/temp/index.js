const { sendMail } = require('./sendmail')
const phin = require('phin');

const services = [
    {
        name: 'Kuzzle service',
        url: `http://nexus-backend-kuzzle-1:7512`,
    },
    {
        name: 'admin service',
        url: `http://nexus-backend-admin-service-1:3001/api/healthcheck`,
    },
    {
        name: 'audit service',
        url: `http://nexus-backend-audit-service-1:6002/api/healthcheck`,
    },
    {
        name: 'backend service',
        url: `http://nexus-backend-backend-service-1:3000/api/healthcheck`,
    },
    {
        name: 'logviewer service',
        url: `http://nexus-backend-logviewer-1:8090`,
    },
    {
        name: 'mongo-express service',
        url: `http://nexus-backend-mongo-express-1:8081`,
    },
    {
        name: 'Rabbitmq service',
        url: `http://nexus-backend-rabbit-node-1-1:15672`,
    },
    {
        name: 'nexus-webserver',
        url: `http://nexus-backend-nexus-web-server-1:11000`,
    },
    {
        name: 'nexus-nginx service',
        url: `http://nexus-backend-nginx-1:10000`,
    },
    // {
    //     name: 'nexus-mongo service',
    //     url: `http://nexus-backend-mongonex-1:30001`,
    // }
];

async function checkServices(service) {
    try {
        const response = await phin(service.url);
        if (response.statusCode === 200) {
            console.log(`${service.name} running properly`);
            return true;
        }
    } catch (error) {
        console.log("The Error message is:", error.message);
        return false;
    }
}

let count = 0;
setInterval(async () => {
    if (count >= services.length)
        count = 0;
    const isServiceRunning = await checkServices(services[count]);
    if (!isServiceRunning) {
        // sendMail(services[count].name);
        console.log("Email sent for :", services[count].name);
    }
    count += 1;
}, 5000);