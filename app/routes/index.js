module.exports = aplication => {
  aplication.get("/", (req, res) => {
    res.render("index", { validacao: {} });
    //  aplication.app.controllers.index.home(aplication, req, res);
  });
};
