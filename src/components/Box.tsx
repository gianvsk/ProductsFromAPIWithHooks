import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Custom.css';

export type ContainerProps = {children?: JSX.Element}

export const Container = ({children}: ContainerProps) => {
  return (
    <div className='my-container flex-center'>
        {children}
    </div>
  )
}