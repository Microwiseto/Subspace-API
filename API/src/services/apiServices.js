const api = require("../database/api");

async function getStats() {
    const stats = await api.getStats();
    return stats;
};

async function getSearch (id) {
  try{
    const searchResult = api.getSearch(id);
    return searchResult;
  }catch(error){
    throw error;
  }
};

module.exports = {
  getStats,
  getSearch,
};