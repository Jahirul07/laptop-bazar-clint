import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='p-20'>
                <h1 className='text-2xl font-bold'>1. What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl'>There are several other ways to manage state​s in React, including the use of: <br />
                1. Hooks. <br />
                2. React Context API. <br />
                3. Apollo Link State.</p>
            </div>
            <div className='p-20'>
                <h1 className='text-2xl font-bold'>2. How does prototypical inheritance work?</h1>
                <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='p-20'>
                <h1 className='text-2xl font-bold'>3. What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl'> Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
            </div>
            <div className='p-20'>
                <h1 className='text-2xl font-bold'>4. React vs. Angular vs. Vue?</h1>
                <p className='text-xl'>Angular: Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. <hr /> <br /> React: React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website. <hr /> <br /> Vue: Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.</p>
            </div>
        </div>
    );
};

export default Blog;