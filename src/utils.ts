import { Client } from 'pg';

export async function getClient() {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'rizon',
        database: 'users'
    });
    await client.connect();
    return client;
}