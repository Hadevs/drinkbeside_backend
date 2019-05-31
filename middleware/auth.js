module.exports.authorize = async (req, res, next) => {
  const id = req.headers.id;
  const token = req.headers.token;
  const savedToken = await redis.get(id);
  if(token === savedToken && jwt.verify(token)) return next();
  return res.json({
    error: 'Ошибка доступа по токену, вы должны быть авторизованы',
    data: null
  });
};
