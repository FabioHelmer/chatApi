module.exports = aplication => {
  aplication.get("/", (req, res) => {
    res.render("index", { validacao: {} });
  });
};
