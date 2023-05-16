import {TypeOrmModuleOptions} from '@nestjs/typeorm'; 

export default (): TypeOrmModuleOptions=> ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'nest',
    entities: [Event],
    synchronize: false,
})