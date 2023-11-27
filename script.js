const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResults=document.getElementById("search-results");
const showMoreBtn=document.getElementById("show-more-btn");

/*https://api.unsplash.com/search/photos?page=1&query=office
&client_id=kHOgXwvzBmB6s0jW1Up9PM9_pwxk-sfip7Cnx5VKdaM */

let keyword="";
let page=1;
const accessKey="kHOgXwvzBmB6s0jW1Up9PM9_pwxk-sfip7Cnx5VKdaM"

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data =await response.json();

    console.log(data);

    const results= data.results;
    // new keywords
    if(page===1){
        searchResults.innerHTML="";
    }

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        //derect to unsplash
        const imageLink=document.createElement("a");
        imageLink.href= result.links.html;
        //link will open in a new tag
        imageLink.target="_blank";
        //place img inside the a tag
        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);

    })
            // more button
            showMoreBtn.style.display="block" 
          
}

// submit event

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages()
})

  //load more imges
            
  showMoreBtn.addEventListener("click",()=>{
    page++
    searchImages()
  })