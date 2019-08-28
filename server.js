import express from 'express';
import hbs from 'hbs';
import morgan from 'morgan';

import {
  gatherFiles,
  hbsTableListing,
} from './utils/file-listing';

// init
const app = express();
const port = 3000;

// register middleware
app.set('view engine', hbs);
app.use(morgan('combined'));

// register hbs helper
hbs.registerHelper('list', hbsTableListing);
hbs.registerPartials(`${__dirname}/views/partials`);

// static dir for files
app.use('/files', express.static(`${__dirname}/files`));

// public dir
app.use(express.static(`${__dirname}/public`));

// replace anonymous with your preferred name
app.get('/', (req, res) => {
  const path = 'files';
  gatherFiles(path)
    .then((files) => {
      res.render('index.hbs', {
        files,
        title: 'Local File Server',
      });
    }).catch((err) => {
      res.render('bad.hbs', {
        err,
        title: 'Local File Server',
      });
    });
});

app.get('/status', (req, res) => {
  res.status(200).send({
    status: 'OK',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running @ PORT :: ${port}`);
});

// export for testing
export default app;
