importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
assetCachingOptions: [{
regexp: /\.(png|jpg|webp|svg)/,
cachingStrategy: 'CACHE_FIRST'
}],
offlinePageOptions: {
url: 'https://www.governorbarbour.com/offline.html',
assets: []
}
});