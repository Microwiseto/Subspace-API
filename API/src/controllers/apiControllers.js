const apiServices = require("../services/apiServices");

async function getStats(req, res) {
    const stats = await apiServices.getStats();
    //const str = `Total number of blogs - ${stats.len} The title of the longest blog - ${stats.max_val} Number of blogs with "privacy" in the title - ${stats.count} An array of unique blog titles ${stats.unique}`;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(stats, null, 3));
};

async function getSearch(req, res) {
    const id = await req.query;
    try{
        const searchResult = await apiServices.getSearch(id);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(searchResult, null, 3));
    }catch(error){
        res.status(error?.status || 500).send({status: "Failed", data:  {error: error?.message || error}});
    }
}

module.exports = {
    getStats,
    getSearch,
};