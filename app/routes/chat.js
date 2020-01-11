module.exports = aplication => {
  aplication.post("/chat", (req, res) => {
    aplication.app.controllers.chat.chat(aplication, req, res);
  });
  aplication.get("/chat", (req, res) => {
    aplication.app.controllers.chat.chat(aplication, req, res);
  });
};
