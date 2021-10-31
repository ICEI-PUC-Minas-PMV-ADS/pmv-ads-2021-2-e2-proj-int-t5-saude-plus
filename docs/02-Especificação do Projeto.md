# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


**Personas**


| PERSONA | Descrição |
| --- | --- |
| Márcia Amanda | Idade: 29 anos; Ocupação: Médica Ortopedista. Aplicativos  mais acessados: Agenda Google, Facebook, Instagram.|
| Descrição:|  Márcia atualmente realiza atendimentos presenciais e sua rotina é muito corrida, sempre foi apaixonada por sua profissão e realiza longos plantões em hospitais. Geralmente, quando não está no plantão, Márcia realiza atendimentos em clínicas particulares.|
| Etiologia:| Márcia tem algumas frustrações por passar se esforçando muito a maior parte do tempo. Ela busca um site que consiga realizar consultas online assim consegue otimizar o seu tempo e reduzir custos com deslocamento;|
| Insatisfação:| Com a rotina diária corrida, quase não sobra tempo para Márcia cuidar de questões simples do dia a dia; Como não possui uma rotina regular se torna muito difícil tarefas simplórias como o descanso e a rotina de cuidados com sua saúde. |
| --- | --- |
| Michael Jonas | Idade: 22 anos; Ocupação: Gerente de Marketing. Aplicativos  mais acessados: Tinder, Facebook, Instagram, Spotify|
| Descrição:|  Michael é um gerente bem novo e procura sempre estar “antenado” nesse novo mundo de tecnologias.|	
| Etiologia:| Michael está a procura de um clínico geral para verificar o seu exame de sangue e realizar recomendações, porém ele tem problemas pois nunca consegue agendar, apenas para meses depois onde o exame já se torna inválido|
| Insatisfação:| Com a demora no atendimento ao SUS, Michael sempre busca meios alternativos. Sempre busca no google como deve se cuidar ou o que os sintomas parecem. Cansado de tentativas falhas, ele busca um site onde consiga se consultar online em um valor super acessível e com laudos assertivos.|
| --- | --- |
| Rebecca | Idade: 25 anos; Ocupação: Vendedora. Aplicativos  mais acessados: WhatsApp e Facebook |
| Descrição:|  Rebecca mora no interior e tem apenas o ensino médio completo,  teve sua filha bem cedo. Atualmente trabalha como vendedora em um comércio local. Ela gosta muito de passeios em família com sua filha e se diverte muito.|	
| Etiologia:| A filha de Rebecca, possui uma doença bem rara, e os atendimentos presenciais são realizados em um intervalo de 90 dias. Com a necessidade da medicação, ela sempre precisa de receitas atualizadas, mas por morar no interior muita das vezes não tem como custear uma viagem a capital sempre que necessário.|
| Insatisfação:| Com essa imparcialidade, ela está buscando medidas alternativas, como a consulta online com um médico para atualizações de receitas em um período mais curto. E por morar longe, um contato com o médico através do WhatsApp à ajudaria bastante nas dúvidas quanto a medicação e a dosagem prescrita na receita enviada.|
| --- | --- |
| Rachel | Idade: 19 anos; Ocupação: Graduanda em Fisioterapia. Aplicativos  mais acessados: WhatsApp, Instagram| 
|Descrição:|  Rachel tem a vida bem tranquila, e sempre busca focar em seu melhor condicionamento físico. Gosta de praticar atividade física regularmente e realiza refeições saudáveis.|	
| Etiologia:|Entende a importância de uma consulta periódica com o médico|
| Insatisfação:| Rachel está super desanimada com sua alimentação e gostaria de realizar um atendimento nutricional online.|
| --- | --- |
| Marcos Moreira | Idade: 29 anos; Ocupação: Médico endocrinologista. Aplicativos  mais acessados: WhatsApp, Instagram, Skype| 
|Descrição:|  Marcos finalizou a faculdade durante o ano passado e está buscando uma forma de ampliar a agenda e realizar atendimento a vários pacientes. Tem um consultório no Rio de Janeiro, na Barra da Tijuca. 
| Etiologia:| Busca formas de reduzir os custos do seu consultório. Com a pandemia, Marcos realizou vários atendimentos online e constatou que é muito mais tranquilo pois consegue ter acesso a todo histórico do paciente de consultas e exames. |	
| Insatisfação:| Com a pandemia a movimentação presencial reduziu 20% os atendimentos presenciais.|


 
## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|MarcosMédico|Preciso conseguir cadastrar minhas informações pessoais      | Para que seja ofertado o meu serviço na plataforma.
|Marcos Médico|Preciso conseguir enviar minha documentação    | Para que comprove a formação na área do serviço ofertado  |
|Márcia Médica|Preciso ter acesso ao prontuário e informações anteriores do paciente| Para presteza de um atendimento assertivo|
|Márcia Médica|Preciso conseguir realizar uma vídeo chamada com meu paciente| Para conseguir realizar a consulta online|
|Rebecca Paciente|Preciso conseguir solicitar o envio de informações e receita no whatsapp do médico.| Sanar dúvidas sobre a receita enviada pelo mesmo e acompanhamento.|
|Rachel Paciente|Preciso ter acesso a compra de moedas online| Para conseguir liberar a minha consulta com o especialista.|
|Michael Paciente|Preciso ter um campo onde consiga descrever minha solicitação em um campo de observações |Para o médico já ter um resumo sobre o seu caso.|
|Michael Paciente|Preciso preencher um formulário com meus dados básicos| Para realizar o cadastro no site|
|Rebecca Paciente|Preciso conseguir efetivar o pagamento das moedas no cartão| Para conseguir desbloquear o profissional desejado|
|Michael Paciente|Preciso conseguir selecionar a especialidade| Para minha demanda ser atendida|
|Rachel Paciente|Preciso conseguir selecionar o sexo do médico| Para buscar o melhor profissional que tenho mais conforto em realizar o atendimento|
|Márcia Médica|Preciso ter acesso as informações pessoais do paciente| Para enviar as receitas, laudos e prontuários no e-mail|
|MarcosMédico|Preciso ter uma notificação| Para me lembrar do meu próximo paciente|
|Márcia Médica|Preciso que a minha parte do pagamento repassado seja feito diretamente no cartão| Para conseguir receber as consultas realizadas na plataforma|


