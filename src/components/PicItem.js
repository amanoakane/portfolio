import React, {useState} from 'react';
import Modal from 'react-modal'
import { IoMdCloseCircle } from 'react-icons/io';
Modal.setAppElement('#root')

function PicItem(props) {
  const [modalIsOn, setModalIsOn] = useState(false)
  const bg = {
    content: {
      position: 'absolute',
      top: '120px',
      left: '150px',
      right: '150px',
      bottom: '40px',
      border: '0px solid red',
      background: 'rgba(0,0,0,0)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  };

  return (
    <>
      <li className='pics__item' onClick = {() => setModalIsOn(true)}>
        <div className='pics__item__link'>
          <figure className='pics__item__pic-wrap'>
            <img
              className='pics__item__img'
              alt='my arts'
              src={props.src}
            />
          </figure>
        </div>
      </li>
      <Modal style={bg} isOpen={modalIsOn} onRequestClose={() => setModalIsOn(false)} centered>
        <div className="close" onClick={() => setModalIsOn(false)}><IoMdCloseCircle /></div>
        <img className="modal_img" src={props.src}/>
      </Modal>
    </>
  );
}

export default PicItem;