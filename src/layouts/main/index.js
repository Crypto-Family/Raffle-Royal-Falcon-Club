import Navbar from 'src/components/commons/navbar';
import Footer from 'src/components/commons/footer';

const MainLayout = (props) => {
    const { children } = props;

    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    );
};

export default MainLayout;
