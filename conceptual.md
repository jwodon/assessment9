### Conceptual Exercise

Answer the following questions below:

-   What is the purpose of the React Router?
    Used to navigate between pages in a react app without refreshing the whole page.

-   What is a single page application?
    Web app that loads single page of HTML and dynamically updates as the user interacts with the app.

-   What are some differences between client side and server side routing?
    Client side is managed by JS in the browser. Server side each page load sends a reqeust to the server.

-   What are two ways of handling redirects with React Router? When would you use each?

    1. "redirect" component used when you need to redirect based on some conditions within the component.
    2. "history.push" used to redirect after a button click or form submission for example.

-   What are two different ways to handle page-not-found user experiences using React Router?

    1. catch all route at the end to handle any undefined paths
    2. switch component to group routes so only one route is matched

-   How do you grab URL parameters from within a component using React Router?
    useParams

-   What is context in React? When would you use it?
    Used to pass data without having to pass props down manually at every level. Used to share data across multiple components.

-   Describe some differences between class-based components and function
    components in React.
    Class based components use ES6 classes and have state/lifeclye methods. Function components use plain functions and can use hooks for state/lifecycle.

-   What are some of the problems that hooks were designed to solve?
    Managing state and side effects in functional components
    Making code easier to read and maintain
    Reduce redundicies
