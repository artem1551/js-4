window.onload = () => {
    const startBtn = document.querySelector('.start-btn');
    const inputBlock = document.querySelector('.input-block');
    const num = document.querySelector('.number');
    const validNum = /[0-9]/;
    let result = [];
    
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13){
            num.disabled = true;
            setTimeout(() => {
                num.disabled = false;
                num.focus()
            }, 1000)
            
            
            if (num.value.match(validNum)) {
                result.push(num.value)
                num.value = "";
            } else {
                num.value = "";
                num.disabled = false;
                alert("Need fill number")
            };
        };  
    });

    const startClick = new Promise((resolve) => {
        startBtn.addEventListener('click', () => {
            resolve()
        });
    });

    
    startClick
        .then(() => {
            inputBlock.classList.remove('none')
            num.focus()
            return new Promise((resolve) => {
                setTimeout(() => {
                    inputBlock.classList.add('none')
                    resolve();
                }, 10000)
            })
        })
        .then(() => {
            console.log(result)
        });
    
};

