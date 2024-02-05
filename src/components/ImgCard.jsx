import PropTypes from 'prop-types';
import { Card } from 'antd';
import { useState } from 'react';

const ImgCard = ({ altura, largura, imagem, titulo, descricao,}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const zoomLevel = isHovered ? 1.1 : 1;
  return (
    <>
      <Card className='img-card'
        style={{ width: largura, height: altura, margin: 20, }}
        cover={<div
          style={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            alt="example"
            src={imagem}
            style={{
              borderRadius: 10,
              width: '100%',
              height: '100%',
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s ease-in-out',
              cursor:'pointer',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>}>
        <p style={{ color: 'gray' }}>{descricao}</p>
        <h1 className='title-card'>{titulo}</h1>
      </Card>
    </>
  );
}

ImgCard.propTypes = {
  altura: PropTypes.number.isRequired,
  largura: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default ImgCard