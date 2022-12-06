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
    return new Promise((resolve, reject)=> {
   setTimeout(()=> {
    posts.push(post);
    
    const error = true;

    if(!error){
        resolve();
    } else {
        reject('Error: Something went wrong');
    }
   }, 3000)
 });
}

createPost({title: 'Post Three', Body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));
