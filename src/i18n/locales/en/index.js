import { deepMerge } from '../../merge.js';
import { en as legacyEn } from '../en.js';
import { nav, footer, seo } from './common.js';
import { components } from './components.js';
import { productsDetail } from './products.js';
import { pricing } from './pricing.js';
import { compare } from './compare.js';
import { contact } from './contact.js';
import { users } from './users.js';
import { company } from './company.js';
import { gic } from './gic.js';
import { landing } from './landing.js';
import { homeExtended } from './homeExtended.js';
import { whoAreYou } from './whoAreYou.js';
import { news } from './news.js';
import { legal } from './legal.js';
import { launch } from './launch.js';
import { essen } from './essen.js';
import { guides } from './guides.js';

export const en = deepMerge(legacyEn, {
  nav,
  footer,
  seo,
  components,
  products: { detail: productsDetail },
  pricing,
  compare,
  contact,
  users,
  company,
  gic,
  landing,
  homeExtended,
  whoAreYou,
  news,
  legal,
  launch,
  essen,
  guides,
});
