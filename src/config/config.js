import dotenv from 'dotenv';

dotenv.config();
if(!process.env.mongo_uri){
    throw new Error("mongo_uri not defined");
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET not defined in env");
}
if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE_CLEINT_ID not defined in env");
}
if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("GOOGLE_CLEINT_SECRET not defined in env");
}
if(!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("GOOGLE_REFRESH_TOKEN not defined in env");
}
if(!process.env.GOOGLE_USER){
    throw new Error("GOOGLE_USER not defined in env");
}

const config = {
    mongo_uri: process.env.mongo_uri,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN :process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER : process.env.GOOGLE_USER
}

export default config;