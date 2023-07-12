const copyButton = document.querySelector('.copy-icon')

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('chave')
    try {
        await navigator.clipboard.writeText(link)
        alert("Chave PIX copiada")
    }
    catch(err){
        console.log(err)
    }

}
copyButton.addEventListener('click', copyText)