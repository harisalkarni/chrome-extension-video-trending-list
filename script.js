async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '81090b7d49msh8e8fb5169750255p12a38ejsn5c698545cc3c',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };
    
    const response = await fetch('https://youtube-search-and-download.p.rapidapi.com/trending?type=n&hl=id&gl=ID', options);
    const trending = await response.json();


    console.log(trending.contents);
        
    document.getElementById("videotrending").innerHTML = trending.data.map(item => `<li>${item.title}</li>`).join('');
}
fetchData();