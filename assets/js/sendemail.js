function sendEmail(){
      var nome = $("input[name='nome']").val()
      var email = $("input[name='email']").val()
      var telefone = $("input[name='telefone']").val()
      var guardar = $("input[name='guardar']").val()

      Email.send(email,
      "atendimento@meudeposito.pro",
      "INTERESSE NO MEU DEPÓSITO - "+nome.toUpperCase(),
      "<b>"+nome.toUpperCase()+"</b><br/>"+email+"</b><br/>"+telefone+"</b><br/>"+guardar,
      {token: "85e626d8-319b-4dd9-8b9c-269b28ff28c8"});

      Email.send(email,
      "franklindias99@gmail.com",
      "INTERESSE NO MEU DEPÓSITO - "+nome.toUpperCase(),
      "<b>"+nome.toUpperCase()+"</b><br/>"+email+"</b><br/>"+telefone+"</b><br/>"+guardar,
      {token: "85e626d8-319b-4dd9-8b9c-269b28ff28c8"});

      swal("Obrigado pelo interesse!", "Em breve alguém de nossa equipe entrará em contato com você!", "success");

      var nome = $("input[name='nome']").val("")
      var email = $("input[name='email']").val("")
      var telefone = $("input[name='telefone']").val("")
      var guardar = $("input[name='guardar']").val("")

      return false
}
