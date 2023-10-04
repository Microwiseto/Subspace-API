const _ = require('lodash');

async function foo() {
    let obj;
    const res = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        },
    })

    obj = await res.json();
    let d = obj.blogs;
    let len = _.size(d);
    console.log(`Number of Blogs ${len}`);
    let titles = [];
    titles.push(...d.map(i => i.title));
    let max_val = titles.reduce((a,b) => _.size(a) > _.size(b) ? a : b);
    console.log(max_val);
    let count = 0;
    titles.forEach((o) => {
        let str = _.toLower(o);
        if(_.includes(str, 'privacy') === true)
            count++;
    })
    console.log(count);
    let unique = _.uniq(titles);
    const data = { len, max_val, count, unique} 
    return data;
}

async function bar(id) {
    let obj;
    const res = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        },
    })

    obj = await res.json();
    let d = obj.blogs;
    let titles = [];
    titles.push(...d.map(i => i.title));
    if(id.query){
        return titles.filter((o) => o.toLowerCase().includes(id.query));
    }
}
async function getStats() {
    const data = await foo();
    return data;
};

async function getSearch(id) {
    const data = await bar(id);
    return data;
}

module.exports = {
    getStats,
    getSearch,
}


