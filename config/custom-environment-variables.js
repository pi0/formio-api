/* eslint-disable camelcase */

module.exports = {
    port: 'PORT',
    appPort: 'APP_PORT',
    host: 'HOST',
    protocol: 'PROTOCOL',
    domain: 'DOMAIN',
    basePath: 'BASE_PATH',
    mongo: 'MONGO_URI',
    mongoSecret: 'MONGO_SECRET',
    jwt: {
        secret: 'JWT_SECRET',
        expireTime: 'JWT_EXPIRE_TIME',
    },
    email: {
        type: 'EMAIL_TYPE',
        username: 'EMAIL_USERNAME',
        password: 'EMAIL_PASSWORD',
    },
    settings: {
        office365: {
            tenant: 'OFFICE365_TENANT',
            clientId: 'OFFICE365_CLIENT_ID',
            email: 'OFFICE365_EMAIL',
            cert: 'OFFICE365_CERT',
            thumbprint: 'OFFICE365_THUMBPRINT',
        },
        database: {
            mysql: {
                host: 'DATABASE_MYSQL_HOST',
                port: 'DATABASE_MYSQL_PORT',
                database: 'DATABASE_MYSQL_DATABASE',
                user: 'DATABASE_MYSQL_USER',
                password: 'DATABASE_MYSQL_PASSWORD',
            },
            mssql: {
                host: 'DATABASE_MSSQL_HOST',
                port: 'DATABASE_MSSQL_PORT',
                database: 'DATABASE_MSSQL_DATABASE',
                user: 'DATABASE_MSSQL_USER',
                password: 'DATABASE_MSSQL_PASSWORD',
            },
        },
        email: {
            gmail: {
                auth: {
                    user: 'EMAIL_GMAIL_USER',
                    pass: 'EMAIL_GMAIL_PASS',
                },
            },
            sendgrid: {
                auth: {
                    api_user: 'EMAIL_SENDGRID_API_USER',
                    api_key: 'EMAIL_SENDGRID_API_KEY',
                },
            },
            mandrill: {
                auth: {
                    apiKey: 'EMAIL_MANDRILL_API_KEY',
                },
            },
        },
    },
};
