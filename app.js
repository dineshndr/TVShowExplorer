const form = document.querySelector('form')
const input = document.querySelector('input');
input.addEventListener('change',()=>{
    const images = document.querySelectorAll('img');
    for(elem of images)
        {
            elem.src=""
        }
    });
form.addEventListener('submit', async (e)=>
{        
        e.preventDefault();
        console.log("submitted");
        const search = form.elements.query.value;
        const config = {params: {q:search}}
        const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);
        list_images(res.data);
        form.elements.query.value = '';
})
const list_images = (shows) =>{
    
    for(let result of shows) {
       // console.log(result);
       if(result.show.image)
       {   
    const img = document.createElement('img');
    
    img.src = result.show.image.medium;
    document.body.append(img);
    }
    
}



}