## Requisitos

Os requisitos descrevem as funcionalidades do sistema, citados na tabela a seguir:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Deverá ter um campo de cadastro de usuário por e-mail ou CPF | ALTA | 
|RF-002| Deverá conter um QR CODE para direcionar os pacientes ao whatsapp do médico.   | MÉDIA |
|RF-003| Deverá conter um campo onde o médico consiga selecionar a especialidade dele. | ALTA | 
|RF-004| Deverá ter um campo de busca onde consiga filtrar o médico desejado por especialidade. | ALTA | 
|RF-005| Deverá ter uma página de acesso ao prontuário do paciente | BAIXA |
|RF-006| Deverá ter um campo de avaliação do profissional prestador de serviços | MÉDIA |
|RF-007| Deverá ter pacotes de moedas para o paciente realizar a compra para desbloquear a consulta com pagamento em cartão. | ALTA | 
|RF-008| Deverá ter um cadastro de conta ou cartão para pagamento do médico prestador de serviço. | ALTA |
|RF-009| Deverá ter o acesso a uma vídeo conferencia online | ALTA |
|RF-010| Deverá ter um campo para filtragem por sexo do profissional | BAIXA |
|RF-011| Deverá ter uma aba de agendamento e organização de atendimentos | MÉDIA | 
|RF-012| Deverá ter o acesso a ficha cadastral completa do paciente para emissão de laudo/receitas. | MÉDIA | 
|RF-013| Deverá ter um campo de cadastro do médico por especialidade, cpf e CRM | ALTA | 
|RF-014| Deverá ter um campo de indicações entre profissionais | BAIXA | 
|RF-015| Deverá ter um campo de observações gerais para o paciente descrever brevemente o quadro. | MÉDIA | 
|RF-016| Deverá ter um campo de cadastro de documentação por foto | MÉDIA | 
|RF-017| Deverá ter um campo de cadastro de exames já realizaos anteriormente pelo paciente. | MÉDIA | 
|RF-018| Deverá ter um campo de alteração de senha|MÉDIA|
|RF-019| Deverá exibir o valor de cada pacote do produto selecionado |MÉDIA|





### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve ser compatível com todos os navegadores | ALTA | 
|RNF-004| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-005| Não haver mais de um usuário, com login idêntico.| MÉDIA|
|RNF-006| Não salva em caso de login semelhante.| MÉDIA|
|RNF-007| O sistema deve possuir níveis de acesso para diferenciar usuários comuns de usuários administrativos, que acessarão áreas distintas do sistema| ALTA|
|RNF-008| O sistema de compra deve ser negável sem a necessidade de uma prévia autenticação do usuário| MÉDIA|
|RNF-009|	O sistema deverá ser intuitivo e de fácil utilização	|ALTA|
|RNF-010|	O sistema deverá estar disponível para acesso 24h por dia	|MÉDIA|
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho|        


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama_Caso_Uso](https://user-images.githubusercontent.com/65242472/135946449-48c33324-dab9-44d7-a2c0-f67a6671b1e4.png)


