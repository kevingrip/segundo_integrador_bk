import * as url from 'url';

const config = {
    SERVER: 'atlas',
    PORT: 8080,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/img`},
    mongoDB_Local: 'mongodb://127.0.0.1:27017/practica',
    mongoDB_Atlas: 'mongodb+srv://backendCoder:coder2024@proyectocoder.hnxdqo9.mongodb.net/ecommerce',
    SECRET: 'practicaCoder',
    GITHUB_CLIENT_ID: 'Iv23liUoNjhhlsDaUQqF',
    GITHUB_CLIENT_SECRET: 'cac23d9bedf323b40686efb00c1e52369e2614cf',
    GITHUB_CALLBACK_URL: 'http://localhost:8080/api/sessions/githublogin'
};

export default config;