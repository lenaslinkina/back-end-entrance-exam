const express = require('express');
const router = express.Router();
const meowfactsController = require('../controllers/meowfactsController');

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: Операции с кешем
 */

/**
 * @swagger
 * /api/cache:
 *   get:
 *     summary: Получить список фактов о кошках
 *     tags: [Cache]
 *     responses:
 *       200:
 *         description: Список фактов о кошках
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 facts:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: Факт
 *               example:
 *                 facts: ["Cats sleep for 70% of their lives.", "A group of cats is called a clowder."]
 *       500:
 *         description: Ошибка при получении данных из внешнего API
 */
router.get('/', meowfactsController.getCache);

/**
 * @swagger
 * /api/cache:
 *   delete:
 *     summary: Очистить кеш
 *     tags: [Cache]
 *     responses:
 *       200:
 *         description: Кеш успешно очищен
 */
router.delete('/', meowfactsController.clearCache);

/**
 * @swagger
 * /api/cache:
 *   put:
 *     summary: Установить размер кеша
 *     description: Установить максимальное количество элементов, которое может быть сохранено в кеше.
 *     requestBody:
 *       description: Новый максимальный размер кеша
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               size:
 *                 type: integer
 *                 description: Максимальное количество элементов в кеше
 *                 example: 100
 *     responses:
 *       200:
 *         description: Размер кеша успешно установлен
 *       400:
 *         description: Неверный параметр размера
 *       500:
 *         description: Ошибка сервера
 */
router.put('/', meowfactsController.setCacheSize);


module.exports = router;
