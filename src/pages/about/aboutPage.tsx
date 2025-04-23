import { FaReact, FaShoppingCart, FaCode, FaGithub } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import logo from '@/assets/SHOP.CO.png'
import Container from '@/components/container'
import CardAbout from './card-about'
import AnimatedContent from '@/components/ui/react-bits/animated-content'

export default function AboutPage() {
  return (
    <Container classname="py-8 space-y-10 px-4">
      <AnimatedContent>
        <img className="mx-auto mb-8" src={logo} alt="SHOP.CO" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Oi! Eu me chamo{' '}
          <a
            href="https://www.linkedin.com/in/claudio-anjos/"
            target="_blank"
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
            rel="noreferrer"
          >
            Claudio
          </a>{' '}
          e sou o criador do <strong>Shop.co</strong>. Esse projeto surgiu como
          um desafio pessoal: construir uma loja virtual de roupas do zero,
          utilizando React e ferramentas modernas. Mais do que um layout
          atrativo, meu objetivo foi criar uma aplicação funcional, com código
          limpo, usabilidade e boas práticas de ponta a ponta.
        </p>
      </AnimatedContent>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardAbout
          icon={<FaReact className="text-blue-500 text-4xl" />}
          title="Tecnologia Moderna"
          description="Desenvolvido com React e Redux, aproveitando o consumo de APIs para simular um ambiente real de e-commerce. Utilizeí o localStorage para persistência de dados, implementei um sistema de controle de estoque preciso e criei componentes reutilizáveis para garantir flexibilidade e escalabilidade na aplicação."
        />
        <CardAbout
          icon={<FaShoppingCart className="text-green-500 text-4xl" />}
          title="Carrinho Inteligente"
          description="Itens são salvos localmente, com validações de estoque e experiência fluida ao usuário."
        />
        <CardAbout
          icon={<MdDesignServices className="text-purple-500 text-4xl" />}
          title="Design Fiel ao Figma"
          titleLink="Confira o protótipo completo no Figma clicando aqui."
          link="https://www.figma.com/design/lykFKqqEinEBWi9UDtnKjL/E-commerce-Website-Template--Freebie---Community-?node-id=0-1&p=f&t=FbzmCDRV5LVXHgMU-0"
          description="Layout responsivo, clean e fiel ao projeto original do Figma, com
              atenção total aos detalhes."
        />

        <CardAbout
          icon={<FaCode className="text-red-500 text-4xl" />}
          title="Código Limpo"
          description="Organização, semântica, componentização e boas práticas de front-end modernas."
        />
        <CardAbout
          icon={<FaGithub className="text-gray-800 text-4xl" />}
          title="Open Source"
          description="Código disponível no GitHub com documentação simples e clara."
          titleLink="Ver no GitHub"
          link="https://github.com/ClaudioAnjoss/E-Commerce-Shop.co"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Por que esse projeto é especial pra mim?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Porque ele junta tudo que eu gosto: design bonito, código limpo e uma
        boa dose de desafio. Aqui, eu coloquei em prática não só o que sei, mas
        também o que acredito: que tecnologia bem feita é aquela que resolve
        problemas e entrega valor.
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Se você é recrutador ou alguém curioso por boas soluções, dá uma olhada
        com carinho. Cada detalhe aqui tem uma razão de ser — e muito
        aprendizado por trás.
      </p>
    </Container>
  )
}
