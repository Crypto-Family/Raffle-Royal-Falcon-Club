import { initCeleste } from 'celeste-framework/dist/store-module';
import { CelesteProvider } from 'celeste-framework';
import celesteOptions from 'src/components/celeste/celeste-options';

initCeleste(celesteOptions);

const Celeste = ({ children }) => {
    return <CelesteProvider>{children}</CelesteProvider>;
};

export default Celeste;
