
### Metodologia

O material empírico apresentado no presente relatório é um protótipo de um portal WEB, constituido por uma interface intuitiva para o usuário; com uma abordagem direta, com o objetivo de fornecer serviços solicitados pelos entrevistados, atendendo as necessidades e suas particularidades.

Para as personas, criamos um grupo heterogêneo com o objetivo de usar um método de comparação levando em consideração as necessidades e limitações dos usuários.


### Relação de Ambientes de Trabalho

	
| Ambiente |  Plataforma  |Link de Acesso|
| ------------------- | ------------------- | ------------- |
|  Repositório de código fonte |  GitHub | https://github.com/NataliaGatti666/pmv-ads-2021-2-e2-proj-int-t5-saude-plus/edit/main/docs/03-Metodologia.md |
|  Documentos do projeto |  	Google Drive |
|  Projeto de Interface e  Wireframes| Figma| https://www.figma.com/file/iB8kp1jwRoVshgRvkr4t7l/Saude.Plus|
|  Gerenciamento do Projeto|	Github|	https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-1-e1-proj-web-t2-infosaude/projects/1 |


### Controle de Versão

A figura abaixo representa como funciona o trabalho simultâneo no mesmo projeto.

![Gitflow](https://user-images.githubusercontent.com/83511889/135725277-6c9cb10c-91ca-4195-afdd-011ccebc03e7.png)


    master: contém o nosso código de produção, todo o código que estamos desenvolvendo.
    develop: contém o código do nosso próximo deploy, conforme as features vão sendo finalizadas elas vão sendo juntadas nessa branch para posteriormente passarem por mais uma etapa antes de ser juntada com a master
    feature: são branches para o desenvolvimento de uma funcionalidade específica,essas branches são criadas sempre à partir da branch develop
    hotfix: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop
    release: tem uma confiança maior que a branch develop e que se encontra em nível de preparação para ser juntada com a master e com a develop (caso alguma coisa tenha sido modificada na branch em questão)

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida


##Gerenciamento de Projeto

### Divisão de Papéis
Srum Master: Natália Gatti
Product Owner: Richard
Desenvolvedores: Denison Amaral e Rafael 
Design: Rafael 

Para subdivisão do projeto a equipe está utilizando o Trello como demonstrado abaixo com a Figura 1.

![image](https://user-images.githubusercontent.com/83511889/135701413-d575d147-0d60-48a6-a1ec-e2ce20081cde.png)
Figura 1 - Trello utilizado pelo grupo.

Pode ser acessado pela Url a seguir: https://trello.com/b/7Te4Dhms/template-kanban

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas:

Em andamento: Todas as tarefas do grupo que estão em andamento pelos usuários.

Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todos os membros podem executar tarefas nestalista.

To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.

Design: São tarefas que realizam toda a pesquisa e desing do projeto.

Revisão de código: nesta lista são colocadas as tarefas que precisam passar por aprovação e testes.

### Processo
Product Backlog : Listamos os requisitos e suas devidas prioridades.
Sprint Backlog: Realizamos a listagem das próximas tarefas a serem realizadas.
Sprint: Com a Sprint podemos citar:
Daily Scrum ( Reuniões diárias com intergrantes do grupo- Duração 10 minutos.)
Sprint Review (Trabalho concluído e não concluído para finalizar-mos alguns detalhes.)
Sprint Retrospective( Revisão de erros e detalhes.)




### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto:
 
> Github: Requisito estipulado para confecção do trabalho

> Trello: Gerenciamento de Projeto pois permite fácil comunicação online e organização de tarefas a serem realizadas.

> Discord: Para reuniões diárias, pois permite a comunicação direta online.

> Google Drive: Pois permite o uso de ferramentas onlin onde conseguimos revisar juntos o trabalho.

> Git: Gerenciamento de código.
