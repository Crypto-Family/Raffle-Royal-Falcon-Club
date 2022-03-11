/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import Script from 'next/script';

import { Provider } from 'react-redux';
import store from 'src/redux/store';

import ReactNotification from 'react-notifications-component';
import { custom_notification_types } from 'src/static/notifications';

import 'src/scss/main.scss';
import 'src/components/commons/navbar/navbar.scss';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });

function MyApp({ Component, pageProps }) {
    return (
        <CelesteProvider>
            <Provider store={store}>
                <Head>
                    <title>Raffle Royal Falcon Club</title>
                </Head>

                <ReactNotification types={custom_notification_types} />

                <Component {...pageProps} />
            </Provider>
        </CelesteProvider>
    );
}

export default MyApp;
