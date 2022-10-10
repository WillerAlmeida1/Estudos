class Produto {
  constructor() {

    this.id = 1;
    this.arrayProdutos = []
    
  }
  salvar(){
    let produto = this.lerDados();

    if(this.validaCampos(produto) == true){
      alert('salvar')
    }
    console.log(produto)
  }

  lerDados(){
    let produto = {}

    produto.id = this.id
    produto.nomeDoProduto = document.getElementById('produto').value;
    produto.preco = document.getElementById('preco').value;

    return produto;
  }

  validaCampos(){
    let msg = '';

    if(produto.nomeDoProduto == ''){
      msg += 'Informe o Nome do Produto! \n'
    }

    if(produto.preco == ''){
      msg += 'Informe o Preço do Produto! \n'
    }

    if(msg != ''){
      alert(msg);
      return false
    }
    return true;
  }

  cancelar(){
 
  }
}

var produto = new Produto()
