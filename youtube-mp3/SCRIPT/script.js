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

    if(parts.length === 2){
        videoId = parts[1];
        console.log(videoId);
    } else{
        console.log('Error! Invalid Youtube Link!')
    }
        const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`;
        const options = {
	    method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '98c8f8a184msh03aabd93691ec63p1ca9aejsn48ad70a2adeb',
		'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
        } catch (error) {
	    console.error(error);
    }
}
