PROPS (Properties):
    -  Input passed to a component
    - Similar to function args.
    - We must use them as immutable (non-changeable)


STATE:
    - Data managed by a component
    - Similar to local variables.
    - We must use them as mutable (changeable)

USESTATE (useState):
    - The useState hook is how we handle data that changes over time. TypeScript is usually smart enough to infer the type,
    but sometimes we need to be explicit using Generics.
    // Inferring: TS knows 'isLoggedIn' is a boolean
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Generics: Explicitly telling TS this state can be User or null. User is a interface.
    const [user, setUser] = useState<User | null>(null);

SIDE EFFECTS (useEffect):
    - programs often need to interact with the outside world (APIs, Databases, LocalStorage). In React, we call these "Side Effects."
    - use the `useEffect` hook to handle this.
    - syntax:
    // useEffect(() => {
    // 1. The code to run
    console.log("Component mounted or state changed!");

    // 2. The Dependency Array
    }, [someState]);
Types of Effects:
    - Empty Array []: Runs only once (when the component first appears).
    - With Variables [name]: Runs every time name changes.
    - No Array: Runs on every single render (avoid this usually!).

COMPONENT ARCHITECTURE ( DECOMPOSITION )
    - putting everything in one file (the "Mega-Component") becomes a maintenance nightmare. In React, we handle this through Component Architecture.

FETCHING DATA FROM API:

What is Axios?
-> Axios is a promise-based HTTP client that works in both the browser and Node.js. In React, we use it to talk to APIs.
-> Axios is a library.
-> `yarn add axios` to install axios.

Why use Axios instead of fetch?
- Automatic JSON Transformation:
	- fetch: You have to call .json() on the response.
	- Axios: It automatically parses the JSON for you. You just access response.data.
- Better Error Handling:
	- fetch: It only rejects the promise if there’s a network error. If the server returns a 404 or 500, fetch considers that a "success."
	- Axios: It automatically throws an error (rejects) if the status code is outside the 2xx range.
- Interceptors (The Killer Feature):
	- You can "intercept" every request to automatically add an Auth Token to the headers, or "intercept" every response to handle global errors
    (like logging out the user if a 401 Unauthorized is returned).
- Simpler Syntax:
	- Sending data in a POST request is as simple as axios.post(url, { myData }). No need to JSON.stringify the body or set the Content-Type header manually.

