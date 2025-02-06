import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../constants/services';

const Scheduling = () => {
  return (
    <section id="scheduling" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-900 font-serif"
        >
          Agende sua Consulta
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Para agendar sua consulta, entre em contato pelo WhatsApp. Nossa equipe está pronta para atendê-lo(a) 
          e encontrar o melhor horário para você.
        </motion.p>

        {/* Botão grande do WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <a
            href="https://wa.me/5511944645848?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 text-lg font-medium"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Agende pelo WhatsApp
          </a>
        </motion.div>

        {/* Serviços Disponíveis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service) => (
            <div key={service.id} className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-green-800 mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-green-700">Duração: {service.duration} minutos</p>
            </div>
          ))}
        </motion.div>

        {/* Informações Adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-green-50 p-6 rounded-xl">
            <h5 className="font-bold text-green-800 mb-2">Política de Cancelamento</h5>
            <p className="text-sm text-gray-600">
              Cancelamentos devem ser realizados com no mínimo 24 horas de antecedência.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h5 className="font-bold text-green-800 mb-2">Primeira Consulta</h5>
            <p className="text-sm text-gray-600">
              Chegue com 10 minutos de antecedência para realizar o cadastro inicial.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h5 className="font-bold text-green-800 mb-2">Formas de Pagamento</h5>
            <p className="text-sm text-gray-600">
              Aceitamos PIX, cartão de débito e crédito (acréscimo de 10% para cartões). Pagamentos podem ser feitos por sessão, quinzenal ou mensal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scheduling; 