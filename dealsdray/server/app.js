const express=require('express');
const app=express();

const admin=require('./routers/admin');

app.use(admin);

app.listen(8000)