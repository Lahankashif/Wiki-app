import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js';
import { searchWikipedia ,getHistory,deleteHistoryItem,clearHistory} from '../controllers/searchControllers.js';

const router = express.Router()
router.post('/', authMiddleware,searchWikipedia);
router.get('/history', authMiddleware,getHistory)
router.delete('/history/:id', authMiddleware, deleteHistoryItem)
router.delete('/history', authMiddleware, clearHistory)

export default router;