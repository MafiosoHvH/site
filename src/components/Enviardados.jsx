import React from "react"
import $ from 'jquery'

function Enviardados(nomedaarma,muni) {
    console.log(nomedaarma,muni)
    $.post('https://${GetParentResourceName()}/enviardados', JSON.stringify({
       nomedaarma : nomedaarma,
       muni : muni
    }))
}
export default Enviardados