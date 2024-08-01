const CacheMeowFacts = require('../cacheMeowFacts');
const axios = require('axios');

const cacheMeowFacts = new CacheMeowFacts(100); 

exports.getCache = async (req, res) => {
  let facts = cacheMeowFacts.get();

  if (!facts || facts.length === 0) {
    try {
      const response = await axios.get(`https://meowfacts.herokuapp.com/?count=100`);
      facts = response.data.data;
      cacheMeowFacts.set(facts);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch API' });
    }
  }
  res.json({cache: cacheMeowFacts.cache });
};

exports.clearCache = (req, res) => {
  cacheMeowFacts.clear();
  res.status(200).send('Cache cleared');
};

exports.setCacheSize = (req, res) => {
  const { size } = req.body;
  if (typeof size === 'number' && size > 0) {
    cacheMeowFacts.setMaxSize(size);
    res.status(200).send(`Cache size set to ${size}`);
  } else {
    res.status(400).send('Invalid size');
  }
};
