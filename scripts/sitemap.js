import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';

const hostname = 'https://xedu.com.vn';

const routes = [
  {
    url: '/',
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.4
  },
  {
    url: '/about',
    changefreq: EnumChangefreq.YEARLY,
    priority: 0.1
  },
  {
    url: '/contact',
    changefreq: EnumChangefreq.YEARLY,
    priority: 0.1
  },
  {
    url: '/info',
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.1
  },
  {
    url: '/blogs',
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.1
  },
  {
    url: '/career',
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.1
  },
  {
    url: '/guide',
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.1
  }
];

const stream = new SitemapStream({ hostname });

streamToPromise(Readable.from(routes).pipe(stream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
});
