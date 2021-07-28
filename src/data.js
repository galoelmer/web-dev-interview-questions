/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    question: "What is Clear?",
    answer:
      "A clear is used when you do not require an element to twist another element, for example, float.",
  },
  {
    question: "What do you know about CSS float?",
    answer:
      "Float is used when you required to keep your web page element pushed to the left or right and make all other elements cover around it.",
  },
  {
    question:
      "What is the main difference between Prototypal and Class inheritance?",
    answer:
      "In JavaScript, inheritance is different from a lot of other development languages. In JavaScript the object system based on a prototype, not the class. Objects are only a collection of value pairs and name. As far as the inheritance is a concern, there is only one construct JavaScript: objects. Each object has a private property that comprises a link to other object known as the prototype of that object.",
  },
  {
    question: "What is Sass?",
    answer:
      "Syntactically Awesome Stylesheets also known as Sass is a CSS preprocessor that elegance and adds power to the basic language. It lets you use nested rules, variables, inline imports, mixins, etc. the syntax should be compatible with CSS. Sass supports to organized the large stylesheets, and keep the small stylesheets up and running.",
  },
  {
    question: "What is the difference between div and span?",
    answer:
      "span is an inline element and div is a block element. it is illegal to put a block element in an inline element, and though div can have a p tag, and a p tag can have a width, for span, it is not possible to have a p or div tag inside.",
  },
  {
    question:
      "What’s the difference between “normalizing” and “resetting” CSS? Which one you would choose?",
    answer:
      "Normalizing — conserves valuable default styles before “un-styling” everything. It fixes the errors and bugs for common browser needs. Resetting — is intended to strip the styling of default browser on elements. For instance, paddings, margins, font-sizes of elements are rearranging to be same. For common typographic elements, you have to redeclare the styling. It is a nice idea to select resetting when you have a very unconventional or customized website design that I want to do my own designing, there is no need for any default styling to be well-maintained.",
  },
  {
    question: "What’s ReactJs?",
    answer:
      "ReactJS is an open-source front-end JavaScript library that is primarily used for creating user interfaces specifically for one-page applications. It is also used for managing the view layer for mobile and web apps.",
  },
  {
    question: "Tell me when and Why should I Use Webpack?",
    answer:
      "While making a complex Front-End application with a lot of non-code static possessions, for example, fonts, images, CSS, etc, then yes, you should use Webpack as it a lot of great benefits. If your application is very small, and do not have a lot of static resources and you just require to build one file of JavaScript to assist the customers, then Webpack should be more overhead than required.",
  },
  {
    question: "Why HTML DOCTYPE is important?",
    answer:
      "DOCTYPE is like an instruction to web browser concerning in which markup language version the page is written. The declaration of doctype points to a Document Type Definition. It offers rules for the markup language, so it allows the browser to understand the content properly.",
  },
  {
    question: "Tell me about a Callback Function",
    answer:
      "We can read JavaScript line by line. It can also result in a successive code line being performed before an earlier code line. A callback function prevents this situation since it is not called until the preceding code line has completely performed.",
  },
  {
    question: "Why should we suggest JavaScript Or External CSS Versus Inline?",
    answer:
      "JavaScript or Inline CSS has a bad influence on the performance of the website. When you use inline scripts, your HTML code will weigh higher, while external scripts decrease the size of HTML file that helps to fast webpage interpretation. The code of HTML will not be cached on inline scripts. In other words, external needs, for example, JavaScript and CSS files, would be cached by the web browser visitor. Therefore, it decreases requests of https whenever the user clicks via web pages. It is also difficult to maintain JavaScript and Inline CSS code. Where it is more preferable to use code in one central location rather than changing the same code snippets spread all the files on a website.",
  },
  {
    question: "Why We Use the W3C standard code?",
    answer:
      "The goals of the W3C Standard Code are to guarantee cross-platform compatibility and compact sizes of file. These standards focus to separate “formatting ” from “content ” by applying CSS. It makes development and maintenance easier.",
  },
  {
    question: "How to optimize the page through front end technology or code?",
    answer: [
      "Eliminate block-level JavaScript and use asynchronous JavaScript",
      "Minify HTML, CSS, and Javascript",
      "Optimize image and use the correct image format. Use the design pattern of lazy loading for images with large size.",
      "Use responsive design rather than making redirects based on device",
      "Improve overall server response by dropping per page resource usage by combining all external documents of JavaScript into one document",
    ],
  },
  {
    question: "Tell Me What Do You Know What Is A Closure",
    answer:
      "Closures are usually functions, expressions that can function with a set of variables within a specific context. To make it easier, inner functions concerning the local variables of outer function generate closures.",
  },
  {
    question: "What is JavaScript Scope?",
    answer:
      "In JavaScript, every function has its own scope. The scope is said to be a variables collection and also the principles of how to access the variables by name. the scoped variables of the functions can only access by the function’s code. Within the same scope, each variable name should be unique. We can also nest one scope inside another scope. In this case, the code of the innermost scope has access to the variables from another scope.",
  },
  {
    question: "Why is alt text important?",
    answer:
      "They give an image a description that both browsers and screen readers can see. This is important because unlike text, images can't provide a lot of context about what they are about. So this is very helpful for both SEO and accessibility. Browsers will also display this alt tag when an image breaks, which helps improve the user experience.",
  },
  {
    question: "What are Open Graph meta tags?",
    answer:
      "These are special meta tags that can be used in the HTML <head> to display information in a media-rich card on social media sites. Information can include an image, title, description, URL, and type.",
  },
  {
    question: "What are different ways to use the <script> tag in HTML?",
    answer: [
      "Wrapping - Wrapping client-side scripting languages (like JS) in <script></script> tags will run the code. This is placed at the bottom of the body, as to not block the DOM from rendering.",
      "Importing - An external script can be imported by adding an src attribute to the script tag. This is the preferred method as it lets you cleanly modularize the code and not bind it to a single HTML file.",
      "Deferring Import - The defer attribute will stop the script from running until all the content on the HTML file (DOM) has rendered. However, it will still download from the server in parallel to the DOM and then run in synchronous order. This is really helpful for performance and also means that the script will then have ample access to any HTML elements it needs to attach handlers to.",
      "Async Import - The async attribute will load and run the script at the same time as the page. It will also asynchronously run its script before any other scripts have finished loading. It is really good for 3rd party features that our site does not rely on. (Such as Google Analytics.)",
    ],
  },
  {
    question: "What is the box-sizing property?",
    answer:
      "This affects how big an element will be, by determining what parts of the CSS box model are included in the overall size. The border-box value includes the border, content, and padding dimensions in the overall size. The content-box value only includes the size of the content. If a border or padding is present, their additional size would be added to the overall dimensions.",
  },
  {
    question:
      "In what ways do you use CSS Animations effectively and efficiently?",
    answer: [
      "CSS animations should not execute in a way that will repaint the page unnecessarily. For example, pushing an item down by adjusting the margin-top will push all other items below it down, thereby re-painting those parts of the page. Instead, a  transform: translateY() would be more efficient.",
      "Another thing to avoid is tying the filter: blur() (or any filter properties) to a long scroll-based animation. I once tried to blur a hero image on a scroll and it slowed the whole page, especially on Safari.",
      "Use variations in timing and animating in opposing directions can bring interest. You can adjust the cubic-bezier to have elements start and end at different speeds. And by having one element subtly moving down and another up at the same time can create a nice tension.",
    ],
  },
  {
    question:
      "What values of the display property do you know and how are they unique?",
    answer: [
      "The inline value will make an element take up the width of its content and sits next to other inline or inline-block elements. <span> tags are inline by default.",
      "The block value takes up the full width available, pushing other elements to the next line. They can have their hights/widths adjusted and margin-top/bottom is respected. <div> tags are block by default.",
      "The inline-block value has all the features of a block value, except they do not push other elements to the next line. <button> tags are inline-block by default.",
      "The flex value enables a large kit of powerful CSS properties that affect the layout, alignment, and order of both parents and their child elements.",
      "he grid value is very similar to flex with some changes in syntax and features. For example, it also lets you target the gap size between elements in a grid.",
      "The none value will hide the element it is assigned to completely.",
    ],
  },
  {
    question: "What is Event Delegation?",
    answer:
      "When dealing with interactive elements, (like a button) we typically attach a unique event listener to the element, allowing us to execute some code when fired. However, this can cause major performance issues if we have a large group of buttons or a table that has hundreds of clickable cells. Event Delegation allows us to significantly optimize this issue, by only assigning one event listener to handle all clicks. We can instead assign a single event listener to the parent/container of the group of elements we want to click on. (For example, a div that holds several buttons.)",
  },
  {
    question:
      "Explain the difference between the For, While, and Do...While loops.",
    answer: [
      "For Loop: This loop cycles through a block of code until a specified numeral condition is met. We can set up a starting variable, a condition or endpoint for it, and then an amount it should increment each loop.",
      "While Loop: This loop cycles through a block of code until the condition it is checking against returns false. This is good to use when don't have a specific amount to set a condition to.",
      "Do...While Loop: This loop will execute a block of code and then check a condition. It will keep executing the code and checking (in that order) until the condition is false.",
    ],
  },
  {
    question: "Explain the difference between var, let, and const.",
    answer:
      "var is a legacy type of variable that does not respect block scoping. let and const are both ES6 variables that respect block scoping. The Let variable allows you to update it later on and the const does not. Functions are often set to const because they won't stop being a function. Whereas a loop might use a let to assign and update changing information.",
  },
  {
    question:
      "How does this behave differently in arrow functions, in comparison to regular functions?",
    answer:
      "Arrow functions preserve the this context to the outer function. If we used a regular function for the callback, using this in it would refer to the callback function instead.",
  },
  {
    question: "What happens if you change state directly in React?",
    answer:
      "It can lead to bugs. useState and setState do not always immediately update the state. Rather, they create something called a 'pending state transition' and put the state change in a queue. So if you directly mutate the state before React had a chance to do so from the queue, it could very well get overwritten. State should always be treated as 'immutable'.",
  },
  {
    question: "How do you send information to a child component in React?",
    answer:
      "Using props on the child component allows you to send data from the parent component. The child component often sets up the structure to receive data inputs via the props from the parent level.",
  },
  {
    question:
      "If one component gets props and is re-rendered, does anything else get rendered again?",
    answer:
      "Any child components of that component receiving props will also re-render. We can prevent re-renders with The lifecycle method shouldComponentUpdate() lets us use nextState & nextProps to compare if anything changed. If it returns false, then no render will happen. The useMemo hook also lets us prevent re-renders if props/state has not changed in a functional component.",
  },
  {
    question: "How do you share state between components?",
    answer: [
      "You can leverage the useContext hook and make the state available to specific components via a provider.",
      "State can be passed down through props, although this can get complex if we are moving multiple levels down.",
      "State can be stored in the react Redux store, via dispatching action payloads. Then other components can consume this state with the mapStateToProps function. ",
    ],
  },
  {
    question: "How would you debug an issue in a React-Redux application?",
    answer:
      "I would use the Chrome Redux Dev Tools extension to visualize where states are not firing correctly. Once narrowing down in the process there is a bug, I would check the reducers, store, and action creators for errors. If they look ok, I would then look at the components that are dispatching and accessing the store.",
  },
  {
    question: "Explain RESTful routing.",
    answer:
      "This is where we can use HTTP verbs (GET, POST, PUT and DELETE) and map them to server-side CRUD actions. By setting up separate routes for different actions, we can establish logical ports to perform certain operations. Such as receiving an array of all users from a GET route vs removing a specific user with a DELETE route.",
  },
  {
    question: "What are HTTP Server Response Status Codes?",
    answer:
      "These are numeric codes that the server sends to the client about the status of a request. For example, a 200 status code means the request has been received ok. Whereas a 404 means that a page is not found. There are many requests, some helpful and others are plain silly. (418 means 'Im a teapot').",
  },
  {
    question: "What is lazy loading?",
    answer:
      "Lazy loading is the process of delaying content and data from loading into the page until a specific parameter is met. This is used in conjunction with the Intersection Observer API to tell when content is intersecting with different parts of the viewport. It is at this point when the front-end starts making requests to load data. This helps save on bandwidth costs, load time, and data download costs. Since only content that is being viewed will be downloaded from the server. ",
  },
  {
    question: "How could you improve SEO?",
    answer: [
      "Using alt text on images",
      "Adding a title meta tag to the page",
      "Adding a meta description to the page",
      "Making sure the font sizes are readable (16-18px for most body and no smaller than 12px)",
      "Having click zones be large enough for mobile (35-45px height is a good target area)",
      "Using good semantic HTML structure, instead of putting everything in a div",
    ],
  },
  {
    question: "How would you navigate a codebase?",
    answer:
      "I would first see if there is a mentor on my team who could help walk through what are the important areas that affect my tasks and to whom I could send questions to. Then I would assess what types of technologies are being used in those areas. I'd also ask if there are any documentation or guidelines to keep in mind when studying the code. If an issue arises, I spend around 15-20 min debugging before asking for help. That way I am giving an honest shot to work through the issue, but not wasting 4 hours of company time solving a problem that might have already been resolved some other way.",
  },
  {
    question: "What is SVG and why is it used?",
    answer:
      "SVG stands for Scalable Vector Graphics. It is used to display vector-based graphics over the web. The graphical content it can render is based on an XML format. With SVG, the graphical content is of superior quality thereby providing the user with the ability to furnish high-quality images.",
  },
  {
    question:
      "What is the difference between localStorage and sessionStorage objects?",
    answer: [
      "localStorage: No expiry is there for stored data. Data is not deleted upon the closure of the window",
      "sessionStorage: The object is valid for only a single session. The object is immediately deleted upon closing the window",
    ],
  },
  {
    question: "What is responsive web design?",
    answer:
      "Responsive web design is a concept that is used to create web pages that can scale across multiple resolutions without any loss of information or screen tearing.",
  },
  {
    question: "What is the use of grouping in CSS3?",
    answer:
      "Grouping is used in CSS3 to give users the ability to reuse and apply the same CSS style element to multiple HTML entities, using just one single declaration statement.",
  },
  {
    question: "What is the use of a class selector in CSS?",
    answer:
      "Class selectors in CSS begin with a “.” (period) key and are followed by the name of the class. It is used to select a statement and modify the style of that element in the corresponding part of the HTML tag.",
  },
  {
    question: "What is the use of Webkit in CSS3?",
    answer:
      "Webkit is an important software component in CSS that allows for the easy rendering of HTML and CSS elements in a variety of browsers, such as Chrome, Firefox, and Safari.",
  },
  {
    question: "What are the components of the CSS box model?",
    answer:
      "The CSS box model is used to represent an entity that encloses all of the HTML content into a box or a button element. There are four components: Border: Denotes the padding and content around the border. Content: Refers to the actual content to be displayed. Margin: Refers to the top layer of the box element. Padding: Defines the empty space around the element",
  },
  {
    question: "What are some of the properties of transitions in CSS3?",
    answer:
      "Transitions in CSS3 are easy to use, and they provide users with rapid and efficient animation effects. There are four main properties that are present in transitions: transition-delay, transition-duration, transition-property, transition-timing-function",
  },
  {
    question: "What is the use of pseudo-classes in CSS?",
    answer:
      "Pseudo-classes are used as a popular technique in CSS to change the style of an element when this element changes its state. There are numerous examples of when you use a pseudo-class: For the style change when the mouse moves over the element, For out-of-focus animations, For providing styles for external links",
  },
  {
    question: "What is the use of media queries in CSS3?",
    answer:
      "Media queries are used to define styles in CSS, which are responsive based on a variety of shapes and sizes of the viewing window.",
  },
  {
    question: "What is z-index in CSS?",
    answer:
      "Z-index is a property in CSS that is used to define the order of elements on a web page. It works on the basis of order indices, where a higher-order element will appear before a lower-order element.",
  },
  {
    question: "Why are external style sheets preferred?",
    answer: [
      "Classes can be reused any number of times.",
      "They allow for the style control of multiple documents through a single file.",
      "Selectors and grouping can be used to apply styles easily.",
    ],
  },
  {
    question: "What are the various data types present in JavaScript?",
    answer: "Boolean, Number, Object, Undefined, Null, String, Function",
  },
  {
    question:
      "What is the difference between window.onload and onDocumentReady",
    answer:
      "The <window.onload> event is not called until a page is completely loaded with the entire styling from CSS and images. The event does add a bit of delay when rendering a web page. With the <onDocumentReady> event, it will wait only till the DOM is initialized and will begin the event action. This ensures to reduce any delays in actions.",
  },
  {
    question: "How is type conversion handled in JavaScript?",
    answer:
      "JavaScript supports automatic type conversion. Since it is weakly typed, you can pass a function as an argument into another function easily. This ensures that there are no errors or data type-associated warnings as values get converted to the required data type automatically.",
  },
  {
    question: "What is the use of the ‘defer’ attribute in JavaScript?",
    answer:
      "The <defer> attribute is used as a boolean type attribute. It is used to delay the execution of the JavaScript code on a web page until the parser completely loads and initializes the page.",
  },
  {
    question: "What is meant by Continuous Integration?",
    answer:
      "Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.",
  },
  {
    question: "What is webpack?",
    answer:
      "Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack lets you use require() in your source code to point to local files, like images, and decide how they're processed in your final Javascript bundle, like replacing the path with a URL pointing to a CDN.",
  },
  {
    question: "Explain Null and Undefined in JavaScript",
    answer:
      "JavaScript has two bottom types: null and undefined. They are intended to mean different things: Undefined - Something hasn't been initialized, null - Something is currently unavailable",
  },
  {
    question: "How can I prevent XSS?",
    answer:
      "XSS can be prevented by sanitizing user input to the application. Always allowed those elements as input which is absolutely essential for that field.",
  },
  {
    question:
      "What are different HTTP Methods supported in Restful Web Services?",
    answer: "GET, POST, PUT, DELETE and HEAD",
  },
  {
    question: "What does use strict do?",
    answer:
      "The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. ",
  },
  {
    question: "What is CORS and how to enable one?",
    answer:
      "A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request. CORS (cross-origin resource sharing) manages cross-origin requests. CORS allows servers to specify who (i.e., which origins) can access the assets on the server, among many other things. Access-Control-Allow-Origin is an HTTP header that defines which foreign origins are allowed to access the content of pages on your domain via scripts using methods such as XMLHttpRequest. For example, if your server provides both a website and an API intended for XMLHttpRequest access on a remote websites, only the API resources should return the Access-Control-Allow-Origin header. Failure to do so will allow foreign origins to read the contents of any page on your origin.",
  },
  {
    question: "What is Cross Site Scripting (XSS)?",
    answer:
      "By using Cross Site Scripting (XSS) technique, users executed malicious scripts (also called payloads) unintentionally by clicking on untrusted links and hence, these scripts pass cookies information to attackers.",
  },
  {
    question:
      "What is DOM (Document Object Model) and how is it linked to CSS?",
    answer:
      "The Document Object Model (DOM) is a cross-platform and language-independent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document. With the Document Object Model, programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content. The DOM specifies interfaces which may be used to manage XML or HTML documents. When a browser displays a document, it must combine the document's content with its style information. The browser converts HTML and CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style.",
  },
  {
    question: "What is Test Driven Development?",
    answer:
      "First writes an automated test case which describes new function or improvement and then creates small codes to pass that test, and later re-factors the new code to meet the acceptable standards.",
  },
  {
    question: "Could you explain the difference between ES5 and ES6",
    answer:
      "ECMAScript 5 (ES5): The 5th edition of ECMAScript, standardized in 2009. This standard has been implemented fairly completely in all modern browsers. ECMAScript 6 (ES6)/ ECMAScript 2015 (ES2015): The 6th edition of ECMAScript, standardized in 2015. This standard has been partially implemented in most modern browsers.",
  },
  {
    question: "How to compare two objects in JavaScript?",
    answer:
      "Two non-primitive values, like objects (including function and array) held by reference, so both == and === comparisons will simply check whether the references match, not anything about the underlying values. For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. So two arrays with the same contents would not be == equal:",
  },
  {
    question: "What is IIFEs (Immediately Invoked Function Expressions)?",
    answer:
      "It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created. This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.",
  },
  {
    question: "First of all, what is JavaScript?",
    answer:
      "JavaScript is a scripting language created by Netscape in 1995. It was initially used on a popular web browser called ‘Netscape Navigator. ‘But, these days, we can use it for client-side as well as server-side application development.",
  },
  {
    question: "What is ‘NaN’?",
    answer:
      "In JavaScript, NaN stands for “Not a Number.” It’s a special value that occurs when we’re unable to perform an operation.",
  },
  {
    question: "What’s ‘Event Bubbling’ and ‘Capturing’?",
    answer:
      "In JavaScript DOM, HTML elements are nested inside one another to form a hierarchy. Now, if both parent and child elements have registered a handle for a specific event then what will be the order of event propagation? It can be determined in two ways which are known as event bubbling and capturing. In event bubbling, the child element will capture the event first and then propagate it to parent elements. Whereas, in event capturing, the parent element will capture the event first and then propagate it to the child elements.",
  },
  {
    question:
      "How would you explain an API to a colleague from another team who doesn’t have a technical skill set?",
    answer:
      "Essentially, an API is a go-between that allows two different applications to communicate to each other. What’s communicated is data and functionalities. A common example would be getting access to a weather app’s API for your web page, so that the weather is displayed on the frontend.",
  },
  {
    question: "What are the new form elements introduced in HTML5?",
    answer: [
      "<datalist> – specifies a list of options for input controls",
      "<keygen> – generates an encryption key",
      "<output> – defines the result of an expression",
      "<progress> – heads only in the direction of 100% of the max value",
      "<meter> – provides for a gauge, displaying a general value within a range",
    ],
  },
  {
    question: "How is HTML different from XHTML?",
    answer:
      "HTML and XHTML are both known for writing web pages. But, HTML is extended from SGML tagging whereas XHTML is an application of Extensible Markup Language (XML). HTML has three components – element tag pair (start tag and end tag), attributes of the element within the tag, and content in the form of both text and graphics. Whereas XHTML includes only a single root element which includes lower case elements and the value that is assigned should be closed, nested, and must be surrounded by quotation marks. Looking at the difference, XHTML is more expressive when compared to HTML.",
  },
  {
    question: "What is HTML5 Web Storage?",
    answer:
      "HTML5 web storage enables your web applications to store data locally within the user’s browser. The data is stored in name/value pairs, and a web page can only access data stored by itself. In simple terms, web storage allows large amounts of application data to be stored locally. It does not affect the performance of your web application. There are two types of web storage to store data locally: Local storage: This stores data with no expiration date. The data once stored in the local storage will be present even when the user’s browser is closed and reopened. Session storage: It stores data for one session only. The data will be deleted from the browser once the user’s browser is closed and the session would be lost. ",
  },
  {
    question: "What is long polling?",
    answer:
      "Long polling is a technique of having a persistent connection with the server. In long polling, the client polls the server requesting new information. The server holds a client’s connection open for as long as possible. The connection is closed only after the data is sent back to the client or connection timeout occurs. Long Polling Flow: A request is sent to the server. The server holds a client’s connection until new data is available. The server responds to the request when the new information appears. The browser immediately sends another request.",
  },
  {
    question:
      "Explain HTML 5, CSS3, JavaScript, and their importance in web development.",
    answer:
      "HTML is a platform and browser independent markup language with a series of tags that provide the structure for a web page. CSS improves page layout and its contents with style. JavaScript controls the behavior of web elements, and thereby makes your website interactive/responsive, validates user input values, capture website visitor’s information and recognize previous visitors, help in analyzing the percentage of blog post visitors click-through rate.",
  },
  {
    question: "What do you understand by Framework?",
    answer:
      "Framework is a structure that provides a platform to create applications. It is a collection of similar types of files placed in such a way that they are configured to connect/integrate with each other internally.",
  },
  {
    question: "What is a library with context to web development?",
    answer:
      " A library is a collection of code that are pretested and designed for expected functionalities developed by developers and are available in repositories. Web developers can integrate these libraries and utilize their functionalities rather than reinventing the code to accomplish the same functionality from the beginning.",
  },
  {
    question: "What do you mean by protocol?",
    answer:
      "In networking terminology, the protocol is a set of rules to format and process data. In order to communicate, both devices should have the same protocol. Internet Protocol (IP) is a network layer protocol and is responsible for routing. Transmission Control Protocol (TCP) transfers packets of data across networks. HyperText Transfer Protocol (HTTP) is a layer 7 used in the Internet and transfers data between devices. User Datagram Protocol (UDP) are used in fast data exchange applications like video streaming and gaming.",
  },
  {
    question:
      "What priorities you would consider while building a web application?",
    answer: [
      "Web site pages should be tested for performance as it should load as quickly as possible",
      "Applications pages should not have any broken links",
      "The application should be compatible with all major browsers",
      "The site should contain keywords that are accessible to search engines",
      "There should be seamless connectivity with the database",
      "Database entities such as stored procedures should be thoroughly tested with valid input",
      "Backend tables should be secured, tamper-proof",
      "Data insertion should be validated by constraints at column and row levels",
      "Inserting data into DB tables and viewing them in the user interface process should be as quickly as possible.",
      "The framework being used to integrate pages should be simple and should be tested without any compilation",
      "User input pages should be designed with minimal inputs from the user, elements used should be user friendly to access",
      "Use of HTTP2 to load page content quickly",
      "The use of JavaScript should be minimum",
      "Should integrate media files like audio and video relying on local software to execute these files",
      "Web pages should be responsive to mobile screens",
    ],
  },
];
