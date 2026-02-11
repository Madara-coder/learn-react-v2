interface DebrathDetailProps {
    fullName: string;
    age: number;
    occupation: string;
    height: number;
    weight: number;
};

const DebrathDetail = (props: DebrathDetailProps) => {
    return (
        // using react fragment to avoid extra div
        <>
            <h4>My name is {props.fullName}</h4>
            <h4>I am {props.age} years old</h4>
            <h4>I am a {props.occupation}</h4>
            <h4>My height is of {props.height}</h4>
            <h4>I weigh {props.weight}</h4>
        </>
    );
};

export default function App() {
    return (
        <>
            <h1>My Description</h1>
            <DebrathDetail fullName={"Debrath Sharma"} age={24} occupation="Software Engineer" height={5.10} weight={78}></DebrathDetail>
        </>
    );
}

