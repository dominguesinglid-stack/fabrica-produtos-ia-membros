export const modules = [
  {
    id: "1",
    title: "Da Ideia à Oportunidade",
    description:
      "Encontre uma ideia com potencial real de virar produto digital vendável.",
    lessons: 7,
    prompts: 25,
    progress: 18,
    status: "Disponível",
    icon: "💡",
  },
  {
    id: "2",
    title: "Criação do Produto",
    description: "Transforme a oportunidade em um produto estruturado e claro.",
    lessons: 8,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "📦",
  },
  {
    id: "3",
    title: "MVP com IA",
    description:
      "Crie a primeira versão funcional usando IA e ferramentas no-code.",
    lessons: 8,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "🚀",
  },
  {
    id: "4",
    title: "Landing Pages",
    description: "Crie páginas de venda com copy, oferta, bônus e prova social.",
    lessons: 7,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "🖥️",
  },
  {
    id: "5",
    title: "Monetização",
    description: "Defina preço, oferta, checkout, upsell e estratégia de venda.",
    lessons: 7,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "💰",
  },
  {
    id: "6",
    title: "Automações",
    description:
      "Monte fluxos, integrações, CRM, WhatsApp e processos automáticos.",
    lessons: 7,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "⚙️",
  },
  {
    id: "7",
    title: "Lançamento",
    description:
      "Organize um plano de lançamento em 7 dias para conseguir as primeiras vendas.",
    lessons: 7,
    prompts: 25,
    progress: 0,
    status: "Em breve",
    icon: "🔥",
  },
];

