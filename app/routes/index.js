module.exports = aplication => {
  aplication.get("/", (req, res) => {
    aplication.app.controllers.index.home(aplication, req, res);
  });
};
