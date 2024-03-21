import Header from "../components/Header";

const Main: React.FC = () => {
    return (
        <div>
            <Header />

            <main className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to University Sharing Hub</h1>
            </main>

        </div>
    );
};

export default Main;