var url = {
  protocol: 'https',
  domain: 'www.github/Efend1.com',
  path: '/',
  
  getUrl: function(){
    return url.protocol + '://' + url.domain + url.path;
  }
   
};

url.getUrl();
console.log(url);

var nama = "Efendi";
console.log(nama);