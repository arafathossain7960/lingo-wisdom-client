import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container blog-container py-5  '>
           <div className='blog-header text-center'>
            <h1>Welcome to <span className='blog-title'><b>Lingoes</b></span>  blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum. </p>

           </div>
           <div className="blog">
            <h4> what is cors ?</h4>
            <p><b>Answer : </b>CORS stand for  Cross-Origin Resource Sharing, It is an HTTP-header based mechanism that allows a server to indicate any origins like different port or different domain, CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. <br /> In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
           </div>
           <div className="blog">
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p><b>Answer : </b> Firebase is a strong technology which is backed by google, It has provides many serves for example Realtime database, hosting and authentication, if we want ot take this opportunity then we have use firebase. <br />
            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. <br />
            Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity , that the client expects it to.
             </p>
           </div>
           <div className="blog">
            <h4>How does the private route work?</h4>
            <p><b>Answer : </b> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
            <br />
             The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes</p>
           </div>
           <div className="blog">
            <h4> What is Node? How does Node work?</h4>
            <p><b>Answer : </b> Node.js is a JavaScript run time it's not programming language like JavaScript, Node.js created by Ryan Dahl in 2009.
            <br />
            <br />
            <b>Node.js </b> basically use for backend with javaScript. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code,
            <br />
            it is highly scalable, lightweight, fast, and data-intensive.
             </p>
           </div>

        </div>
    );
};

export default Blogs;