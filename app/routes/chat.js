module.exports = aplication => {
  aplication.post("/chat", (req, res) => {
    aplication.app.controllers.chat.iniChat(aplication, req, res);
  });
  aplication.get("/chat", (req, res) => {
    aplication.app.controllers.chat.iniChat(aplication, req, res);
  });
};
