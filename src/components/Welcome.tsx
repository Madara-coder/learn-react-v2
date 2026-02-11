// 1. Define the "Shape" of the data

interface WelcomeProps {
    name: string; // name must be a string
    age: number; // age must be a number
    location: string; // location must be a string
}

// 2. Tell the function to use that shape
function Welcome(props: WelcomeProps) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p> You are {props.age} years old</p>
            <p>You live in {props.location}</p>
        </div>
    );
};