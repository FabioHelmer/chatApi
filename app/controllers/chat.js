module.exports = (aplication, req, res) => {
  console.log(req);

  var dadosForm = req.body;
  console.log(dadosForm);

  req.assert("apelido", "Nome ou Apelido é obrigatorio").notEmpty();
  req
    .assert("apelido", "Nome ou Apelido deve conter entre 3 e 15 caracteres")
    .len(3, 15);

  var erros = req.validationErrors();
  if (erros) {
    res.render("index", { validacao: erros });
  } else {
    aplication.get("io").emit("conect", {
      apelido: dadosForm.apelido,
      message: " acabou de logar"
    });
    console.log(dadosForm.apelido + " se conectou");

    res.render("chat", { apelido: dadosForm.apelido });
  }
};
