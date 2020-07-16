const getDummy = async () => {
  try {
    const result = {
      message: 'dummy',
    };
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDummy,
};
