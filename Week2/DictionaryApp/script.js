async function searchWord(){
    const wordInput=document.getElementById('wordInput');
    const resultDiv=document.getElementById('result');
    const word=wordInput.value.trim();

    if(!word){
        alert('Please enter a word');
        return;
    }
    try{
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data=await response.json();

        if(response.status===404){
            resultDiv.innerHTML='<p>No defination found</p>';
        }else{
            displayResult(data)
        }
    }catch(error){
        resultDiv.innerHTML='<p>Error meesage </p>'
    }
}
function displayResult(data){
    const resultDiv=document.getElementById('result');
    const meanings=data[0]?.meanings;
    console.log(meanings)
    if(meanings){
        const found=meanings.map(meaning=>`<p>${meaning.partOfSpeech} :${meaning.definitions[0].definition} </p>`)
        resultDiv.innerHTML=found;
    }else{
        resultDiv.innerHTML='<p>No defination found <p>'
    }

}