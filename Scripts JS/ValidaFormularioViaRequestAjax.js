
      //esse código verifica o status da requisição ajax
      //e dispara as condições caso retorno seja: 4 (Operação Concluída)
      //Tipos de Retorno da requisção.
      
      // 0	UNSENT	Um cliente foi criado. Mas o método open()  não foi chamado ainda.
      // 1	OPENED	O método open() foi chamado.
      // 2	HEADERS_RECEIVED	o método send() foi chamado e os cabeçalhos e status estão disponíveis .
      // 3	LOADING	Baixando e responseText contem os dados parciais.
      // 4	DONE	Operação concluída.

      $(document).ajaxSuccess(function(event, xhr, settings) {
        console.log(
          "Triggered ajaxSuccess handler. The Ajax response was: " +
            xhr.readyState
        );
        if (xhr.readyState == "4") {
          var divconteudo = document.getElementsByClassName("alert-success")[0]
            .textContent; // insere a informação do alerta na variavel
          if (
            divconteudo ==
            "Mensagem enviada com sucesso, retornaremos em breve."
          ) {
            dataLayer.push({ event: "EnvioFormulario" });
            console.log("mensagem enviada com sucesso!!"); //imprime no console a informação de sucesso na operação
          } else {
            console.log("não envio");
          }
        }
      });
    

