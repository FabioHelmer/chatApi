module.exports = aplication => {
  aplication.get("/", (req, res) => {
    aplication.app.controllers.index(aplication, req, res);
  });
};
