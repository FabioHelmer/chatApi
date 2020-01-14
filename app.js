//config servidor
const app = require("./config/server");
const io = require("socket.io")(server);

//port
var port = process.env.PORT || 3000;
var server = app.listen(port, () => {
  console.log("sevidor online port =" + port);
  console.log(
    "												 \n" +
      "												 \n" +
      "	 _____     _           _____                 \n" +
      "	|     |_ _| |_ ___ ___|   __|___ ___ ___ ___ \n" +
      "	|  |  | | |  _| -_|  _|__   | . | .'|  _| -_|\n" +
      "	|_____|___|_| |___|_| |_____|  _|__,|___|___|\n" +
      "	                            |_|              \n" +
      "                                                "
  );
});

io.listen(server);
app.set("io", io);

let messagens = [];

io.on("connection", socket => {
  console.log(socket.id);

  socket.emit("previuosMessage", messagens);

  socket.on("sendMessage", data => {
    messagens.push(data);
    socket.broadcast.emit("receivedMessage", data);
  });
});
