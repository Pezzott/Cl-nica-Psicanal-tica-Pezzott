import React from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const post = {
    id: 3,
    title: 'O Processo de Análise Online: Desafios e Possibilidades',
    content: `
      <p>A psicanálise tem, desde seus primórdios, se estruturado em torno da relação entre analista e paciente, sendo o setting terapêutico um espaço de escuta e acolhimento fundamental para o processo. No entanto, com o avanço da tecnologia e a expansão da conectividade, esse espaço tradicional tem sido desafiado e transformado. O atendimento online, antes visto com certa desconfiança, tornou-se uma realidade crescente e, em muitos casos, uma necessidade. Mas quais são os desafios e as possibilidades desse novo formato?</p>

      <h2>A Transformação da Prática Psicanalítica</h2>
      <p>A psicanálise, baseada na escuta, na interpretação e no estabelecimento de um vínculo transferencial, teve que se adaptar ao meio digital. O ambiente analógico do consultório, com sua disposição física, espaço simbólico e gestualidade compartilhada, deu lugar às telas e aos fones de ouvido.</p>
      
      <p>Essa mudança traz consigo questões técnicas e teóricas:</p>
      
      <p><strong>O impacto da tela no setting analítico:</strong> O enquadre clássico, em que o paciente se deita no divã e o analista fica fora de seu campo visual, não se reproduz da mesma forma no online. A presença da imagem altera o fluxo associativo e pode influenciar a dinâmica transferencial.</p>
      
      <p><strong>A questão da privacidade e da intimidade:</strong> O consultório tradicional é um espaço protegido, sem interferências externas. No online, há variáveis que fogem ao controle do analista e do paciente, como ruídos de fundo, interrupções familiares ou instabilidades na conexão.</p>
      
      <p><strong>A presença e a ausência:</strong> No atendimento virtual, a ausência física é sentida de maneira diferente. Para alguns pacientes, isso pode ser libertador; para outros, pode gerar uma sensação de distanciamento e desamparo.</p>

      <h2>Possibilidades e Benefícios da Análise Online</h2>
      <p>Apesar dos desafios, a psicanálise online também oferece vantagens importantes:</p>
      
      <p><strong>Acessibilidade:</strong> Muitos pacientes que antes não conseguiam comparecer a um consultório, seja por limitações geográficas, físicas ou emocionais, agora podem se beneficiar da análise.</p>
      
      <p><strong>Flexibilidade:</strong> A possibilidade de agendar sessões sem grandes deslocamentos permite que a psicanálise alcance pessoas com rotinas atarefadas ou que vivem em locais remotos.</p>
      
      <p><strong>Continuidade do tratamento:</strong> Em tempos de pandemia ou outras circunstâncias imprevistas, a possibilidade de manter o vínculo terapêutico à distância se mostrou essencial.</p>
      
      <p><strong>Novas dinâmicas transferenciais:</strong> O meio digital pode trazer transferências e resistências distintas das presenciais, permitindo que o analista explore outros aspectos da relação terapêutica.</p>

      <h2>Conclusão</h2>
      <p>A análise online é um campo em expansão e, como toda transformação, carrega desafios e oportunidades. O fundamental é que o espaço analítico continue sendo um lugar de escuta, acolhimento e elaboração psíquica, independentemente do meio pelo qual ocorre. A tecnologia, se utilizada com discernimento, pode ser uma aliada valiosa na continuação do processo psicanalítico, permitindo que o sujeito encontre um espaço para se expressar e compreender suas angústias em meio a um mundo em constante transformação.</p>
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
    date: '5 de Março, 2024',
    category: 'Prática Clínica',
    imageUrl: '/img/blog/Processo-Analise.jpg',
    readingTime: '8 min de leitura',
    tags: ['Psicanálise Online', 'Tecnologia', 'Setting Analítico', 'Prática Clínica', 'Transformação Digital']
  };

  return (
    <main className="pt-20 min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-lg"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <span className="text-green-600 font-medium text-sm tracking-wider uppercase">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 font-serif leading-tight">{post.title}</h1>
          </div>

          {/* Informações do Autor */}
          <div className="flex items-center justify-center gap-4 mb-12 border-b border-gray-200 pb-8">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-100"
            />
            <div>
              <h3 className="font-medium text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm">{post.author.role}</p>
              <p className="text-gray-500 text-sm mt-1">{post.date} • {post.readingTime}</p>
            </div>
          </div>

          {/* Conteúdo do Post */}
          <div 
            className="prose prose-lg prose-green max-w-none mx-auto
              prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-green-700 prose-a:no-underline hover:prose-a:text-green-800
              prose-ul:my-6 prose-li:text-gray-700 prose-li:leading-relaxed
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-green-50 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio do Autor - Seção Expandida */}
          <div className="mt-16 bg-green-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-6 mb-6">
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
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.author.bio}
              </p>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-green-900 mb-4">Áreas de Especialização</h4>
                <div className="flex flex-wrap gap-2">
                  {post.author.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-white text-green-800 px-4 py-2 rounded-full text-sm shadow-sm font-medium"
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