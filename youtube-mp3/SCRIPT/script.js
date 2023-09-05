const convertButton = document.getElementById('convert-button')
const convertInput = document.getElementById('convert-input')
const resultDisplay = document.querySelector('.result')
convertButton.addEventListener('click',() =>{
    getAudio();
})
async function getAudio(){
    let link = convertInput.value;
    let parts = link.split('-');
    let videoId = '';
    if(parts.length --- 2){
        videoId = parts[2];
        console.log(videoId);
    }else{
        console.log('Error! Invalid Youtube Link!')
    }
    const url = `http://youtube-mp36.p.rapidapi.com/d1?id${videoId}`;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'a037ee8fbamshad0340fc20e6190p15bc76jsn583d3b83cd49',
            'X-RapidAPI-Host': 'youtube-mp3-converter.p.rapidapi.com',
        },
    };
    const response =await fetch(url,optiions);
    const result = await response.json();
    resultDisplay.innerHTML=`<p class='title'>Title: ${result.title}</p>`
    setTimeout(() => {
        window.open(result.link, '_blank');
    }, 1000);
}
