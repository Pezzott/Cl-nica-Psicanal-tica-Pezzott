import React from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  // Exemplo de post (em produção, isso viria de uma API ou CMS)
  const post = {
    id: 1,
    title: 'A Importância do Holding na Teoria Winnicottiana',
    content: `
      <p>Quando falamos sobre desenvolvimento emocional e prática clínica na psicanálise winnicottiana, um dos conceitos centrais é o de "holding". Para Donald Winnicott, o holding não se trata apenas do ato físico de segurar um bebê nos braços, mas sim de um ambiente que sustenta, protege e organiza o mundo emocional da criança. Esse conceito se expande para a relação terapêutica e para o desenvolvimento humano como um todo, tornando-se essencial para compreendermos o impacto das primeiras relações em nossas vidas.</p>
      
      <h2>Holding e o Desenvolvimento Emocional</h2>
      <p>Nos primeiros meses de vida, o bebê não tem uma identidade própria estabelecida. Ele depende completamente dos cuidados maternos (ou da figura cuidadora) para organizar sua experiência do mundo. Se o ambiente é suficientemente bom, ou seja, se há responsividade, previsibilidade e acolhimento, a criança desenvolve um senso de segurança básico. O holding é exatamente isso: a capacidade de um ambiente sustentável que permite à criança existir sem ser invadida por ansiedades insuportáveis.</p>
      
      <p>O conceito de holding está profundamente ligado à transição entre dependência absoluta e relativa. Nos primeiros estágios da vida, o bebê precisa que a mãe "adivinhe" suas necessidades, pois ele ainda não tem um senso de continuidade do self. Aos poucos, à medida que o holding se mostra consistente e confiável, o bebê começa a tolerar frustrações e a diferenciar-se do outro. Esse processo é essencial para o amadurecimento emocional.</p>
      
      <h2>Holding na Clínica Psicanalítica</h2>
      <p>Na prática clínica, o holding é uma espécie de renovação desse ambiente emocional seguro dentro do setting terapêutico. Muitos pacientes chegam ao consultório com lacunas em sua história de desenvolvimento, trazendo angústias que derivam de falhas no holding primitivo. Isso significa que, em algum momento, o ambiente falhou em proporcionar segurança suficiente para que o self se estruturasse de forma saudável.</p>
      
      <p>O papel do terapeuta, nesse sentido, é recriar esse ambiente sustentador, estabelecendo uma relação que ofereça suporte, acolhimento e estabilidade. Isso não significa que o analista deve evitar frustrações ou sempre dizer aquilo que o paciente deseja ouvir. Pelo contrário, o holding terapêutico implica uma presença que possa tolerar e conter angústias, sem se desorganizar ou abandonar o paciente quando ele mais precisa.</p>
      
      <p>Para Winnicott, a ausência de holding adequado pode levar a estados de falso self, nos quais o indivíduo se adapta excessivamente às demandas externas em detrimento de sua autenticidade. Por isso, a terapia baseada nesse conceito busca criar um espaço onde a experiência emocional possa ser vivida de forma genuína, sem medo de aniquilação psíquica.</p>
      
      <h2>Holding e Vida Adulta</h2>
      <p>Embora muitas vezes associado à infância e à terapia, o holding também se manifesta nas relações adultas. Amizades profundas, parcerias afetivas saudáveis e até mesmo o ambiente de trabalho podem funcionar como espaços de sustentação emocional. Quando somos acolhidos, escutados e respeitados, conseguimos explorar nossa subjetividade de forma mais autêntica e criativa.</p>
      
      <p>Por outro lado, a ausência de holding pode se manifestar em sentimentos crônicos de insegurança, medo do abandono e dificuldades para estabelecer vínculos saudáveis. Um histórico de falhas nesse processo pode levar a comportamentos defensivos como dependência excessiva ou isolamento.</p>
      
      <h2>Conclusão</h2>
      <p>O conceito de holding, na teoria winnicottiana, transcende o simples ato de segurar uma criança. Ele representa um dos pilares do desenvolvimento emocional e da prática clínica, influenciando profundamente a forma como nos relacionamos com o mundo e com nós mesmos. Seja na infância, na terapia ou nas relações interpessoais, a presença de um ambiente sustentador é fundamental para que possamos nos tornar sujeitos autêuticos, criativos e emocionalmente saudáveis.</p>
      
      <p>Afinal, é na experiência de ser sustentado que aprendemos a sustentar a nós mesmos.</p>
    `,
    author: {
      name: 'Dr. Adenilton Pezzott',
      image: '/img/blog/Foto-Perfil.jpg',
      role: 'Psicanalista',
      bio: 'Psicanalista com formação winnicottiana e 8 anos de experiência clínica. Especializado no atendimento de crianças a partir de 8 anos e adultos, com abordagem que combina sessões presenciais e suporte contínuo. Possui expertise em desenvolvimento infantil, psicopatologias e questões emocionais contemporâneas. Além da psicanálise, tem formação em nutrição com foco em saúde integral e amplo conhecimento em gestão de saúde. Oferece um olhar holístico que integra saúde mental, física e bem-estar geral.',
      specialties: [
        'Psicanálise Winnicottiana',
        'Desenvolvimento Infantil',
        'Psicopatologias',
        'Nutrição Aplicada',
        'Gestão em Saúde'
      ]
    },
    date: '15 de Março, 2024',
    category: 'Teoria Psicanalítica',
    imageUrl: '/img/blog/Capa-Holding.jpg',
    readingTime: '8 min de leitura',
    tags: ['Winnicott', 'Desenvolvimento Emocional', 'Holding', 'Psicanálise', 'Prática Clínica']
  };

  return (
    <main className="pt-20 min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="text-green-600 font-medium">{post.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 font-serif">{post.title}</h1>
          </div>

          {/* Informações do Autor */}
          <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-8">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm">{post.author.role}</p>
              <p className="text-gray-500 text-sm mt-1">{post.date} • {post.readingTime}</p>
            </div>
          </div>

          {/* Conteúdo do Post */}
          <div 
            className="prose prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio do Autor - Seção Expandida */}
          <div className="mt-12 bg-green-50 p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold text-green-900">{post.author.name}</h3>
                <p className="text-green-700 font-medium">{post.author.role}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {post.author.bio}
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Áreas de Especialização</h4>
                <div className="flex flex-wrap gap-2">
                  {post.author.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-white text-green-800 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  );
};

export default BlogPost; 