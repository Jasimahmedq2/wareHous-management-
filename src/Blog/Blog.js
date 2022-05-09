import React from 'react';
import './Blog.css'
const Blog = () => {
  return (
    <div className='container'>




      <div className='blog-1'>
        <h2>Difference between javascript and nodejs
        </h2>
        <h5>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

          <br />
          Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

          <br />

          Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.
          javascript is basically used on the client-side.	nodejs is mostly used on the server-side.
        </h5>
      </div>
      <br />
      <br />
      <div className='blog-2'>
        <h2> When should you use nodejs and when should you use mongodb??
        </h2>
        <h5>


          MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

          NodeJS's responsibilty is especially to execute your application.


          Nodejs is a Javascript engine that you can write any application you want with by programming in the Javascript language. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
        </h5>
      </div>

      <br />
      <br />
      <div className='blog-3'>
        <h2>      Differences between sql and nosql databases.
        </h2>
        <br />
        <h5>
        SQL databases are primarily called as Relational Databases  whereas NoSQL database are primarily called as non-relational or distributed database. 
        <br />
        SQL databases defines and manipulates data based structured query language . Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries
        </h5>
      </div>

    </div>
  );
};

export default Blog;