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

