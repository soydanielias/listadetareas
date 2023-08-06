        let titulo = document.getElementById('titulo')
        let resultado = document.getElementById('resultado')
        let tomarnombre = document.getElementById('entrada')
        let btn = document.getElementById('btn')
        let resultadosuma = document.getElementById('resultadosuma')
        let validarresultado = parseInt(resultadosuma.value)
        let cerrardiv = document.getElementById('closeicon')
        const mostrardiv = document.getElementById('mostrardiv')
        const pantalla4 = document.getElementById('pantalla4')
        let felicitaciones = document.getElementById('felicitaciones')
        let congrats = document.getElementById('congrats')
        const tarea1 = document.getElementById('tarea1')
        let tarea1text = document.getElementById('tarea1text')
        let tarea1value = document.getElementById('tarea1').value
        const tarea2 = document.getElementById('tarea2')
        let tarea2text = document.getElementById('tarea2text')
        let tarea2value = document.getElementById('tarea2').value
        const tarea3 = document.getElementById('tarea3')
        let tarea3text = document.getElementById('tarea3text')
        let tarea3value = document.getElementById('tarea3').value
        const tarea4 = document.getElementById('tarea4')
        let tarea4text = document.getElementById('tarea4text')
        let tarea4value = document.getElementById('tarea4').value
        const tarea5 = document.getElementById('tarea5')
        let tarea5text = document.getElementById('tarea5text')
        let tarea5value = document.getElementById('tarea5').value
        const tarea6 = document.getElementById('tarea6')
        let tarea6text = document.getElementById('tarea6text')
        let tarea6value = document.getElementById('tarea6').value
        const tarea7 = document.getElementById('tarea7')
        let tarea7text = document.getElementById('tarea7text')
        let tarea7value = document.getElementById('tarea7').value
        const tarea8 = document.getElementById('tarea8')
        let tarea8text = document.getElementById('tarea8text')
        let tarea8value = document.getElementById('tarea8').value
        const tarea9 = document.getElementById('tarea9')
        let tarea9text = document.getElementById('tarea9text')
        let tarea9value = document.getElementById('tarea9').value
        const tarea10 = document.getElementById('tarea10')
        let tarea10text = document.getElementById('tarea10text')
        let tarea10value = document.getElementById('tarea10').value


        btn.addEventListener('click', function(){
            let nombre = tomarnombre.value
            if(nombre != ""){
                var z = document.getElementById("pantalla1")
                var y = document.getElementById("pantalla2")
                espera.innerHTML = 'Quiero decirte una cosita antes de entregarte tu lista de tareas, '+nombre+'.'
                z.style.display = "none"
                y.style.display = "block"
                }
        }  
        )

        btn2.addEventListener('click', function(){
            let validarresultado = parseInt(resultadosuma.value)
            let nombre = tomarnombre.value
            let error = document.getElementById("error")
        
            if(validarresultado == 8){
                var y = document.getElementById("pantalla2")
                var w = document.getElementById("pantalla3")
                y.style.display = "none"
                w.style.display = "block"
                resultado.innerHTML = 'Hola '+nombre+', esta es tu lista de tareas.'
            }
            else {
                error.style.display = "block";
            }
        }  
        )

        tarea1.addEventListener('click', function handleClick() {
            let nombre = tomarnombre.value
        if (tarea1.checked) {
            mostrardiv.style.display = 'block'
            tarea1text.className = " tachado"
            congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea1value+"."

            }
            else {
        mostrardiv.style.display = 'none';
        tarea1text.className = " tareasafter";
        }
        })

        tarea2.addEventListener('click', function handleClick2() {
            let nombre = tomarnombre.value
            if (tarea2.checked) {
                mostrardiv.style.display = 'block'
                tarea2text.className = " tachado"
                congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea2value+"."
    
                }
                else {
            mostrardiv.style.display = 'none';
            tarea2text.className = " tareasafter";
            }
            })


            tarea3.addEventListener('click', function handleClick3() {
                let nombre = tomarnombre.value
                if (tarea3.checked) {
                    mostrardiv.style.display = 'block'
                    tarea3text.className = " tachado"
                    congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea3value+"."
        
                    }
                    else {
                mostrardiv.style.display = 'none';
                tarea3text.className = " tareasafter";
                }
                })


            tarea4.addEventListener('click', function handleClick4() {
                let nombre = tomarnombre.value
                if (tarea4.checked) {
                    mostrardiv.style.display = 'block'
                    tarea4text.className = " tachado"
                    congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea4value+"."
                        }
                        else {
                    mostrardiv.style.display = 'none';
                    tarea4text.className = " tareasafter";
                    }
                    })


                tarea5.addEventListener('click', function handleClick5() {
                    let nombre = tomarnombre.value
                    if (tarea5.checked) {
                            mostrardiv.style.display = 'block'
                            tarea5text.className = " tachado"
                            congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea5value+"."
                
                            }
                            else {
                        mostrardiv.style.display = 'none';
                        tarea5text.className = " tareasafter";
                        }
                        })

                tarea6.addEventListener('click', function handleClick6() {
                    let nombre = tomarnombre.value
                    if (tarea6.checked) {
                        mostrardiv.style.display = 'block'
                        tarea6text.className = " tachado"
                        congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea6value+"."
            
                        }
                        else {
                    mostrardiv.style.display = 'none';
                    tarea6text.className = " tareasafter";
                    }
                    })                       

                tarea7.addEventListener('click', function handleClick7() {
                    let nombre = tomarnombre.value
                        if (tarea7.checked) {
                            mostrardiv.style.display = 'block'
                            tarea7text.className = " tachado"
                            congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea7value+"."
                
                            }
                            else {
                        mostrardiv.style.display = 'none';
                        tarea7text.className = " tareasafter";
                        }
                        }) 

                tarea8.addEventListener('click', function handleClick8() {
                    let nombre = tomarnombre.value
                            if (tarea8.checked) {
                                mostrardiv.style.display = 'block'
                                tarea8text.className = " tachado"
                                congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea8value+"."
                    
                                }
                                else {
                            mostrardiv.style.display = 'none';
                            tarea8text.className = " tareasafter";
                            }
                            }) 

                tarea9.addEventListener('click', function handleClick9() {
                    let nombre = tomarnombre.value
                                if (tarea9.checked) {
                                    mostrardiv.style.display = 'block'
                                    tarea9text.className = " tachado"
                                    congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea9value+"."
                        
                                    }
                                    else {
                                mostrardiv.style.display = 'none';
                                tarea9text.className = " tareasafter";
                                }
                                }) 

                    tarea10.addEventListener('click', function handleClick10() {
                        let nombre = tomarnombre.value
                                    if (tarea10.checked) {
                                        mostrardiv.style.display = 'block'
                                        tarea10text.className = " tachado"
                                        congrats.innerHTML = "Bravo "+nombre+", completaste la tarea: "+tarea10value+"."
                            
                                        }
                                        else {
                                    mostrardiv.style.display = 'none';
                                    tarea10text.className = " tareasafter";
                                    }
                                    }) 

        cerrardiv.addEventListener('click', function closediv() {
        if (cerrardiv.click) {
        mostrardiv.style.display = 'none';
        }
        })

        /*
        btn2.addEventListener('click', function(){
            let nombre = tomarnombre.value
            if(nombre != ""){
                var y = document.getElementById("pantalla2")
                var w = document.getElementById("pantalla3")
                y.style.display = "none"
                w.style.display = "block"
                resultado.innerHTML = 'Hola '+nombre+', esta es tu lista de tareas.'
            }
        }  
        )
        */