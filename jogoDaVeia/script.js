start()
function start(){
    let quadro = document.getElementById('quadro');

    let context = quadro.getContext('2d');

    let h1 = document.querySelector('h1')

    quadro.height = 500
    quadro.width = 500

    h1.innerText = ''

    let num = 0
    let ocupa = 1
    let matriz = [[0,0,0],[0,0,0],[0,0,0]]

    num = num * 0

    //background
    context.fillStyle = '#000';
    context.fillRect(0,0,quadro.width,quadro.height);

    //linhas
    context.fillStyle = '#fff';
    context.fillRect(quadro.width/3,0,4,quadro.height);
    context.fillRect(quadro.width/1.5,0,4,quadro.height);
    context.fillRect(0,quadro.height/3,quadro.width,4);
    context.fillRect(0,quadro.height/1.5,quadro.width,4);
    

    let gameStatus = true
    function jogador(x,y,text){
        this.x = x;
        this.y = y;
        this.text = text;
        this.draw = function(){
            context.font = '150px serif'
            context.fillText(this.text,this.x,this.y)
        }
        this.vencedor = function(){
            h1.innerText= `${this.text} Ganhou`
            gameStatus = false
            return gameStatus
        }
        this.empate = function(){
            h1.innerText= `:P Empate`
            gameStatus = false
            return gameStatus
        }
        this.retas = function(){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(matriz[i][0] == 1 && matriz[i][1] == 1 && matriz[i][2] == 1 || matriz[i][0] == 2 && matriz[i][1] == 2 && matriz[i][2] == 2){
                        this.vencedor()
                    }
                    if(matriz[0][j] == 1 && matriz[1][j] == 1 && matriz[2][j] == 1 || matriz[0][j] == 2 && matriz[1][j] == 2 && matriz[2][j] == 2){
                        this.vencedor()
                    }
                }
            }
        }
        this.diagonal = function(){
            if(matriz[0][0] == 1 && matriz[1][1] == 1 && matriz[2][2] == 1 || matriz[0][0] == 2 && matriz[1][1] == 2 && matriz[2][2] == 2){
                this.vencedor()
            }
            if(matriz[2][0] == 1 && matriz[1][1] == 1 && matriz[0][2] == 1 || matriz[2][0] == 2 && matriz[1][1] == 2 && matriz[0][2] == 2){
                this.vencedor()
            }
        }
        this.hashtag = function(){
            if(matriz[0][0] != 0 && matriz[0][1] != 0 && matriz[0][2] != 0
                && matriz[1][0] != 0 && matriz[1][1] != 0 && matriz[1][2] != 0
                && matriz[2][0] != 0 && matriz[2][1] != 0 && matriz[2][2] != 0){
                this.empate()
            }
        }
        this.verifica = function(){
            this.retas()
            this.diagonal()
            this.hashtag()
        }
    }
    
    let mouse = {
        x:undefined,
        y:undefined
    }
    
    let jogadorx
    let jogadoro
    
    jogadorx = new jogador(undefined,undefined,'X')
    jogadoro = new jogador(undefined,undefined,'O')
    
    function testajogador(){
        if(ocupa == 1){
            jogadorx.draw()
            jogadorx.verifica()
        }
        else if(ocupa == 2){
            jogadoro.draw()
            jogadoro.verifica()
        }
    }

    function testamatriz(i1,i2){
        if(matriz[i1][i2] == 1){
            ocupa = 2
        }
        if(matriz[i1][i2] == 2){
            ocupa = 1
        }
    }

    function testaQuadrado(x,y){
        if(x < quadro.width/3 && y < quadro.height/3 ){
            jogadorx.x = (quadro.width/3)/5
            jogadorx.y = (quadro.height/3)/1.2
            jogadoro.x = (quadro.width/3)/5
            jogadoro.y = (quadro.height/3)/1.2
            if(matriz[0][0] == 0){
                matriz[0][0] = ocupa
                testajogador()
            }
            testamatriz(0,0)
        }
        if(x >quadro.width/3 && x < quadro.width/1.5 && y < quadro.height/3){
            jogadorx.x = (quadro.width/3)*1.2
            jogadorx.y = (quadro.height/3)/1.2
            jogadoro.x = (quadro.width/3)*1.2
            jogadoro.y = (quadro.height/3)/1.2
            if(matriz[0][1] == 0){
                matriz[0][1] = ocupa
                testajogador()
            }
            testamatriz(0,1)
        }
        if(x >quadro.width/1.5 && x < quadro.width && y < quadro.height/3){
            jogadorx.x = (quadro.width/3)*2.2
            jogadorx.y = (quadro.height/3)/1.2
            jogadoro.x = (quadro.width/3)*2.2
            jogadoro.y = (quadro.height/3)/1.2
            if(matriz[0][2] == 0){
                matriz[0][2] = ocupa
                testajogador()
            }
            testamatriz(0,2)
        }
        if(x < quadro.width/3 && y > quadro.height/3 && y < quadro.height/1.5){
            jogadorx.x = (quadro.width/3)/5
            jogadorx.y = (quadro.height/3)*1.8
            jogadoro.x = (quadro.width/3)/5
            jogadoro.y = (quadro.height/3)*1.8
            if(matriz[1][0] == 0){
                matriz[1][0] = ocupa
                testajogador()
            }
            testamatriz(1,0)
        }
        if(x >quadro.width/3 && x < quadro.width/1.5 && y > quadro.height/3 && y < quadro.height/1.5){
            jogadorx.x = (quadro.width/3)*1.2
            jogadorx.y = (quadro.height/3)*1.8
            jogadoro.x = (quadro.width/3)*1.2
            jogadoro.y = (quadro.height/3)*1.8
            if(matriz[1][1] == 0){
                matriz[1][1] = ocupa
                testajogador()
            }
            testamatriz(1,1)
        }
        if(x >quadro.width/1.5 && x < quadro.width && y > quadro.height/3 && y < quadro.height/1.5){
            jogadorx.x = (quadro.width/3)*2.2
            jogadorx.y = (quadro.height/3)*1.8
            jogadoro.x = (quadro.width/3)*2.2
            jogadoro.y = (quadro.height/3)*1.8
            if(matriz[1][2] == 0){
                matriz[1][2] = ocupa
                testajogador()
            }
            testamatriz(1,2)
        }
        if(x < quadro.width/3 && y > quadro.height/3 && y >quadro.height/1.5 && y < quadro.height){
            jogadorx.x = (quadro.width/3)/5
            jogadorx.y = (quadro.height/3)*2.8
            jogadoro.x = (quadro.width/3)/5
            jogadoro.y = (quadro.height/3)*2.8
            if(matriz[2][0] == 0){
                matriz[2][0] = ocupa
                testajogador()
            }
            testamatriz(2,0)
        }
        if(x >quadro.width/3 && x < quadro.width/1.5 && y > quadro.height/1.5 && y < quadro.height){
            jogadorx.x = (quadro.width/3)*1.2
            jogadorx.y = (quadro.height/3)*2.8
            jogadoro.x = (quadro.width/3)*1.2
            jogadoro.y = (quadro.height/3)*2.8
            if(matriz[2][1] == 0){
                matriz[2][1] = ocupa
                testajogador()
            }
            testamatriz(2,1)
        }
        if(x >quadro.width/1.5 && x < quadro.width && y > quadro.height/1.5 && y < quadro.height){
            jogadorx.x = (quadro.width/3)*2.2
            jogadorx.y = (quadro.height/3)*2.8
            jogadoro.x = (quadro.width/3)*2.2
            jogadoro.y = (quadro.height/3)*2.8
            if(matriz[2][2] == 0){
                matriz[2][2] = ocupa
                testajogador()
            }
            testamatriz(2,2)
        }
    }
    
    quadro.addEventListener('click',function(e){
        if(gameStatus != false){
            mouse.x = e.offsetX
            mouse.y = e.offsetY
            testaQuadrado(mouse.x,mouse.y)
            console.log(e);
        }
    })
}