/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aaparici <aaparici@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/02/26 14:16:51 by aaparici          #+#    #+#             */
/*   Updated: 2023/02/26 17:01:41 by aaparici         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import PropTypes from 'prop-types'

const name = 'Klitchka';
const x = true;


export const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
        <h1 style={headerstyle}>Hello {name}</h1>
        <h2 style={headerstyle}>Are you happy? {x ? 'Sí' : 'No'}</h2>
    </header>
  )
  
}

Header.defaultProps = {
  title: "holi",
}

const headerstyle = {
  color: 'black', 
  backgroundColor: 'white'
}

