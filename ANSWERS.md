- [ ] Why would you use class component over function components (removing hooks from the question)?

  - It's simpler when it comes to setting things to state.

- [ ] Name three lifecycle methods and their purposes.

  1. render() - tells React to return a piece of DOM.
  2. componentDidMount() - runs functions as the component mounts to the DOM. It allows setState() and is a good place to initiate API calls.
  3. componentDidUpdate() - updates the DOM in response to prop or state changes.

- [ ] What is the purpose of a custom hook?

  - You're able to customize the hook to do whatever you need it to do vs. making things work with what you are given in a pre-set hook.

- [ ] Why is it important to test our apps?

  - Testing is there to make your life easier. Instead of having to drudge through your entire app to manually check that everything is loading properly, you can have tests running on everything and know instantly that everything is running smoothly.