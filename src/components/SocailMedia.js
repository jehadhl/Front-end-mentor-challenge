import {FaTwitter,FaInstagram,FaFacebook} from 'react-icons/fa'
import React from 'react'
import { SocailStyled } from './styles/Socail.styled'

export default function SocailMedia() {
  return (
    <SocailStyled>
            <li>
            <a href='#'>
                <FaInstagram/>
            </a>
            </li>
            <li>
            <a href='#'>
                <FaFacebook/>
            </a>
            </li>
            <li>
            <a href='#'>
                <FaTwitter/>
            </a>
        </li>
    </SocailStyled>
  )
}
