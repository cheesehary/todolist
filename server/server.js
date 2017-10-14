import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, '../dist'));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());

app.use('/api', router);

app.get('*', (req, res) => {
  res.render('index.html');
});

app.listen(8080, () => console.log('app listening on port 8080'));


