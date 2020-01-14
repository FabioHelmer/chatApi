module.exports = aplication => {
  aplication.post("/chat", (req, res) => {
    aplication.controllers.chat(aplication, req, res);
  });
  aplication.get("/chat", (req, res) => {
    aplication.controllers.chat.chat_init(aplication, req, res);
  });
};
