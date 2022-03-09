import { useSelector } from 'react-redux';

function Home() {
    const { exampleReducer } = useSelector((state) => state);

    return (
        <div>
            <div>home</div>

            <div>local store: {exampleReducer.storage}</div>
        </div>
    );
}

export default Home;
