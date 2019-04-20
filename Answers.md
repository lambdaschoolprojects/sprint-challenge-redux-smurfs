1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
> filter, map, and concat

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
> Actions describe things that can potentially change the application state. An action must include a type and may include a payload. The action is sent to the reducer. The reducer determines if and how an action should impact the state and sends a new state to the app so that components that need to know about the application state can act on it. The store holds the current state of the entire application.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
> Component state is part of React and is only available on class-based components. The component can pass information about it's state to child components, but cannot pass it to siblings or parents.

> Application state is managed by Redux, which facilitates communication between all components within the application. It is a state that can be shared by any and all components within the application, whether functional or class-based.
4.  What is middleware?
> Middleware is a function or application that receives an action and can do things based on the action, and then pass the action on to either another middleware application or the action creator. Middleware may manipulate the action or associated data before passing it on, but does not need to.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
> Redux-thunk is middleware that provides tools for working with API calls and other asynchronus code. It gives us direct access to dispatch(), which means we can use dispatch() conditionally within our action-creator AND we can use it multiple times within a single action-creator. Dispatch is what sends the action to the reducer.

6.  Which `react-redux` method links up our `components` with our `redux store`?
> connect() is a HOC that links allows us to pass out application state to components as props using mapStateToProps
