var Github = require('github-client');

var gh = Github.new({
  username: "rotemberger",
  token: "97d06895385f8bf4d5289653f87c0ce79d77b249"
});

var repo = gh.getRepo('rotemberger', 'authtest');

repo.getBranches().then(function(){})