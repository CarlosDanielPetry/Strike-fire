import React, { useEffect, useState, useRef } from 'react';
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { CheckCircle, HelpCircle } from 'lucide-react';
//import { useRouter } from 'next/navigation';

const MembershipPage: React.FC = () => {

  useEffect(() => {
    document.title = 'Strike Fire | Membership';
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<'plans' | 'benefits' | 'faq' | 'login'>('plans');
  const registerRef = useRef<HTMLDivElement>(null);

  const membershipPlans = [
    {
      name: "Básico",
      price: 750,
      period: "Mês",
      description: "Perfeito para iniciantes ou atiradores ocasionais.",
      features: [
        "Acesso ilimitado ao estande durante o horário normal",
        "Preço com desconto em cursos",
        "Sistema de reservas online",
        "Cofre para aluguel de armas (uma vez por mês)",
        "Passe de convidado (1 por mês)",
      ],
      isPopular: false
    },
    {
      name: "Exclusivo",
      price: 1250,
      period: "Mês",
      description: "Perfeito para atiradores frequentes que desejam uma experiência mais completa.",
      features: [
        "Acesso ilimitado ao estandes durante o horário normal",
        "Acesso prioritário ao estande",
        "20% de desconto em todos os cursos",
        "Cofre para aluguel de armas (uma vez por semana)",
        "Aluguel de armário (Médio)",
        "passe de convidado (3 por mês)",
        "acesso a eventos exclusivos para membros",
      ],
      isPopular: true
    },
    {
      name: "Profissional",
      price: 2500,
      period: "Mês",
      description: "Pacote completo para atiradores fixos e competidores.",
      features: [
        "Acesso ilimitado ao estande 24/7",
        "Prioridade total de acesso ao estande",
        "30% de desconto em todos os cursos",
        "Aluguel de armas",
        "Aluguel de armário (Grande)",
        "Passe de convidado (5 por mês)",
        "Acesso a eventos exclusivos para membros",
        "Treino personalizado com instrutores (1 por Mês)",
        "Entrada gratuita em eventos de competição (sem prêmios)",
        "10% de descontos em produtos profissionais. "
      ],
      isPopular: false
    }
  ];

  const additionalOptions = [
    {
      name: "Complemento: Família",
      price: 25,
      description: "Adicionar familia ao plano de membros",
      note: "Valor adicional por membro, máximo de 4 membros",
    },
    {
      name: "Pagamento Anual",
      discount: "10%",
      description: "Pague por um ano inteiro e economize em qualquer plano de assinatura",
      note: "Não reembolsável, renova automaticamente, a menos que seja cancelado"
    },
    {
      name: "Associação Corporativa",
      description: "Descontos especiais para empresas com mais de 5 membros",
      note: "Entre em contato conosco para obter preços e benefícios personalizados"
    }
  ];

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  /*const router = useRouter();{
    const handleRegisterClick = () => {
      router.push('/Auth/Registros/RegistrationScreen');
    };
  };*/

  return (
    <>
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/2116850/pexels-photo-2116850.jpeg")',
            backgroundPosition: 'center',
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Associação</h1>
            <p className="text-gray-lighter mt-4 max-w-xl mx-auto">
              Junte-se à nossa comunidade e aproveite benefícios exclusivos
            </p>
          </div>
        </div>
      </div>

      {/* Guias */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'plans', label: 'Planos de Membros' },
              { id: 'benefits', label: 'Benefícios de Membros' },
              { id: 'faq', label: 'Perguntas Frequentes' },
              { id: 'login', label: 'Login de Membros' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`py-4 px-6 font-medium text-sm md:text-base whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-medium hover:text-gray-dark'
                }`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Planos */}
      {activeTab === 'plans' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Escolha seu plano de membro</h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Selecione a opção de assinatura que melhor se adapta às suas necessidades e objetivos de tiro.
              Todos os planos incluem certificação básica de segurança.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-lg overflow-hidden border ${
                  plan.isPopular 
                    ? 'border-primary shadow-lg transform md:-translate-y-4' 
                    : 'border-gray-light'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R$ {plan.price}</span>
                    <span className="text-gray-medium">/{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-medium mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.isPopular ? "primary" : "outline"} 
                    fullWidth 
                    size="lg"
                    onClick={scrollToRegister}
                  >
                    Selecionar Plano
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Opções adicionais */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Opções Adicionais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalOptions.map((option, index) => (
                <div key={index} className="bg-gray-lighter rounded-lg p-6">
                  <h4 className="font-heading font-bold text-lg mb-2">{option.name}</h4>
                  
                  {option.price && (
                    <div className="mb-3">
                      <span className="text-xl font-bold">R$ {option.price}</span>
                      <span className="text-gray-medium"> /Mês</span>
                    </div>
                  )}
                  
                  {option.discount && (
                    <div className="mb-3">
                      <span className="text-xl font-bold text-primary">Economize {option.discount}</span>
                    </div>
                  )}
                  
                  <p className="text-gray-medium mb-3">{option.description}</p>
                  
                  {option.note && (
                    <p className="text-sm text-gray-medium italic">{option.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Registro ACT */}
          <div className="mt-16 bg-primary bg-opacity-10 rounded-lg p-8 text-center" ref={registerRef}>
            <h3 className="text-2xl font-heading font-bold mb-4">Pronto para se juntar ao Strike Fire?</h3>
            <p className="text-gray-medium mb-6 max-w-2xl mx-auto">
              Inscreva-se hoje mesmo e aproveite os benefícios de fazer parte da nossa comunidade.
              Novos membros recebem uma sessão de orientação gratuita.
            </p>
            <Button size="lg" >Registre-se Agora</Button>
          </div>
        </Section>
      )}
      
      {/* Benefícios para membros */}
      {activeTab === 'benefits' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Benefícios Para Membros</h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Como membro do Strike Fire, você desfrutará de benefícios exclusivos projetados para melhorar sua experiência de tiro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Acesso prioritário ao estande", 
                description: "Os membros têm direito a prioridade na atribuição de faixas de horários estendidos, garantindo que você sempre tenha um lugar para atirar."
              },
              {
                title: "Eventos exclusivos para membros",
                description: "Acesse competições exclusivas, sessões de treinamento e encontros sociais durante todo o ano."
              },
              {
                title: "Descontos em cursos de treinamento",
                description: "Receba descontos significativos em cursos de segurança, habilidades e treinamento avançado."
              },
              {
                title: "Desconto na loja profissional",
                description: "Aproveite preços de membro em munições, acessórios e equipamentos em nossa loja profissional totalmente abastecida."
              },
              {
                title: "Aluguel de armas",
                description: "Experimente antes de comprar com aluguéis de armas de fogo com desconto ou cortesia, dependendo do seu nível de associação."
              },
              {
                title: "Privilegios de convidado",
                description: "Traga amigos e familiares para experimentar o estande com passes de convidado mensais, dependendo do seu nível de associação."
              },
              {
                title: "Armario para aluguel",
                description: "Guarde seu equipamento com segurança em um armário de aluguel, disponível em tamanhos pequeno, médio e grande."
              },
              {
                title: "Reserva online",
                description: "use nossa plataforma de reservas online para garantir seu horário de tiro com facilidade."
              },
              {
                title: "Acesso à comunidade",
                description: "Conecte-se com outros membros por meio de nosso aplicativo, participe de fóruns e fique por dentro das últimas notícias do clube."
              }
            ].map((benefit, index) => (
              <Card key={index} className="h-full p-6 flex flex-col">
                <h4 className="text-lg font-heading font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-medium">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          {/* Testemunhos */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">O que nossos membros acham de nós</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Entrar para o Strike Fire foi uma das melhores decisões que já tomei. As instalações são de primeira qualidade e a equipe é incrivelmente prestativa e experiente.",
                  name: "Robert J.",
                  membership: "Membro exclusivo a 2 anos"
                },
                {
                  quote: "Adoro a comunidade da Strike Fire. Conheci pessoas incríveis e melhorei minhas habilidades significativamente por meio das aulas e eventos para membros.",
                  name: "Sarah T.",
                  membership: "membro básico a 1 ano"
                },
                {
                  quote: "Como atirador competitivo, ter acesso 24 horas por dia, 7 dias por semana, a estandes de qualidade tem sido inestimável para o meu treinamento. A assinatura Profissional vale o investimento.",
                  name: "Michael K.",
                  membership: "Membro profissional a 3 anos"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-lighter rounded-lg p-6">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-gray-dark mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-medium">{testimonial.membership}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
      
      {/* Perguntas Frequentes Sobre Sssociação */}
      {activeTab === 'faq' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Perguntas Frequentes Sobre Sssociação</h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Encontre respostas para perguntas comuns sobre associação, planos e benefícios.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Como eu me torno membro?",
                  answer: "As inscrições para a adesão podem ser feitas online pelo nosso site ou pessoalmente em nossas instalações. Você precisará apresentar um documento de identificação, preencher um formulário de verificação de antecedentes e participar de uma sessão de orientação sobre segurança. Após a aprovação, você poderá selecionar seu plano de adesão e concluir o pagamento para ativar sua adesão."
                },
                {
                  question: "Posso promover ou rebaixar meu nível de membro?",
                  answer: "Sim, você pode alterar seu nível de assinatura a qualquer momento, embora os upgrades entrem em vigor imediatamente, enquanto os downgrades entrarão em vigor no seu próximo ciclo de cobrança. Para alterar seu nível de assinatura, acesse sua conta de membro ou fale com nossa equipe de serviços de assinatura."
                },
                {
                  question: "Vocês oferecem descontos para militares ou socorristas??",
                  answer: "Sim, oferecemos 10% de desconto em todos os planos de assinatura para militares da ativa, veteranos, policiais, bombeiros e profissionais de emergência médica. É necessário apresentar um documento de identidade válido ou comprovante de serviço para receber este desconto."
                },
                {
                  question: "Qual sua política de cancelamento??",
                  answer: "As assinaturas mensais podem ser canceladas com aviso prévio de 30 dias. As assinaturas anuais não são reembolsáveis, mas podem ser transferidas para outra pessoa mediante o pagamento de uma pequena taxa administrativa. Para cancelar, você deve enviar uma solicitação de cancelamento por meio da sua conta de membro ou entrando em contato com o serviço de atendimento ao cliente."
                },
                {
                  question: "Posso trancar minha assinatura temporariamente?",
                  answer: "Sim, os membros podem suspender sua associação por até 3 meses por ano por motivos médicos, viagens prolongadas ou mobilização militar. Uma pequena taxa de manutenção mensal será aplicada durante o período de suspensão. Documentação pode ser necessária para suspensões médicas ou militares."
                },
                {
                  question: "Vocês oferecem assinaturas corporativas?",
                  answer: "Sim, oferecemos tarifas corporativas especiais para empresas com 5 ou mais funcionários. Assinaturas corporativas incluem pacotes de benefícios personalizáveis, eventos de formação de equipes e gerenciamento de contas dedicado. Entre em contato com nosso diretor de assinaturas para obter informações detalhadas e preços."
                },
                {
                  question: "O que acontece se eu esquecer meu cartão de membro?",
                  answer: "Você ainda pode acessar as instalações fazendo check-in na recepção com um documento de identidade com foto. Para sua comodidade, também oferecemos um cartão de membro digital por meio do nosso aplicativo, que pode ser usado como alternativa ao seu cartão físico."
                },
                {
                  question: "Minha assinatura pode ser revogada?",
                  answer: "A associação pode ser revogada sem direito a reembolso em caso de violações de segurança, comportamento agressivo, permissão de uso não autorizado da associação ou outras violações das políticas do clube. Mantemos um código de conduta rigoroso para garantir um ambiente seguro para todos os associados."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-light rounded-lg overflow-hidden">
                  <div className="flex items-start p-6">
                    <div className="flex-shrink-0 pt-0.5">
                      <HelpCircle className="w-5 h-5 text-primary mr-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-medium">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-medium mb-4">
                Tem dúvidas ou precisa de mais informações? Nossa equipe de atendimento ao cliente está aqui para ajudar!
              </p>
              <Button variant="outline">Entre em contato com os serviços de associação</Button>
            </div>
          </div>
        </Section>
      )}
      
      {/* Login de membro */}
      {activeTab === 'login' && (
        <Section>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Entrar como membro</h2>
              <p className="text-gray-medium">
                Acesse sua conta para gerenciar sua assinatura, fazer reservas e muito mais.
              </p>
            </div>
            
            <Card>
                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-dark font-medium mb-2">
                        Endereço de Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="password" className="block text-gray-dark font-medium">
                          Senha
                        </label>
                        <a href="#" className="text-sm text-primary hover:text-primary-dark">
                          Esqueceu a Senha?
                        </a>
                      </div>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-light rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-medium">
                        lembrar-me
                      </label>
                    </div>
                    
                    <Button type="submit" fullWidth>Entrar</Button>
                  </form>
                </div>
              <p className="text-gray-medium mb-4">Ainda não tem uma conta?</p>
              <Button variant="outline"> Registrar-se Agora</Button>
              <p className="text-gray-medium mt-4">
                Ao entrar, você concorda com nossos{' '}
                <a href="#" className="text-primary hover:text-primary-dark">
                  Termos de Serviço
                </a>{' '}
                e{' '}
                <a href="#" className="text-primary hover:text-primary-dark">
                  Política de Privacidade
                </a>.
              </p>
            </Card>
          </div>
        </Section>
      )}
    </>
  );
};

export default MembershipPage;