export const lessons = [
  {
    id: "1",
    moduleId: "1",
    title: "Como Encontrar Ideias que Realmente Vendem",
    subtitle:
      "Aprenda a encontrar oportunidades reais antes de construir qualquer produto.",
    duration: "18 min",
    status: "available",

    objective:
      "Identificar ideias com potencial real de venda, diferenciar ideias fracas de problemas lucrativos e gerar uma lista inicial de oportunidades para transformar em produtos digitais.",

    concept:
      "O maior erro de quem começa no digital não é falta de ferramenta, falta de dinheiro ou falta de inteligência. O maior erro é tentar criar algo que ninguém quer comprar. Criar um aplicativo não significa criar um negócio. A diferença entre um projeto que gera dinheiro e um projeto que morre está na escolha da oportunidade.",

    contentSections: [
      {
        title: "O erro que mata a maioria dos produtos",
        content:
          "Todos os dias milhares de pessoas abrem o ChatGPT, Lovable, Bolt ou qualquer outra ferramenta de IA e pensam: 'vou criar um aplicativo'. Mas criar algo não significa que alguém vai pagar por aquilo. Antes de construir, você precisa encontrar um problema real.",
      },
      {
        title: "O mito da grande ideia",
        content:
          "Muita gente acredita que precisa encontrar uma ideia revolucionária. Isso é uma armadilha. Empresas lucrativas geralmente não inventam uma categoria do zero. Elas resolvem um problema existente de forma melhor, mais simples, mais rápida ou mais acessível.",
      },
      {
        title: "Não procure ideias. Procure problemas.",
        content:
          "Ideias podem parecer interessantes, mas problemas criam urgência. E urgência gera compra. Quanto mais frequente, doloroso e caro for o problema, maior a chance de existir uma oportunidade real.",
      },
      {
        title: "A fórmula da oportunidade",
        content:
          "Uma boa oportunidade combina quatro fatores: problema, frequência, dor e capacidade de pagamento. Se o problema acontece sempre, causa prejuízo ou frustração e o público tem dinheiro para resolver, você encontrou um bom caminho.",
      },
    ],

    frameworkTitle: "Framework P.A.G.A.",
    frameworkDescription:
      "Use este método para avaliar rapidamente se uma ideia merece sua atenção.",

    framework: [
      "Problema: existe um problema real, específico e fácil de explicar?",
      "Agonia: esse problema incomoda o suficiente para a pessoa querer resolver logo?",
      "Gravidade: o problema gera perda de dinheiro, tempo, oportunidade ou reputação?",
      "Aquisição: é fácil encontrar pessoas ou empresas que sofrem com esse problema?",
    ],

    promptTitle: "Radar de Oportunidades",
    prompt: `Atue como um consultor de startups e negócios digitais.

Liste 50 problemas reais enfrentados por pequenas empresas brasileiras.

Para cada problema, informe:

- Nicho afetado
- Problema principal
- Frequência do problema
- Impacto financeiro
- Grau de urgência
- Disposição para pagamento
- Ideia de produto digital para resolver

Depois, classifique cada oportunidade de 1 a 10 e destaque as 10 melhores oportunidades para começar.`,

    example:
      "Pequenas clínicas odontológicas recebem leads pelo Instagram e WhatsApp, mas demoram para responder. Isso faz potenciais pacientes procurarem concorrentes. Uma solução possível seria um assistente de IA para responder, qualificar e organizar esses leads automaticamente.",

    exercise:
      "Liste 10 nichos que você conhece ou gostaria de atender. Para cada nicho, liste 5 problemas reais. Ao final, você terá 50 oportunidades possíveis. Depois use o Framework P.A.G.A. para escolher as 3 melhores.",

    checklist: [
      "Entendi que negócios lucrativos resolvem problemas, não apenas ideias interessantes.",
      "Listei pelo menos 10 nichos possíveis.",
      "Mapeei 5 problemas para cada nicho.",
      "Usei o prompt Radar de Oportunidades.",
      "Escolhi 3 oportunidades para analisar com mais profundidade.",
    ],

    proTip:
      "Se você não consegue explicar o problema em uma frase simples, provavelmente ainda não entendeu bem a oportunidade. Clareza vem antes da construção.",

    nextAction:
      "Escolha uma das 3 oportunidades mais fortes e leve para a próxima aula, onde vamos identificar quais dores são realmente lucrativas.",
  },

  {
    id: "2",
    moduleId: "1",
    title: "Método dos Problemas Caros",
    subtitle: "Aprenda a separar dores curiosas de dores que geram pagamento.",
    duration: "20 min",
    status: "available",

    objective:
      "Identificar problemas pelos quais pessoas ou empresas têm real disposição de pagar.",

    concept:
      "Nem toda dor gera compra. Uma pessoa pode achar uma ideia interessante, elogiar seu projeto e mesmo assim nunca pagar. O que gera venda é a combinação de dor, urgência e valor percebido.",

    contentSections: [
      {
        title: "Nem toda dor gera venda",
        content:
          "Existe uma diferença enorme entre uma dor curiosa e uma dor cara. Uma dor curiosa chama atenção. Uma dor cara faz a pessoa procurar solução, comparar opções e pagar para resolver.",
      },
      {
        title: "O que torna um problema caro",
        content:
          "Problemas caros geralmente envolvem dinheiro, tempo, produtividade, reputação, saúde, segurança ou relacionamento. Quanto mais próximo o problema estiver de uma perda concreta, maior a chance de venda.",
      },
      {
        title: "Por que B2B valida mais rápido",
        content:
          "Empresas pagam com mais facilidade quando a solução promete gerar receita, reduzir custos ou economizar horas de trabalho. Por isso, produtos digitais voltados para negócios, profissionais autônomos e equipes geralmente validam mais rápido.",
      },
    ],

    frameworkTitle: "Filtro dos Problemas Caros",
    frameworkDescription:
      "Use este filtro para descobrir se uma dor tem potencial de virar produto.",

    framework: [
      "Perda financeira: o problema faz a pessoa ou empresa perder dinheiro?",
      "Urgência: o público quer resolver agora ou pode deixar para depois?",
      "Recorrência: o problema acontece repetidamente?",
      "Responsável claro: existe alguém específico que sofre e decide pagar pela solução?",
    ],

    promptTitle: "Detector de Dores Lucrativas",
    prompt: `Analise o nicho abaixo:

[NICHO]

Liste:

- 30 dores frequentes
- 30 desejos fortes
- 30 objeções de compra
- 30 metas do público

Para cada dor, atribua uma nota de 1 a 10 para:

- Urgência
- Impacto financeiro
- Frequência
- Facilidade de vender uma solução

Depois, selecione as 10 dores com maior potencial de monetização.`,

    example:
      "No nicho de consultores, uma dor fraca seria: 'quero melhorar meu Instagram'. Uma dor mais forte seria: 'não consigo gerar reuniões comerciais qualificadas todos os meses'. A segunda está ligada diretamente a receita.",

    exercise:
      "Pegue uma das oportunidades escolhidas na Aula 1 e liste 20 dores do público. Depois classifique cada dor de 1 a 10 usando urgência, frequência, impacto financeiro e facilidade de venda.",

    checklist: [
      "Escolhi uma oportunidade da Aula 1.",
      "Listei pelo menos 20 dores do público.",
      "Identifiquei dores conectadas a dinheiro, tempo ou perda de oportunidade.",
      "Classifiquei as dores por potencial de monetização.",
      "Escolhi a dor principal que meu produto deve resolver.",
    ],

    proTip:
      "Quanto mais caro for o problema, menos você precisa convencer. A pessoa já sente a dor. Seu trabalho é mostrar que você tem o caminho mais simples para resolver.",

    nextAction:
      "Leve a dor principal escolhida para a próxima aula. Vamos transformá-la em uma promessa clara de transformação.",
  },

  {
    id: "3",
    moduleId: "1",
    title: "Transformação Desejada",
    subtitle: "Transforme uma ideia comum em uma promessa clara e vendável.",
    duration: "16 min",
    status: "available",

    objective:
      "Traduzir uma dor em uma transformação desejada, criando uma promessa mais forte para seu produto.",

    concept:
      "As pessoas não compram informação. Elas compram mudança. Elas querem sair de um estado atual desconfortável e chegar a um estado desejado.",

    contentSections: [
      {
        title: "As pessoas não compram informação",
        content:
          "Vender apenas aulas, prompts ou templates reduz o valor percebido. O ideal é vender a transformação que essas ferramentas produzem.",
      },
      {
        title: "Antes e depois",
        content:
          "Toda promessa forte mostra um antes e um depois. Antes: confuso, travado, sem produto, sem oferta, sem clareza. Depois: ideia validada, produto estruturado, página criada, automação funcionando e primeiras vendas acontecendo.",
      },
      {
        title: "A ponte",
        content:
          "Seu produto é a ponte entre o estado atual e o estado desejado. Quanto mais clara for essa ponte, mais fácil será vender.",
      },
    ],

    frameworkTitle: "Mapa da Transformação",
    frameworkDescription:
      "Use este framework para transformar uma ideia em uma promessa vendável.",

    framework: [
      "Estado atual: onde o cliente está hoje?",
      "Estado desejado: onde ele quer chegar?",
      "Obstáculo: o que impede essa pessoa de chegar lá sozinha?",
      "Mecanismo: como seu produto ajuda a superar esse obstáculo?",
    ],

    promptTitle: "Tradutor de Transformações",
    prompt: `Analise a seguinte ideia de produto:

[IDEIA]

Com base nela, liste:

- Estado atual do cliente
- Estado desejado
- Dores principais
- Obstáculos
- Benefícios funcionais
- Benefícios emocionais
- Transformação principal
- Transformações secundárias
- Nova identidade do cliente após usar o produto

Depois crie 10 promessas fortes para usar em uma landing page.`,

    example:
      "Em vez de vender 'biblioteca de prompts', venda 'sistema para transformar qualquer ideia em produto digital usando IA'. A segunda opção comunica transformação, não apenas ferramenta.",

    exercise:
      "Escreva o antes e depois do seu cliente ideal. Depois crie 5 versões de promessa para seu produto e escolha a mais clara.",

    checklist: [
      "Defini o estado atual do cliente.",
      "Defini o estado desejado.",
      "Identifiquei os obstáculos principais.",
      "Criei uma promessa baseada em transformação.",
      "Evitei vender apenas ferramenta ou conteúdo.",
    ],

    proTip:
      "Uma boa promessa não precisa ser exagerada. Ela precisa ser clara, específica e desejável.",

    nextAction:
  "Na próxima aula, vamos analisar concorrentes para encontrar ângulos de diferenciação.",
  },

{
id: "4",
moduleId: "1",
title: "Análise de Mercado Inteligente",
subtitle: "Descubra se existe demanda real antes de investir tempo na construção.",
duration: "18 min",
status: "available",

objective:
"Aprender a analisar mercados, concorrentes e oportunidades para validar uma ideia antes da execução.",

concept:
"Você não precisa inventar algo novo. Você precisa encontrar algo que já funciona e melhorar. Mercados com concorrência normalmente são mercados onde existe dinheiro circulando.",

contentSections: [
{
title: "O mercado deixa pistas",
content:
"Todo mercado deixa sinais claros de demanda. Produtos sendo vendidos, anúncios rodando, influenciadores falando sobre o tema e concorrentes crescendo são evidências de que existe dinheiro naquele nicho."
},
{
title: "Concorrência não é inimiga",
content:
"Muita gente evita mercados competitivos. Isso é um erro. Concorrência geralmente significa validação. O segredo é encontrar um posicionamento melhor ou um problema específico ainda não resolvido."
},
{
title: "Onde encontrar oportunidades",
content:
"As melhores oportunidades costumam aparecer nas reclamações dos clientes. Leia comentários, avaliações negativas e fóruns. Ali estão os problemas que ainda não foram resolvidos."
}
],

frameworkTitle: "Framework M.C.D.",
frameworkDescription:
"Use este método para analisar qualquer mercado.",

framework: [
"Mercado: existe demanda comprovada?",
"Concorrência: quem já vende essa solução?",
"Demanda: há pessoas procurando resolver esse problema?",
"Diferencial: como você pode ser melhor ou diferente?"
],

promptTitle: "Scanner de Mercado",

prompt: `Analise o mercado de [NICHO].

Identifique:

- Principais concorrentes
- Produtos existentes
- Faixas de preço
- Principais reclamações dos clientes
- Oportunidades não exploradas
- Tendências do mercado

Apresente também uma análise SWOT resumida.`,

example:
"No mercado de cursos de IA existem centenas de produtos. Porém poucos ensinam a criar produtos digitais completos do zero. Isso pode ser um diferencial competitivo.",

exercise:
"Mapeie 10 concorrentes do seu nicho e registre os pontos fortes, pontos fracos e oportunidades identificadas.",

checklist: [
"Mapeei os concorrentes",
"Identifiquei faixas de preço",
"Encontrei reclamações recorrentes",
"Descobri oportunidades de diferenciação",
"Validei a existência de demanda"
],

proTip:
"Mercado sem concorrência pode significar ausência de oportunidade. Mercado com concorrência normalmente indica validação.",

nextAction:
"Na próxima aula você vai descobrir qual nicho possui a melhor combinação entre interesse pessoal e potencial de mercado."
},

  {
id: "5",
moduleId: "1",
title: "Escolhendo Seu Nicho Ideal",
subtitle: "Descubra o ponto de encontro entre paixão, habilidade e mercado.",
duration: "17 min",
status: "available",

objective:
"Encontrar o nicho com maior potencial de crescimento, monetização e alinhamento pessoal.",

concept:
"Um nicho ideal não é apenas aquilo que você gosta. É a combinação entre interesse, conhecimento e demanda. Quando esses três fatores se encontram, as chances de sucesso aumentam drasticamente.",

contentSections: [
{
title: "O erro de escolher apenas pela paixão",
content:
"Muitas pessoas escolhem um nicho apenas porque gostam do assunto. O problema é que paixão sem mercado gera frustração. Um nicho precisa ter pessoas buscando soluções e dispostas a pagar."
},
{
title: "O erro de escolher apenas pelo dinheiro",
content:
"Também existe o erro contrário. Escolher algo apenas porque parece lucrativo. Sem interesse ou afinidade, a tendência é abandonar o projeto na primeira dificuldade."
},
{
title: "A interseção perfeita",
content:
"Os melhores nichos normalmente estão no cruzamento entre aquilo que você conhece, aquilo que você gosta e aquilo que o mercado deseja comprar."
},
{
title: "O teste da conversa infinita",
content:
"Se você consegue conversar sobre um assunto por horas, estudar sobre ele regularmente e ainda vê oportunidades de mercado, provavelmente encontrou um excelente candidato para nicho."
}
],

frameworkTitle: "Framework I.C.D.",
frameworkDescription:
"Use este método para avaliar qualquer nicho antes de investir tempo nele.",

framework: [
"Interesse: você gosta do tema o suficiente para trabalhar nele por anos?",
"Capacidade: você possui experiência, conhecimento ou facilidade de aprendizado?",
"Demanda: existem pessoas buscando soluções e gastando dinheiro nesse mercado?",
"Escalabilidade: esse nicho permite criar múltiplos produtos no futuro?"
],

promptTitle: "Scanner de Nichos",

prompt: `Faça uma análise completa do meu perfil.

Tenho experiência em:

[EXPERIÊNCIAS]

Tenho interesse em:

[INTERESSES]

Com base nisso identifique:

* 10 nichos ideais
* Potencial de monetização
* Facilidade de entrada
* Concorrência
* Possíveis produtos digitais

Crie uma tabela classificando do melhor para o pior nicho.`,

example:
"Uma pessoa com experiência em vendas, interesse por tecnologia e conhecimento em automação pode encontrar oportunidades em IA para pequenos negócios, CRM, WhatsApp e produtividade comercial.",

exercise:
"Liste 10 áreas que você domina ou possui interesse. Aplique o Framework I.C.D. e selecione os 3 nichos mais fortes.",

checklist: [
"Listei minhas experiências",
"Listei meus interesses",
"Avaliei a demanda dos nichos",
"Comparei potencial de monetização",
"Escolhi meu nicho principal"
],

proTip:
"É mais fácil vencer em um nicho que você entende profundamente do que em um nicho que apenas parece lucrativo.",

nextAction:
"Na próxima aula você aprenderá como validar sua oportunidade antes de gastar tempo construindo qualquer produto."
},


];

export function getModule(id: string) {
  return modules.find((module) => module.id === id);
}

export function getLesson(id: string) {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByModule(moduleId: string) {
  return lessons.filter((lesson) => lesson.moduleId === moduleId);
}
