import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './modal.scss'

interface IProps {
  isShowing: boolean
  hide: () => void
  children?: React.ReactChildren
}

export const Modal = ({ isShowing, hide, children }: IProps) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal" onClick={hide} >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
  </React.Fragment>, document.body
) : null;