module.exports = aplication => {
  aplication.post("/chat", (req, res) => {
    console.log(aplication.controllers.chat);
    console.log("-----------------------------");
    console.log(aplication.controllers);
    aplication.controllers.Chat.get("chat_init")(aplication, req, res);
    console.log(aplication.app.controllers);
  });
  aplication.get("/chat", (req, res) => {
    aplication.controllers.chat.chat_init(aplication, req, res);
  });
};
