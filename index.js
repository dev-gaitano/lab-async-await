// Display posts
function displayPosts(posts) {
  // Get post list el
  const postList = document.getElementById("post-list")

  // Create li with h1 & p for each post
  posts.forEach(post => {
    const li = document.createElement("li")

    const h1 = document.createElement("h1")
    h1.textContent = post.title

    const p = document.createElement("p")
    p.textContent = post.body

    // Append el
    li.appendChild(h1)
    li.appendChild(p)
    postList.appendChild(li)
  });
}

// Fetch posts
async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    displayPosts(posts)
  } catch (e) {
    console.log("Error fetching posts: ", e)

  }
}

// Call fn
fetchPosts()
