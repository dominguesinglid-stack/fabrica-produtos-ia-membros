export const modules = [
  { id: "1", title: "Da Ideia à Oportunidade", description: "Encontre uma ideia com potencial real de virar produto digital vendável.", lessons: 7, prompts: 25, progress: 18, status: "Disponível", icon: "💡" },
  { id: "2", title: "Criação do Produto", description: "Transforme a oportunidade em um produto estruturado e claro.", lessons: 8, prompts: 25, progress: 0, status: "Em breve", icon: "📦" },
  { id: "3", title: "MVP com IA", description: "Crie a primeira versão funcional usando IA e ferramentas no-code.", lessons: 8, prompts: 25, progress: 0, status: "Em breve", icon: "🚀" },
  { id: "4", title: "Landing Pages", description: "Crie páginas de venda com copy, oferta, bônus e prova social.", lessons: 7, prompts: 25, progress: 0, status: "Em breve", icon: "🖥️" },
  { id: "5", title: "Monetização", description: "Defina preço, oferta, checkout, upsell e estratégia de venda.", lessons: 7, prompts: 25, progress: 0, status: "Em breve", icon: "💰" },
  { id: "6", title: "Automações", description: "Monte fluxos, integrações, CRM, WhatsApp e processos automáticos.", lessons: 7, prompts: 25, progress: 0, status: "Em breve", icon: "⚙️" },
  { id: "7", title: "Lançamento", description: "Organize um plano de lançamento em 7 dias para conseguir as primeiras vendas.", lessons: 7, prompts: 25, progress: 0, status: "Em breve", icon: "🔥" },
];

export const lessons = [
  {
    id: "1", moduleId: "1", title: "Radar de Oportunidades", duration: "12 min", status: "available",
    objective: "Identificar mercados, nichos e problemas com potencial real de monetização.",
    concept: "Empreendedores iniciantes procuram ideias. Empreendedores estratégicos procuram problemas caros, urgentes e recorrentes.",
    framework: ["Procure problemas ligados a dinheiro, tempo, saúde, carreira ou produtividade.", "Evite ideias legais sem urgência.", "Priorize nichos onde as pessoas já gastam dinheiro."],
    prompt: `Você é um estrategista de negócios digitais.

Liste 30 oportunidades de mercado para produtos digitais.

Para cada oportunidade informe:
- Nicho
- Problema principal
- Grau de urgência
- Potencial de monetização
- Concorrência estimada
- Produto recomendado

Organize em tabela e priorize oportunidades com alta demanda.`,
    example: "Exemplo: pequenos negócios locais que precisam gerar clientes usando WhatsApp, Instagram e automações simples.",
    checklist: ["Escolhi 3 nichos possíveis", "Identifiquei problemas urgentes", "Verifiquei se existe dinheiro circulando", "Escolhi uma oportunidade principal"],
  },
  {
    id: "2", moduleId: "1", title: "Dores Lucrativas", duration: "15 min", status: "available",
    objective: "Descobrir quais dores do nicho têm maior chance de gerar vendas.",
    concept: "Nem toda dor gera compra. Dores lucrativas têm urgência, frequência e impacto financeiro ou emocional claro.",
    framework: ["Dor com impacto financeiro vende mais rápido.", "Dor com vergonha, medo ou perda gera urgência.", "Desejos fortes funcionam melhor quando conectados a uma transformação concreta."],
    prompt: `Analise o nicho: [NICHO]

Liste:
- 30 dores
- 30 desejos
- 30 objeções
- 30 metas

Para cada item atribua nota de 1 a 10 de urgência e explique quais têm maior potencial.`,
    example: "No nicho de consultores: 'não consigo gerar leads qualificados todos os meses'.",
    checklist: ["Listei dores do nicho", "Classifiquei por urgência", "Escolhi as 5 dores mais promissoras", "Transformei as dores em ideias de produto"],
  },
  {
    id: "3", moduleId: "1", title: "Transformação Desejada", duration: "10 min", status: "available",
    objective: "Transformar uma ideia genérica em uma promessa clara de resultado.",
    concept: "As pessoas não compram informação. Elas compram transformação. A promessa precisa mostrar o antes e depois.",
    framework: ["Antes: estado atual do cliente", "Depois: resultado desejado", "Ponte: seu produto como mecanismo de transformação"],
    prompt: `Analise a seguinte ideia: [IDEIA]

Liste:
- Benefícios funcionais
- Benefícios emocionais
- Transformação principal
- Transformações secundárias
- Nova identidade do cliente após usar o produto

Crie também 10 promessas fortes para marketing.`,
    example: "Em vez de vender 'curso de prompts', venda 'sistema para transformar qualquer ideia em produto digital usando IA'.",
    checklist: ["Defini o antes e depois", "Criei uma promessa clara", "Evitei promessa genérica", "Conectei o produto a uma transformação real"],
  },
];

export function getModule(id: string) { return modules.find((m) => m.id === id); }
export function getLesson(id: string) { return lessons.find((l) => l.id === id); }
export function getLessonsByModule(moduleId: string) { return lessons.filter((l) => l.moduleId === moduleId); }
