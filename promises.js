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
    
    const error = false;

    if(!error){
        resolve();
    } else {
        reject('Error: Something went wrong');
    }
   }, 3000)
 });
}

// createPost({title: 'Post Three', Body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

//Async / Await

// async function init (){
//     await createPost({title: 'Post Three', Body: 'This is post three'});

//     getPosts();

// }

// init();


//Async / Await with Fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

fetchUsers();



//Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise ((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((
//     (values) => console.log(values)
// ));
