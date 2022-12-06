const posts = [
    { title: 'Post One', Body: 'This is post one'},
    { title: 'Post Two', Body: 'This is post two'},
];

function getPosts(){
    setTimeout(()=> {
      let output = '';
      posts.forEach((post, index)=> {
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output; 
    }, 1000);
}

function createPost(post){
   setTimeout(()=> {
    posts.push(post);
   }, 3000)
}

getPosts();

createPost({ title: 'Post Three', Body: 'This is post three'});