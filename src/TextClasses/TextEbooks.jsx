import React from 'react'

import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import '../Styles/Ebooks.css'
import { Link } from 'react-router-dom';

const TextEbooks = () => {
  return (
    <Container>
      <div className="main-ebook">
        <h1 className='main-ebook__title'>Todos os <strong className='main-ebook__title__transform'>E-Books</strong></h1>
      </div>
      <div className="conteudo-ebook">
        <Card>
          <Card.Img variant="top" src="./img/7-dicas-gerenciamento-tempo.png" />
          <Card.Body>
              <h3 className="card__title">7 Dicas de gerenciamento do seu tempo</h3>
              <p className="card__text">Descubra segredos eficazes de gerenciamento de tempo, <strong className="card__text__transform">maximize a produtividade, alcance equilíbrio, elimine distrações e estabeleça hábitos poderosos.</strong></p>
                <Link to='/7-dicas-de-gerenciamendo-do-tempo' className='link-btn'>
                  Clique para saber mais
                </Link>
            </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/a-verdadeira-lei-do-codigo-da-atracao.png" />
          <Card.Body>
              <h3 className="card__title">A verdadeira lei do código de atração</h3>
              <p className="card__text">Descubra segredos profundos do verdadeiro código de excitação, <strong className="card__text__transform">capacitando você a manifestar seus desejos mais profundos.</strong></p>
              <Link to='/a-verdadeira-lei-do-codigo-de-atracao' className='link-btn'>
                Clique para saber mais
              </Link>
            </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/7-maneiras-pelas-quais-a-ansiedade-pode-estar-devorando-lentamente-a-sua-vida.png" />
          <Card.Body>
              <h3 className="card__title">7 Maneiras de que a ansiedade pode estar devorando lentamente a sua vida</h3>
              <p className="card__text">Explore o impacto da ansiedade nos relacionamentos, no trabalho e no bem-estar <strong className="card__text__transform">usando estratégias de autoconhecimento e mudanças de hábitos.</strong></p>
              <Link to='/7-maneiras-pelas-quais-a-ansiedade-pode-estar-devorando-lentamente-a-sua-vida' className='link-btn'>
                Clique para saber mais
              </Link>
            </Card.Body>
        </Card>
      </div>
  </Container>
  )
}

export default TextEbooks