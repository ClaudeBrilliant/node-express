const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");


// Get and show posts
async function showPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = ""; // Clear previous posts

    posts.forEach((post) => {
      const postEl = document.createElement("div"); // Corrected variable name
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts", error);
  }
}

//submit new post
async function addPost(e){
    e.preventDefault()
    const title = FormData.get('title')
    const content = FormData.get('content')

 try{
    const res = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content})
    })
    if(!res.ok){
        throw new Error('Failed to create post')
    }
    const newPost = await res.json()
    output.innerHTML = ""; // Clear previous posts
    output.textContent = newPost.title
    showPosts()
 }
 catch(error){
     console.log('Error creating post', error)
 }
}

// Event listener
button.addEventListener("click", showPosts); // Corrected variable name
button.addEventListener("submit", addPost);