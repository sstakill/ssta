import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 666,
  name: 'SSTA',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/sstakill/subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
