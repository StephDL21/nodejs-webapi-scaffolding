const { dummyService } = require('../services/index.service');

const get = async (req, res, next) => {
  try {
    const response = await dummyService.getDummy();
    return res.status(200).json({
      ok: true,
      data: response,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  get,
};
