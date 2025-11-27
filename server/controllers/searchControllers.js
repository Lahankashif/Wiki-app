import axios from "axios";
import History from '../model/History.js'

export const searchWikipedia = async (req, res, next) => {
    try {
        const { query } = req.body

        if (!query) return res.status(400).json({ success: false, message: 'Query Required' })

        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                srsearch: query,
                format: 'json',
                srlimit: 10
            }
        })
        const results = response.data?.query?.search || []

        await History.create({
            user: req.user.id,
            query,
            resultsCount: results.length
        })
        res.json({ query, results })

    } catch (error) {
        next(error)

    }
}


export const getHistory = async(req,res,next)=>{
    try {
      console.log("req.user:", req.user);

    const list = await History.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
}


export const deleteHistoryItem = async (req, res, next) => {
  try {
    const item = await History.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'HISTORY NOT FOUND' });

    // Check against req.user.id (not _id)
    if (item.user.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await item.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (error) {
    next(error);
  }
};




export const clearHistory = async (req, res, next) => {
  try {
    await History.deleteMany({ user: req.user._id });
    res.json({ message: 'All history cleared' });
  } catch (err) {
    next(err);
  }
};