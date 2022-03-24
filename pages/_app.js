/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { Provider } from 'react-redux';
import store from 'src/redux/store';

import ReactNotification from 'react-notifications-component';
import { custom_notification_types } from 'src/static/notifications';

import 'src/scss/main.scss';
import 'src/components/commons/navbar/navbar.scss';
import 'src/components/tables/table.scss';
import 'src/components/commons/footer/footer.scss';
import 'src/components/loader/loader.scss';
import 'react-notifications-component/dist/theme.css';
import 'src/components/commons/modal/show-winner/modal.scss';
import MainLayout from 'src/layouts/main';
import ShowWinner from 'src/components/commons/modal/show-winner';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });

const fontAwesomeKey = process.env.FONT_AWESOME_KEY;

function MyApp({ Component, pageProps }) {
    return (
        <CelesteProvider>
            <Provider store={store}>
                <Head>
                    <title>Raffle Royal Falcon Club</title>
                </Head>

                <ReactNotification types={custom_notification_types} />
                <Script src={`https://kit.fontawesome.com/${fontAwesomeKey}.js`} />

                <ShowWinner />

                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </CelesteProvider>
    );
}

export default MyApp;
