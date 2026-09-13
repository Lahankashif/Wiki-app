import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js';
import { optionalAuthMiddleware } from '../middleware/optionalAuthMiddleware.js';
import { searchWikipedia ,getHistory,deleteHistoryItem,clearHistory} from '../controllers/searchControllers.js';

const router = express.Router()
router.post('/', optionalAuthMiddleware, searchWikipedia);
router.get('/history', authMiddleware,getHistory)
router.delete('/history/:id', authMiddleware, deleteHistoryItem)
router.delete('/history', authMiddleware, clearHistory)

export default router;