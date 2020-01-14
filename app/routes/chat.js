module.exports = aplication => {
  aplication.post("/chat", (req, res) => {
    aplication.app.controllers.Chat.chat_init(aplication, req, res);
    console.log(aplication.app.controllers);
  });
  aplication.get("/chat", (req, res) => {
    aplication.controllers.chat.chat_init(aplication, req, res);
  });
};
