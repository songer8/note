export default function Home(props) {
    const [age, setAge] = useState(6);
    const [weight, setWeight] = useState(70);

    useEffect(() => {
        console.log('side effect');
    }, [age]);

    return (
        <div>
            <div>I am {props.name}</div>
            <p>My age is {age}</p>
            <p>My weight is {weight}</p>
            <button onClick={() => { setAge(age + 1) }}>增加年龄</button>
            <button onClick={() => { setWeight(weight + 1) }}>增加体重</button>
        </div>
    )
}