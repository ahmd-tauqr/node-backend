const getHomePageData = (request, response, next) => {
  console.log(request.body);
  response.status(200).send({
    success: true,
    data: 'Home page data',
    error: null,
  });
};

const getDashboardPageData = (request, response, next) => {
  console.log(request.body);
  response.status(200).send({
    success: true,
    data: 'fetch dashboard page data',
    error: null,
  });
};

const getGreeting = (req, res, next) => {
  res.status(200).send(`Hello ${req.body.name}`);
};

module.exports = { getHomePageData, getDashboardPageData, getGreeting };
