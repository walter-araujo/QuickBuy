
import { Component } from "@angular/core"

@Component({
  "selector": "produto",
  "template": "<html><body>{{ obterNome() }}</body></html>"
})

export class ProdutoComponent {
  
  public nome: string;
  public liberadoParaVenda: boolean;
  preco: number;

  public obterNome(): string {
    //return this.nome;
    return "Walter - Testes";
  }

}
