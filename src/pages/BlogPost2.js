import React from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const post = {
    id: 2,
    title: 'Ansiedade na Era Digital: Uma Perspectiva Psicanalítica',
    content: `
      <p>Vivemos em um tempo onde a tecnologia nos rodeia por todos os lados. Celulares, redes sociais, e-mails incessantes e notificações constantes parecem ditar nosso ritmo de vida. Se, por um lado, essas inovações trouxeram facilidades, por outro, tornaram-se gatilhos para uma ansiedade difusa, muitas vezes silenciosa, mas devastadora. O que antes era um espaço de interação e informação tornou-se também um campo de pressão, comparação e demanda por respostas imediatas. Mas o que a psicanálise pode nos ensinar sobre esse fenômeno?</p>

      <h2>A Ansiedade no Olhar da Psicanálise</h2>
      <p>A ansiedade não é um fenômeno novo. Desde Freud, sabemos que ela está enraizada em nossos conflitos psíquicos, na tensão entre desejo e interdição, entre o que queremos ser e o que sentimos que precisamos ser. No entanto, a era digital trouxe novos contornos para esse quadro.</p>
      
      <p>Donald Winnicott, psicanalista que estudou profundamente o desenvolvimento emocional, nos ensina que o ser humano precisa de um ambiente suficientemente bom para se desenvolver de maneira saudável. E o que ocorre quando esse ambiente está saturado de informação, exigências de desempenho e uma avaliação constante por meio de likes e feedbacks instantâneos? O espaço para a elaboração subjetiva se reduz. O tempo de "estar consigo" é invadido pelo excesso de estímulos externos.</p>

      <h2>A Hiperconexão e a Fragmentação do Self</h2>
      <p>Na psicanálise, falamos sobre a importância do espaço transicional, aquele lugar onde o sujeito pode brincar, criar e encontrar sentido no mundo sem a necessidade de uma resposta imediata. Mas como encontrar esse espaço quando cada minuto livre é preenchido por um feed infinito de imagens, mensagens e expectativas?</p>
      
      <p>A fragmentação do self surge justamente quando o indivíduo perde a capacidade de se conectar com seu mundo interno, pois está constantemente refém do olhar do outro. A pressão por manter uma "identidade digital" coerente e validada pode gerar angústias profundas, uma vez que a verdadeira experiência emocional é frequentemente sacrificada em prol da performance.</p>

      <h2>A Clínica da Ansiedade na Era Digital</h2>
      <p>No consultório, vemos cada vez mais pacientes que se sentem sobrecarregados por um mal-estar difuso. Relatam cansaço mental, dificuldades em relaxar e uma constante sensação de estar "ficando para trás". Muitos desenvolvem uma relação ambivalente com as redes sociais: ao mesmo tempo em que sabem que precisam de um espaço de descanso, sentem-se compelidos a permanecer conectados para não perderem nada.</p>
      
      <p>A psicanálise nos convida a compreender essa ansiedade como um sintoma de um conflito mais profundo. O que exatamente se teme perder ao se desconectar? Que angústias emergem quando não se tem uma tela por perto para distrair? A partir dessas perguntas, podemos ajudar o sujeito a reencontrar um ritmo mais autêntico, a reconectar-se com seus desejos reais, e a criar espaços onde o pensamento possa acontecer sem a pressão da resposta imediata.</p>

      <h2>Como Lidar com a Ansiedade Digital?</h2>
      <p>A solução não está em demonizar a tecnologia, mas em recuperar um uso mais consciente e humanizado dela. Algumas práticas podem ajudar:</p>
      <ul>
        <li>Criar espaços livres de telas: momentos do dia onde o digital é deixado de lado para permitir um reencontro com o mundo interno.</li>
        <li>Reconhecer os sinais de exaustão: se há uma necessidade compulsiva de checar redes sociais, talvez seja um indício de que algo precisa ser elaborado internamente.</li>
        <li>Desenvolver espaços transicionais: hobbies, leituras, caminhadas sem pressa, qualquer atividade que permita a elaboração psíquica sem pressão por produtividade.</li>
        <li>Diminuir a necessidade de validação externa: olhar para dentro e se perguntar o que de fato tem valor para si, independente do que os outros esperam.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A ansiedade na era digital é um sintoma de nosso tempo, mas não precisa ser uma condenação. A psicanálise nos ensina que, para além dos estímulos constantes, é fundamental que possamos criar espaços onde o self possa se encontrar, elaborar suas emoções e existir sem precisar se justificar o tempo todo.</p>
      
      <p>A tecnologia deve ser uma ferramenta, não uma prisão. E recuperar o direito de simplesmente "ser" pode ser um dos grandes desafios (e conquistas) do nosso tempo.</p>
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
    date: '10 de Março, 2024',
    category: 'Saúde Mental',
    imageUrl: '/img/blog/Ansiedade-era-Digital.jpg',
    readingTime: '10 min de leitura',
    tags: ['Ansiedade', 'Era Digital', 'Psicanálise', 'Saúde Mental', 'Tecnologia']
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