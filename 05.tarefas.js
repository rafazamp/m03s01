class Tarefa {
  constructor(titulo, descricao, estado) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.estado = estado;
  }
}

class GerenciarTarefa extends Tarefa {
  constructor(tarefa) {
    super(tarefa);
    this.tarefas = [];
  }

  listarTodasTarefas() {
    return this.tarefas;
  }

  listarTarefasPorEstado(estadoTarefa) {
    let tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.estado == estadoTarefa);
    return tarefasFiltradas;
  }

  adicionarTarefa(tarefa){
    this.tarefas.push(tarefa);
  }

  alteraEstadoTarefa(tarefa, estado) {
    for (var i in this.tarefas) {
      if (this.tarefas[i] == tarefa) {
        this.tarefas[i].estado = estado;
        return this.tarefas[i];
      }
    }
  }

}

// Testes
const gerenciarTarefa = new GerenciarTarefa();

const tarefa01 = new Tarefa("Tarefa 01", "Descrição da Tarefa", "A fazer");
gerenciarTarefa.adicionarTarefa(tarefa01);

const tarefa02 = new Tarefa("Tarefa 02", "Descrição da Tarefa 02", "Em andamento");
gerenciarTarefa.adicionarTarefa(tarefa02);

console.log("Tarefas na lista:", gerenciarTarefa.listarTodasTarefas());
console.log("Lista de Tarefas com o estado selecionado:", gerenciarTarefa.listarTarefasPorEstado("A fazer"));

console.log("Altera Estado:", gerenciarTarefa.alteraEstadoTarefa(tarefa02, "Concluída"));
