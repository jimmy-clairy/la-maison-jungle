import React from 'react'

export default function ModalInfo({modal, setModal}) {

  React.useEffect(()=> {
    const txt = document.querySelector('.modalInfo__info');
    txt.innerHTML = modal.info || ''
  })

  return (
    <div className='modalInfo'>
        <div className='modalInfo__container'>
          <button className='modalInfo__btn btn__style style1' onClick={() => setModal({position:false})}>X</button>
          <h2 className='capitalize'>{modal.name}</h2>
          <div className='modalInfo__info'></div>
        </div>
    </div>
  )
}
